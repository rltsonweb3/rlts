<template>
    <div class="lg:w-7/12 md:w-5/6 w-full mx-auto">
        <div class="border-1 border-[#333333] p-5 sm:p-[60px]">
            <form action="#">
                <div class="login-input-box">
                    <input type="text" name="user-name" placeholder="User Name" class="user-input">
                    <input type="password" name="user-password" placeholder="Password" class="user-input">
                    <input type="email" name="email" placeholder="Email" class="user-input">
                </div>
                <div class="button-box">
                    <button class="login-btn btn bg-[#f4181c] mt-5 py-2 px-[30px] text-white font-semibold text-[14px] hover:bg-white hover:text-[#f4181c] transition-all duration-300" type="submit">
                        <span>Register</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user-input{
    @apply border-1 border-[#1e272d] text-white bg-[#1e272d] mb-5 px-2 py-3 w-full text-[14px];
}
</style>