<template>
    
    <Navbar />
        
    <div class="container-fluid overflow g-0">
        <slot />
    </div>
    <Footer/>
</template>



<script lang="ts" setup>
    import { ref, onMounted } from "vue"

    onMounted(async () => {});
    
</script>
<style lang="scss" scoped>
    .overflow {
        overflow-x: hidden;
    }
</style>