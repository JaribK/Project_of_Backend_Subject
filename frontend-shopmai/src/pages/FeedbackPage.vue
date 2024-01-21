<script setup>
    import Navbar from "../components/NavbarFeedback.vue"
</script>

<template>
    <div class="bg-[#1D1F2B] min-h-screen">
        <Navbar />
        <div class="grid place-items-center">
            <h1 class="text-white text-[32px] mt-[80px] mb-8">อยากเสนออะไรกับเรา ?</h1>
            <div class="w-[718px] h-[674px] bg-[#303346] flex flex-col items-center rounded-[28px] drop-shadow-lg p-8">
                <form class="grid grid-cols-1 w-full space-y-4">
                    <div class="space-y-2">
                        <label class="text-[24px] text-white">หัวข้อ</label>
                        <input type="text" placeholder="หัวข้อเรื่องของคุณ..." v-model="title" class="input input-bordered w-full" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-[24px] text-white">รายละเอียด</label>
                        <textarea placeholder="รายละเอียด..." v-model="description" rows="15" class="input input-bordered w-full h-fit pt-4"></textarea>
                    </div>
                    <button type="button" class="btn btn-success w-[212px] h-[48px] text-white justify-self-center" @click="addFeedback">ส่ง</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from "sweetalert2";
const host = 'http://127.0.0.1:8888/';

    export default {
        name: "FeedbackPage",
        data() {
            return {
                title: "",
                description:"",
                feedbacks: []
            };
        },
        methods: {
            async addFeedback() {
                try {
                    await axios.post(host + 'api/feedbacks/', {
                        title: this.title,
                        description: this.description
                    }).then((res) => {
                        Swal.fire({
                            title: 'ส่งข้อเสนอแนะสำเร็จ',
                            icon: 'success'
                        })
                        
                        this.title = "";
                        this.description = "";
                    }).catch((error) => {
                        Swal.fire({
                            title: 'ส่งข้อเสนอแนะไม่สำเร็จ',
                            icon: 'error'
                        })
                        console.error(error);
                    })
                    console.log(this.title)
                    console.log(this.description)
                } catch (error) {
                    console.error(error);

                }
            }
        }
    }
</script>

<style>

</style>