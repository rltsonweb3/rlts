<template>
    <div>

        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <MovieBannerSliderRomantic/>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <AllRomanticMovie />
        </div>


        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#12222d] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <FooterBottom/>
        </div>

    </div>
</template>

<script>
export default {
    components: {
        MainHeader: () => import('@/components/header/MainHeader'),
        OffcanvasSidebar: () => import('@/components/header/OffcanvasSidebar'),
        MovieBannerSliderRomantic: () => import('@/components/banner/MovieBannerSliderRomantic'),
        AllRomanticMovie: () => import('@/components/movie/AllRomanticMovie'),
        FooterBottom: () => import('@/components/footer/FooterBottom')
    },
    data () {
        return {
            navOpen: false
        }
    }
}
</script>

<style lang='scss'>
</style>