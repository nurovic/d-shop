<template lang="">
    <div class="h-[300px]  border-2 rounded-[15px]">   
        <router-link 
        :to="`/product/${props.item.id}`"
        >
        <div class="h-2/3">
            <img 
            :src="props.item.thumbnail" class="object-cover rounded-[15px] h-full w-full" alt="">
        </div>
        <div class="h-1/3 flex flex-col justify-between px-4 py-2">
            <div class="font-[700] text-[20px]">{{props.item.title}}</div>
            <div class="flex justify-between">
                <div class="font-[700] text-[18px] text-gray-500">{{props.item.price.toLocaleString('tr')}} ₺</div>
                <div
                @click.prevent="Add"
                class="border-2 hover:bg-orange-500 hover:text-white border-orange-200 cursor-pointer px-4 bg-orange-300 text-white rounded-[8px]"
                >Sepete Ekle</div>
            </div>
        </div></router-link>
    </div>
</template>
<script setup>

const props = defineProps({
    item: {},
});

</script>
<style lang="">
    
</style>