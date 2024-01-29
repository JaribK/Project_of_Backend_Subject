<script setup>
import Navbar from '../components/NavbarNoneSelect.vue'

document.title = 'EditPost | ShopMaiUP'
</script>

<template>
    <div id="editpost" class="bg-[#222431] w-full min-h-screen ">
        <Navbar></Navbar>
        <div class="">
            <div id="post-content" class="grid place-items-center min-h-screen py-20">
                <div id="create-box"
                    class="w-[1106px] h-[824px] bg-[#303346] rounded-[28px] overflow-hidden grid place-items-center">
                    <div id="writen" class=" h-[764px] w-[957px] grid">
                        <div id="titlebox" class="w-full h-[67] border-b-2">
                            <h2 id="title" class="text-[40px] font-bold text-white ">แก้ไขโพสต์</h2>
                        </div>
                        <div id="info" class=" w-full h-fit py-16 grid place-items-center ">
                            <div id="inboxinfo" class="w-[957px] h-fit">
                                <div id="box-post1" class=" w-full h-[68px] flex">
                                    <div id="attribute-text" class=" flex-1 w-[327px]">
                                        <h1 class="text-[22px] text-white">ระบุชื่อ</h1>
                                    </div>
                                    <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F] ">
                                        <div class="shadow-2xl">
                                            <input type="text" placeholder=":ชื่อโพสต์:" v-model="post_title"
                                                class="input input-bordered w-full" />
                                        </div>
                                    </div>

                                </div><br>
                                <div id="box-post3" class=" w-full h-[247px] flex">
                                    <div id="attribute-text" class=" flex-1 w-[327px]">
                                        <h1 class="text-[22px] text-white">ระบุรายละเอียด</h1>
                                    </div>
                                    <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F]">
                                        <textarea id="message" rows="15" class="input input-bordered w-full h-[225px] pt-4"
                                            placeholder=":รายละเอียดโพสต์:" v-model="post_sfdc"></textarea>
                                    </div>

                                </div><br>
                                <div id="box-post4" class=" w-full h-[68px] flex">
                                    <div id="attribute-text" class=" w-[327px]">
                                        <h1 class="text-[22px] text-white">ระบุรูปภาพ</h1>
                                    </div>
                                    <div id="attribute-box" class="flex-2 w-[630px] border-b-2 border-[#5F5F5F]">
                                        <div class="shadow-2xl">
                                            <input type="file" @change="handleFileChange" ref="file" accept=".png, .jpg, .jpeg"
                                                class="w-full text-black text-lg bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded-xl" />
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                        <div id="next" class="justify-self-center pb-10 space-x-32">
                            <button class="btn btn-success text-[20px] w-[173px] h-[48px]" @click="editPost">แก้ไข</button>
                            <button class="btn btn-error text-[20px] w-[173px] h-[48px]">ยกเลิก</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import axios from 'axios';
import Swal from "sweetalert2";
const host = 'http://127.0.0.1:8888/';

export default {
    name: "EditPostPage",
    data() {
        return {
            user_id: '',
            post_title: '',
            post_sfdc: '',
            post_thumbnail: null,
            createpost: []
        };
    },
    async mounted() {
        await axios.get(host + `posts/${this.getPostFromPostId()}/`)
            .then((res) => {
                this.post_title = res.data.post_title;
                this.post_sfdc = res.data.post_sfdc;
            })
    },
    methods: {
        
        getPostFromPostId() {
            const id = this.$route.params.id;
            return id;
        },
        
        getUserId() {
            const user = localStorage.getItem('user');
            return JSON.parse(user).id
        },
        
        async handleFileChange() {
            this.post_thumbnail = this.$refs.file.files[0];
        },

        editPost() {
            try {
                if (this.post_thumbnail) {
                    let fd = new FormData()
                    fd.append('post_thumbnail', this.post_thumbnail)
                    fd.append('id', this.getPostFromPostId())
                    fd.append('post_title', this.post_title)
                    fd.append('post_sfdc', this.post_sfdc)
                    fd.append('user', this.getUserId())
        
                    axios.put(host + `api/posts/${this.getPostFromPostId()}/`, fd ,{
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                    }).then((res) => {
                        Swal.fire({
                            title: "ยืนยันการแก้ไขโพสต์",
                            icon: "warning",
                            showCancelButton: true,
                            cancelButtonText: "ยกเลิก",
                            confirmButtonText: 'แน่นอน',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                
                            }
                        })
                    }).catch((error) => {
                        Swal.fire({
                            title: '',
                            icon: 'error'
                        })
                        console.error(error);
                    })
                } else {
                    axios.put(host + `api/posts/${this.getPostFromPostId()}/`, {
                        id: this.getPostFromPostId(),
                        post_title: this.post_title,
                        post_sfdc: this.post_sfdc,
                        user: this.getUserId()
                    }).then((res) => {
                        Swal.fire({
                            title: "ยืนยันการแก้ไขโพสต์",
                            icon: "warning",
                            showCancelButton: true,
                            cancelButtonText: "ยกเลิก",
                            confirmButtonText: 'แน่นอน'
                        }).then((result) => {
                            if (result.isConfirmed) {

                            }
                        })
                    }).catch((error) => {
                        Swal.fire({
                            title: '',
                            icon: 'error'
                        })
                        console.error(error);
                    })
                }
            } catch (error) {
                console.error(error);
            }
        },
    }
}
</script>


