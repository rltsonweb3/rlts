<template>
    <!-- Hero Slider Section Start -->
    <div class="hero-slider group relative">

        <div class="overflow-hidden">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                    class="flex items-center tvseries bg-no-repeat bg-cover 2xl:bg-center !h-[380px] md:!h-[450px] lg:!h-[500px] xl:!h-[605px] before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 tvseries bg-[#000]"
                    :class="product.bgColor"
                    :style="{ 'background-image': 'url(' + product.posterImage + ')' }"
                    v-for="(product, index) in romanticSlider" :key="index"
                >
                    <div class="slider-content ml-4 pr-4 xl:ml-10 2xl:ml-[100px] z-9 relative">
                        <h1 class="title sm:mb-5 mb-3 lg:mb-[30px] lg:text-[80px] sm:text-[50px] text-[36px] font-bold block leading-[1] animation-one text-white" :class="product.titleColor">{{product.title}}</h1>
                        <div class="flex flex-col sm:flex-row sm:items-center animation-two">
                            <span class="subtitle text-white sm:text-[25px] text-[20px] font-bold sm:mb-0 mb-2">{{product.sliderSubtitle}}</span>
<!--                            <span class="text-white sm:text-[25px] text-[20px] font-bold sm:ml-[15px] sm:pl-[15px] ml-0 relative before:hidden sm:before:block sm:before:content-[''] before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-5 before:w-[1px]">{{product.duration}}</span>-->
                        </div>
<!--                        <div class="flex items-center mt-7 sm:mt-10 md:mt-14 animation-three">-->
<!--                            -->
<!--                            <n-link class="inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] !text-[16px]" :to="`/${(PageLink)}/${slugify(product.title)}`" >Watch Now</n-link>-->

<!--                        </div>-->
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <!-- Slider Arrows Start -->
        <div class="hero-slider_arrows flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-99">
            <div class="hero-slider_arrows__prevbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:ml-5 ml-0">
                <i class="zmdi zmdi-chevron-left bold-important"></i>
            </div>
            <div class="hero-slider_arrows__nextbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:mr-5 mr-0">
                <i class="zmdi zmdi-chevron-right bold-important"></i>
            </div>
        </div>
        <!-- Slider Arrows End -->

    </div>
    <!-- Hero Slider Section End -->

</template>

<script>
    import movieData from "@/data/new/moviedata.json";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    export default {
        props: {
            titleColor: String,
            subTitleColor: String,
            textColor: String,
            bgColor: String,
            PageLink: String
        },
        components: {
            BtnDefault: () => import('@/components/buttons/BtnDefault'),
            VideoButton: () => import('@/components/buttons/VideoButton'),
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                movieData,
                romanticSlider: [],
                swiperOption: {
                    slidesPerView: 1,
                    loop: true,
                    spaceBetween: 30,
                    pagination: false,
                    navigation: {
                        nextEl: '.hero-slider .hero-slider_arrows__nextbtn',
                        prevEl: '.hero-slider .hero-slider_arrows__prevbtn'
                    }
                }
            }
        },
        mounted () {
            this.romanticSlider = this.movieData.filter(product=> product.romanticSlider == true)
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

<style lang="scss" scoped>
// Animation Style
.swiper-slide-active{
    .animation-one{
        @apply  animate-fadeUp1;
    }
    .animation-two{
        @apply  animate-fadeUp2;
    }
    .animation-three{
        @apply  animate-fadeUp3;
    }
    .animation-four{
        @apply  animate-roll;
    }
}
.hero-slider{
    .tvseries{
        background-position: 50%;
        @media screen and (max-width: 1600px) and (min-width: 1200px) {background-position: 68%;}
        @media screen and (max-width: 1199px) and (min-width: 768px) {background-position: 74%;}
        @media screen and (max-width: 767px) and (min-width: 340px) {background-position: 83%;}
        &::before {
            background: linear-gradient(to right, #0c171f -100%, transparent 70%);
        }
    }
}
</style>