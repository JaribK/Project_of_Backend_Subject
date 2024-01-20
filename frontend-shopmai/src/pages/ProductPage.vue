<script setup>
import Navbar from '../components/NavbarNoneSelect.vue'
import IconThreeDotsVue from '../components/icons/IconThreeDots.vue';

document.title = 'Product | ShopMaiUP'
</script>

<template>
    <div>
        <Navbar />
        <div class="bg-[#1D1F2B] min-h-screen">
            <div class="grid place-items-center">
                <div class="w-4/5 grid place-items-center">
                    <div class="flex bg-white w-[1106px] h-[656px] mt-16 rounded-[28px] overflow-hidden shadow-lg shadow-black">
                        <div class="w-[450px] h-full flex flex-col ">
                            <div class="w-[450px] h-[450px] bg-[#252837] grid place-items-center overflow-hidden">
                                <img :src="product.image" alt="product_image" class="h-full object-cover">
                            </div>
                            <div class="w-full h-[calc(656px-450px)] border-r-2 border-[#252837] p-4 space-y-2">
                                <h2 class="text-[31px] font-bold">ช่องทางการติดต่อ</h2>
                                <div class="flex flex-col space-y-4">
                                    <div class="flex items-center space-x-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" class="h-[41px]">
                                        <p class="text-[20px]">facebook-contact</p>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <img src="https://cdn.iconscout.com/icon/free/png-512/line-1693569-1442610.png" class="h-[41px]">
                                        <p class="text-[20px]">line-contact</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-8">
                            <div class="w-full border-b-2 border-[#252837] grid grid-cols-[90%_10%]">
                                <h2 class="text-[45px] font-bold">{{ product.title }}</h2>
                                
                                <IconThreeDotsVue class="justify-self-end self-center translate-y-[-8px]"/>
                            </div>
                            <div class="h-full grid grid-rows-[45%_55%]">
                                <div class="h-full mt-16">
                                    <h2 class="text-[40px] font-bold">ราคา {{ product.price }} บาท</h2>
                                    <h2 class="text-[22px]">เหลือ {{ product.amount }} ชิ้น</h2>
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
    import posts from './posts.json';
    export default {
        name: "HomePage",
        data() {
            return {
                product: "",
                id:""
            }
                },
                async created() {
                    this.id = this.$route.params.id
                    this.product = posts[this.id - 1]
                    console.log(this.product)
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