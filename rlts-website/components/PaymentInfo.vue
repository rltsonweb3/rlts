<template>
    <div>
        <div class="w-full">
            <div class="current-plan-wrapper white">
                <div class="section-title-plan mb-10">
                    <h3 class="text-white text-[24px] font-normal mb-4">Current Plan</h3>
                </div>
                
                <div class="dic-pricing bg-[#1E272D] border-1 border-[#1E272D] mb-10">	
                    <div class="grid md:grid-cols-12 gap-6">
                        <div class="md:col-span-3">
                            <!--header-->
                            <div class="dic-pricing-header bg-[#1E272D] border-r-1 border-[#1E272D] py-[40px] px-[10px] text-center">
                                <!--package-->
                                <h4 class="package text-white text-[18px] tracking-[2px] mb-[15px] uppercase">Gold</h4>
                                <!--/package-->
                                <div class="price">
                                    <span class="currency text-white relative top-[10px] align-top inline-block leading-[1]">$</span>
                                    <span class="amount text-white text-[60px] inline-block leading-[1]">39</span>
                                    <span class="period text-white text-[11px] tracking-[2px] opacity-80 uppercase inline-block leading-[1]">/mo</span>
                                </div>
                                <div class="old-price">
                                    <span class="text-white text-[18px] opacity-80 px-[5px] relative before:bg-white before:content-[''] before:h-[2px] before:left-0 before:opacity-80 before:absolute before:right-0 before:top-[55%] ">$ 45/mo</span>
                                </div>
                            </div>
                            <!--/header-->
                        </div>
                        <div class="md:col-span-5">
                            <!--items-->
                            <div class="dic-pricing-items">
                                <ul class="p-[25px]">
                                    <li class="text-white float-left py-[8px] w-1/2 leading-[2] text-[14px]">8GB RAM</li>
                                    <li class="text-white float-left py-[8px] w-1/2 leading-[2] text-[14px]">50GB Storage</li>
                                    <li class="text-white float-left py-[8px] w-1/2 leading-[2] text-[14px]">1TB Bandwidth</li>
                                    <li class="text-white float-left py-[8px] w-1/2 leading-[2] text-[14px]">500 Databases</li>
                                    <li class="text-white float-left py-[8px] w-1/2 leading-[2] text-[14px]">Unlimited Accounts</li>
                                    <li class="text-white float-left py-[8px] w-1/2 leading-[2] text-[14px]">Free Support</li>
                                </ul>
                            </div>
                            <!--/items-->
                        </div>
                        <div class="md:col-span-4">
                            <div class="dic-pricing-btn py-[35px] px-[30px]">
                                <!--button-->
                                <n-link class="inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] text-[14px]" to="/pricing" >Upgrade Plan</n-link>
                                <!--/button-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="payment-plan-wrapper white">
                <div class="section-title-plan mb-10">
                    <h3 class="text-white text-[24px] font-normal mb-4">Payment Method</h3>
                </div>
                
                <div class="payment-plan-method payment-plan-method-white">	
                    <div class="row grid md:grid-cols-2 gap-6">
                        <div class="col-md-6 col-xs-12">
                            <div class="payment-images">

                                <img class="rounded-[4px]" src="/images/other/credit-card.png" alt="">
                                <div class="payment-method-button mt-[30px] flex flex-col">
                                    <div class="btn--payment mb-[10px]">
                                        
                                        <!--button-->
                                        <n-link class="inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] text-[14px]" to="/pricing" >Edit this card</n-link>
                                    </div>
                                    <div>
                                        <!--button-->
                                        <n-link class="inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] text-[14px]" to="/pricing" >Add new payment method</n-link>
                                        <!--/button-->
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md">
                            <h5 class="text-white text-[16px]">Refer a Friend and SAVE</h5>
                            <p class="text-white text-[14px]">Receive 1 MONTH FREE for each of your friends that purchase an account.</p>
                            <p>
                                <!--button-->
                                <n-link class="inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] text-[14px]" to="/pricing" >Refer a Friend</n-link>
                                <!--/button-->
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>