<template lang="">
    <div class="h-[80%] border-2 overflow-y-auto border-gray-100 rounded-[15px] p-4 w-2/3">
        <div 
        v-for="a in 100"
        >
        <OrderCardListItem />
        </div>
    </div>
</template>
<script setup>
import OrderCardListItem from './OrderCardListItem.vue';
</script>
<style lang="">
    
</style>