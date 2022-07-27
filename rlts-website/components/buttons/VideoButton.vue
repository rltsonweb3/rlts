<template>
    <div>
        <CoolLightBox 
            :items="items"
            :index="index"
            @close="index = null">
        </CoolLightBox>
        <div class="" v-for="(item, imageIndex) in items" :key="imageIndex" @click="index = imageIndex">
            <span class="border-[5px] h-[60px] w-[60px] leading-[55px] text-center rounded-full text-[48px] pl-10px cursor-pointer block" :class="btnClass">
                <i class="zmdi zmdi-play"></i>
            </span>
        </div>
    </div>
</template>
<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
    props: {
        btnClass: String,
    },
    components: {
        CoolLightBox
    },
    data() {
        return {
            items: [
                {
                    src: 'https://afterglowplayer.com/sandbox/v1/afterglow_local_hd.mp4'
                }
            ],
            index: null
        }
    }
}
</script>

<style lang="scss" scoped>

    .border-dark-hover-white {
        @apply border-[#18163a] text-[#18163a] hover:border-white hover:text-white;
    }
    .border-yellow-hover-dark {
        @apply text-yellow border-yellow hover:border-[#18163a] hover:text-[#18163a];
    }
    .border-yellow-hover-whtie {
        @apply text-yellow border-yellow hover:border-white hover:text-white;
    }

</style>