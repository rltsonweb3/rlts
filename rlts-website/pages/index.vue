  <template>
    <div>

        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <HeroOne
            :PageLink="'movie'"
        />

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]">
            <RecentMovie />
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]">
            <HorrorSeries />
        </div>

        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <OldMovie />
        </div>
        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
            <WatchWithFamilyMovie />
        </div>
        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]">
          <AwardedMovie />
        </div>

        <SeriesBannerOne 
            :PageLink="'series'"
        />



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
        HeroOne: () => import('@/components/hero/HeroOne'),
        HeroTwo: () => import('@/components/hero/HeroTwo'),
        SeriesBannerOne: () => import('@/components/banner/SeriesBannerOne'),
        RecentMovie: () => import('@/components/movie/RecentMovie'),
        OldMovie: () => import('@/components/movie/OldMovie'),
        WatchWithFamilyMovie: () => import('@/components/movie/WatchWithFamilyMovie'),
        AwardedMovie: () => import('@/components/movie/AwardedMovie'),
        HorrorSeries: () => import('@/components/series/HorrorSeries'),
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