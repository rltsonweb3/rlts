<template>
    <div>
        <ul class='mobilemenu'>
            <li v-for='(link, i) in menuData' :key='i'>
                <n-link class="mobilemenu_link" :to="link.url">
                    {{ link.name }}
                </n-link>
                <span class='submenu-toggle' v-if="link.submenu">
                    <i class="zmdi zmdi-chevron-down"></i>
                </span>
                <ul class="submenu" v-if="link.submenu">
                    <li v-for='(link, i) in link.submenu' :key='i' class="titlelink">
                        <n-link class="dark:text-white font-normal" :to="link.url"> {{ link.name }} </n-link>
                        <span class='submenu-toggle' v-if="link.submenu">
                            <i class="zmdi zmdi-chevron-down"></i>
                        </span> 
                        <ul class="submenu" v-if="link.submenu">
                            <li v-for='(link, i) in link.submenu' :key='i'>
                                <n-link class="dark:text-white font-normal" :to="link.url"> {{ link.name }} </n-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import menuData from "@/data/new/menudata.json";
    export default {
        data() {
            return {
                menuData
            }
        },
        mounted() {
            let getSiblings = function (e) {
                let siblings = [];
                if(!e.parentNode) {
                    return siblings;
                }
                let sibling  = e.parentNode.firstChild;
                while (sibling) {
                    if (sibling.nodeType === 1 && sibling !== e) {
                        siblings.push(sibling);
                    }
                    sibling = sibling.nextSibling;
                }
                return siblings;
            };

            const subMenuToggle = document.querySelectorAll('.submenu-toggle');
            subMenuToggle.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    if(!this.classList.contains('active')) {
                        this.classList.add('active')
                        this.nextElementSibling.classList.add('active')
                        this.closest('li').classList.add('active')
                        getSiblings(this.closest('li')).forEach(function(item) {
                            item.classList.remove('active')
                            item.querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                                child.classList.remove('active')
                            })
                        })
                    } else {
                        this.closest('li').classList.remove('active')
                        this.closest('li').querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                            child.classList.remove('active')
                        })
                    }
                })
            })
        }
    }
</script>

<style lang='scss' scoped>
    .mobilemenu {
        @apply py-10 px-5;
        li {
            @apply relative mb-[15px] last:mb-0;
        }
        .submenu {
            @apply opacity-0 invisible h-0 pt-[5px] pl-[5px] transition duration-300;
            &.active {
                @apply opacity-100 visible h-full transition duration-300;
            }
            li {
                @apply mb-[8px];
                
                &.title {
                    @apply text-sm;
                    a {
                        @apply font-medium dark:text-white;
                    }
                }
                .submenu {
                    li {
                        a {
                            @apply leading-[25px] font-normal text-sm dark:text-white;
                        }
                    }
                }
            }
        }
        .submenu-toggle {
            @apply w-[24px] h-[24px] bg-[#f3f3f3] text-center text-base absolute right-0 top-0 cursor-pointer flex justify-center items-center transition-all;
            i {
                @apply transition-all leading-[35px];
            }
            &.active {
                @apply bg-[#333333] dark:border-1 dark:border-[#ffffff];
                i {
                    @apply transform -rotate-180 transition-all text-white;
                }
            }
        }
    }
</style>