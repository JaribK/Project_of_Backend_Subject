<script setup>
import Swal from 'sweetalert2';
import Navbar from '../components/NavbarNoneSelect.vue'
import IconThreeDotsVue from '../components/icons/IconThreeDots.vue';

document.title = 'Product | ShopMaiUP'
</script>

<template>
    <div>
        <Navbar />
        <div class="bg-[#1D1F2B] min-h-screen">
            <div class="grid place-items-center">
                <div class="w-4/5 grid place-items-center py-16 space-y-16 ">
                    <div class="outline text-white w-full px-16 flex justify-between items-center py-6 rounded-[28px]">
                        <div class="pr-8">
                            <h1 class="text-[45px] font-bold">{{ post_data.post_title }}</h1>
                            <p class="text-[24px]">{{ post_data.post_sfdc }}</p>
                        </div>
                        <button @click="LikeButton"
                            class="outline-3 btn bg-transparent hover:bg-[#FFBB29] text-white text-2xl font-bold"
                            id="like-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {{ isLiked ? 'Like' : 'Liked' }}
                        </button>
                    </div>
                    <div class="flex w-[1106px] h-[656px] rounded-[28px] shadow-lg shadow-black"
                        v-for="product in product_data_id" :key="product.id">
                        <div class="w-[450px] h-full flex flex-col ">
                            <div
                                class="w-[450px] h-[450px] bg-[#252837] overflow-hidden grid place-items-center rounded-tl-[28px]">
                                <img :src="product.image_src" alt="product_image" class="h-full object-cover">
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
                                        <router-link to="/edit-post">
                                            <li class="text-blue-400 font-bold"><a>แก้ไขสินค้า</a></li>
                                        </router-link>
                                        <router-link to="/">
                                            <li class="text-red-400 font-bold"><a>ลบสินค้า</a></li>
                                        </router-link>
                                    </ul>
                                </div>
                                <div class="dropdown dropdown-right" v-if="!post_match_userid">
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
            user_id: '',
            product_data: [],
            product_data_id: [],
            post_data: [],
            post_match_userid: false,
            post_id: '',
            like_post: '',
            isLiked: false,
        }
    },
    methods: {
        getUserfromLocalStorage() {
            const user = localStorage.getItem('user')
            const user_json = JSON.parse(user)

            this.user_id = user_json.id
        },

        async getPostId() {
            await axios.get(host + 'api/posts')
                .then((res) => {
                    this.post_id = res.data[this.$route.params.id - 1].id
                })
        },

        async getLikePost() {
            await axios.get(host + 'userposts/')
                .then((res) => {
                    this.like_post = res.data
                })
        },

        async LikeButton() {

            if (this.isLiked) {
                await axios.post(host + 'userposts/', {
                    user: this.user_id,
                    post: this.post_id
                });
            } else {
                await axios.delete(host + `userposts/${this.getLikePostIdfromPost(this.post_id)}`);
            }
            this.isLiked = !this.isLiked;
            console.log(this.isLiked);
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
            return lp.id;
        },
        async getPostInLp() {
            console.log(this.like_post.filter(lp => lp.post === this.post_id))
        },
        checkUserInLp() {
            // Ensure that this.like_post is an array
            if (!Array.isArray(this.like_post)) {
                console.log('false')
                return false;
            }

            const lp = this.like_post.find(lp => lp.post === this.post_id && lp.user === this.user_id);

            // If lp is undefined (user not found in like_post), return false
            return lp !== undefined;
        }


    },
    async mounted() {

        await axios.get(host + 'api/products')
            .then((res) => {
                this.product_data = res.data
            })

        await axios.get(host + 'api/posts')
            .then((res) => {
                this.post_data = res.data[this.$route.params.id - 1]
            })
        await axios.get(host + 'userposts/')
            .then((res) => {
                this.like_post = res.data;

                this.checkUserInLp(this.post_id, this.user_id);
            });


        this.getUserfromLocalStorage();
        this.getPostId();
        this.getLikePost();

        this.getProductMatchPostId();

        this.checkUserInLp();
        // this.getLikePostIdfromPost(this.post_id.id)
    },
}
</script>

<style scoped></style>