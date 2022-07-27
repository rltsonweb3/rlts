<template>
    <div class="md:mb-[80px] mb-[60px] text-center" :class="secTionMargin">
        <h2 class="font-normal -mt-[5px] pb-[30px] mb-[30px] inline-block relative text-[28px] md:text-[30px] lg:text-[36px] leading-[1] after:content after:absolute after:bg-[url('/images/icon/title-bg.png')] after:left-1/2 after:bottom-0 after:h-[9px] after:w-[209px] after:transform after:-translate-x-1/2" :class="titleClass">{{title}}</h2>
        <p class="lg:w-1/2 md:w-3/4 sm:w-5/6 w-11/12 mx-auto" :class="textClass">{{text}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            text: String,
            textClass: String,
            titleClass: String,
            secTionMargin: String
        }
    }
</script>
<style lang='scss'>
    .border-color-blue {
        @apply border-blue-500 border-b-[3px] bg-white;
    }
    .border-color-yellow {
        @apply border-yellow border-b-[3px] bg-white;
    }
    .bg-shadow{
        @apply bg-gradient-to-t from-[#0259ae] to-[#12b4f2] text-white;
    }
    .margindecrease{
        @apply -mb-[20px]
    }
</style>