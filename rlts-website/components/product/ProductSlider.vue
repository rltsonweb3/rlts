<template>
    <!-- Hero Slider Section Start -->
    <div class="hero-slider group">
        <div class="overflow-hidden">
            <swiper class="swiper lg:h-screen" :options="swiperOption">
                <swiper-slide class="flex items-center animation-style-01 bg-no-repeat bg-cover bg-center bg-[url('/images/slider/background-image-04.png')] before:">
                    <div class="slider-content">
                        <span> Welcome to DMovie</span>
                        <h1 class="title"> Best Streaming</h1>
                        <p> Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do eiusmod tempor incidiunt ut laqua. Ut enim ad minim veniam, quis nullamco laboris</p>
                        <n-link to="/contact" class="">Get Started</n-link>
                    </div>
                </swiper-slide>
                <swiper-slide class="flex items-center animation-style-01 bg-no-repeat bg-cover bg-center bg-[url('/images/slider/background-image-03.jpg')]">
                    <div class="slider-content">
                        <span>Welcome to DMovie</span>
                        <h1 class="title"> Best Streaming</h1>
                        <p>Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do eiusmod tempor incidiunt ut laqua. Ut enim ad minim veniam, quis nullamco laboris </p>
                        <n-link to="/contact" class="">Get Started</n-link>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        
        <!-- Slider Arrows -->
        <div class="hero-slider_arrows flex">
            <div class="hero-slider_arrows__prevbtn swipper-arrow">
                <i class="zmdi zmdi-chevron-left bold-important"></i>
            </div>
            <div class="hero-slider_arrows__nextbtn swipper-arrow">
                <i class="zmdi zmdi-chevron-right bold-important"></i>
            </div>
        </div>
    </div>
    <!-- Hero Slider Section End -->
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    loop: true,
                    spaceBetween: 30,
                    effect: "fade",
                    pagination: false,
                    navigation: {
                        nextEl: '.hero-slider .hero-slider_arrows__nextbtn',
                        prevEl: '.hero-slider .hero-slider_arrows__prevbtn'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>