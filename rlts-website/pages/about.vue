<template>
    <div>

        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <div class="py-[25px] bg-[#12222d]">
            <Breadcrumb 
                :BreadcrumbTitle="'About Us'" 
                :BreadcrumbEnd="'About Us'"
            />
        </div>

        <div class="py-[50px] xl:py-[150px] lg:py-[120px] md:py-[80px] bg-[#000000]">
            <ChooseUs
                :TextColor="'text-[#ffffff]'"
            />
        </div>

        <div class="py-[50px] xl:py-[150px] lg:py-[120px] md:py-[80px] bg-[#12222d]">
            <VideoWorks/>
        </div>

        <div class="py-[50px] xl:py-[150px] lg:py-[120px] md:py-[80px] bg-[#000000]">
            <CounterUp
                :className="'text-white'"
            />
        </div>

        <div class="py-[50px] xl:py-[150px] lg:py-[120px] md:py-[80px] bg-[#12222d]">
            <div class="container">
                <SectionTitleTwo 
                    titleClass="text-white"
                    title="Best Team"
                    textClass= "text-white"
                    text="Adminim veniam, quis nostrud exercitation ullamco laboris nisi ut pariatur. Excepteur t labore et dolore magnam aliquam quaerat"
                />
                <SingleTeam
                    :textColor="'text-white'"
                />
            </div>
        </div>


        <div class="container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#000000] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <FooterBottom/>
        </div>

    </div>
</template>

<script>
export default {
    components: {
        MainHeader: () => import('@/components/header/MainHeader'),
        OffcanvasSidebar: () => import('@/components/header/OffcanvasSidebar'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        ChooseUs: () => import('@/components/ChooseUs'),
        CounterUp: () => import('@/components/CounterUp'),
        SingleTeam: () => import('@/components/SingleTeam'),
        SectionTitleTwo: () => import('@/components/title/SectionTitleTwo'),
        VideoWorks: () => import('@/components/video/VideoWorks'),
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