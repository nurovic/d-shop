<template lang="">
    <div class="w-1/3 ml-2 border-2 border-gray-200 rounded-[15px] p-4 h-1/4">
        <div class="font-[700]">Seçilen Ürünler({{orderCalculate.productLength}})</div>
        <div class="mt-4">
            <div class="font-[700] text-gray-500">Genel Toplam: {{orderCalculate?.price?.toLocaleString('tr')}}   ₺</div>
        </div>
        <div 
        @click="handleCompleteOrder"
        class="flex justify-center hover:bg-orange-500 hover:text-white font-[800] h-12 rounded-[15px] items-center mt-12 w-full bg-orange-300 text-white ">
            Alışverişi Tamamla
        </div>
    </div>
</template>
<script setup>
import {computed }from 'vue'
import store from '../../store';
const orderCalculate = computed(() => {
    return store?.getters['orderCard/getOrderCardCal']
})

const handleCompleteOrder = () => {
    store.commit('orderCard/CLEAR_ORDER_CARD')
}
</script>
<style lang="">
    
</style>