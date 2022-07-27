<template>
    <div>

        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <MovieBannerSlider/>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]">
            <RecentMovie />
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]">
            <HorrorMovie />
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <PopularMovie />
        </div>

        <MovieBannerTwo 
            :PageLink="'movie'"
        />

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <TrendingMovie />
        </div>

        <MovieBannerThree 
            :PageLink="'movie'"
        />

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <ComedyMovie />
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
        RecentMovie: () => import('@/components/movie/RecentMovie'),
        MovieBannerSlider: () => import('@/components/banner/MovieBannerSlider'),
        HorrorMovie: () => import('@/components/movie/HorrorMovie'),
        PopularMovie: () => import('@/components/movie/PopularMovie'),
        MovieBannerTwo: () => import('@/components/banner/MovieBannerTwo'),
        TrendingMovie: () => import('@/components/movie/TrendingMovie'),
        MovieBannerThree: () => import('@/components/banner/MovieBannerThree'),
        ComedyMovie: () => import('@/components/movie/ComedyMovie'),
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