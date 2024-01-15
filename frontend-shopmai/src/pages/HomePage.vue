<script setup>
    import Navbar from '../components/NavbarBase.vue'

    document.title = 'Home | ShopMaiUP'
</script>

<template>
    <div id="Home">
        <Navbar></Navbar>
        <div id="contents" class="pt-20">

            <div id="content0">
                <div>{{ username }}</div>
            </div>
            <form >
                <button class="btn" @click="logout">Logout</button>
            </form>

            <div id="content0"></div>
            <div id="content0"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
        data() {
            return {
                username: ''
            }
                },
                created() {
                    this.checkedLogin()
                },
                methods: {
                    checkedLogin() {
                        if (localStorage.getItem('username') != null) {
                            this.username = localStorage.getItem('username')
                        } else {
                            this.$router.push('/login')
                        }
                    },
                    logout() {
                        localStorage.removeItem('username')
                        this.$router.push('/login')
                    }
                }
            }
</script>

<style scoped>
</style>
