<script setup>
    import Navbar from '../components/NavbarNoneSelect.vue'
    
    document.title = 'CreateProduct | ShopMaiUP'
</script>

<template>
    <div id="createproduct" class="bg-[#222431] w-full min-h-screen " >
        <Navbar></Navbar>
        <div class="">
            <div id="product-content" class="grid place-items-center min-h-screen pb-20">
                <div id="create-box" class="w-[1106px] h-[824px] flex bg-[#303346] rounded-[28px] overflow-hidden grid place-items-center">
                    <div id="writen" class=" h-[764px] w-[957px] grid" >
                        <div id="titlebox" class=" w-full h-[70px] border-b-2">
                            <h2 id="title" class="text-[40px] font-bold text-white ">ข้อมูลของสินค้า</h2>
                        </div>
                        <div id="info" class=" w-full h-[650px]">
                           <div id="box-product1" class=" w-full h-[80px] grid ">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                   <h1 class="text-[22px] text-white">ระบุชื่อของสินค้า</h1>
                                </div>
                                <div id="attribute-box" class="grid-2 w-full ">
                                   <div class="shadow-2xl">
                                       <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[50px] rounded-[8px]" placeholder=":ชื่อสินค้า:"></textarea>
                                   </div>
                                 </div>
                           </div><br>
                           <div id="box-product 2-3" class="w-full h-[80px]  flex justify-between">
                                <div id="box-product2" class=" w-[470px] h-[80px] grid">
                                    <h1 class="text-[22px] text-white">ระบุราคาของสินค้า</h1>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[50px] rounded-[8px]" placeholder=":ราคาสินค้า:"></textarea>
                                </div>
                                <div id="box-product3" class=" w-[470px] h-[80px] grid">
                                    <h1 class="text-[22px] text-white">ระบุจำนวนของสินค้า</h1>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[50px] rounded-[8px]" placeholder=":จำนวนสินค้า:"></textarea>
                                </div>
                           </div><br>
                           <div id="box-product4" class=" w-full h-[80px] grid ">
                            <div id="attribute-text" class=" grid-1 w-[327px]">
                               <h1 class="text-[22px] text-white">ระบุรูปภาพของสินค้า</h1>
                            </div>
                            <div id="attribute-box" class="grid-2 w-full ">
                               <div class="shadow-2xl">
                                   <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[50px] rounded-[8px]" placeholder=":รูปภาพสินค้า:"></textarea>
                               </div>
                             </div>
                           </div><br>
                           <div id="box-product 5-6" class="w-full h-[80px]  flex justify-between">
                            <div id="box-product2" class=" w-[470px] h-[80px] grid">
                                <h1 class="text-[22px] text-white">ช่องทางการติดต่อ (เฟสบุ๊ค)</h1>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[50px] rounded-[8px]" placeholder=":facebook:"></textarea>
                            </div>
                            <div id="box-product3" class=" w-[470px] h-[80px] grid">
                                <h1 class="text-[22px] text-white">ช่องทางการติดต่อ (ไลน์)</h1>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[50px] rounded-[8px]" placeholder=":Line ID:"></textarea>
                            </div>
                           </div><br>
                           <div id="box-product7" class=" w-full h-[80px] grid ">
                            <div id="attribute-text" class=" grid-1 w-[327px]">
                               <h1 class="text-[22px] text-white">ระบุรายละเอียดของสินค้า</h1>
                            </div>
                            <div id="attribute-box" class="grid-2 w-full ">
                               <div class="shadow-2xl">
                                   <textarea id="message" rows="4" class="block p-2.5 w-full text-[20px] h-[120px] rounded-[8px]" placeholder=":รายละเอียดสินค้า:"></textarea>
                               </div>
                             </div>
                             <div class="flex justify-evenly pt-10">
                                <button class="btn btn-warning text-[20px] w-[173px] h-[48px]">ยืนยัน</button>
                                <button class="btn btn-warning text-[20px] w-[173px] h-[48px]">ยกเลิก</button>
                             </div>
                             
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
           
    </div>

</template>
