<template>
    <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-8">
            <div class="lg:col-span-4 sm:col-span-6" v-for='(price, index) in pricingData' :key='index'>
                <div class="relative w-[300px] sm:w-full mx-auto" :class="price.defaultclass">
                    <div class="pricing-panel shadow-[0px_0px_10px_rgba(0,0,0,0.10)] overflow-hidden rounded-[5px] relative z-10">
                        <div class="pricing-heading pt-[70px] pb-10 relative z-10 text-center before:bg-repeat before:bg-scroll before:rounded-[100%] before:h-[300px] before:absolute before:w-[610px] before:content before:-top-[170px] before:-left-[60px] before:transform before:-rotate-[22deg] before:-z-10 before:transition-all">
                            <h2 class="text-white font-semibold text-[36px] leading-[1]">{{price.avgPrice}}</h2>
                            <h4 class="text-white font-semibold text-[18px] mt-2">{{price.aboutPkg}}</h4>
                        </div>
                        <div class="pricing-body mt-[15px] text-center">
                            <ul>
                                <li class="text-[#cccccc] block text-[16px] mb-6 last:mb-0" v-for='(list, index) in price.listdata' :key="index">{{list.text}}</li>
                            </ul>
                        </div>
                        <div class="pricing-footer pt-[30px] pb-[40px] text-center">
                            <n-link :to="price.btnLink" class="action-btn inline-block py-3 px-10 text-white rounded-[5px] text-[16px]">{{price.btnText}}</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pricingData from '@/data/pricing.json'
    export default {
        data () {
            return {
                pricingData
            }
        }
    }
</script>
<style lang='scss'>
.pricing-panel{
    @apply bg-[#222222];

    .action-btn{
        @apply bg-[#333333] hover:bg-[#f4181c];
    }
    .pricing-heading{
        @apply before:bg-[#333333];
    }
}
.default{
    .pricing-heading{
        @apply before:bg-[#f4181c];
    }
    .action-btn{
        @apply bg-[#f4181c] hover:bg-[#333333];
    }
}
</style>