<script setup>
    import NavbarBase from '../components/NavbarHome.vue';
    import IconSearchBar from '../components/icons/IconSearchbar.vue';

    document.title = 'Home | ShopMaiUP'
</script>

<template>
    <div id="Home" class="bg-[#1D1F2B] w-full min-h-screen">
        <NavbarBase />
        <div id="contents" class="grid place-items-center">
            <div class="w-4/5">
                <!-- <div id="forNotLogin" class="grid place-items-center h-screen">
                    <div id="title-welcome" class="text-white">
                        ShopMaiUP
                    </div>
                </div> -->
                <div id="forLogin" class="py-8">
                    <div class="grid place-items-center space-y-2">
                        <div id="title">
                            <p class="text-white text-[32px]">รายการสินค้า</p>
                        </div>
                        <form class="w-1/2 flex">
                            <label class="w-full h-full bg-white grid grid-cols-[95%_5%] rounded-full overflow-hidden py-3">
                                <input v-model="search" type="text" class="ml-8 focus:outline-none">
                                <button class="text-black translate-y-px"><IconSearchBar/></button>
                            </label>
                        </form>
                        <div id="listproduct" class="grid grid-cols-2 pt-16 gap-8 max-lg:grid-cols-1" >
                            <div class="h-[258px] w-[520px] rounded-[28px] flex overflow-hidden shadow-lg shadow-black" v-for="d in filteredList" :key="d.postid">
                                <div class="w-[240px] bg-[#252837] h-full rounded-l-[28px]">
                                    <img :src="d.image" class="h-full object-cover">
                                </div>
                                <div class="w-[280px] h-full bg-white p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 class="text-xl font-semibold">{{ d.title}}</h3>
                                        <h4 class="text-lg">฿{{ d.price }}</h4>
                                        <p>{{ d.description }}</p>
                                    </div>
                                    <div class="w-full grid grid-cols-[65%_35%] ">
                                        <div class="h-full w-full flex items-center">
                                            <p>มีสินค้าทั้งหมด {{ d.amount }} ชิ้น</p>
                                        </div>
                                        <router-link :to="`/product/` + d.postid">
                                            <button class="btn btn-secondary h-fit ">เพิ่มเติม</button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import posts from './posts.json';
    export default {
        name: "HomePage",
        data() {
            return {
                data: posts,
                search: '',
            }
                },
                created() {
                    this.showposts()
                    this.checkedLogin()
                },
                methods: {
                    showposts() {
                        console.log(this.data)
                    }
                    ,
                    checkedLogin() {
                        if (localStorage.getItem('username') != null) {
                            this.username = localStorage.getItem('username')
                        }
                    }
                },
                computed: {
                    filteredList() {
                        return this.data.filter(post => {
                            return post.title.toLowerCase().includes(this.search.toLowerCase())
                        })

                    },
                    logout() {
                        localStorage.removeItem('username', this.username)
                        this.$router.push('/login')
                    }
                }
            }
</script>

<style scoped>
</style>
