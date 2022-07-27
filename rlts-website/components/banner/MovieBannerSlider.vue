<template>
    <!-- Hero Slider Section Start -->
    <div class="hero-slider group relative">

        <div class="overflow-hidden">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(product, index) in webseriesSlider" :key="index">
                    <div class="slider-banner bg-[#313131]">
                        <n-link :to="`/movie/${slugify(product.title)}`">
                            <img :src="product.posterImage" alt="Image">
                        </n-link>
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
            titleColor: String
        },
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                movieData,
                webseriesSlider: [],
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
            this.webseriesSlider = this.movieData.filter(product=> product.category.includes("film"))
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

</style>