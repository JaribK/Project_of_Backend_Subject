<script setup>
    import Navbar from '../components/NavbarBase.vue';
</script>

<template>
    <div>
        <Navbar></Navbar>
        {{ user.username }}
        <button class="btn" @click="logout">Logout</button>
    </div>
</template>

<script>
    export default {
        name: 'ProfilePage',
        data() {
            return {
                user: {
                    username: '',
                    email: '',
                    password: '',
                    role: '',
                },
                errors: [],
            }
        },
        methods : {
            logout() {
                localStorage.removeItem('username', this.username);
                this.$router.push('/login');
            },
        }
    }
</script>

<style scoped>
</style>