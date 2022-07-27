<template>
    <div>
        <SectionTitle
            secTionMargin="border-b-1 border-[#444444]"
            titleClass="text-white"
            title="Trending Movie"
        />
        <div class="awardedmovie-area relative">
            <Swiper :options="trendingMovieOption">
                <Swiper-Slide v-for="(product, Index) in trendingMovie" :key="Index">
                    <SingleProduct 
                        :product="product" 
                        :PageLink="'/movie'"
                        :btnLink="'/movie'"
                    />
                </Swiper-Slide>
            </Swiper>
            <div class="flex right-0 -top-[74px] absolute newstyle-arrow">
                <button class="prevbtn swipper-arrow text-[20px] mr-1 text-[#cccccc]">
                    <i class="zmdi zmdi-chevron-left"></i>
                </button>
                <button class="nextbtn swipper-arrow text-[20px] ml-1 text-[#cccccc]">
                    <i class="zmdi zmdi-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import trendingData from "@/data/new/moviedata.json";
export default {
    components: {
        SectionTitle: () => import('@/components/title/SectionTitle'),
        SingleProduct: () => import('@/components/product/SingleProduct'),
        Swiper,
        SwiperSlide
    },
    data () {
        return {
            trendingData,
            trendingMovie: [],
            trendingMovieOption: {
                loop: false,
                slidesPerView: 6,
                spaceBetween: 40,
                navigation: {
                    nextEl: '.awardedmovie-area .nextbtn',
                    prevEl: '.awardedmovie-area .prevbtn'
                },
                breakpoints: {
                    1680: {
                        slidesPerView: 6,
                        spaceBetween: 40
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 40
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            }
        }
    },
    mounted () {
        this.trendingMovie = this.trendingData.filter(product=> product.trending == true)
    }
}
</script>

<style lang='scss'>
.newstyle-arrow {
    .swipper-arrow {
        @apply w-[30px] h-[30px] bg-[#333333] flex items-center justify-center rounded-[3px] hover:bg-red transition-all duration-500;
    }
}
</style>