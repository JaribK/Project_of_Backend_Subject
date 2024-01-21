<script setup>
    document.title = 'Register | ShopMaiUP'
</script>

<template>
    <div class="bg-[#1D1F2B] min-h-screen grid place-items-center">
        <div id="box" class="w-[900px] h-[600px] flex bg-[#fff] rounded-[28px] overflow-hidden">
            <div id="left" class="h-full w-[65%]">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/890d1d59-2f1f-458f-850d-bbfe4c88fb26/dfh1cg7-3d4f59ab-9873-4555-b040-820256b5dfd8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5MGQxZDU5LTJmMWYtNDU4Zi04NTBkLWJiZmU0Yzg4ZmIyNlwvZGZoMWNnNy0zZDRmNTlhYi05ODczLTQ1NTUtYjA0MC04MjAyNTZiNWRmZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WfEM8JHNPcTsyBaxmr3kCRCtCwObFiXuXrcsTckwfRY" alt="" class="h-full object-cover">
            </div>
            <div id="right" class="grid place-items-center w-[35%]">
                <form class="grid grid-cols-1 w-[80%] space-y-3">
                    <h2 id="title-login" class="text-center text-[32px] font-bold pb-2">สมัครสมาชิก</h2>
                    <input v-model="firstname" type="firstname" id="firstname" placeholder="ชื่อจริง" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    <input v-model="lastname" type="lastname" id="lastname" placeholder="นามสกุล" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    <input v-model="username" type="text" id="username" placeholder="ชื่อผู้ใช้" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    <input v-model="email" type="email" id="email" placeholder="อีเมล" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    <input v-model="password" type="password" id="password" placeholder="รหัสผ่าน" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    <input v-model="confirmPassword" type="password" id="confirm-password" placeholder="ยืนยันรหัสผ่าน" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    
                    <button type="submit" class="btn bg-[#3668A7] rounded-[20px] text-white pt-2" @click="register">สมัครสมาชิก</button>
                    <router-link to="/login" class="text-center pt-8 underline">มีบัญชีอยู่แล้ว ?</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Swal from "sweetalert2";

    const host = 'http://127.0.0.1:8888/'

    export default {
        name: 'RegisterPage',
        data() {
            return {
                firstname: '',
                lastname: '',
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
                error: ''
            }
        },
        methods : {
            async register() {
                try {
                        await axios.post(host + 'api/users/', {
                            firstname: this.firstname,
                            lastname: this.lastname,
                            email: this.email,
                            username: this.username,
                            password: this.password,
                        }).then((res) => {
                            Swal.fire({
                                title: 'สมัครสมาชิกสำเร็จ',
                                icon: 'success'
                            })
                            
                            this.$router.push('/login')
                        }).catch(async (error) => {
                            Swal.fire({
                                title: 'สมัครสมาชิกไม่สำเร็จ',
                                icon: 'error'
                            })
                            console.error(error);
                        })
                            console.log(res.data);
                    }
                 catch (err) {
                    console.log(err.response.data.message);
                    this.error = err.response.data.message;
                }
            },
        }
    }
</script>

<style scoped>
</style>