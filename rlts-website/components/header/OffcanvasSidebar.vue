<template>
    <div class="popup-mobile-menu popup-mobile-visiable" id="offcanvas-menu">
        <div class="mobile-menu-overlay" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></div>
        <div class="bg-white dark:bg-[#2c2b28] w-[320px] h-full left-0 top-0 relative text-left transition-all pt-[25px] overflow-y-scroll scroll-area">

            <div class="flex justify-between px-5 mb-5">
                <n-link to="/home">
                    <img src="/images/logo/logo-2.png" alt="Logo">
                </n-link>
                <div class="text-3xl">
                    <button class="zmdi zmdi-close z-999 font-bold text-black hover:dark:text-[#f1f1f1] transition-all transform hover:rotate-90" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></button>
                </div>
            </div>

            <div class="menu-content">
                <MobileMenu />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        MobileMenu: () => import('@/components/header/MobileMenu'),
    },
    data() {
        return {
        }
    },
    methods: {
        mobiletoggleClass(addRemoveClass, className) {
            const el = document.querySelector('#offcanvas-menu');
            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },
        scrollHanle(evt) {
            
        },
    },
};
</script>
<style lang="scss" scoped>
    .popup-mobile-menu {
        @apply fixed top-0 right-full w-full h-screen invisible opacity-0 transition-all z-9999;
        & .ps-container {
            position: inherit;
        }
    }
    .show-mobile-menu {
        @apply opacity-100 visible right-0 transition-all duration-500;
        & .mobile-menu-overlay {
            @apply absolute w-full h-full bg-black bg-opacity-80 cursor-not-allowed transition-all delay-300 duration-300;
        }
    }
</style>