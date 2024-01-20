<script setup>
    import Navbar from '../components/NavbarNoneSelect.vue'
    
    document.title = 'CreateProduct | ShopMaiUP'
</script>

<template>
    <div id="createpost" class="bg-[#222431] w-full min-h-screen " >
        <Navbar></Navbar>
        <div class="">
            <div id="post-content" class="grid place-items-center min-h-screen">
                <div id="create-box" class="w-[1106px] h-[824px] flex bg-[#303346] rounded-[28px] overflow-hidden grid place-items-center">
                    <div id="writen" class="bg-yellow-500 h-[764px] w-[957px] grid" >
                        <div id="titlebox" class="bg-green-500 w-full h-[67] border-b-2">
                            <h2 id="title" class="text-[40px] font-bold text-white ">ข้อมูลของสินค้า</h2>
                        </div>
                        <div id="info" class="bg-red-500 w-full h-[630px] pt-[15px]">
                            <div id="box-product1" class=" w-full h-[80px] grid bg-blue-500">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                   <h1 class="text-[22px] text-white">ระบุชื่อของสินค้า</h1>
                                </div>
                                <div id="attribute-box" class="grid-2 w-full ">
                                   <div class="shadow-2xl">
                                       <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[50px] rounded-[8px]" placeholder=":ชื่อสินค้า:"></textarea>
                                   </div>
                                 </div>
                               
                           </div><br>
                           <div id="box-product2" class=" w-full h-[80px] flex bg-blue-500">
                            <div id="p2-1" class="flex-1">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                    <h1 class="text-[22px] text-white">ระบุราคาของสินค้า</h1>
                                 </div>
                                 <div id="attribute-box" class="grid-2 w-full ">
                                    <div class="shadow-2xl">
                                        <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[50px] rounded-[8px]" placeholder=":ราคาสินค้า:"></textarea>
                                    </div>
                                  </div>
                            </div>
                            <div id="free" class="w-[50px] flex-2"></div>
                            <div id="p2-2" class="flex-3">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                    <h1 class="text-[22px] text-white">ระบุจำนวนของสินค้า</h1>
                                 </div>
                                 <div id="attribute-box" class="grid-2 w-full ">
                                    <div class="shadow-2xl">
                                        <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[50px] rounded-[8px]" placeholder=":จำนวนสินค้า:"></textarea>
                                    </div>
                                  </div>
                            </div>
                            
                           
                       </div><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
           
    </div>

</template>
