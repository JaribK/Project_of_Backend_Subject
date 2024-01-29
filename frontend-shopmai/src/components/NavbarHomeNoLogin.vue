<script setup>
</script>

<template>
    <div id="Navbar">
        <div id="brand" >
            <router-link to="/" class="flex justify-center items-center space-x-4">
                <img id="brand-img" src="../assets/pepsi.png">
                <div id="brand-name">ShopMaiUp</div>
            </router-link>
        </div>
        <div id="menu">
            <a @click="ifclickInthisPage" class="cursor-pointer">
                <div id="menu01">รายการสินค้า</div>
            </a>
            <a @click="ifclickInthisPage" class="cursor-pointer">
                <div id="menu02">ข้อเสนอแนะ</div>
            </a>
        </div>
        <div id="crepost">
            <button class="btn btn-accent w-full" @click="ifclickInthisPage" >
                <img id="img-btn" src="../assets/plus0.png" alt="">
                <div id="text-btn">ฝากขาย</div>
            </button>
        </div>
        <div id="profile">
            <router-link to='/login'>
                <button class="btn btn-secondary text-white">เข้าสู่ระบบ</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Swal from "sweetalert2";
    export default {
        data () {
            return {
            }
        },
        methods: {
            ifclickInthisPage() {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด!",
                    text: "กรุณาเข้าสู่ระบบก่อน!",
                });                
            },
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
    
    #btn-login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 50%;
        border-radius: 5px;
        background-color: #1D1F2B;;
        color: #fff;
        cursor: pointer;
    }

    #pro-pic {
        height: 48px;
        width: 48px;
        border-radius: 50%;
    }

</style>