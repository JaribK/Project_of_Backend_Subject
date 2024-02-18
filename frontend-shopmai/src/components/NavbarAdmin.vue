<script setup>
import Logo from './icons/Logo.vue';

</script>

<template>
    <div id="Navbar">
        <div id="brand" class="h-full flex py-2">
            <router-link to="/home" class="flex justify-center items-center h-full">
                <Logo class="h-full"/>
            </router-link>
        </div>
        <div id="menu">
            <router-link to="/home">
                <div id="menu01">รายการสินค้า</div>
            </router-link>
            <router-link to="/feedback">
                <div id="menu02">ข้อเสนอแนะ</div>
            </router-link>
            <router-link to="/admin-manage">
                <div id="menu03">จัดการโพสต์</div>
            </router-link>
        </div>
        <div id="crepost">
            <router-link to="/create-post">
                <button class="btn btn-accent w-full">
                    <img id="img-btn" src="../assets/plus0.png" alt="">
                    <div id="text-btn">ฝากขาย</div>
                </button>
            </router-link> 
        </div>
        <div id="profile">
            <details class="dropdown dropdown-end ">
                <summary class="m-1 avatar cursor-pointer">
                    <img id="pro-pic" :src="user_profile">
                </summary>
                <ul class="dropdown-content z-[1] menu shadow bg-accent rounded-box w-52 text-white outline outline-2 outline-slate-600 mt-2">
                    <router-link to="/profile"> 
                        <li class="text-blue-400 font-bold hover:bg-slate-700 rounded-lg"><a>โปรไฟล์ของคุณ</a></li>
                    </router-link>
                    <li class="text-red-500 font-bold hover:bg-slate-700 rounded-lg" @click="logout_button"><a>ออกจากระบบ</a></li>
                </ul>
            </details>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';


    export default {
        data () {
            return {
                user_profile: '',
            }
        },
        mounted() {
            this.getUserProile();
            this.checkUserisroleAdmin();
        },
        methods : {
            logout_button() {
                Swal.fire({
                    title: "ต้องการออกจากระบบอย่างงั้นรึ ?",
                    icon: "warning",
                    showCancelButton: true,
                    cancelButtonText: "ยกเลิก",
                    confirmButtonText: 'แน่นอน'               
                }).then((result) => {
                    
                    if (result.isConfirmed) {
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                        this.$router.push('/login');
                    }

                })
            },
            getUserProile() {
                const profile = localStorage.getItem('profile');
                this.user_profile = profile
            },
            checkUserisroleAdmin() {
                const user = localStorage.getItem('user');
                const user_json = JSON.parse(user);
                if (user_json.is_staff != true) {
                    this.$router.push('/home')
                }
            }
        }
    }
</script>

<style scoped>
    #Navbar {
        display: flex;
        align-items: center;
        height: 80px;
        background-color: #303346;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        width: 100%;
    }

    #brand {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        height: 80px;
        width: 20%;
    }

    #menu {
        display: flex;
        height: 80px;
        width: 60%;
    }

    #menu01 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        height: 80px;
        width: 100%;
        padding: 0 20px;
    }

    #menu01:hover {
        background-color: #222431;
    }

    #menu02 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        height: 80px;
        width: 100%;
        padding: 0 20px;
    }

    #menu02:hover {
        background-color: #222431;
    }

    #menu03 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        height: 80px;
        width: 100%;
        padding: 0 20px;
        background-color: #222431;
    }

    #menu03:hover {
        background-color: #222431;
    }

    #menu a {
        text-decoration: none;
    }

    #crepost {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 10%;
    }

    #btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 100%;
        border-radius: 5px;
        background-color: #1D1F2B;;
        cursor: pointer;
    }

    #btn:hover {
        background-color: #222431;
    }

    #img-btn {
        height: 20px;
        width: 20px;
    }

    #text-btn {
        margin-left: 5px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
    }

    #profile {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 10%;
    }

    #pro-pic {
        height: 48px;
        width: 48px;
        border-radius: 50%;
    }

</style>