<template lang="">
    <div class="h-[65%] w-2/3 ml-2 border-2 p-4 rounded-[12px]">
        <div class="font-[700] text-[35px]">{{product?.title}}</div>
        <div class="flex h-12 items-center mt-8">
            <div class="text-[25px] text-gray-500 font-[500]">{{product?.price.toLocaleString('tr')}} ₺</div>
            <div class="text-[15px] ml-2 bg-green-100 px-4 rounded-[15px] text-green-700">%{{product?.discountPercentage}} indirim</div>
        </div>
        <div class="font-[700] text-[20px] mt-6">{{product?.category}}</div>
        <div class="text-gray-500 text-[18px] font-[400] mt-3">
            {{product?.description}}
        </div>
        <div class="flex justify-end mt-12">
            <div
            @click="addToOrder(product)" 
            class="hover:bg-orange-500 hover:text-white bg-orange-300 w-64 text-[25px] text-white text-center rounded-[15px]"
            >
            Sepete Ekle
        </div>
        </div>
    </div>
</template>
<script setup>
import {ref, computed} from 'vue'
import store from '../../store'
const orderCardList = ref([])
const product = computed(() =>{
 return  store?.state?.product?.productDetail?.data
})

const addToOrder = (item) => {
    store.commit('orderCard/ADD_TO_CARD', item)
}
</script>
<style lang="">
    
</style>