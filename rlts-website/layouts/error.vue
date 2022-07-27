<template>
  <div>
    <div class="hero-landing h-screen relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#000000] before:opacity-60 flex items-center justify-center" style="background-image:url(/images/slider/category-2.jpg); background-repeat: no-repeat; background-size: cover;">
      <div class="container">
          <div class="landing-hero-content text-center relative mx-auto">
              <h1 class="title font-medium text-[20px] sm:text-[30px] leading-[1.13] mx-auto text-[#f4181c]" v-if="error.statusCode === 404">Page not found</h1>
              <h4 class="title font-medium text-[20px] sm:text-[30px] leading-[1.13] mx-auto text-[#f4181c]" v-else-if="error.statusCode === 500">Internal Server error</h4>
              <p class="text-white text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] mt-[20px] leading-[1] font-bold">An error occurred</p>

              <div class="create-membership-wrap mx-auto relative mt-20">
                <BtnDefault
                    :btnLink="'/home'"
                    :btnClass="'py-[13px] px-[30px] bg-[#f4181c] text-white hover:bg-white hover:text-[#333333] text-[18px] font-semibold'"
                    :btnText="'Back to home'"
                    class="ml-[10px] sm:ml-[15px]"
                />
              </div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['error'],
    components: {
        BtnDefault: () => import('@/components/buttons/BtnDefault')
    }
}
</script>
<style lang='scss'>

</style>