<template>
    <div class="container">
        <SectionTitleTwo 
            titleClass="text-white"
            title="Why Choose Us"
            textClass= "text-white"
            text="Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laqua. Ut enim ad minim veniam, quis"
        />
        <CoolLightBox 
            :items="items" 
            :index="index"
            @close="index = null">
        </CoolLightBox>
        <div class="text-center relative" v-for="(item, imageIndex) in items" :key="imageIndex" @click="index = imageIndex">
            <img :src="item.imgSrc" alt="Image">
            <span class="absolute left-[47%] top-[47%] bg-auto text-white h-[80px] w-[80px] text-[30px] leading-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[#0259ae] to-[#12b4f2] cursor-pointer"><i class="zmdi zmdi-play"></i></span>
        </div>
    </div>
</template>
<script>
  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
    components: {
        SectionTitleTwo: () => import('@/components/title/SectionTitleTwo'),
        CoolLightBox
    },
    data() {
        return {
            items:[
                {
                    imgSrc:"/images/other/mokup-06.png",
                    src: 'https://afterglowplayer.com/sandbox/v1/afterglow_local_hd.mp4'
                }
            ],
            index: null,
        }
    }
}
</script>