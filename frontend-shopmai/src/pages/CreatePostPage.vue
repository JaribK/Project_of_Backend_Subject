<script setup>
    import Navbar from '../components/NavbarNoneSelect.vue'
    
    document.title = 'CreatePost | ShopMaiUP'
</script>

<template>
    <div id="createpost" class="bg-[#222431] w-full min-h-screen " >
        <Navbar></Navbar>
        <div class="">
            <div id="post-content" class="grid place-items-center min-h-screen py-20">
                <div id="create-box" class="w-[1106px] h-[824px] bg-[#303346] rounded-[28px] overflow-hidden grid place-items-center">
                    <div id="writen" class=" h-[764px] w-[957px] grid" >
                        <div id="titlebox" class="w-full h-[67] border-b-2">
                            <h2 id="title" class="text-[40px] font-bold text-white ">สร้างโพสต์</h2>
                        </div>
                        <div id="info" class=" w-full h-[630px] grid place-items-center ">
                            <div id="inboxinfo" class="w-[957px] h-[540px]">
                                <div id="box-post1" class=" w-full h-[68px] flex">
                                     <div id="attribute-text" class=" flex-1 w-[327px]">
                                        <h1 class="text-[22px] text-white">ระบุชื่อ</h1>
                                    </div>
                                    <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F] ">
                                        <div class="shadow-2xl">
                                            <input type="text" placeholder=":ชื่อโพสต์:" v-model="post_title" class="input input-bordered w-full" />
                                        </div>
                                    </div>
                                </div><br>
                                <div id="box-post3" class=" w-full h-[247px] flex">
                                    <div id="attribute-text" class=" flex-1 w-[327px]">
                                       <h1 class="text-[22px] text-white">ระบุรายละเอียด</h1>
                                   </div>
                                   <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F]">
                                        <textarea id="message" rows="9" class="input input-bordered h-fit w-full pt-4 resize-none
                                        " placeholder=":รายละเอียดโพสต์:" v-model="post_sfdc"></textarea>
                                   </div>
                                   
                                </div><br>
                                <div id="box-post4" class=" w-full h-[68px] flex">
                                    <div id="attribute-text" class=" flex-1 w-[327px]">
                                       <h1 class="text-[22px] text-white">ระบุรูปภาพ</h1>
                                   </div>
                                   <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F]">
                                       <div class="shadow-2xl">
                                        <input type="file" @change="handleFileChange" ref="file" accept=".png, .jpg, .jpeg" class="w-full text-black text-lg bg-gray-100 roundend-lg file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded-lg" />
                                       </div>
                                   </div>
                                   
                                </div><br>
                                   
                                
                            </div>
                        </div>
                        <div id="next" class="justify-self-end pb-10">
                            <button type="button" class="btn btn-success text-white text-[20px] w-[173px] h-[48px]" @click="postPost">สร้างโพสต์</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
           
    </div>

</template>

<script>
import axios from 'axios';
const host = 'http://127.0.0.1:8888/';

    export default {
        name: "CreatePostPage",
        data() {
            return {
                post_title: "",
                post_sfdc: "",
                post_thumbnail: null,
                user_id: "",
                post_id: "",
            };
        },
        mounted() {
            this.getUserIdfromLocalStorage()
        },
        methods: {
            async handleFileChange() {
                this.post_thumbnail = this.$refs.file.files[0];
            },

            async postPost() {
                try {
                    if (this.post_thumbnail) {
                        let fd = new FormData()
                        fd.append('post_thumbnail', this.post_thumbnail)
                        fd.append('post_title', this.post_title)
                        fd.append('post_sfdc', this.post_sfdc)
                        fd.append('user', this.user_id)
        
                        await axios.post(host + 'api/posts/', fd ,{
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                        }).then(async (res) => {
                            this.$router.push(`/post/${res.data.id}/create-product`)
                        }).catch((err) => {
                            console.log(err)
                        })
                    } else {
                        let fd = new FormData()
                        fd.append('post_title', this.post_title)
                        fd.append('post_sfdc', this.post_sfdc)
                        fd.append('user', this.user_id)
        
                        await axios.post(host + 'api/posts/', fd ,{
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                        }).then(async (res) => {
                            this.$router.push(`/post/${res.data.id}/create-product`)
                        }).catch((err) => {
                            console.log(err)
                        })
                    }
                } catch (error) {
                    console.error(error);
                }
            },
            getUserIdfromLocalStorage(){
                const user = localStorage.getItem('user')
                this.user_id = JSON.parse(user).id
            },
            
        }
    }
</script>

