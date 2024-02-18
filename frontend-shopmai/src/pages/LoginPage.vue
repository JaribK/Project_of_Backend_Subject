<script setup>
    import Logo from '../components/icons/Logo.vue';

    document.title = 'Login | ShopMaiUP';
</script>

<template>
    <div class="bg-[#1D1F2B] min-h-screen grid place-items-center">
        <div id="box" class="w-[900px] h-[600px] flex bg-[#fff] rounded-[28px] overflow-hidden">
            <div id="left" class="h-full w-[65%] bg-[#303346] flex justify-center items-center">
                <Logo class="scale-[200%]"/>
            </div>
            <div id="right" class="grid place-items-center w-[35%]">
                <form class="grid grid-cols-1 w-[80%] space-y-2" @submit.prevent="login">

                    <h2 id="title-login" class="text-center text-[32px] font-bold pb-2">เข้าสู่ระบบ</h2>
                    <input type="text" v-model="username" id="username" placeholder="ชื่อผู้ใช้" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    <input type="password" v-model="password" id="password" placeholder="รหัสผ่าน" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    <div class="py-2"></div>
                    <button type="submit" class="btn bg-[#3668A7] rounded-[20px] text-white py-1">เข้าสู่ระบบ</button>
                    <div class="py-4"></div>
                    <router-link to="/register" class="text-center underline underline-offset-2">ยังไม่มีบัญชีใช่หรือไม่ ?</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

const host = 'http://127.0.0.1:8888/'

    export default {
        name: 'LoginPage',
        data () {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            async login(){
                try {
                    await axios.post(host + 'api/login', {
                        username: this.username,
                        password: this.password,
                    }).then((response) => {
                        const user = JSON.stringify(response.data.user)
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('user', user);
                        localStorage.setItem('profile', `https://placehold.jp/100/ffffff/000000/250x250.png?text=${this.username[0].toUpperCase()}`)
                        this.$router.push('/home')
                    })
                } catch (error) {
                    console.error(error);
                }

            }
        },
        mounted() {
            const token = localStorage.getItem('token')

            if (token) {
                this.$router.push('/home')
            } 
        }
    }
</script>

<style scoped>
</style>