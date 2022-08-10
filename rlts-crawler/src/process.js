import { NFTStorage, File } from "nft.storage";
import fetch from '@web-std/fetch'
import mysql from "mysql"

// read the API key from an environment variable. You'll need to set this before running the example!
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk4YjFDRUJDMDc5Mzk4NWNGNzM2NzNiNDI1MTVlOTQ0NzM4MmM3RGYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyNTYzMDc5MzgwNiwibmFtZSI6Inh5In0.OSYuicyoEtJSV_QfpaSk914VU1TIOwmEzVmP05lK6_c"

const ALL_TYPE = {
    // "EX": "{"en":"Extinct"}", // 灭绝
    // "EW": "{"en":"Extinct In The Wild"}", // 在野外灭绝
    // "CR": "{"en":"Critically Endangered"}", // 极度濒危
    // "EN": "{"en":"Endangered"}", // 濒临灭绝
    // "DD":"{"en":"Data Deficient"}", //数据不足
    // "VU":"{"en":"Vulnerable"}", //近乎相识
    // "NT":"{"en":"Near Threatened"}", // 近危
    // "LR":"{"en":"Lower Risk: Conservation Dependent"}" // 低风险,依赖保护
}


var con = mysql.createConnection({
    host: "sh-cynosdbmysql-grp-6dfi1pga.sql.tencentcdb.com",
    port:20908,
    user: "root",
    password: "123456wiki!",
    database: 'test'
});

var sql = "SELECT *  FROM `RLTS` WHERE `cid` = '' LIMIT 1000 OFFSET 0";
var updateSql = "UPDATE `RLTS` SET cid = ? WHERE auto_id = ?";


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql,async function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        var i = 0;
        for (i = 0; i < result.length; i++) {
            const resultItem = result[i]
            await processData(resultItem)
        }
        console.log('------------------------------------------------------------\n\n');

        con.end()
    });

});

// For example's sake, we'll fetch an image from an HTTP URL.
// In most cases, you'll want to use files provided by a user instead.


async function processData(item_data){
    const url = item_data['image']
    const image = await getImageAsBlob(url)
    if(image){
        const requestMetadata = {
            image,
            name:item_data['scientificName'],
            description:"",
            properties:{
                relation:item_data['relation'],
                _index:item_data['_index'],
                _id:item_data['_id'],
                kingdomName:item_data['kingdomName'],
                className:item_data['className'],
                scopes:item_data['scopes'],
                redcategory:item_data['redcategory'],
            }
        }
        const client = new NFTStorage({ token: API_KEY })
        const metadata = await client.store(requestMetadata)
        console.log('NFT data stored!')
        console.log('Metadata URI: ', metadata)
        await updateItem(con,item_data['auto_id'],metadata.url)
        await sleep(6000)
    }
}
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function updateItem(conn,key,cid){
    var modSqlParams = [cid, key];
    conn.query(updateSql,modSqlParams,function (err, result) {
        if(err){
            console.log('[UPDATE ERROR] - ',err.sql);
            return;
        }
        console.log('--------------------------UPDATE----------------------------');
        console.log('UPDATE affectedRows',result.affectedRows);
        console.log('-----------------------------------------------------------------\n\n');
    });
}

async function getImageAsBlob(url) {
    try {
        console.log(url)
        const r = await fetch(url)
        if (!r.ok) {
            return null
        }
        return r.blob()
    }catch (e) {
        console.log(e)
        return null;
    }
   return null;
}
