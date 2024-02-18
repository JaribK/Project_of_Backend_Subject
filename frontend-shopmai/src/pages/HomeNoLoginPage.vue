<script setup >
import Navbar from '../components/NavbarHomeNoLogin.vue';
document.title = 'ShopMaiUP'
</script>

<template>
    <div class="bg-accent h-screen overflow-hidden">
        <Navbar />
        <div class="w-full h-full">
            <img src="https://bstats.org/images/i-need-you-to-login.jpg" class="w-full h-[80%]">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const token = localStorage.getItem('token')

        if (token) {
            this.$router.push('/home')
        }
    }
}
</script>

<style></style>