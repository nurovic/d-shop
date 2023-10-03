<template lang="">
    <div class="h-[90%] w-1/3">
        <div class="h-3/4">
            <img 
            class="h-full object-cover rounded-[12px]"
            src="@/assets/a.jpeg" alt="">
        </div>

        <div class="mt-8 absolute flex items-center">
            <img src="@/assets/icons/leftarrow.svg" class="h-12 w-12" alt="">
            <div
            v-for="a in 4"
            class="h-24 w-24 mr-[11px]">
            <img class="h-24 w-24 rounded-[15px] object-cover" src="@/assets/a.jpeg" alt="">
        </div>
        <img src="@/assets/icons/rightarrow.svg" class="h-12 w-12" alt="">
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="">
    
</style>