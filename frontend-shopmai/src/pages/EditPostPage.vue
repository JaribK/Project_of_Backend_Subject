<script setup>
    import Navbar from '../components/NavbarNoneSelect.vue'
    
    document.title = 'EditPost | ShopMaiUP'
</script>

<template>
    <div id="editpost" class="bg-[#222431] w-full min-h-screen " >
        <Navbar></Navbar>
        <div class="">
            <div id="post-content" class="grid place-items-center min-h-screen pb-20">
                <div id="create-box" class="w-[1106px] h-[824px] bg-[#303346] rounded-[28px] overflow-hidden grid place-items-center">
                    <div id="writen" class=" h-[764px] w-[957px] grid" >
                        <div id="titlebox" class="w-full h-[67] border-b-2">
                            <h2 id="title" class="text-[40px] font-bold text-white ">แก้ไขโพส</h2>
                        </div>
                        <div id="info" class=" w-full h-[630px] grid place-items-center ">
                            <div id="inboxinfo" class="w-[957px] h-[540px]">
                                <div id="box-post1" class=" w-full h-[68px] flex">
                                     <div id="attribute-text" class=" flex-1 w-[327px]">
                                        <h1 class="text-[22px] text-white">ระบุชื่อโพส</h1>
                                    </div>
                                    <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F] ">
                                        <div class="shadow-2xl">
                                            <input type="text" placeholder=":ชื่อโพส:" class="input input-bordered w-full" />
                                        </div>
                                    </div>
                                    
                                </div><br>
                                <div id="box-post2" class=" w-full h-[68px] flex">
                                    <div id="attribute-text" class=" flex-1 w-[327px]">
                                       <h1 class="text-[22px] text-white">ระบุจำนวนโพส</h1>
                                   </div>
                                   <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F]">
                                       <div class="shadow-2xl">
                                        <input type="text" placeholder=":จำนวนโพส:" class="input input-bordered w-full" />
                                       </div>
                                   </div>
                                   
                                </div><br>
                                <div id="box-post3" class=" w-full h-[247px] flex">
                                    <div id="attribute-text" class=" flex-1 w-[327px]">
                                       <h1 class="text-[22px] text-white">ระบุรายละเอียดโพส</h1>
                                   </div>
                                   <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F]">
                                        <textarea id="message" rows="15" class="input input-bordered w-full h-[225px] pt-4" placeholder=":รายละเอียดโพส:"></textarea>
                                   </div>
                                   
                                </div><br>
                                <div id="box-post4" class=" w-full h-[68px] flex">
                                    <div id="attribute-text" class=" flex-1 w-[327px]">
                                       <h1 class="text-[22px] text-white">ระบุรูปภาพโพส</h1>
                                   </div>
                                   <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F]">
                                       <div class="shadow-2xl">
                                        <input type="text" placeholder=":รูปภาพโพส:" class="input input-bordered w-full" />
                                       </div>
                                   </div>
                                   
                                </div><br>
                                   
                                
                            </div>
                        </div>
                        <div id="next" class="justify-self-end pb-10">
                            <router-link to="/edit-product">
                                <button class="btn btn-warning text-[20px] w-[173px] h-[48px]">ถัดไป</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
           
    </div>

</template>
