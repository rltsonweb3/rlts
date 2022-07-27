<template>
    <div class="container">
        <div class="flex items-center justify-center flex-col sm:flex-row">
            <h1 class="font-semibold text-white text-[25px] mr-5">{{BreadcrumbTitle}}</h1>
            <ul class="flex justify-center items-center mt-2 flex-row">
                <li><n-link class="breadcrumb-item text-[#ddd] hover:text-[#f4181c]" to="/home">Home</n-link></li>
                <li class="breadcrumb-item mx-2 text-[#ddd]">|</li>
                <li><span class="breadcrumb-item text-[#ddd]">{{BreadcrumbEnd}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            BreadcrumbTitle: String,
            BreadcrumbEnd: String
        },
        components: {
        }
    }
</script>
<style lang="scss" scoped>
.breadcrumb-item {
    @apply text-[16px] capitalize inline-block;
}
</style>