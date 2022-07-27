<template>
    <!-- Hero Slider Section Start -->
    <div class="hero-slider group relative">

        <div class="overflow-hidden">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                    class="flex items-center tvseries bg-no-repeat bg-cover 2xl:bg-center !h-[380px] md:!h-[450px] lg:!h-[500px] xl:!h-[605px] before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 tvseries bg-[#000]" 
                    :class="product.bgColor"
                    :style="{ 'background-image': 'url(' + product.posterImage + ')' }"
                    v-for="(product, index) in comboPackSlider" :key="index"
                >
                    <div class="slider-content ml-4 pr-4 xl:ml-10 2xl:ml-[100px] z-9 relative">
                        <h1 class="title sm:mb-5 mb-3 lg:mb-[30px] lg:text-[80px] sm:text-[50px] text-[36px] font-bold block leading-[1] animation-one text-white" :class="product.titleColor">{{product.title}}</h1>
                        <div class="flex items-center animation-two">
<!--                            <span class="subtitle text-red text-[25px] lg:text-[35px] font-bold">{{product.newprice}}</span>-->
<!--                            <span class="ml-5 subtitle text-white text-[25px] lg:text-[35px] font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-full-->
<!--                             before:h-[2px] before:bg-white">{{product.oldprice}}</span>-->
                        </div>
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
            PageLink: String,
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
                comboPackSlider: [],
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
            this.comboPackSlider = this.movieData.filter(product=> product.comboPackSlider == true)
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
        @media screen and (max-width: 1199px) and (min-width: 1025px) {background-position: 74%;}
        @media screen and (max-width: 1024px) and (min-width: 768px) {background-position: 85%;}
        &::before{
            background: linear-gradient(to right, #0c171f 10%, transparent 70%);
        }
    }
}

</style>