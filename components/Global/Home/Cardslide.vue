

<template>
    <div class="row carSlide">
        <div class="col-12 col-lg-6 home__five-img carSlide__left">
            <img :src="image_left" alt="portfolio" class="img__default"/>
        </div>
        <div class="col-12 col-lg-6  carSlide__rigth">
            <div class="content-leyend">
                <span class="label-leyend-logo">
                    <img :src="bullet" alt="pera-logistics" class=""/>
                    <p>{{title}}</p>
                </span>
                <img :src="icon_title" alt="arrow-up-left" class="turn-m-l-20"/>
            </div>

            <p class="home__text">
                {{ description }}
            </p>  
            
            <p class="turn-card-text-small text-start">{{subtitle}}</p>

            <div class="logos d-flex gap-2">
                <div  v-for="(logo, index) in logos" 
                    :key="index">
                    <img :src="logo" :alt="logo" class=""/>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { defineProps } from "vue";

    const active = ref(1);

   const props = defineProps<{
        image_left: string,
        bullet: string,
        title: string,
        icon_title: string,
        description: string,
        subtitle: string,
        logos: string[],
    }>();


    // watch(() => props.cardActive, (value) => {
    //     console.log("cardActive ", value);
    //     active.value = value;
    // });
    

    
</script>
<style lang="scss" scoped>
.carSlide{
    align-items: center;
    justify-content: center;
    width: 85%;
    margin: auto;
    &__rigth{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
.content-leyend{
    display: flex;
    align-items: center;
   flex-wrap: nowrap;
}
.label-leyend-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    width: 250px;
    background: rgba(26, 26, 26, 0);
    border: 1px solid #333333;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    border-radius: 500px;
    letter-spacing: 2.5px;
    font-size: 1.3rem;
    p{
    margin-bottom: 0px;
    text-transform: uppercase;
    font-weight: 100;
    }
}

@media screen and (max-width: 992px) {
    .carSlide {
        flex-direction: column;
        width: 100%;
        border: 0.5px solid #ED5A30;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(2px);
        /* Note: backdrop-filter has minimal browser support */
        padding: 16px;
        border-radius: 20px;
        gap: 24px;

    }
}
</style>
