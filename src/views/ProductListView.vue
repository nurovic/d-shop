<template lang="">
    <div class="grid grid-cols-3 gap-x-20 gap-y-8 my-6 overflow-y-auto h-screen">
        <div
        v-for="a in 100"
        >
            <ProductCardItem />
        </div>
    </div>
</template>
<script setup>
import ProductCardItem from '../components/ProductCard/ProductCardItem.vue';
</script>
<style lang="">
    
</style>