<script setup>
    import Navbar from '../components/NavbarAdmin.vue'
    import IconSearchBar from '../components/icons/IconSearchbar.vue'
    document.title = 'Admin | ShopMaiUP'
</script>

<template>
    <div class="bg-accent min-h-screen">
        <Navbar></Navbar>
        <div class="py-[80px] grid">
            <h1 class="text-white text-[32px] justify-self-center mb-8">จัดการโพสต์</h1>
            <div class="grid place-items-center">
                <form class="w-1/2 flex">
                    <label class="w-full h-full bg-white grid grid-cols-[95%_5%] rounded-full overflow-hidden py-3">
                        <input v-model="search" placeholder="ค้นหาไอดีหรือชื่อโพสต์" type="text" class="ml-8 focus:outline-none">
                        <button class="text-black translate-y-px"><IconSearchBar/></button>
                    </label>
                </form>
            </div>
            <div class="w-4/5 mt-16 h-fit justify-self-center rounded-[28px] overflow-hidden shadow-lg shadow-black">
                <div class="bg-[#303346] grid grid-cols-[10%_30%_30%_30%] text-white p-4 shadow-lg shadow-black z-50 w-full h-full border-b-2 border-accent pt-6">
                    <h2 class="ml-4">PostID</h2>
                    <h2>Product Name</h2>
                    <h2>Date</h2>
                    <h2>Manage</h2>
                </div>
                <div id="datalist" class="divide-y-2 divide-accent z-30">
                    <template v-if="filteredList.length > 0">
                        <div class="bg-[#303346] grid grid-cols-[10%_30%_30%_30%] text-white p-6 drop-shadow-lg w-full h-full" v-for="d in filteredList" :key="d.postid">
                            <h2 class="flex ml-4 items-center">{{ d.id }}</h2>
                            <h2 class="flex items-center">{{ d.post_title }}</h2>
                            <h2 class="flex items-center">{{ d.date_post }}</h2>
                            <div class="flex gap-4 ">
                                <router-link :to="`/product/` + d.postid">
                                    <button class="btn btn-success w-[88px] h-[48px] text-white justify-self-center">ดูโพสต์</button>
                                </router-link>
                                <button class="btn btn-error w-[88px] h-[48px] text-white justify-self-center">ลบ</button>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="bg-[#303346] grid grid-cols-1 text-white p-6 drop-shadow-lg w-full h-full">
                            <p>Not found data.</p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

const host = 'http://127.0.0.1:8888/';

    export default {
        name: 'AdminManagePage',

        data () {
            return {
                data: [],
                search: ''
            }
        
        },

        created(){
            this.showPosts()
        },
        mounted() {
            axios.get(host + 'api/posts/')
                .then(res => {
                    this.data = res.data
                })
        },

        methods:{
            showPosts(){
                console.log(this.data)
            }
        },

        computed: {
            filteredList() {
                return this.data.filter(post => {
                    return post.post_title.toLowerCase().includes(this.search.toLowerCase()) || post.id.toString().includes(this.search)
                })
            }
        }    
    }
</script>

<style>

</style>