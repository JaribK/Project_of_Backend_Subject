<script setup>
    import Navbar from '../components/NavbarNoneSelect.vue';
</script>

<template>
    <div class="bg-accent min-h-screen">
        <Navbar></Navbar>
        <div class="grid grid-cols-1 pt-[80px] p-16">
            <div class="flex flex-col items-center w-full">
                <h1 class="text-white text-[32px] mb-[64px]">โปรไฟล์ผู้ใช้</h1>
                <img class="w-[140px] h-[140px] rounded-full mb-[25px]" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="">
                <p class="text-white text-[24px] font-bold mb-[55px]">
                    {{ username }}
                </p>
                <button class="btn w-[212px] h-[48px] btn-error" @click="logout">Logout</button>
            </div>
            <div id="information" class=" w-[1024px] my-16 rounded-[28px] overflow-hidden justify-self-center">
                <div class="bg-[#3C3C3C] drop-shadow-lg z-50 p-4">
                    <h2 class="text-white ml-8">ข้อมูลผู้ใช้</h2>
                </div>
                <div class="bg-[#303346] h-fit z-40 p-12">
                    <div>
                        <div class="grid grid-cols-2 place-items-center h-full gap-12">
                            <label class="flex h-[56px]">
                                <div class="py-4 w-[123px] bg-[#3C3C3C] text-white rounded-l-[20px] grid place-items-center">
                                    <p>ชื่อ</p>
                                </div>
                                <input type="text" :value="firstname" class="input rounded-l-none h-full rounded-r-[20px]">
                            </label>
                            <label class="flex h-[56px]">
                                <div class="py-4 w-[123px] bg-[#3C3C3C] text-white rounded-l-[20px] grid place-items-center">
                                    <p>นามสกุล</p>
                                </div>
                                <input type="text" :value="lastname" class="input rounded-l-none h-full rounded-r-[20px]">
                            </label>
                            <label class="flex h-[56px]">
                                <div class="py-4 w-[123px] bg-[#3C3C3C] text-white rounded-l-[20px] grid place-items-center">
                                    <p>อีเมล</p>
                                </div>
                                <input type="text" :value="email" class="input rounded-l-none h-full rounded-r-[20px]">
                            </label>
                            <label class="flex h-[56px]">
                                <div class="py-4 w-[123px] bg-[#3C3C3C] text-white rounded-l-[20px] grid place-items-center">
                                    <p>บทบาท</p>
                                </div>
                                <input type="text" :value="role" class="input rounded-l-none h-full rounded-r-[20px]">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div id="favourite" class="grid place-items-center">
                <div>
                    <h2 class="text-[24px] text-white justify-self-start flex items-center">สิ่งที่ชอบ<img src="../assets/star.png" class="w-[24px] h-[24px] ml-2" alt=""></h2>
                    <div id="listproduct" class="grid grid-cols-2 pt-16 gap-8 max-lg:grid-cols-1">
                        <div class="h-[258px] w-[520px] rounded-[28px] flex overflow-hidden shadow-lg shadow-black" v-for="d in posts" :key="d.postid">
                            <div class="w-[240px] bg-[#252837] h-full rounded-l-[28px]">
                                <img :src="d.image" class="h-full object-cover">
                            </div>
                            <div class="w-[280px] h-full bg-white p-4 flex flex-col justify-between relative">
                                <img src="../assets/star.png" class="h-[24px] aspect-square absolute right-5">
                                <div>
                                    <h3 class="text-xl font-semibold">{{ d.title}}</h3>
                                    <h4 class="text-lg">฿{{ d.price }}</h4>
                                    <p>{{ d.description }}</p>
                                </div>
                                <div class="w-full grid grid-cols-[65%_35%] ">
                                    <div class="h-full w-full flex items-center">
                                        <p>มีสินค้าทั้งหมด {{ d.amount }} ชิ้น</p>
                                    </div>
                                    <router-link :to="`/product/` + d.postid">
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
    import posts from './posts.json'

    export default {
        name: 'ProfilePage',
        data() {
            return {
                    username: 'abc',
                    firstname: 'abc',
                    lastname: 'efg',
                    email: 'abc@gmail.com',
                    role: 'member',
                    data:posts
            }
        },
        methods : {
            logout() {
                localStorage.removeItem('username', this.username);
                this.$router.push('/login');
            },
        }
    }
</script>

<style scoped>
</style>