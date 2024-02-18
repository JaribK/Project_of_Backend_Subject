<script setup>
import Navbar from '../components/NavbarNoneSelect.vue'

document.title = 'Profile | ShopMaiUP';
</script>

<template>
    <div class="bg-accent min-h-screen">
        <Navbar></Navbar>
        <div class="grid grid-cols-1 pt-[80px] p-16 space-y-16">
            <div class="flex flex-col items-center w-full">
                <h1 class="text-white text-[32px] mb-[64px]">โปรไฟล์ผู้ใช้</h1>
                <img class="w-[140px] h-[140px] rounded-full mb-[25px]" :src="user_profile" alt="">
                <p class="text-white text-[24px] font-bold mb-[55px]">
                    {{ username }}
                </p>
                <button class="btn w-[212px] h-[48px] btn-error" @click="logout_button">ออกจากระบบ</button>
            </div>
            <div id="information" class=" w-[1024px] my-16 rounded-[28px] overflow-hidden justify-self-center">
                <div class="bg-[#3C3C3C] drop-shadow-lg z-50 p-4">
                    <h2 class="text-white ml-8">ข้อมูลผู้ใช้</h2>
                </div>
                <div class="bg-[#303346] h-fit z-40 p-12">
                    <div>
                        <div class="grid grid-cols-2 place-items-center h-full gap-12">
                            <label class="flex h-[56px]">
                                <div
                                    class="py-4 w-[123px] bg-[#3C3C3C] text-white rounded-l-[20px] grid place-items-center">
                                    <p>ชื่อ</p>
                                </div>
                                <input type="text" :value="firstname" class="input rounded-l-none h-full rounded-r-[20px]"
                                    disabled>
                            </label>
                            <label class="flex h-[56px]">
                                <div
                                    class="py-4 w-[123px] bg-[#3C3C3C] text-white rounded-l-[20px] grid place-items-center">
                                    <p>นามสกุล</p>
                                </div>
                                <input type="text" :value="lastname" class="input rounded-l-none h-full rounded-r-[20px]"
                                    disabled>
                            </label>
                            <label class="flex h-[56px]">
                                <div
                                    class="py-4 w-[123px] bg-[#3C3C3C] text-white rounded-l-[20px] grid place-items-center">
                                    <p>อีเมล</p>
                                </div>
                                <input type="text" :value="email" class="input rounded-l-none h-full rounded-r-[20px]"
                                    disabled>
                            </label>
                            <label class="flex h-[56px]">
                                <div
                                    class="py-4 w-[123px] bg-[#3C3C3C] text-white rounded-l-[20px] grid place-items-center">
                                    <p>บทบาท</p>
                                </div>
                                <input type="text" :value="role" class="input rounded-l-none h-full rounded-r-[20px]"
                                    disabled>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div id="my_post" class="grid place-items-center">
                <div>
                    <h2 class="text-[24px] text-white flex items-center justify-center">โพสต์ที่ฉันสร้าง</h2>
                    <div v-if="myCreatedPost.length == 0" class="w-[1024px] mt-8">
                        <div role="alert" class="alert ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="stroke-current shrink-0 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>ไม่พบข้อมูลการสร้างโพสต์ของคุณ</span>
                        </div>
                    </div>
                    <div id="listproduct" class="grid grid-cols-2 gap-8 mt-8 max-lg:grid-cols-1">
                        <div class="h-[258px] w-[520px] rounded-[28px] flex overflow-hidden shadow-lg shadow-black"
                            v-for="d in myCreatedPost" :key="d.id">
                            <div class="w-[240px] bg-[#252837] h-full rounded-l-[28px]">
                                <img :src="d.post_thumbnail" class="h-full w-full object-cover">
                            </div>
                            <div class="w-[280px] h-full bg-white p-4 flex flex-col justify-between">
                                <div>
                                    <h3 class="text-xl font-semibold">{{ d.post_title }}</h3>
                                    <p>{{ d.post_sfdc }}</p>
                                </div>
                                <div class="w-full grid grid-cols-[65%_35%] ">
                                    <div class="h-full w-full flex items-center">
                                        <p>มีสินค้าทั้งหมด {{ getAmountProductInPost(d.id) }} ชิ้น</p>
                                    </div>
                                    <router-link :to="`/post/` + d.id">
                                        <button class="btn btn-secondary h-fit ">เพิ่มเติม</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="favourite" class="grid place-items-center">
                <div class="mt-8">
                    <h2 class="text-[24px] text-white justify-center flex items-center">โพสต์ที่ฉันชอบ<img
                            src="../assets/star.png" class="w-[24px] h-[24px] ml-2" alt=""></h2>
                    <div v-if="myLikedPost.length === 0" class="w-[1024px] mt-8">
                        <div role="alert" class="alert ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="stroke-current shrink-0 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>ไม่พบข้อมูลการกดไลก์โพสต์ของคุณ</span>
                        </div>
                    </div>
                    <div id="listproduct" class="grid grid-cols-2 mt-8 gap-8 max-lg:grid-cols-1">
                        <div class="h-[258px] w-[520px] rounded-[28px] flex overflow-hidden shadow-lg shadow-black"
                            v-for="d in myLikedPost" :key="d.post">
                            <div class="w-[240px] bg-[#252837] h-full rounded-l-[28px]">
                                <img :src="getPostThumbnail(d.post)" class="h-full w-full object-cover">
                            </div>
                            <div class="w-[280px] h-full bg-white p-4 flex flex-col justify-between relative">
                                <img src="../assets/star.png" class="h-[24px] aspect-square absolute right-5">
                                <div>
                                    <h3 class="text-xl font-semibold">{{ getPostTitle(d.post) }}</h3>
                                    <p>{{ getPostDes(d.post) }}</p>
                                </div>
                                <div class="w-full grid grid-cols-[65%_35%] ">
                                    <div class="h-full w-full flex items-center">
                                        <p>มีสินค้าทั้งหมด {{ getAmountProductInPost(d.post) }} ชิ้น</p>
                                    </div>
                                    <router-link :to="`/post/` + d.post">
                                        <button class="btn btn-secondary h-fit ">เพิ่มเติม</button>
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

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
const host = 'http://127.0.0.1:8888/'

export default {
    name: 'ProfilePage',
    data() {
        return {
            user_profile: '',
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            role: '',
            post_data: [],
            product_data: [],
            liked_post_data: [],
            user_id: ''
        }
    },
    async mounted() {
        try {
            this.getUserProile();

            await axios.get(host + 'api/posts')
                .then((res) => {
                    this.post_data = res.data
                })

            await axios.get(host + 'api/products')
                .then((res) => {
                    this.product_data = res.data
                })

            await axios.get(host + 'userposts/')
                .then((res) => {
                    this.liked_post_data = res.data
                })

            const user = localStorage.getItem('user')
            const user_data = JSON.parse(user)

            this.user_id = user_data.id
            this.username = user_data.username;
            this.firstname = user_data.first_name;
            this.lastname = user_data.last_name;
            this.email = user_data.email;

            if (!user_data.is_staff) {
                this.role = "Member"
            } else {
                this.role = "Admin"
            }

            const token = localStorage.getItem('token');

            if (!token) {
                this.$router.push('/login')
            }

        } catch (error) {
            console.error(error);
        }
    },
    computed: {
        myCreatedPost() {
            return this.post_data.filter(post => post.user === this.user_id)
        },
        myLikedPost() {
            return this.liked_post_data.filter(post => post.user === this.user_id)
        }   
    },
    methods: {
        logout_button() {
            Swal.fire({
                title: "ต้องการออกจากระบบอย่างงั้นรึ ?",
                icon: "warning",
                showCancelButton: true,
                cancelButtonText: "ยกเลิก",
                confirmButtonText: 'แน่นอน'
            }).then((result) => {

                if (result.isConfirmed) {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    localStorage.removeItem('profile');
                    this.$router.push('/login');
                }
            })
        },
        getUserProile() {
            const profile = localStorage.getItem('profile');
            this.user_profile = profile
        },
        getAmountProductInPost(post_id) {
            try {
                let amount = 0
                this.product_data.map(product => {
                    if (product.post == post_id) {
                        amount += 1
                    }
                })
                return amount
            } catch (error) {
                console.error(error)
            }
        },
        getPostTitle(post_id) {
            try {
                const post = this.post_data.find(post => post.id === post_id);
                return post.post_title
            } catch (error) {
                console.error(error)
            }
        },

        getPostDes(post_id) {
            try {
                const post = this.post_data.find(post => post.id === post_id);
                return post.post_sfdc
            } catch (error) {
                console.error(error)
            }
        },

        getPostThumbnail(post_id) {
            try {
                const post = this.post_data.find(post => post.id === post_id);
                return post.post_thumbnail
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<style scoped></style>