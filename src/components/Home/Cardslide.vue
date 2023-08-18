

<template>
    <div class="row carSlide">
        <div class="home__five-img  g-0">
            <!-- <img :src="images[0].link" alt="portfolio" class="img__default" /> -->
						<CardSlider :images="images" />
        </div>
        <div class="carSlide__text-content">
            <div class="carSlide__data">
							<div class="carSlide__box-hero">
                <CardBullet :bullet="type" />
                <p class="carSlide__title">
                    {{ name }}
                </p>
            </div>
            <div class="carSlide__info">
                <span class="carSlide__info-text">{{ brand }}</span>
                <span class="carSlide__info-text">{{ model }}</span>
                <span class="carSlide__info-text">{{ code }}</span>
						</div>
            <!-- <p class="turn-card-text-small text-start">{{subtitle}}</p> -->
            <div class="carSlide__prices">
							<span class="carSlide__prices-text-price">
								{{ useformatPrice(priceMax) }}
							</span>
							<span class="carSlide__prices-text-sale">
								{{ useformatPrice(priceMax) }}
							</span>
                
            </div>
						</div>
						<div class="carSlide__cart">
							<icon name="ri:shopping-cart-2-fill" class="carSlide__icon" />
						</div>
        </div>
    </div>
</template>
<script lang="ts" setup>

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
		priceMax: number;
		priceSale?: number
		isQuote?: string;
		images: arrayImages[];
}>();



</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.carSlide {
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: auto;
    border: 0.5px solid #ffffff;
    flex-direction: column;
    
    /* Note: backdrop-filter has minimal browser support */
    margin: 0;
    padding: 0;
    gap: 24px;


    &__text-content {
        display: flex;
        
    }
    &__data {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
		&__cart{
			@include flex(center, false, flex-end);
			
		}
		&__icon{
			color: #1A1A1A;
			margin: 0;
			border: 1px solid #1a1a1a31;
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

    
}


</style>
