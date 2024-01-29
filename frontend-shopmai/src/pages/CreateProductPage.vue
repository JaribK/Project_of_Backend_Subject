<script setup>
import Navbar from '../components/NavbarNoneSelect.vue'

document.title = 'CreateProduct | ShopMaiUP'
</script>

<template>
    <div id="createproduct" class="bg-[#222431] w-full min-h-screen ">
        <Navbar></Navbar>
        <div class="">
            <div id="product-content" class="grid place-items-center min-h-screen py-20">
                <div id="create-box"
                    class="w-[1106px] h-[824px] bg-[#303346] rounded-[28px] overflow-hidden grid place-items-center">
                    <div id="writen" class=" h-[764px] w-[957px] grid">
                        <div id="titlebox" class=" w-full h-[70px] border-b-2">
                            <h2 id="title" class="text-[40px] font-bold text-white ">เพิ่มข้อมูลของสินค้า</h2>
                        </div>
                        <div id="info" class=" w-full h-[650px]">
                            <div id="box-product1" class=" w-full h-[80px] grid ">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                    <h1 class="text-[22px] text-white">ระบุชื่อ</h1>
                                </div>
                                <div id="attribute-box" class="grid-2 w-full ">
                                    <div class="shadow-2xl">
                                        <input v-model="product_title" type="text" placeholder=":ชื่อสินค้า:" class="input input-bordered w-full" />
                                    </div>
                                </div>
                            </div><br>
                            <div id="box-product 2-3" class="w-full h-[80px]  flex justify-between">
                                <div id="box-product2" class=" w-[470px] h-[80px] grid">
                                    <h1 class="text-[22px] text-white">ระบุราคา</h1>
                                    <input v-model="product_price" type="number" placeholder=":ราคาสินค้า:" class="input input-bordered w-full" />
                                </div>
                                <div id="box-product3" class=" w-[470px] h-[80px] grid ">
                                    <h1 class="text-[22px] text-white">ระบุจำนวน</h1>
                                    <input v-model="product_quantity" type="number" placeholder=":จำนวนสินค้า:" class="input input-bordered w-full" />
                                </div>
                            </div><br>
                            <div id="box-product4" class=" w-full h-[80px] grid ">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                    <h1 class="text-[22px] text-white">ระบุรูปภาพ</h1>
                                </div>
                                <div id="attribute-box" class="grid-2 w-full ">
                                    <input type="file" @change="handleFileChange" ref="file" accept=".png, .jpg, .jpeg"
                                        class="w-full text-black text-lg bg-gray-100 roundend-lg file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded-lg my-1" />
                                </div>
                            </div><br>
                            <div id="box-product 5-6" class="w-full h-[80px]  flex justify-between">
                                <div id="box-product2" class=" w-[470px] h-[80px] grid">
                                    <h1 class="text-[22px] text-white">ช่องทางการติดต่อ (เฟซบุ๊ก)</h1>
                                    <input v-model="product_contact_fb" type="text" placeholder=":Facebook:" class="input input-bordered w-full" />
                                </div>
                                <div id="box-product3" class=" w-[470px] h-[80px] grid">
                                    <h1 class="text-[22px] text-white">ช่องทางการติดต่อ (ไลน์)</h1>
                                    <input v-model="product_contact_line" type="text" placeholder=":Line ID:" class="input input-bordered w-full" />
                                </div>
                            </div><br>
                            <div id="box-product7" class=" w-full h-[80px] grid ">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                    <h1 class="text-[22px] text-white">ระบุรายละเอียด</h1>
                                </div>
                                <div id="attribute-box" class="grid-2 w-full ">
                                    <div>
                                        <textarea v-model="product_des" id="message" rows="6" class="input input-bordered w-full h-fit pt-4"
                                            placeholder=":รายละเอียดสินค้า:"></textarea>
                                    </div>
                                </div>
                                <div class="flex justify-evenly pt-2">

                                    <button
                                        class="btn btn-success text-[20px] w-[173px] h-[48px] bg-[#00A711] text-white" @click="createProduct">ยืนยัน</button>


                                    <button
                                        class="btn btn-error text-[20px] w-[173px] h-[48px] bg-[#A30303]" @click="toPostPage">ยกเลิก</button>

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
import Swal from 'sweetalert2';

const host = 'http://127.0.0.1:8888/'

export default {
    data() {
        return {
            product_title: '',
            product_price: '',
            product_quantity: '',
            product_thumbnail: null,
            product_contact_fb: '',
            product_contact_line: '',
            product_des: ''
        }
    },
    methods: {
        getUserIdfromLocalStorage() {
            const user = localStorage.getItem('user')
            return JSON.parse(user).id
        },

        getProductFromPostId() {
            const id = this.$route.params.id;
            return id;
        },

        async handleFileChange() {
            this.product_thumbnail = this.$refs.file.files[0];
        },

        createProduct() {
            try {
                if (this.product_thumbnail) {
                    let fd = new FormData()
                    fd.append('title', this.product_title)
                    fd.append('description', this.product_des)
                    fd.append('price', this.product_price)
                    fd.append('quantity', this.product_quantity)
                    fd.append('img_src', this.product_thumbnail)
                    fd.append('contact_facebook', this.product_contact_fb)
                    fd.append('contact_line', this.product_contact_line)
                    fd.append('post', this.getProductFromPostId())

                    axios.post(host + "api/products/", fd, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                    }).then((res) => {
                        Swal.fire({
                            title: "ยืนยันการเพิ่มสินค้า",
                            icon: "warning",
                            showCancelButton: true,
                            cancelButtonText: "ยกเลิก",
                            confirmButtonText: 'แน่นอน',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.$router.push(`/post/${this.getProductFromPostId()}/`)
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
                    let fd = new FormData()
                    fd.append('title', this.product_title)
                    fd.append('description', this.product_des)
                    fd.append('price', this.product_price)
                    fd.append('quantity', this.product_quantity)
                    fd.append('contact_facebook', this.product_contact_fb)
                    fd.append('contact_line', this.product_contact_line)
                    fd.append('post', this.getProductFromPostId())

                    axios.post(host + "api/products/", fd, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                    }).then((res) => {
                        Swal.fire({
                            title: "ยืนยันการแก้ไขสินค้า",
                            icon: "warning",
                            showCancelButton: true,
                            cancelButtonText: "ยกเลิก",
                            confirmButtonText: 'แน่นอน'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.$router.push(`/post/${this.getProductFromPostId()}/`)
                            }
                        })
                    }).catch((error) => {
                        Swal.fire({
                            title: 'Error status 400 (Bad Request)',
                            icon: 'error'
                        })
                        console.error(error);
                    })
                }
            } catch (error) {
                console.error(error);
            }
        }

    }
}
</script>
