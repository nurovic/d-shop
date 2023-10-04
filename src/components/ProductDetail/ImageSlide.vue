<template lang="">
    <div class="h-[90%] w-1/3">
        <div class="h-3/4">
            <img 
            class="h-full object-cover rounded-[12px]"
            :src="selectedPhoto" alt="">
        </div>
        <div class="mt-8 absolute flex items-center">
            <img 
            @click="handleArrowLeft"
            src="@/assets/icons/leftarrow.svg" class="h-12 w-12 cursor-pointer" alt="">
            <div
            v-for="(photo, index) in image"
            class="h-24 w-24 mr-[11px]">
            <img 
            @click="selectPhoto(photo)"
            class="h-24 w-24 rounded-[15px] cursor-pointer object-cover" 
            :src="photo" alt="">
        </div>
        <img 
        @click="handleArrowRight"
        src="@/assets/icons/rightarrow.svg" class="h-12 w-12 cursor-pointer" alt="">
        </div>
    </div>
</template>
<script setup>
import {ref, computed} from 'vue'
import store from '../../store'
const directionArrow = ref (0)


const image = computed(() => 
    {
    const imageList = store?.state?.product?.productDetail?.data.images
    const responseImage =  imageList?.slice(0 + directionArrow.value,  4 + directionArrow.value )
    if(responseImage.length != 4){
        return imageList.slice(-4)
    }
        return responseImage
    })
const selectedPhoto = ref(store?.state?.product?.productDetail?.data.images[0])

const selectPhoto = (photoId) => {
    selectedPhoto.value = photoId
}

const handleArrowRight = () => {
  if (directionArrow.value > store?.state?.product?.productDetail?.data.images.length - 4) {
    return
  }
  directionArrow.value += 4;  
}

const handleArrowLeft = () =>  {
  if (directionArrow.value == 0) return;
  directionArrow.value -= 4;
}

</script>
<style lang="">
    
</style>