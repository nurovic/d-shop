<template lang="">
    <div class="flex">
        <div 
        v-for="link in routeNavbarList"
        :key="link.id"
        >
            <router-link
              :to="link.routeName"
              class="flex items-center mr-4 px-4 h-full transition-colors hover:bg-orange-500 hover:text-white border-2 py-2 rounded-[10px]"
              :class="{
                'bg-orange-300 border-orange-200 text-white': route.path === link.routeName
              }"

            > {{link.routeTitle}}
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const routeNavbarList = ref([
    {routeName: '/', routeTitle: 'Home', id: 1},
    {routeName: '/products', routeTitle: 'Product List', id: 2},
    {routeName: '/order-card', routeTitle: 'Order Card', id: 2},
])
</script>
<style lang="">
    
</style>