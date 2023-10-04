<template lang="">
    <div
    class="h-[150px] w-full flex border-2 rounded-[15px] mb-4"
    >
        <div class="w-1/5">
            <img 
            :src="orderCard.thumbnail" class="object-cover w-full h-full rounded-[15px]" alt="">
        </div>
        <!--  -->
        <div
        class="flex w-full justify-between px-4">
            <router-link 
            :to="`/product/${orderCard?.id}`"
         class='py-2 h-full flex flex-col justify-between'>
            <div class="font-[700] text-[22px]">{{orderCard.title}}</div>
            <div class="font-[700] text-gray-500">{{orderCard?.price?.toLocaleString('TR')}} ₺</div>
        </router-link>
        <!--  -->
        <div class="py-2 h-full items-center flex flex-col justify-end">
            <div class="flex border-2 rounded-full px-2 border-gray-200">
                <img
                v-if="orderCard.count === 1"
                @click="handleIncrease(orderCard.id, 0)"
                src="@/assets/icons/delete.svg" class="cursor-pointer" alt="">
                <div
                v-else
                class="cursor-pointer"
                @click="handleIncrease(orderCard.id, 0)"
                >-</div>
                <div class="mx-5 font-[700]">{{orderCard.count}}</div>
                <div
                class="cursor-pointer"
                @click="handleIncrease(orderCard.id, 1)" 
                >+</div>
            </div>
        </div>
        </div>
    </div>
</template>
<script setup>
import store from '../../store'

const props = defineProps({
    orderCard: {},
});
const handleIncrease = (productId, state) => {
    store.commit('orderCard/HANDLE_PIECE', {productId, state})
}
</script>
<style lang="">
    
</style>