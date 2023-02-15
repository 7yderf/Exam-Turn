<template>
    
    <GlobalNavbar />
        
    <div class="container-fluid overflow" ref="spotlight">
        <slot />
    </div>
</template>



<script lang="ts" setup>
    import { ref, onMounted } from "vue";
    const spotlight = ref<any>(null);
    const spotlight_child = ref<any>(null);

    const moveSpotlight = async (values: any) => {
        console.log("spotlight ");
    
    };

    onMounted(async () => {
    
    });
</script>
<style lang="scss" scoped>
    .overflow {
        overflow-x: hidden;
    }
</style>