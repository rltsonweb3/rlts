<template>

    <!-- CounterUp Section Start -->
    <div class="container">
        <div v-observe-visibility="{callback: visibilityChanged, once: true}">
            <div v-if="commentsVisible" class="grid md:grid-cols-4 grid-cols-2 gap-9">
                <div v-for="(count, imageIndex) in counter" :key="imageIndex"  class="text-center">
                    <div class="mb-5">
                        <img :src="count.imgCount" alt="Count">
                    </div>
                    <countTo class="text-5xl uppercase font-semibold block" :class="className" :startVal='count.startVal' :endVal='count.endVal' :duration='3000' :autoplay='true'></countTo>
                    <p class="text-[16px] capitalize" :class="className">{{count.text}}</p>
                </div>
            </div>
        </div>
    </div>
    <!-- CounterUp Section End -->

</template>

<script>
    import countTo from 'vue-count-to';
    export default {
        props: {
            className: String,
        },
        components: {
            countTo
        },
        data () {
            return {
                commentsVisible: false,
                counter: [
                    {
                        imgCount: "/images/icon/cout-01.png",
                        startVal: 0,
                        endVal: 240,
                        text: "Satisfied Customer"
                    },
                    {
                        imgCount: "/images/icon/cout-02.png",
                        startVal: 0,
                        endVal: 546,
                        text: "Project Completed"
                    },
                    {
                        imgCount: "/images/icon/cout-03.png",
                        startVal: 0,
                        endVal: 350,
                        text: "Cup of coffee"
                    },
                    {
                        imgCount: "/images/icon/cout-04.png",
                        startVal: 0,
                        endVal: 156,
                        text: "Award Winning"
                    }
                ]
            }
        },
        methods: {
            visibilityChanged(isVisible) {
                this.commentsVisible = isVisible;
            },
        }
    }
</script>