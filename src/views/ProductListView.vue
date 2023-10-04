<template lang="">
    <div class="grid grid-cols-3 gap-x-20 gap-y-8 my-6 overflow-y-auto h-screen">
        <div
        v-for="item in ProductList"
        >
            <ProductCardItem 
            :item="item"
            :key="item.id"
            />
        </div>

        {{ProductList}}
    </div>
</template>
<script setup>
import { onMounted, computed} from 'vue';
import store from '@/store'

import ProductCardItem from '../components/ProductCard/ProductCardItem.vue';

const ProductList = computed(() => {
    return store.state?.product?.productList?.data?.products
})
onMounted(() => {
    store.dispatch('product/getProducts')

})
</script>
<style lang="">
    
</style>