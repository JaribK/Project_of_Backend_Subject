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
                        <input v-model="search" placeholder="ค้นหาไอดีหรือชื่อโพสต์" type="text"
                            class="ml-8 focus:outline-none">
                        <button class="text-black translate-y-px">
                            <IconSearchBar />
                        </button>
                    </label>
                </form>
            </div>
            <div class="w-4/5 mt-16 h-fit justify-self-center rounded-[28px] overflow-hidden shadow-lg shadow-black">
                <div
                    class="bg-[#303346] grid grid-cols-[10%_30%_30%_30%] text-white p-4 shadow-lg shadow-black z-50 w-full h-full border-b-2 border-accent pt-6">
                    <h2 class="ml-4">PostID</h2>
                    <h2>Post Name</h2>
                    <h2>Post Date</h2>
                    <h2>Manage</h2>
                </div>
                <div id="datalist" class="divide-y-2 divide-accent z-30">
                    <template v-if="filteredList.length > 0">
                        <div class="bg-[#303346] grid grid-cols-[10%_30%_30%_30%] text-white p-6 drop-shadow-lg w-full h-full"
                            v-for="post in filteredList" :key="post.id">
                            <h2 class="flex ml-4 items-center">{{ post.id }}</h2>
                            <h2 class="flex items-center">{{ post.post_title }}</h2>
                            <h2 class="flex items-center">{{ format_date(post.post_date) }}</h2>
                            <div class="flex gap-4 ">
                                <router-link :to="`/post/` + post.id">
                                    <button
                                        class="btn btn-success w-[88px] h-[48px] text-white justify-self-center">ดูโพสต์</button>
                                </router-link>
                                <button class="btn btn-error w-[88px] h-[48px] text-white justify-self-center"
                                    @click="deletePost(post.id)">ลบ</button>
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
import moment from 'moment'
import Swal from 'sweetalert2'

const host = 'http://127.0.0.1:8888/';

export default {
    name: 'AdminManagePage',

    data() {
        return {
            data: [],
            search: '',
            user_data: ''
        }

    },
    async mounted() {
        // this.checkIsStaff();
        await axios.get(host + 'api/posts/')
        .then(res => {
            this.data = res.data
        })

    },
    methods: {
        format_date(value) {
            if (value) {
                return moment(String(value)).format('YYYY / MM / DD - (HH:MM:ss)')
            }
        },

        deletePost(id) {
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
                    axios.delete(host + 'api/posts/' + id)
                        .then(res => {
                            Swal.fire(
                                'ลบโพสต์สำเร็จ!',
                                'โพสต์ของคุณถูกลบแล้ว',
                                'success'
                            )
                            this.$router.go()
                        })
                }
            })
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

<style></style>