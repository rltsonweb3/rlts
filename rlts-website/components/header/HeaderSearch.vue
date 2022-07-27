<template>
    <div class="relative header-search">
            <button class="text-white w-8 h-8 rounded-[50%] border-1 border-white text-center p-[13px] justify-center items-center relative flex" @click.prevent="displayClass = !displayClass" v-on:click="isActive = !isActive" v-bind:class="{ searchclose: isActive }">
                <i class="zmdi zmdi-search s-open"></i>
                <i class="zmdi zmdi-close s-close"></i>
            </button>
            <div class="dropdown text-left md:right-10 md:top-1/2 md:-translate-y-1/2 absolute right-auto left-1/2 md:left-auto top-[166%] z-10" v-if="displayClass">
                <div class="search-input-box relative w-64 md:w-[280px] lg:w-[320px]">
                    <input type="text" placeholder="Search" class="h-[42px] relative w-full border-1 border-[#dddddd] rounded-[25px] py-[6px] pr-[60px] pl-[15px] text-[14px]">
                    <button class="absolute right-0 top-0 px-[16px] leading-[42px] text-[16px] border-l-1 brder-[#dddddd]"><i class="zmdi zmdi-search"></i></button>
                </div>
            </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            displayClass: false,
            isActive: false
        }
    },
}
</script>

<style lang="scss" scoped>
.header-search{
    .s-close{
        @apply hidden;
    }
    .searchclose{
        .s-close{
            @apply block;
        }
        .s-open{
            @apply hidden;
        }
    }
}
</style>