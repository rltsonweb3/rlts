<template>
    <div>
        <div class="romantic-movie relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            <div class="" v-for="(product, Index) in getItems" :key="Index">
                <SingleProduct 
                    :product="product"
                    :PageLink="'/movie'"
                    :btnLink="'/movie'"
                />
            </div>
        </div>
        <paginate
            :page-count="getPaginateCount"
            :prev-text="'<'"
            :next-text="'>'"
            :click-handler="paginateClickCallback"
            class="pagination-list">
        </paginate>
    </div>
</template>

<script>
import movieData from "@/data/new/moviedata.json";
export default {
    components: {
        SingleProduct: () => import('@/components/product/SingleProduct')
    },
    data () {
        return {
            movieData,
            movieSeries: [],
            currentPage: 1,
            perPage: 12,
        }
    },
    mounted () {
        this.movieSeries = this.movieData.filter(product=> product.category.includes("romantic"))
    },
    computed: {
        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            return this.movieSeries.slice(start, end);
        },
        getPaginateCount() {
            return Math.ceil(this.movieSeries.length / this.perPage);
        }
    },
    methods: {
        paginateClickCallback(pageNum) {
            this.currentPage = Number(pageNum);
        },
    }
}
</script>

<style lang='scss'>
.newstyle-arrow {
    .swipper-arrow {
        @apply w-[30px] h-[30px] bg-[#333333] flex items-center justify-center rounded-[3px] hover:bg-red transition-all duration-500;
    }
}
.pagination-list{
    @apply flex justify-center items-center mt-8;
    li {
        &.disabled {
            @apply hidden;
        }
        &.active{
            & a {
                @apply bg-[#f4181c];
            }
        }
        a {
            @apply w-[35px] h-[35px] text-[16px] flex justify-center items-center rounded-full mx-1 text-white text-center bg-[#333333] hover:bg-[#f4181c];
        }
    }
}
</style>