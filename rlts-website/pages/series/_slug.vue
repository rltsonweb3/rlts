<template>
    <div>

        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <ProductDetails :product="product" />


        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#12222d] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <FooterBottom/>
        </div>
        
    </div>
</template>

<script>
import product from "@/data/new/seriesdata.json";
    export default {
        components: {
            MainHeader: () => import('@/components/header/MainHeader'),
            OffcanvasSidebar: () => import('@/components/header/OffcanvasSidebar'),
            ProductDetails: () => import('@/components/product/ProductDetails'),
            FooterBottom: () => import('@/components/footer/FooterBottom')
        },
        data() {
            return {
                navOpen: false,
                product,
                slug: this.$route.params.slug
            }
        },
        mounted () {
            this.product = product.find(product => this.slugify(product.title) === this.slug);
        },

        methods: {
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
    };
</script>
<style lang='scss'>

</style>