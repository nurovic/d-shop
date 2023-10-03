<template lang="">
    <div class="h-[300px]  border-2 rounded-[15px]">   
        <router-link 
        to="/product/123"
        >
        <div class="h-2/3">
            <img src="@/assets/s.jpg" class="object-cover rounded-[15px] h-full w-full" alt="">
        </div>
        <div class="h-1/3 flex flex-col justify-between px-4 py-2">
            <div class="font-[700] ">PRoduct NAme</div>
            <div class="flex justify-between">
                <div class="font-[600] text-gray-500">22.000₺</div>
                <div
                @click.prevent="Add"
                class="border-2 border-orange-200 cursor-pointer px-4 bg-orange-300 text-white rounded-[8px]"
                >Sepete Ekle</div>
            </div>
        </div></router-link>
    </div>
</template>
<script setup>
const Add = () => {
    alert("hi")
}
</script>
<style lang="">
    
</style>