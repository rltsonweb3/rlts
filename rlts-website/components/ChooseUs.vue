<template>
    <div class="container">

        <div v-for='(file, index) in chooseData' :key="index">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div class="order-2 md:order-1 md:mt-0 mt-5">
                    <div class="about-us-title">
                        <h2 class="text-3xl md:text-4xl mb-3" :class="TextColor">{{file.title}}</h2>
                        <p :class="TextColor">{{file.text}}</p>
                    </div>
                    <p class="text-[14px] leading-[2] mt-8" :class="TextColor">{{file.textTwo}}</p>
                </div>
                <div class="order-1 md:order-2">
                    <img :src="file.imgSrc" alt="About">
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mt-[100px] md:mt-20 mt-[60px]">
                <div class="" v-for='(link, i) in file.listsData' :key="i">
                    <h3 class="text-[18px] font-semibold mb-5 md:mb-[30px]" :class="TextColor">{{link.title}}</h3>
                    <p class="text-[14px] leading-[2]" :class="TextColor">{{link.textOne}}</p>
                    <p class="text-[14px] leading-[2]" :class="TextColor">{{link.textTwo}}</p>
                    <ul>
                        <li class="mb-[15px] last:mb-0" v-for='(list, i) in link.numbers' :key="i">
                            <i class="zmdi zmdi-check mr-5" :class="TextColor"></i>
                            <span :class="TextColor">{{list.name}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import chooseData from '@/data/choosedata.json'
    export default {
        props: {
            TextColor: String
        },
        data () {
            return {
                chooseData
            }
        }
    }
</script>