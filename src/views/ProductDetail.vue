<template lang="">
<div
v-if="store.state?.product?.isLoading"
>
    Loading. . .
</div>

<div
v-else
    class="flex h-screen"
    >
        <ImageSlide />
        <Informaiton />
    </div>
</template>
<script setup>
import { onMounted} from 'vue';
import ImageSlide from '../components/ProductDetail/ImageSlide.vue'
import Informaiton from '../components/ProductDetail/Information.vue'
import { useRoute } from 'vue-router';
import store from '@/store'

const route = useRoute();
onMounted(() => {
    const id = route.params.id
    store.dispatch('product/getProductDetail', id)

})
</script>
<style lang="">
    
</style>