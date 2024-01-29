<script setup>
    import NavbarBase from '../components/NavbarHome.vue';
    import IconSearchBar from '../components/icons/IconSearchbar.vue';

    document.title = 'Home | ShopMaiUP'
</script>

<template>
    <div id="Home" class="bg-[#1D1F2B] w-full min-h-screen">
        <NavbarBase />
        <div id="contents" class="grid place-items-center">
            <div class="w-4/5">
                <div id="forLogin" class="py-8">
                    <div class="grid place-items-center space-y-2">
                        <div id="title">
                            <p class="text-white text-[32px]">รายการสินค้า</p>
                        </div>
                        <form class="w-1/2 flex">
                            <label class="w-full h-full bg-white grid grid-cols-[95%_5%] rounded-full overflow-hidden py-3">
                                <input v-model="search" type="text" class="ml-8 focus:outline-none" placeholder="ค้นหาชื่อโพสต์">
                                <button class="text-black translate-y-px"><IconSearchBar/></button>
                            </label>
                        </form>
                        <div id="listproduct" class="grid grid-cols-2 pt-16 gap-8 max-lg:grid-cols-1" >
                            <div class="h-[258px] w-[520px] rounded-[28px] flex overflow-hidden shadow-lg shadow-black" v-for="post in filteredList" :key="post.id">
                                <div class="w-[240px] bg-[#252837] h-full rounded-l-[28px]">
                                    <img :src="post.post_thumbnail" class="h-full object-cover">
                                </div>
                                <div class="w-[280px] h-full bg-white p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 class="text-xl font-semibold">{{ post.post_title}}</h3>
                                        <p>{{ post.post_sfdc }}</p>
                                        
                                    </div>
                                    <div class="w-full grid grid-cols-[65%_35%] ">
                                        <div class="h-full w-full flex items-center">
                                            <p>มีสินค้าทั้งหมด {{ getAmountProductInPost(post.id) }} ชิ้น</p>
                                        </div>
                                        <router-link :to="`/post/` + post.id">
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
    </div>
</template>

<script>
import axios from 'axios';

const host = 'http://127.0.0.1:8888/'

    export default {
        name: "HomePage",
        data() {
            return {
                blank_thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVoIq-v4rRfSf7ALIjyE_VZC_l2tRvrJcErAl-7V3oJemj7VgRdLfMK9i_ylfAuky2x0&usqp=CAU',
                post_data: [],
                product_data: [],
                search: '',
            }
                },
                async mounted() {
                    
                    await axios.get(host + 'api/posts/')
                        .then((res) => {
                            this.post_data = res.data
                        })
                    
                    await axios.get(host + 'api/products')
                        .then((res) => {
                            this.product_data = res.data
                        })

                    
                },
                methods: {
                    getAmountProductInPost(post_id) {
                        let amount = 0
                        this.product_data.map(product => {
                            if (product.post == post_id) {
                                amount += 1
                            }
                        })
                        return amount
                    },

                    async postLikePost() {

                        this.post_data.map(async (post) => {
                            await axios.post(host + 'userposts/', {
                                post : this.post_id,
                            })
                        })
                    }
                },
                computed: {
                    filteredList() {
                        return this.post_data.filter(post => {
                            return post.post_title.toLowerCase().includes(this.search.toLowerCase())
                        })
                    }

                }
    }
            
</script>

<style scoped>
</style>