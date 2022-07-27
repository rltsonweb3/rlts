<template>
    <div>
        <div class="group relative overflow-hidden bg-[#313131]" v-for="(product, Index) in seriesBanner" :key="Index">
            <n-link class="group-hover:scale-[1.1] transition-all duration-700" :to="`/${(PageLink)}/${slugify(product.title)}`">
                <img class="min-h-[610px]" height="610" width="1920" :src="product.posterImage" alt="Banner">
            </n-link>
        </div>
    </div>
</template>

<script>
import seriesData from "@/data/new/seriesdata.json";
export default {
    props: {
        PageLink: String
    },
    data () {
        return {
            seriesData,
            seriesBanner: []
        }
    },
    mounted () {
        this.seriesBanner = this.seriesData.filter(product=> product.horrorBanner == true)
    },
    methods: {
        slugify(text) {
            return text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-") // Replace spaces with -
                .replace(/[^\w-]+/g, "") // Remove all non-word chars
                .replace(/--+/g, "-") // Replace multiple - with single -
                .replace(/^-+/, "") // Trim - from start of text
                .replace(/-+$/, ""); // Trim - from end of text
        }
    }
}
</script>

<style lang='scss'>
</style>