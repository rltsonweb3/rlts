<template>

    <!-- Contact Form Section Start -->
    <div>

        <form id="contact-form" 
            class="grid sm:gap-x-8 gap-x-4 grid-cols-2" 
            action="https://getform.io/f/6af30b8c-e767-4d30-b964-d7e38d35078b" 
            method="POST">
            <div class="single-fild col-span-2 sm:col-span-1">
                <input type="text" class="px-6 h-14 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full" placeholder="Name">
            </div>
            <div class="single-fild col-span-2 sm:col-span-1">
                <input type="email" class="px-6 h-14 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full" placeholder="E-mail">
            </div>
            <div class="single-fild col-span-2 sm:col-span-1">
                <input type="text" class="px-6 h-14 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full" placeholder="Phone">
            </div>
            <div class="single-fild col-span-2 sm:col-span-1">
                <input type="text" class="px-6 h-14 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full" placeholder="Address">
            </div>
            <div class="single-fild col-span-2">
                <textarea class="px-6 pt-4 h-36 md:h-40 mb-6 text-[#ffffff] text-[14px] bg-[#1E272D] w-full" placeholder="Write from here" spellcheck="false" data-gramm="false"></textarea>
                <div class="flex justify-center w-full md:mt-10">
                    <button type="submit" value="submit" name="submit" class="inline-block text-center font-semibold px-6 py-4 rounded bg-[#f4181c] hover:bg-[#cf0408] text-white transition ease-in-out duration-500 hover:duration-500 text-[14px]">
                        Send Message
                    </button>
                    <p class="form-messege"></p>
                </div>
            </div>
        </form>

    </div>
    <!-- Contact Form Section End -->
    
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
            }
        }
    }
</script>