<script setup>
    document.title = 'Login | ShopMaiUP'
</script>

<template>
    <div class="bg-[#1D1F2B] min-h-screen grid place-items-center">
        <div id="box" class="w-[900px] h-[600px] flex bg-[#fff] rounded-[28px] overflow-hidden">
            <div id="left" class="h-full w-[65%]">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/890d1d59-2f1f-458f-850d-bbfe4c88fb26/dfh1cg7-3d4f59ab-9873-4555-b040-820256b5dfd8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5MGQxZDU5LTJmMWYtNDU4Zi04NTBkLWJiZmU0Yzg4ZmIyNlwvZGZoMWNnNy0zZDRmNTlhYi05ODczLTQ1NTUtYjA0MC04MjAyNTZiNWRmZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WfEM8JHNPcTsyBaxmr3kCRCtCwObFiXuXrcsTckwfRY" alt="" class="h-full object-cover">
            </div>
            <div id="right" class="grid place-items-center w-[35%]">
                <form class="grid grid-cols-1 w-[80%] space-y-2" @submit.prevent="login">

                    <h2 id="title-login" class="text-center text-[32px] font-bold pb-2">เข้าสู่ระบบ</h2>
                    <input type="text" v-model="username" id="username" placeholder="ชื่อผู้ใช้" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    <input type="password" v-model="password" id="password" placeholder="รหัสผ่าน" class="input input-bordered w-full max-w-xs h-fit py-1" required/>
                    <div class="form-control py-2">
                        <label class="cursor-pointer flex items-center space-x-2">
                            <input type="checkbox" id="remember" class="checkbox checkbox-sm">
                            <span class="label-text">จดจำชื่อผู้ใช้ของฉัน</span>
                        </label>
                    </div>
                    <button type="submit" class="btn bg-[#3668A7] rounded-[20px] text-white py-1">เข้าสู่ระบบ</button>
                    <router-link to="/register" class="text-center pt-8 underline underline-offset-2">ยังไม่มีบัญชีใช่หรือไม่ ?</router-link>
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
                        console.log(response.data)
                        const user = JSON.stringify(response.data.user)
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('user', user);
                        this.$router.push('/home')
                    })
                } catch (error) {
                    console.error(error);
                }

            }
        }
    }
</script>

<style scoped>
</style>