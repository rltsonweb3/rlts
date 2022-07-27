<template>

    <div class="flex justify-between flex-col md:flex-row items-center px-[15px] md:px-[30px] xl:px-[50px] 2xl:px-[100px] mx-auto py-5 lg:py-[0px] shadow-[0_2px_18px_rgba(0,0,0,0.1)] z-999 w-full bg-[#000000]">

        <div class="items-center">
          <h2 class="font-bold mt-[25px] mb-[25px] block relative text-[18px] md:text-[20px] lg:text-[24px] leading-[1]" >
            More than 41,000 species are threatened with extinction </h2>
          <h2 class="font-bold mt-[25px] mb-[5px]  mr-[125px] block relative text-[18px] md:text-[20px] lg:text-[24px] leading-[1]" >
            We will record all RLTS species based on IPFS/Filecoin</h2>
          <h2 class="font-bold  mb-[25px] block relative text-[18px] md:text-[20px] lg:text-[24px] leading-[1]" >
            To enrich the pictures, videos and other information of each species</h2>

          <h2 class="font-bold mt-[25px] mb-[25px] block relative text-[18px] md:text-[20px] lg:text-[24px] leading-[1]" >
            We hope to build DAO and NFT to support all species.</h2>
        </div>

        <div class="flex items-center mt-4 md:mt-0">
            <BtnDefault
                :btnLink="'/contact'"
                :btnClass="'py-[5px] px-[15px] bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333]'"
                :btnText="'donate now'"
                class="ml-[10px] sm:ml-[15px]"
            />
            <!-- Offcanvas Button Start -->
            <div class="lg:hidden block leading-[1rem] ml-[10px] sm:ml-[15px]">
                <button class="overflow-hidden bg-transparent h-[18px] relative w-[26px]" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                    <span class="w-full h-[2px] bg-white block my-2 transition-all before:content-[''] before:top-0 before:bottom-auto before:absolute before:left-0 before:w-full before:h-[2px] before:bg-white after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-white after:top-auto after:bottom-0"></span>
                </button>
            </div>
            <!-- Offcanvas Button End -->
        </div>
    </div>

</template>

<script>
export default {
    components: {
            BtnDefault: () => import('@/components/buttons/BtnDefault'),
    },
    methods: {
        // offcanvas mobile-menu
        mobiletoggleClass(addRemoveClass, className) {
            const el = document.querySelector('#offcanvas-menu');
            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        }
    }
}
</script>
<style lang='scss'>

</style>