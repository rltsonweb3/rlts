<template>
    <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div v-for="(team, imageIndex) in teamData" :key="imageIndex"  class="text-center">
                <div class="text-center group">
                    <div class="relative group-hover:bg-[#ffda84] transition-all pt-[10px]">
                        <img :src="team.imgSrc" alt="Team">
                        <ul class="absolute -bottom-5 left-1/2 transition-all duration-500 transform -translate-x-1/2 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                            <li class="mx-[4px]" v-for="(social, index) in team.socialData" :key="index">
                                <a class="block bg-[#ffc61b] text-white h-[40px] w-[40px] leading-[40px] text-center rounded-full group-hover:animate-roll" :href="social.url"><i :class="social.className"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-6">
                        <h4 class="text-[18px] font-semibold" :class="textColor">{{team.name}}</h4>
                        <span class="text-[16px] font-normal block mt-1" :class="textColor">{{team.Subtitle}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import teamData from '@/data/team.json'
    export default {
        props: {
            textColor: String
        },
        data () {
            return {
                teamData
            }
        }
    }
</script>