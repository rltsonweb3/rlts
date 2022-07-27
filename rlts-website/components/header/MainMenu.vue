<template>
    <!-- Menu Start -->
    <div class="hidden lg:block">
        <ul class="mainmenu">
            <li class="mainmenu_list group" v-for='(link, i) in menuData' :key='i'>
                <NuxtLink :to="link.url" class="mainmenu_link">{{ link.name }}</NuxtLink>
                <ul class="submenu" v-if="link.submenu">
                    <li class="submenu_list" v-for='(link, i) in link.submenu' :key='i'>
                        <NuxtLink :to="link.url" class="submenu_link"> {{ link.name }} </NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <!-- Menu End -->
</template>

<script>
    import menuData from '@/data/new/menudata.json'
    export default {
        data () {
            return {
                menuData
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mainmenu {
        &_list {
            @apply inline-block relative mr-6 xl:mr-9 text-[14px];
        }
        &_link {
            @apply block text-white py-[35px];
        }
    }
    .submenu {
        @apply w-[180px] shadow-[0_0px_3px_rgba(0,0,0,0.3)] absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[100%] top-[120%] bg-white p-4 z-30 transition-all duration-300 group-hover:transition-all group-hover:duration-500;
        &_list {
            @apply block mb-[10px] last:mb-0;
        }
        &_link {
            @apply font-medium text-left capitalize text-sm hover:text-[#f4181c];
        }
    }
</style>