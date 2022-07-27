<template>
    <div class="sm:ml-[15px] sm:pl-[15px] ml-[10px] pl-[10px] relative before:content-[''] before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-5 before:w-[1px]">

        <div v-click-outside="onClickOutside">
            <button class="text-white w-8 h-8 rounded-[50%] border-1 border-white text-center p-[13px] justify-center items-center relative flex" @click.prevent="displayClass = !displayClass">
                <i class="zmdi zmdi-notifications"></i>
                <span class="absolute -right-[.5rem] -top-[.6rem] bg-[#637282] text-white text-[12px] w-5 h-5 leading-5 text-center rounded-full">3</span>
            </button>
            <div class="z-99 dropdown w-[200px] sm:w-[240px] p-3 sm:p-5 text-left left-0 right-auto md:right-0 md:left-auto bg-white top-[166%] md:top-[198%] absolute border-1 border-[#cccccc] shadow-lg" v-if="displayClass">
                <h5 class=" pb-4 mb-4 border-b-1 border-[#dddddd] text-[14px] font-semibold">Notifications</h5>
                <ul>
                    <li class="mb-4">
                        <div class="text-[14px] flex leading-[18px]">
                            <n-link to="/" class="">
                                <img class=" max-w-[40px] max-h-[40px]" src="/images/review/author-01.png" alt="Auth">
                            </n-link>
                            <div class="pl-[15px]">
                                <n-link to="/" class="hover:text-[#ffab00]">Lorem ipsum dolor sit amet consectetur.</n-link>
                                <span class="time mt-1 text-[#666666] block">21 hours ago</span>
                            </div>
                        </div>
                    </li>
                    <li class="mb-4">
                        <div class="text-[14px] flex leading-[18px]">
                            <n-link to="/" class="">
                                <img class=" max-w-[40px] max-h-[40px]" src="/images/review/author-01.png" alt="Auth">
                            </n-link>
                            <div class="pl-[15px]">
                                <n-link to="/" class="hover:text-[#ffab00]">Lorem ipsum dolor sit amet consectetur.</n-link>
                                <span class="time mt-1 text-[#666666] block">21 hours ago</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
import vClickOutside from 'v-click-outside'
export default{
    data(){
        return {
            displayClass: false,
        }
    },
    directives: {
      clickOutside: vClickOutside.directive
    },
    methods: {
        onClickOutside (event) {
            this.displayClass = false;
        }
    }
}
</script>