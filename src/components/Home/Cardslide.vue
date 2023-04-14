

<template>
    <div class="row carSlide">
        <div class="home__five-img carSlide__left g-0">
            <img :src="image_left" alt="portfolio" class="img__default" />
        </div>
        <div class="col-12  carSlide__rigth">
            <div class="content-leyend">
                <span class="label-leyend-logo">
                    <p>{{ title }}</p>
                </span>
            </div>
            <p class="home__text carSlide__text">
                {{ description }}
            </p>
            <!-- <p class="turn-card-text-small text-start">{{subtitle}}</p> -->
            <div class="d-flex gap-3 flex-wrap my-5">
                <button v-for="(bullet, index) in bullets" :key="index" class="carSlide__bullets">{{ bullet }}</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { defineProps } from "vue";

    const active = ref(1);

   const props = defineProps<{
        image_left: string,
       
        title: string,
        
        description: string,
        subtitle: string,
        bullets: string[],
    }>();


    // watch(() => props.cardActive, (value) => {
    //     console.log("cardActive ", value);
    //     active.value = value;
    // });
    

    
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.carSlide{
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: auto;
    border: 0.5px solid #ffffff;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    /* Note: backdrop-filter has minimal browser support */
    margin: 0;
    padding: 0;
    border-radius: 20px;
    gap: 24px;

    &__text{
        @include text(1.8rem, lighter, 3.2rem, left);
        color: #FFF;
        flex-grow: 1;
    }
    &__rigth{
        display: flex;
        flex-direction: column;
        
        flex-grow: 1;
        padding: 0 32px;
    }
    &__bullets{
        @include button(bullet);
        @include text(1.3rem, 400, 2rem, left);
        flex: wrap;
        width: max-content;
        padding: 8px 12px;
        border-radius: 12px; 
        height: auto
    }
    @include for-size(tablet-portrait){
        &__rigth{
            padding: 0 8px;
        }
    }
}
.content-leyend{
    display: flex;
    align-items: center;
   flex-wrap: nowrap;
   min-height: 102px;
   @include for-size(tablet-portrait){
        min-height: 50px;
    }
}
.label-leyend-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    p{
   @include text(4rem, 400, 4.6rem, left);
   max-width: 350px;
   color: #FFF;
    }
    @include for-size(tablet-portrait){
        p{
            font-size:3.2rem;
            line-height: 3.6rem;
            max-width: inherit;
        }
    }
}



</style>
