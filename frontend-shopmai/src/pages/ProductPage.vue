<script setup>
import Navbar from '../components/Navbar0.vue'

document.title = 'Product | ShopMaiUP'
</script>

<template>
    <div>
        <Navbar />
        <div class="bg-[#1D1F2B] min-h-screen">
            <div class="grid place-items-center">
                <div class="w-4/5 grid place-items-center">
                    <div class="bg-white w-[1106px] h-[656px] mt-16 rounded-[28px]">
                        <div class="w-[450px] h-full flex flex-col ">
                            <div class="w-[450px] h-[450px] bg-[#252837]">
                                <img src="" alt="product_image">
                            </div>
                            <div class="w-full h-[calc(656px-450px)] border-r-2 border-[#252837] p-4 space-y-2">
                                <h2 class="text-[31px] font-bold">ช่องทางการติดต่อ {{ product.title }}</h2>
                                <div class="flex flex-col space-y-4">
                                    <div class="flex items-center space-x-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" class="h-[41px]">
                                        <p>test-facebook</p>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <img src="https://cdn.iconscout.com/icon/free/png-512/line-1693569-1442610.png" class="h-[41px]">
                                        <p>test-line</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import posts from './posts.json';
    export default {
        name: "HomePage",
        data() {
            return {
                product:[]
            }
                },
                created() {
                    this.checkedLogin()
                },
                methods: {
                    checkedLogin() {
                        if (localStorage.getItem('username') != null) {
                            this.username = localStorage.getItem('username')
                        } else {
                            this.$router.push('/login')
                        }
                    }
                },
            }
</script>

<style scoped>
</style>