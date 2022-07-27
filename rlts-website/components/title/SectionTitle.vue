<template>
    <div class="text-left pb-[15px] mb-[30px]" :class="secTionMargin">
        <h2 class="font-bold -mt-[5px] block relative text-[18px] md:text-[20px] lg:text-[24px] leading-[1]" :class="titleClass"> {{title}} </h2>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            titleClass: String,
            secTionMargin: String
        }
    }
</script>

<style lang='scss'>
    
</style>