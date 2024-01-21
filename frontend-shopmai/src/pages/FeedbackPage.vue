<script setup>
    import Navbar from "../components/NavbarFeedback.vue"

    document.title = 'Feedback | ShopMaiUP'
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
                        <input type="text" placeholder="หัวข้อเรื่องของคุณ..." class="input input-bordered w-full" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-[24px] text-white">รายละเอียด</label>
                        <textarea placeholder="รายละเอียด..." rows="15" class="input input-bordered w-full h-fit pt-4"></textarea>
                    </div>
                    <button class="btn btn-success w-[212px] h-[48px] text-white justify-self-center">ส่ง</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FeedbackPage",
        data() {
            return {
                title: "",
                description:"",
            };
        },
    }
</script>

<style>

</style>