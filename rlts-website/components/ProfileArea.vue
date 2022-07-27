<template>
    <div class="container">
        <div class="flex sm:flex-row flex-col">
            <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full text-center sm:mb-0 mb-10">
                <div class="profile-image">
                    <img src="/images/team/team-01.png" alt="profile">
                </div>
                <div class="author-name text-center mt-5">
                    <h5 class="font-bold text-white">Marl Joni</h5>
                    <p class="text-white">Video maker, Designer</p>
                </div>
                <div class="team-socail mt-5">
                    <ul>
                        <li class="inline-block" v-for='(link, index) in socialData' :key="index">
                            <a class="sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center rounded-full sm:mr-3 mr-2" :href="link.url" :class="link.mediaName"><i :class="link.iconName"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="details mt-8 text-center mx-w-[340px] mx-auto">
                    <p class="text-[14px] text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores debitis voluptatum, illo, beatae reiciendis accusamus vel repudiandae laudantium officiis velit impedit blanditiis, natus aspernatur! Autem sed fuga nam nisi recusandae?</p>
                </div>
            </div>
            <div class="xl:ml-10 sm:ml-5 ml-0 xl:w-3/4 md:w-2/3 sm:w-1/2 w-full">
                <div class="romantic-movie relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    <div class="" v-for="(product, Index) in movieData.slice(0, 6)" :key="Index">
                        <SingleProduct 
                            :product="product"
                            :PageLink="'/movie'"
                            :btnLink="'/movie'"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import movieData from "@/data/new/moviedata.json";
import socialData from "@/data/new/social.json";
export default {
    components: {
        SingleProduct: () => import('@/components/product/SingleProduct')
    },
    data () {
        return {
            movieData,
            socialData
        }
    }
}
</script>

<style lang="scss" scoped>
.facebook{
    @apply border-1 border-[#3b5998] bg-[#3b5998] text-white hover:bg-transparent hover:text-white;
}
.twitter{
    @apply border-1 border-[#00B3EC] bg-[#00B3EC] text-white hover:bg-transparent hover:text-white;
}
.linkedin{
    @apply border-1 border-[#0A66C2] bg-[#0A66C2] text-white hover:bg-transparent hover:text-white;
}
.instagram{
    @apply border-1 border-[#E4405F] bg-[#E4405F] text-white hover:bg-transparent hover:text-white;
}
</style>