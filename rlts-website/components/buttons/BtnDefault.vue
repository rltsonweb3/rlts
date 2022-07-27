<template>
    <div>
        <n-link class="text-[14px] inline-block rounded-[3px] transition-all duration-300" :to="btnLink" :class="btnClass">{{btnText}}</n-link>
    </div>
</template>
<script>
    export default {
        props: {
            btnLink: String,
            btnClass: String,
            btnText: String
        }
    }
</script>

<style lang="scss" scoped>
.bg-dark-hover-white {
    @apply bg-[#18163a] hover:bg-white text-white hover:text-[#18163a];
}
.bg-dark-hover-yellow {
    @apply bg-[#18163a] hover:bg-yellow text-white hover:text-[#18163a];
}
.bg-yellow-hover-white {
    @apply bg-yellow hover:bg-white text-white hover:text-[#18163a];
}
</style>