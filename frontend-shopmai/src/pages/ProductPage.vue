<script setup>
import Swal from 'sweetalert2';
import Navbar from '../components/NavbarNoneSelect.vue'
import IconThreeDotsVue from '../components/icons/IconThreeDots.vue';
import { createRouter, createWebHistory } from 'vue-router';
document.title = 'Product | ShopMaiUP'
</script>

<template>
    <div>
        <Navbar />
        <div class="bg-[#1D1F2B] min-h-screen">
            <div class="grid place-items-center">
                <div class="w-4/5 grid place-items-center py-16 space-y-16 ">
                    <div
                        class="outline text-white w-full pr-16 flex justify-between items-center rounded-[28px] h-[175px] relative overflow-hidden">
                        <div class="dropdown dropdown-end absolute right-0 top-0 mr-8 mt-4 z-50"
                            v-if="getPostCanEditIfMatchUserId()">
                            <button>
                                <IconThreeDotsVue class="justify-self-end self-center translate-y-[-8px]" />
                            </button>
                            <ul tabindex="0"
                                class="dropdown-content z-50 menu p-2 shadow-lg bg-base-100 rounded-box w-52 mr-2">
                                <li class="text-blue-400 font-bold" @click="toEditPostPage"><a>แก้ไขโพสต์</a></li>
                                <li class="font-bold text-black" @click="toCreateProductPage"><a>เพิ่มสินค้า</a></li>
                                <li class="text-red-400 font-bold" @click="deletePost"><a>ลบโพสต์</a></li>
                            </ul>
                        </div>
                        <div class="dropdown dropdown-end absolute right-0 top-0 mr-8 mt-4 z-50" v-else>
                        </div>
                        <div class="pr-8 z-0 h-full flex">
                            <div class="w-[200px] aspect-square overflow-hidden grid place-items-center relative">
                                <img :src="post_data.post_thumbnail" class="h-full scale-150 object-cover">
                                <div class="absolute bg-[#1D1F2B] right-0 w-5 h-[200px] blur-sm translate-x-3"></div>
                            </div>
                            <div class="pl-6 py-4">
                                <h1 class="text-[36px] font-bold">{{ post_data.post_title }}</h1>
                                <p class="text-[18px]">{{ post_data.post_sfdc }}</p>
                            </div>
                        </div>
                        <button v-if="CheckUlikePost == false" @click="Like"
                            class="outline-3 btn bg-transparent hover:bg-[#FFBB29] text-white text-2xl font-bold z-10"
                            id="like-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Like
                        </button>
                        <button v-if="CheckUlikePost == true" @click="UnLike"
                            class="outline-3 btn bg-transparent hover:bg-[#FFBB29] text-white text-2xl font-bold z-10"
                            id="like-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Unlike
                        </button>
                    </div>
                    <template v-if="product_data_id.length > 0">
                        <div class="flex w-[1106px] h-[656px] rounded-[28px] shadow-lg shadow-black"
                            v-for="product in product_data_id" :key="product.id">
                            <div class="w-[450px] h-full flex flex-col ">
                                <div
                                    class="w-[450px] h-[450px] bg-[#252837] overflow-hidden grid place-items-center rounded-tl-[28px]">
                                    <img :src="product.img_src" alt="product_image" class="h-full object-cover">
                                </div>
                                <div
                                    class="w-full h-[calc(656px-450px)] border-r-2 border-[#252837] p-4 space-y-2 bg-white rounded-bl-[28px]">
                                    <h2 class="text-[31px] font-bold">ช่องทางการติดต่อ</h2>
                                    <div class="flex flex-col space-y-4">
                                        <div class="flex items-center space-x-2">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                                                class="h-[41px]">
                                            <p class="text-[20px]">{{ product.contact_facebook }}</p>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <img src="https://cdn.iconscout.com/icon/free/png-512/line-1693569-1442610.png"
                                                class="h-[41px]">
                                            <p class="text-[20px]">{{ product.contact_line }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full p-8 bg-white rounded-r-[28px]">
                                <div class="w-full border-b-2 border-[#252837] grid grid-cols-[90%_10%]">
                                    <h2 class="text-[45px] font-bold">{{ product.title }}</h2>
                                    <div class="dropdown dropdown-right" v-if="getPostCanEditIfMatchUserId()">
                                        <button>
                                            <IconThreeDotsVue class="justify-self-end self-center translate-y-[-8px]" />
                                        </button>
                                        <ul tabindex="0"
                                            class="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52">
                                            <li class="text-blue-400 font-bold" @click="toEditProductPage(product.id)">
                                                <a>แก้ไขสินค้า</a>
                                            </li>
                                            <li class="text-red-400 font-bold" @click="deleteProduct(product.id)">
                                                <a>ลบสินค้า</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="dropdown dropdown-right" v-else>
                                    </div>
                                </div>
                                <div class="h-full grid grid-rows-[35%_40%]">
                                    <div class="h-full mt-16">
                                        <h2 class="text-[40px] font-bold">ราคา {{ product.price }} บาท</h2>
                                        <h2 class="text-[22px]">เหลือ {{ product.quantity }} ชิ้น</h2>
                                    </div>
                                    <div>
                                        <h2 class="text-[32px] font-bold">รายละเอียดสินค้า</h2>
                                        <h2 class="text-[22px]">{{ product.description }}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="w-full">
                            <div role="alert" class="alert ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="stroke-current shrink-0 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>ไม่พบสินค้า</span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const host = 'http://127.0.0.1:8888/'


export default {
    name: "HomePage",
    data() {
        return {
            post_match_userid: false,
            product_data: [],
            product_data_id: [],
            post_data: [],
            user_id: '',
            post_id: '',
            like_post: [],
            CheckUlikePost: false,
        }
    },
    methods: {
        getUserfromLocalStorage() {
            const user = localStorage.getItem('user')
            const user_json = JSON.parse(user)

            this.user_id = user_json.id
        },

        async getPostId() {
            await axios.get(host + 'api/posts/' + this.$route.params.id)
                .then((res) => {
                    this.post_id = res.data.id
                })
        },

        async getLikePost() {
            await axios.get(host + 'userposts/')
                .then((res) => {
                    this.like_post = res.data
                })
        },

        async Like() {
            await axios.post(host + 'userposts/', {
                user: this.user_id,
                post: this.post_id,
                status_like: 1
            })
            location.reload();
            console.log('Like success')
        },
        async UnLike() {
            await axios.delete(host + 'userposts/' + this.getLikePostIdfromPost(this.post_id))
            location.reload();

            console.log('UnLike success')
        },

        getProductMatchPostId() {
            this.product_data.map(product => {
                if (product.post == this.post_data.id) {
                    this.product_data_id.push(product)
                }
            })
        },
        getPostCanEditIfMatchUserId() {

            const user = localStorage.getItem('user')
            const user_json = JSON.parse(user)

            this.user_id = user_json.id


            if (this.post_data.user == this.user_id) {
                return true
            } else {
                return false
            }
        },

        getLikePostIdfromPost(post_id) {
            const lp = this.like_post.find(lp => lp.post === post_id && lp.user === this.user_id);
            if (lp) {
                this.CheckUlikePost = true
                return lp.id;
            } else {
                this.CheckUlikePost = false
                return null;
            }
        },

        toEditPostPage() {
            this.$router.push(`/post/${this.$route.params.id}/edit-post`)
        },

        toCreateProductPage() {
            this.$router.push(`/post/${this.$route.params.id}/create-product`)
        },

        toEditProductPage(product_id) {
            this.$router.push(`/post/${this.$route.params.id}/edit-product/${product_id}`)
        },

        deletePost() {
            Swal.fire({
                title: 'คุณต้องการลบโพสต์นี้ใช่หรือไม่?',
                text: "คุณจะไม่สามารถกู้คืนได้!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#FFBB29',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ใช่, ลบโพสต์นี้!',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(host + 'api/posts/' + this.post_data.id)
                        .then((res) => {
                            Swal.fire(
                                'ลบโพสต์สำเร็จ!',
                                'โพสต์ของคุณถูกลบแล้ว',
                                'success'
                            )
                            this.$router.push('/home')
                        })
                }
            })
        },

        deleteProduct(product_id) {
            Swal.fire({
                title: 'คุณต้องการลบสินค้านี้ใช่หรือไม่?',
                text: "คุณจะไม่สามารถกู้คืนได้!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#FFBB29',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ใช่, ลบสินค้านี้!',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(host + 'api/products/' + product_id)
                        .then((res) => {
                            location.reload();
                        })
                }
            })
        }
    },


    async mounted() {

        await axios.get(host + 'api/products')
            .then((res) => {
                this.product_data = res.data;
            })

        await axios.get(host + 'api/posts/' + this.$route.params.id + '/')
            .then((res) => {
                this.post_data = res.data
            })
        await axios.get(host + 'userposts/')
            .then((res) => {
                this.like_post = res.data;
            });


        this.getUserfromLocalStorage();
        this.getPostId();
        this.getLikePost();

        this.getProductMatchPostId();

        this.getLikePostIdfromPost(this.post_data.id)
    },

    computed: {

    }
}
</script>