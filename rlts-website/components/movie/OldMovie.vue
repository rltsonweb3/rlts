<template>
    <div>
        <SectionTitle
            secTionMargin="border-b-1 border-[#444444]"
            titleClass="text-white"
            title="Old Movies"
        />
        <div class="oldmovie-area relative">
            <Swiper :options="oldMoviesOption">
                <Swiper-Slide v-for="(product, Index) in oldMovies" :key="Index">
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
import movieData from "@/data/new/moviedata.json";
export default {
    components: {
        SectionTitle: () => import('@/components/title/SectionTitle'),
        SingleProduct: () => import('@/components/product/SingleProduct'),
        Swiper,
        SwiperSlide
    },
    data () {
        return {
            movieData,
            oldMovies: [],
            oldMoviesOption: {
                loop: false,
                slidesPerView: 6,
                spaceBetween: 40,
                navigation: {
                    nextEl: '.oldmovie-area .nextbtn',
                    prevEl: '.oldmovie-area .prevbtn'
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
    methods: {
        compare_function: function() {
            var d = new Date('December 25, 1995 23:15:00');
            d.getFullYear();
            return (d.toISOString().slice(0, 10));
        },
    },
    mounted () {
        this.oldMovies = this.movieData.filter(product=> product.date < this.compare_function())
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