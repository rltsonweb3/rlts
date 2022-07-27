<template>
    <div class="">

        <div class=" bg-[#1E272D] flex items-center justify-center py-2 sm:py-7 px-3 sm:flex-row flex-col">
            <h2 class="sm:text-[26px] text-[22px] text-white font-semibold mr-3">{{ product.title }}</h2>
            <ul class="flex items-center flex-wrap justify-center">
                <li class="text-[#dddddd] md:text-[16px] text-[14px] mr-2 relative before:absolute before:w-[2px] before:h-[12px] before:bg-[#dddddd] before:top-1/2 before:right-0 before:transform before:-translate-y-1/2 pr-2">
                    <span>{{product.duration}}</span>
                </li>
                <li class="text-[#dddddd] md:text-[16px] text-[14px] mr-2 relative before:absolute before:w-[2px] before:h-[12px] before:bg-[#dddddd] before:top-1/2 before:right-0 before:transform before:-translate-y-1/2 pr-2">
                    <span>{{product.date}}</span>
                </li>
                <li class="text-[#dddddd] md:text-[16px] text-[14px] mr-2 relative before:absolute before:w-[2px] before:h-[12px] before:bg-[#dddddd] before:top-1/2 before:right-0 before:transform before:-translate-y-1/2 pr-2 flex">
                    <div class=" capitalize mr-2 relative before:content-[','] before:absolute before:-right-[4px] before:bottom-0 last:before:hidden last:mr-0" v-for="(item, index) in product.category" :key="index">
                        <span class="">{{item}}</span>
                    </div>
                </li>
                <li class="text-[#dddddd] md:text-[16px] text-[14px] mr-2">
                    <span>{{product.permit}}</span>
                </li>
            </ul>
        </div>

        <div class="bg-[#000000] py-[50px]">
            <div class="container">
                <!-- video element -->
                <client-only>
                <vue-plyr :options="options">
                    <video
                        controls
                        crossorigin
                        playsinline
                        :data-poster="product.posterImage"
                    >
                        <source
                            :src="product.video"
                            type="video/mp4"
                        />
                    </video>
                </vue-plyr>
                </client-only>
            </div>
            <div class="product-details-content container">
                <ul class="my-5">
                    <li v-for="(item, index) in product.items" :key="index" class="text-[16px] mb-3 text-[#dddddd] font-light">
                        <span class="text-[18px] font-semibold mr-1 text-[#f4181c]">{{item.label}} </span>{{item.labeldesc}}
                    </li>
                </ul>
                <p class="text-[#dddddd] font-normal text-[14px]">{{ product.description }}</p>
                <p class="text-[#dddddd] font-normal text-[14px]">{{ product.descriptionTwo }}</p>
                <div class="flex items-center justify-between flex-wrap mt-9 py-3 border-y-1 border-[#dddddd]">
                    <div class="flex items-center">
                        <span class="text-[18px] font-semibold text-[#f4181c]">Share:</span>
                        <div class="social-style-1 flex items-center">
                            <a class="sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center bg-white text-[#18163a] hover:bg-[#f4181c] hover:text-white rounded-full sm:ml-3 ml-2" href="https://www.facebook.com/"> 
                                <i class="zmdi zmdi-facebook"></i>
                            </a>
                            <a class="sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center bg-white text-[#18163a] hover:bg-[#f4181c] hover:text-white rounded-full sm:ml-3 ml-2" href="https://twitter.com/"> 
                                <i class="zmdi zmdi-twitter"></i>
                            </a>
                            <a class="sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center bg-white text-[#18163a] hover:bg-[#f4181c] hover:text-white rounded-full sm:ml-3 ml-2" href="https://www.linkedin.com/"> 
                                <i class="zmdi zmdi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div class="like-dislike-wrap">
                        <button class="like-dislike-style text-[20px] sm:text-[30px] text-white hover:text-[#f4181c] mr-2"><i class="zmdi zmdi-thumb-up"></i></button>
                        <button class="like-dislike-style text-[20px] sm:text-[30px] text-white hover:text-[#f4181c] ml-2"><i class="zmdi zmdi-thumb-down"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <div  class="bg-[#000000] pb-[50px]">
            <div class="container">
                <div class="awardedmovie-area relative">
                    <Swiper :options="relatedOption">
                        <Swiper-Slide v-for="(product, Index) in seriesData" :key="Index">
                            <SingleProduct 
                                :product="product" 
                                :PageLink="'/series'"
                                :btnLink="'/series'"
                            />
                        </Swiper-Slide>
                    </Swiper>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import seriesData from "@/data/new/seriesdata.json";
export default {
    props: ['product'],
    components: {
        MainHeader: () => import('@/components/header/MainHeader'),
        OffcanvasSidebar: () => import('@/components/header/OffcanvasSidebar'),
        SingleProduct: () => import('@/components/product/SingleProduct'),
        SectionTitle: () => import('@/components/title/SectionTitle'),
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            seriesData,
            options: { quality: { default: '1080p' } },
            relatedOption: {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 30,
                autoplay:true,
                navigation: {
                    nextEl: '.upcoming-area .nextbtn',
                    prevEl: '.upcoming-area .prevbtn'
                },
                breakpoints: {
                    1480: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
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
        console.log(this.product.items);
        console.log(this.product.category);
    },

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
};
</script>

<style lang="scss">
.plyr__poster{
    background-size: cover !important;
}
</style>