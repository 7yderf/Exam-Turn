

<template>
    <div class="row carSlide" :data-grid="isGird">

        <div class="home__five-img  g-0" :data-grid="isGird">
            <!-- <img :src="images[0].link" alt="portfolio" class="img__default" /> -->
						<CardSlider :images="images" />
        </div>

        <div class="carSlide__text-content" :data-grid="isGird">
            <div class="carSlide__data" :data-grid="isGird">
							<div class="carSlide__box-hero">
                <CardBullet :bullet="type" />
                <p class="carSlide__title">
                    {{ name }}
                </p>
            </div>
            <div class="carSlide__info">
                <span class="carSlide__info-text">{{ brand }}</span>
								<Teleport v-if="on_Mounted" :disabled="isGird" :to="`#column-${index}`">
									<span class="carSlide__info-text">{{ model }}</span>
                	<span class="carSlide__info-text" v-if="!(type == 'Usado')">{{ code }}</span>
								</Teleport>
                
						</div>
            <!-- <p class="turn-card-text-small text-start">{{subtitle}}</p> -->
            <div class="carSlide__prices">
							<span class="carSlide__prices-text-price" v-if="priceSale">
								{{ useformatPrice(priceMax) }}
							</span>
							<span class="carSlide__prices-text-sale">
								{{ useformatPrice(priceMax) }}
							</span>
                
            </div>
						</div>
						<div class="carSlide__cart">
							<Teleport v-if="on_Mounted" :disabled="isGird" :to="`#column-${index}`">
								<button class="carSlide__btn-box">
									<icon name="ri:shopping-cart-2-fill" class="carSlide__icon" />
								</button>
							</Teleport>
							
							<div :id="`column-${index}`"></div>
						</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const on_Mounted = ref<boolean>(false);

import { defineProps } from "vue";
type arrayImages = {
		link: string;
		Type: string;
};


const props = defineProps<{
    sale?: {
			type: string;
			default: "";
		}
		type: string;
		name: string;
		brand: string;
		model: string;
		code: string;
		priceMax?: number;
		priceSale?: number
		isQuote?: string;
		images: arrayImages[];
		isGird?: boolean;
		index?: number;
}>();

onMounted(async () => {
		on_Mounted.value = true;
});

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.carSlide {
    align-items: center;
    width: 100%;
    margin: auto;
    border: 0.5px solid #ffffff;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 24px;
		&[data-grid='false']{
			flex-direction: row;
			gap: 0;
			align-items: stretch;
			}

	.home__five-img{
		&[data-grid='false']{
		width: 300px;
		height: 250px;
	 	}
	}
    &__text-content {
        display: flex;
				&[data-grid='false']{
					width:100%;
					max-width: 350px;
					@include flex(flex-start, 8px);
					align-items: stretch;
				 }
        
    }
    &__data {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
				&[data-grid='false']{
					height: 100%;
					gap: 20px;
				}
    }
		&__cart{
			@include flex(center, false, flex-end);
			
		}
		&__btn-box{
			@include button(outline);
    gap: 0px;
    margin: auto;
    flex-grow: 1;
    font-size: 1.8rem;
		margin: 0;
		}
		&__icon{
			color: var(--text-color);;
			margin: 0;
			padding: 3px;
		}

    &__box-hero {
        @include flex(center, 8px, flex-start);
       flex-direction: column;
        @include for-size(tablet-portrait) {
            min-height: 50px;
        }
    }

    &__title {
      font-weight: 700;  
    }

    &__info{
			@include flex(flex-start, 8px);
			flex-wrap: wrap;
		}
		&__info-text{
			font-size: 12px;
			&::before{
				content: "•";
				margin-right: 8px;
			}
			&:nth-child(1){
				&::before{
					content: "";
					margin-right: 0px;
				}
			}
		}

		&__prices{
			@include flex(flex-start, 8px);
		}
		&__prices-text-price{
			font-size: 10px;
			color: var(--red-color);
			text-decoration: line-through;
		}
		&__prices-text-sale{
			font-size: 14px;
			font-weight: 500;
			&::before{
				content: "Ahora";
				margin-right: 4px;
			}
			&::after{
				content: "MXN";
				margin-left: 4px;
			}
		}

		@include for-size(tablet-landscape) {
			.home__five-img > .swiper.slider-images > .swiper-wrapper .swiper-slide{
		height: 200px;
		}
		}
    
}


</style>
