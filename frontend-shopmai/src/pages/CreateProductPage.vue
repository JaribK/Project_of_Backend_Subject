<script setup>
    import Navbar from '../components/NavbarNoneSelect.vue'
    
    document.title = 'CreateProduct | ShopMaiUP'
</script>

<template>
    <div id="createproduct" class="bg-[#222431] w-full min-h-screen " >
        <Navbar></Navbar>
        <div class="">
            <div id="product-content" class="grid place-items-center min-h-screen pb-20">
                <div id="create-box" class="w-[1106px] h-[824px] bg-[#303346] rounded-[28px] overflow-hidden grid place-items-center">
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
                                    <input type="text" placeholder=":ชื่อสินค้า:" class="input input-bordered w-full" />
                                   </div>
                                 </div>
                           </div><br>
                           <div id="box-product 2-3" class="w-full h-[80px]  flex justify-between">
                                <div id="box-product2" class=" w-[470px] h-[80px] grid">
                                    <h1 class="text-[22px] text-white">ระบุราคาของสินค้า</h1>
                                    <input type="text" placeholder=":ราคาสินค้า:" class="input input-bordered w-full" />
                                </div>
                                <div id="box-product3" class=" w-[470px] h-[80px] grid ">
                                    <h1 class="text-[22px] text-white">ระบุจำนวนของสินค้า</h1>
                                    <input type="text" placeholder=":จำนวนสินค้า:" class="input input-bordered w-full" />
                                </div>
                           </div><br>
                           <div id="box-product4" class=" w-full h-[80px] grid ">
                            <div id="attribute-text" class=" grid-1 w-[327px]">
                               <h1 class="text-[22px] text-white">ระบุรูปภาพของสินค้า</h1>
                            </div>
                            <div id="attribute-box" class="grid-2 w-full ">
                               <div class="shadow-2xl">
                                <input type="text" placeholder=":รูปภาพสินค้า:" class="input input-bordered w-full" />
                               </div>
                             </div>
                           </div><br>
                           <div id="box-product 5-6" class="w-full h-[80px]  flex justify-between">
                            <div id="box-product2" class=" w-[470px] h-[80px] grid">
                                <h1 class="text-[22px] text-white">ช่องทางการติดต่อ (เฟสบุ๊ค)</h1>
                                <input type="text" placeholder=":facebook:" class="input input-bordered w-full" />
                            </div>
                            <div id="box-product3" class=" w-[470px] h-[80px] grid">
                                <h1 class="text-[22px] text-white">ช่องทางการติดต่อ (ไลน์)</h1>
                                <input type="text" placeholder=":Line ID:" class="input input-bordered w-full" />
                            </div>
                           </div><br>
                           <div id="box-product7" class=" w-full h-[80px] grid ">
                            <div id="attribute-text" class=" grid-1 w-[327px]">
                               <h1 class="text-[22px] text-white">ระบุรายละเอียดของสินค้า</h1>
                            </div>
                            <div id="attribute-box" class="grid-2 w-full ">
                               <div>
                                <textarea id="message" rows="15" class="input input-bordered w-full h-[130px] pt-4" placeholder=":รายละสินค้า:"></textarea>
                               </div>
                             </div>
                             <div class="flex justify-evenly pt-10">
                                <router-link to="/home">
                                    <button class="btn btn-success text-[20px] w-[173px] h-[48px] bg-[#00A711] text-white">ยืนยัน</button>
                                </router-link>
                                <router-link to="/home">
                                    <button class="btn btn-error text-[20px] w-[173px] h-[48px] bg-[#A30303]">ยกเลิก</button>
                                </router-link>
                             </div>
                             
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
           
    </div>

</template>
