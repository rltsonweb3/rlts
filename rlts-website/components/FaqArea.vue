<template>
<div class='accordion'>
	<div class='accordion__item' v-for='(item, i) in items' :key='`accordion-item-${i}`' >
		<div
			class='accordion__title'
			:class='{ "accordion__title_active": activeIndex === i }'
			@click='activeIndex = activeIndex === i ? null : i'
		>
			<span>{{ item.title }}</span>
			<span
				class='accordion__arrow'
				:class='{ "accordion__arrow_active": activeIndex === i }'
			><i class="zmdi zmdi-chevron-down"></i></span>
		</div>
		<div class='accordion__value' v-show='i === activeIndex'>
			{{ item.value }}
		</div>
	</div>
</div>
</template>

<script>
  export default {
    data (){ 
        return{
            activeIndex: null,
            items: [
                {
                    title: "What is DMovie?",
                    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                },
                {
                    title: "How expensive is DMovie?",
                    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                },
                {
                    title: "Can I watch with DMovie everywhere?",
                    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                },
                {
                    title: "How easy is cancelling the subscription?",
                    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                },
                {
                    title: "What else can I watch with DMovie?",
                    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                },
                {
                    title: "How good is DMovie for kids?",
                    value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                }
            ]
        }
    }
  }
</script>


<style lang='scss' scoped>
.accordion{
    @apply block mx-auto p-0 w-full max-w-[880px] overflow-hidden;

    &__item{
        @apply mb-[10px] p-0 last:mb-0;
    }
    &__title{
        @apply flex justify-between items-center cursor-pointer m-0 px-4 py-5 text-white transition-all bg-[#000000] text-[18px] sm:text-[22px];
        &_active{
            @apply bg-[#f4181c];
        }
    }
    &__arrow{
        &_active{
            @apply transform rotate-180;
        }
    }
    &__value{
        @apply bg-[#000000] text-[#cccccc] p-[30px];
    }
}
</style>
