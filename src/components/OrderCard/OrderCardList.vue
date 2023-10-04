<template lang="">
    <div class="h-[80%] border-2 overflow-y-auto border-gray-100 rounded-[15px] p-4 w-2/3">
        <div 
        v-for="orderCard in OrderCardList"
        >
        <OrderCardListItem
        :orderCard="orderCard"
        :key="orderCard.id"
        />
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import OrderCardListItem from './OrderCardListItem.vue';
import store from '../../store';

const OrderCardList = computed(() => {
    return store?.state?.orderCard?.orderCardList
})
</script>
<style lang="">
    
</style>