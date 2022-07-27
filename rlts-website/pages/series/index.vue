<template>
    <div>

        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SeriesBannerSlider />

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]">
            <HorrorSeries />
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <PopularSeries />
        </div>

        <SeriesBannerTwo 
            :PageLink="'series'"
        />

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <TrendingSeries />
        </div>

        <SeriesBannerThree 
            :PageLink="'series'"
        />

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <ComedySeries />
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
        SeriesBannerSlider: () => import('@/components/banner/SeriesBannerSlider'),
        HorrorSeries: () => import('@/components/series/HorrorSeries'),
        PopularSeries: () => import('@/components/series/PopularSeries'),
        SeriesBannerTwo: () => import('@/components/banner/SeriesBannerTwo'),
        TrendingSeries: () => import('@/components/series/TrendingSeries'),
        SeriesBannerThree: () => import('@/components/banner/SeriesBannerThree'),
        ComedySeries: () => import('@/components/series/ComedySeries'),
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