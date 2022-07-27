var request = require('request')
var mysql = require("mysql")

var con = mysql.createConnection({
    host: "sh-cynosdbmysql-grp-6dfi1pga.sql.tencentcdb.com",
    port:20908,
    user: "root",
    password: "123456wiki!",
    database: 'test'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    requestAllData()
});

var  addSql = 'INSERT INTO en( relation, _index,_id,image,kingdomName,scientificName,className,scopes,redcategory) VALUES ?';


const default_size = 1000;
const ALL_TYPE = {
    // "EX": "ex", // 灭绝1
    // "EW": "ew", // 在野外灭绝1
    // "CR": "cr", // 极度濒危1
    // "EN": "en", // 濒临灭绝1
    // "DD":"dd", //数据不足 1
    // "VU":"vu", //近乎相识 1
    // "NT":"nt", // 近危 1
    // "LR":"cd" // 低风险,依赖保护
}

async function requestAllData() {
    var index = 0;
    var currentFrom = 0;
    var total = 1001;
    const body = getBody(ALL_TYPE.LC);
    while (currentFrom < total) {
        currentFrom = index * default_size;
        const url = getUrl(currentFrom, default_size);
        console.log(url)
        request.post({
            headers: {'content-type': 'application/json'},
            url: getUrl(currentFrom, default_size),
            body: body
        }, function (error, response, body) {
            const bodyJson = JSON.parse(body);
            console.log(body)
            if(total === 1001){
                total = bodyJson['hits']['total']['value']
            }
            console.log(index)
            index = index + 1;
            parseResponse(body)
        });

        await sleep(60000)
    }
}
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function getUrl(from, s) {
    return 'https://www.iucnredlist.org/dosearch/assessments/_search?size=' + s + '&_source=false&from=' + from + '&track_total_hits=true';
}

function getBody(type) {
    var jsonstr = {
        "stored_fields": ["hasImage", "hasPoints", "hasRanges", "image.id", "image.url", "image.urlThumb", "image.credit", "scopes.id", "scopes.code", "scopes.jsonDescription", "kingdomName", "className", "commonName", "scientificName", "sisTaxonId", "redListCategory.scaleCode", "redListCategory.order", "redListCategory.code", "redListCategory.jsonDescription", "populationTrend.id", "populationTrend.code", "populationTrend.jsonDescription", "hasGreen", "greenListCategory.scaleCode", "greenListCategory.name"],
        "query": {
            "bool": {
                "must": [],
                "filter": {
                    "bool": {
                        "filter": [{"terms": {"scopes.code": ["1"]}}, {"terms": {"redListCategory.scaleCode": [type]}}, {"terms": {"taxonLevel": ["Species"]}}],
                        "should": [],
                        "minimum_should_match": 0
                    }
                },
                "should": [{"term": {"hasImage": {"value": true, "boost": 6}}}]
            }
        },
        "sort": [{"_score": {"order": "desc"}}]
    }
    const body = JSON.stringify(jsonstr);
    return body;
}

function getArrayString(strArray){
    if(strArray){
        var result=""
        for (let i = 0 ; i< strArray.length;i++){
            result = result+strArray[i]
            if( i !== strArray.length-1){
                result = result+","
            }
        }
        return result;
    }
    return  "dismiss"
}

function parseResponse(response){
    if(response){
        const responseJson = JSON.parse(response);
        const hits = responseJson['hits']
        const total = hits['total']
        const db_field_value = total['value']
        const db_field_relation = total['relation']
        const elements = hits['hits']
        const size = elements.length;
        var resultArray = []
        for(let i = 0 ; i< size; i++){
            const element = elements[i]
            const _index = element['_index']
            const _id = element['_id']
            const fields = element['fields']
            const db_field_image = getArrayString(fields['image.url'])
            const db_field_kingdomName = getArrayString(fields['kingdomName'])
            const db_field_ScientificName = getArrayString(fields['scientificName'])
            const db_field_ClassName = getArrayString(fields['className'])
            const db_field_Scopes = getArrayString(fields['scopes.jsonDescription'])
            const db_field_RedListCategory = getArrayString(fields['redListCategory.jsonDescription'])
            var  addSqlParams = [db_field_relation,
                _index,_id,db_field_image,  db_field_kingdomName ,db_field_ScientificName,db_field_ClassName,db_field_Scopes,db_field_RedListCategory]
            resultArray.push(addSqlParams)
        }
        con.query(addSql,[resultArray],function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }

            console.log('--------------------------INSERT----------------------------');
        });
    }
}




