<script setup>
</script>

<template>
    <div id="Navbar">
        <div id="brand" >
            <img id="brand-img" src="../assets/pepsi.png">
            <div id="brand-name">ShopMaiUp</div>
        </div>
        <div id="menu">
            <a href="">
                <div id="menu01">รายการสินค้า</div>
            </a>
            <a href="">
                <div id="menu02">ข้อเสนอแนะ</div>
            </a>
            <a href="">
                <div id="menu03">จัดการโพส</div>
            </a>
        </div>
        <div id="crepost">
            <button id="btn">
                <img id="img-btn" src="../assets/plus0.png" alt="">
                <div id="text-btn">ฝากขาย</div>
            </button>
        </div>
        <div id="profile">
            <a href="">
                <img id="pro-pic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
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