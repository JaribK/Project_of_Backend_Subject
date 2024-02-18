<script setup>
    import Logo from '../components/icons/Logo.vue';
    document.title = 'Register | ShopMaiUP'
</script>

<template>
    <div class="bg-[#1D1F2B] min-h-screen grid place-items-center">
        <div id="box" class="w-[900px] h-[600px] flex bg-[#fff] rounded-[28px] overflow-hidden">
            <div id="left" class="h-full w-[65%] bg-[#303346] flex justify-center items-center">
                <Logo class="scale-[200%]"/>
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
                    
                    <router-link to="/login" class="justify-self-center w-full">
                        <button type="submit" class="btn bg-[#3668A7] rounded-[20px] text-white w-full" @click="register">สมัครสมาชิก</button>
                    </router-link>
                    <div class="py-4"></div>
                    <router-link to="/login" class="text-center underline">มีบัญชีอยู่แล้ว ?</router-link>
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
                        if ( 
                            this.firstname 
                            && this.lastname
                            && this.username
                            && this.email
                            && this.password
                            && this.confirmPassword
                            ) {
                                if ((this.password === this.confirmPassword)) {
                                    await axios.post(host + 'api/register', {
                                        first_name: this.firstname,
                                        last_name: this.lastname,
                                        email: this.email,
                                        username: this.username,
                                        password: this.password,
                                    }).then((response) => {
                                        this.$router.push('/login')
                                    }).catch((error) => {
                                        Swal.fire({
                                            title: 'สมัครสมาชิกไม่สำเร็จ',
                                            icon: 'error'
                                        })
                                        console.error(error);
                                    })
                                } else {
                                    Swal.fire({
                                        title: 'รหัสผ่านไม่ตรงกัน',
                                        icon: 'error'
                                    })
                                }
                        } else {
                            Swal.fire({
                                title: 'ข้อมูลไม่ครบ',
                                icon: 'error'
                            })
                        }
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