

<template>
    <div class="card__app">
        <div class="img_device d-lg-none" v-if="img_device">
            <img :src="img_device" :alt="img_device" class=""/>
        </div>
       <div class="turn-card" :data-active="active == id">
        <div class="turn-card-body">
            <img :src="image_top" :alt="image_top" class=""/>

            <h5 class="text-primary">{{ title }}</h5>
            <p>
                {{ description }}
            </p>
            <p class="text-small">{{ subtitle }}</p>
            
            <div class="logos d-flex gap-2">
                <div  v-for="(logo, index) in logos" 
                    :key="index">
                    <img :src="logo" :alt="logo" class=""/>
                </div>
            </div>
        </div>
        </div> 
    </div>
    
</template>
<script lang="ts" setup>
    import { defineProps } from "vue";

    const active = ref(1);

   const props = defineProps<{
        img_device?: string,
        image_top: string,
        title: string,
        description: string,
        subtitle: string,
        logos: string[],
        cardActive: number,
        id: number
    }>();


    watch(() => props.cardActive, (value) => {
        console.log("cardActive ", value);
        active.value = value;
    });
    

    
</script>
