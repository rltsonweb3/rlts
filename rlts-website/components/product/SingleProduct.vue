<template>
    <div class="product-wrap relative overflow-hidden rounded-[10px] mb-30 group block" :class="product.singleClass">
        <div class="product-img relative overflow-hidden block rounded-[10px] before:content-[''] before:bottom-0 before:left-0 before:opacity-0 before:absolute before:right-0 before:z-20 before:pointer-events-none before:rounded-[10px] before:transition-all before:duration-500 group-hover:before:opacity-100 before:w-full before:h-1/2 group-hover:before:h-full">
            <n-link :to="`${(PageLink)}/${slugify(product.title)}`" class="w-full block group-hover:scale-[1.2] transition-all duration-300">
                <img class="default-img transition-all duration-500 w-full" :src="product.singleImage" :alt="product.title">
            </n-link>
        </div>
        <div class="product-content flex flex-col my-4 text-center justify-center opacity-0 group-hover:opacity-100 absolute -bottom-[50px] group-hover:bottom-0 transition-all duration-500 z-999 w-full">

            <h3>
                <n-link class="text-[20px] font-semibold hover:text-yellow transition-all duration-300 text-white" :to="`${(PageLink)}/${slugify(product.title)}`">{{ product.title }}</n-link>
            </h3>

            <div class="flex justify-center mt-[5px]">
                <div class="quality flex items-center">
                    <span class="mr-1 font-medium text-white text-[15px]">Quality : </span><label class="text-white">{{ product.quality }}</label> 
                </div>
                <div>
                    <span class="text-white hidden">Date:{{product.date}}</span>
                </div>
            </div>

            <div class="flex items-center justify-center mt-3">
                <n-link class="text-[14px] inline-block rounded-[3px] transition-all duration-300 py-[6px] px-3 bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]" :to="`${(btnLink)}/${slugify(product.title)}`">Watch Now</n-link>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "product",
            "ImageSrc",
            "PageLink",
            "btnLink"
        ],
        data(){
            return{

            }
        },
        methods: {
            date_function: function () {
                var inputDate =  new Date().toISOString().substr(0, 10);
                return inputDate;
            },
            slugify(text) {
                return text
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            }
        },
        mounted () {
            this.date_function();
        }
    };
</script>

<style lang="scss" scoped>
.product-wrap{
    .product-img{
        &::before{
            background: rgba(0, 0, 0, 0) linear-gradient(to top, #072e4a 25%, transparent 60%) repeat scroll 0% 0%;
        }
    }
}
</style>