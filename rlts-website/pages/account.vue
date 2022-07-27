<template>
    <div>

        <MainHeader/>

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <div class="py-[25px] bg-[#12222d]">
            <Breadcrumb 
                :BreadcrumbTitle="'My Account'"
                :BreadcrumbEnd="'My Account'"
            />
        </div>

        <div class="py-[50px] md:py-[80px] bg-[#000000]">
            <div class="container">
                <div class="flex items-center account-tab mb-8 md:mb-[60px]">
                    <n-link to="/account" class="text-white mr-5 pb-3">Account details</n-link>
                    <n-link to="/payment" class="text-white mr-5 pb-3">Payment Info</n-link>
                </div>
                <MyAccount />
            </div>
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
        Breadcrumb: () => import('@/components/Breadcrumb'),
        MyAccount: () => import('@/components/MyAccount'),
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
.account-tab{
    & .nuxt-link-exact-active{
        @apply border-b-2 border-[#f4181c];
    }
}
</style>