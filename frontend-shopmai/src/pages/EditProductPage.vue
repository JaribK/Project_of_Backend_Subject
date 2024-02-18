<script setup>
import Navbar from '../components/NavbarNoneSelect.vue'

document.title = 'EditProduct | ShopMaiUP'
</script>

<template>
    <div id="editproduct" class="bg-[#222431] w-full min-h-screen ">
        <Navbar></Navbar>
        <div class="">
            <div id="product-content" class="grid place-items-center min-h-screen py-20">
                <div id="create-box"
                    class="w-[1106px] h-[824px] bg-[#303346] rounded-[28px] overflow-hidden grid place-items-center">
                    <div id="writen" class=" h-[764px] w-[957px] grid">
                        <div id="titlebox" class=" w-full h-[70px] border-b-2">
                            <h2 id="title" class="text-[40px] font-bold text-white ">แก้ไขข้อมูลของสินค้า</h2>
                        </div>
                        <div id="info" class=" w-full h-[650px]">
                            <div id="box-product1" class=" w-full h-[80px] grid ">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                    <h1 class="text-[22px] text-white">ระบุชื่อ</h1>
                                </div>
                                <div id="attribute-box" class="grid-2 w-full ">
                                    <div class="shadow-2xl">
                                        <input type="text" v-model="product_title" placeholder=":ชื่อสินค้า:"
                                            class="input input-bordered w-full" />
                                    </div>
                                </div>
                            </div><br>
                            <div id="box-product 2-3" class="w-full h-[80px]  flex justify-between">
                                <div id="box-product2" class=" w-[470px] h-[80px] grid">
                                    <h1 class="text-[22px] text-white">ระบุราคา</h1>
                                    <input type="text" v-model="product_price" placeholder=":ราคาสินค้า:"
                                        class="input input-bordered w-full" />
                                </div>
                                <div id="box-product3" class=" w-[470px] h-[80px] grid ">
                                    <h1 class="text-[22px] text-white">ระบุจำนวน</h1>
                                    <input type="text" v-model="product_quantity" placeholder=":จำนวนสินค้า:"
                                        class="input input-bordered w-full" />
                                </div>
                            </div><br>
                            <div id="box-product4" class=" w-full h-[80px] grid ">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                    <h1 class="text-[22px] text-white">ระบุรูปภาพ</h1>
                                </div>
                                <div id="attribute-box" class="grid-2 w-full ">
                                    <div class="shadow-2xl">
                                        <input type="file" ref="file" accept=".png, .jpg, .jpeg" @change="handleFileChange"
                                            class="w-full text-black text-lg bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded-xl" />
                                    </div>
                                </div>
                            </div><br>
                            <div id="box-product 5-6" class="w-full h-[80px]  flex justify-between">
                                <div id="box-product2" class=" w-[470px] h-[80px] grid">
                                    <h1 class="text-[22px] text-white">ช่องทางการติดต่อ (เฟสบุ๊ก)</h1>
                                    <input type="text" v-model="product_contact_fb" placeholder=":Facebook:"
                                        class="input input-bordered w-full" />
                                </div>
                                <div id="box-product3" class=" w-[470px] h-[80px] grid">
                                    <h1 class="text-[22px] text-white">ช่องทางการติดต่อ (ไลน์)</h1>
                                    <input type="text" v-model="product_contact_line" placeholder=":Line ID:"
                                        class="input input-bordered w-full" />
                                </div>
                            </div><br>
                            <div id="box-product7" class=" w-full h-[80px] grid ">
                                <div id="attribute-text" class=" grid-1 w-[327px]">
                                    <h1 class="text-[22px] text-white">ระบุรายละเอียด</h1>
                                </div>
                                <div id="attribute-box" class="grid-2 w-full ">
                                    <div>
                                        <textarea id="message" v-model="product_des" rows="15"
                                            class="input input-bordered w-full h-[130px] pt-4"
                                            placeholder=":รายละสินค้า:"></textarea>
                                    </div>
                                </div>
                                <div class="flex justify-evenly pt-10">
                                    <button class="btn btn-success text-[20px] w-[173px] h-[48px] bg-[#00A711] text-white"
                                        @click="editProduct">ยืนยัน</button>
                                    <button class="btn btn-error text-[20px] w-[173px] h-[48px] bg-[#A30303]"
                                        @click="cancelEdit">ยกเลิก</button>
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
    name: 'EditProductPage',
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
    mounted() {
        this.handleFileChange();
        try {
            axios.get(host + `api/products/${this.$route.params.productId}`)
                .then((res) => {
                    this.product_title = res.data.title;
                    this.product_price = res.data.price;
                    this.product_quantity = res.data.quantity;
                    this.product_contact_fb = res.data.contact_facebook;
                    this.product_contact_line = res.data.contact_line;
                    this.product_des = res.data.description;
                })
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        async handleFileChange() {
            this.product_thumbnail = this.$refs.file.files[0];
        },
        editProduct() {
            try {
                if (this.product_thumbnail) {
                    const formData = new FormData();
                    formData.append('title', this.product_title);
                    formData.append('price', this.product_price);
                    formData.append('quantity', this.product_quantity);
                    formData.append('img_src', this.product_thumbnail);
                    formData.append('contact_facebook', this.product_contact_fb);
                    formData.append('contact_line', this.product_contact_line);
                    formData.append('description', this.product_des);
                    Swal.fire({
                        title: "ยืนยันการแก้ไขสินค้า",
                        icon: "warning",
                        showCancelButton: true,
                        cancelButtonText: "ยกเลิก",
                        confirmButtonText: 'แน่นอน',
                    }).then(result => {
                        if (result.isConfirmed) {
                            axios.put(host + `api/products/${this.$route.params.productId}/`, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                },
                            }).then(response => {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'แก้ไขสินค้าสำเร็จ',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                this.$router.push(`/post/${this.$route.params.id}`)
                            })
                        } else {

                        }
                    })

                } else {
                    Swal.fire({
                        title: "ยืนยันการแก้ไขสินค้า",
                        icon: "warning",
                        showCancelButton: true,
                        cancelButtonText: "ยกเลิก",
                        confirmButtonText: 'แน่นอน',
                    }).then(result => {
                        if (result.isConfirmed) {
                            axios.put(host + `api/products/${this.$route.params.productId}/`, {
                                id: this.$route.params.productId,
                                title: this.product_title,
                                price: this.product_price,
                                quantity: this.product_quantity,
                                contact_facebook: this.product_contact_fb,
                                contact_line: this.product_contact_line,
                                description: this.product_des
                            }).then(response => {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'แก้ไขสินค้าสำเร็จ',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                this.$router.push(`/post/${this.$route.params.id}`)
                            })
                        }
                    })
                }
            } catch (error) {
                console.error(error)
            }
        },

        cancelEdit() {
            this.$router.push(`/post/${this.$route.params.id}`)
        }
    },
}
</script>