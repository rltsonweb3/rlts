<template>
    <!-- Brand Logo Section Start -->
    <div class="brand-logo group relative">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="px-[5px] py-[25px]" v-for="(item, index) in brandSlider" :key="index">
                <div class="cursor-pointer border-1 border-[#444444] overflow-hidden text-center">
                    <img class="hover:scale-[1.2] transition-all duration-500" :src="item.Logo" alt="Brand">
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <!-- Brand Logo Section End -->
</template>

<script>
    import brandSlider from "@/data/new/brandlogo.json";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                brandSlider,
                swiperOption: {
                    slidesPerView: 6,
                    loop: true,
                    spaceBetween: 10,
                    pagination: false,
                    navigation: false,
                    breakpoints: {
                        1680: {
                            slidesPerView: 6
                        },
                        1300: {
                            slidesPerView: 5
                        },
                        1025: {
                            slidesPerView: 4
                        },
                        768: {
                            slidesPerView: 3
                        },
                        640: {
                            slidesPerView: 4
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>