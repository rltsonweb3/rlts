<template>
    <div>
        <div class="group relative overflow-hidden bg-[#313131]" v-for="(product, Index) in movieBanner.slice(0, 1)" :key="Index">
            <n-link class="group-hover:scale-[1.1] transition-all duration-700" :to="`${(PageLink)}/${slugify(product.title)}`">
                <img :src="product.posterImage" alt="Banner">
            </n-link>
        </div>
    </div>
</template>

<script>
import movieData from "@/data/new/moviedata.json";
export default {
    props: {
        PageLink: String
    },
    data () {
        return {
            movieData,
            movieBanner: []
        }
    },
    mounted () {
        this.movieBanner = this.movieData.filter(product=> product.category.includes("comedy"))
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