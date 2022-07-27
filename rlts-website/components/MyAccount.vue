<template>
    <div class="flex flex-wrap">        
        <div class="xl:w-1/6 lg:w-1/4 md:w-1/4 w-full">
            <div class="our-profile-images mb-[60px]">
                <div class="profile-media">
                    
                    <div class="edit-profile relative inline-block group">
                        <img class="rounded-[10px]" src="/images/product/movie-19.jpg" alt="">
                        <div class="btn-file absolute top-1/2 left-1/2 m-auto opacity-0 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:opacity-100 cursor-pointer">
                            <span class="btn-file-icon text-[28px] text-white py-[10px] px-[20px] inline-block"><i class="zmdi zmdi-camera-bw"></i></span>
                            <input class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 p-0 cursor-pointer opacity-0 w-[64px]" type="file">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="xl:w-5/6 lg:w-3/4 md:w-3/4 w-full">
            <div class="account-form-container-wrapper ml-0 md:ml-[30px] lg:ml-[60px]">
                <div class="login">
                    <div class="account-form-container">
                        <div class="account-login-form">
                            <form action="#">
                                <div class="my-account-form-wrap pb-[30px] border-b-1 border-[#444444]">
                                    <h3 class="text-white text-[24px] font-normal mb-2">General Information</h3>
                                    <p class="text-white text-[14px]">By letting us know your name, we can make our support experience much more personal.</p>
                                    <div class="account-input-box grid sm:grid-cols-2 gap-6">
                                        <div class="single-input">
                                            <label class="text-white block text-[15px] mb-[3px]">First Name</label>
                                            <input class="text-[#cccccc] border-b-1 border-[#1E272D] bg-[#1E272D] h-[45px] w-full mb-[12px] px-[10px] py-[4px] text-[15px]" type="text" name="first-name">
                                        </div>
                                        <div class="single-input">
                                            <label class="text-white block text-[15px] mb-[3px]">Last Name</label>
                                            <input class="text-[#cccccc] border-b-1 border-[#1E272D] bg-[#1E272D] h-[45px] w-full mb-[12px] px-[10px] py-[4px] text-[15px]" type="text" name="last-name">
                                        </div>
                                        <div class="single-input-box">
                                            <label class="text-white block text-[15px] mb-[3px]">Display Name</label>
                                            <input class="text-[#cccccc] border-b-1 border-[#1E272D] bg-[#1E272D] h-[45px] w-full mb-[12px] px-[10px] py-[4px] text-[15px]" type="text" value="Brent Robinson">
                                        </div>
                                        <div class="single-input-box">
                                            <label class="text-white block text-[15px] mb-[3px]">Email Address</label>
                                            <input class="text-[#cccccc] border-b-1 border-[#1E272D] bg-[#1E272D] h-[45px] w-full mb-[12px] px-[10px] py-[4px] text-[15px]" type="email" name="email-name" value="info@example.com">
                                        </div>
                                    </div>
                                </div>
                                <div class="my-account-form-wrap  border-b-1 border-[#444444] mt-[30px] pb-[30px]">
                                    <h3 class="text-white text-[24px] font-normal mb-2">Password change</h3>
                                    <div class="account-input-box grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div class="single-input-box mt-[15px]">
                                            <label class="text-white block text-[15px] mb-[3px]">Current Password:</label>
                                            <input class="text-[#cccccc] border-b-1 border-[#1E272D] bg-[#1E272D] h-[45px] w-full mb-[12px] px-[10px] py-[4px] text-[15px]" type="password" name="user-password">
                                        </div>
                                        <div class="single-input-box mt-[15px]">
                                            <label class="text-white block text-[15px] mb-[3px]">New Password:</label>
                                            <input class="text-[#cccccc] border-b-1 border-[#1E272D] bg-[#1E272D] h-[45px] w-full mb-[12px] px-[10px] py-[4px] text-[15px]" type="password" name="user-password">
                                        </div>
                                        <div class="single-input-box mt-[15px]">
                                            <label class="text-white block text-[15px] mb-[3px]">Confirm password</label>
                                            <input class="text-[#cccccc] border-b-1 border-[#1E272D] bg-[#1E272D] h-[45px] w-full mb-[12px] px-[10px] py-[4px] text-[15px]" type="password" name="user-password">
                                        </div>

                                    </div>
                                </div>
                                <div class="button-box mt-[30px]">
                                    <a href="#" class="bg-[#f4181c] text-white font-semibold text-[14px] inline-block leading-[1.5] text-center py-[.375rem] px-[.75rem] hover:bg-white hover:text-[#f4181c]">Save Changes</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>