<script lang="ts" setup>
const route = useRoute()
console.log("🚀 ~ file: NavDirectory.vue:3 ~ route:", route)

const props = defineProps<{
    links: Array<{
        name?: string,
        url?: string,
        icon?: string,
    }>
}>();
</script>
<template>
  <div class="directory w-100">
    <NuxtLink  
      v-for="(link, index) in links"
       :key="index" 
       :to="link.url" class="directory__link">
      <icon v-if="link.icon" :name="link.icon" class="directory__icon" />
      <span class="directory__text">{{link.name}}</span>
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.directory{

  @include flex(flex-start, 8px, center);
  margin: 4rem 0 1rem;
  &__link{
    //font-size: 12px;
    color: var(--text-color);

			&::before{
				content: "/";
				margin-right: 12px;
        margin-left: 12px;
			}
      &:nth-child(1){
				&::before{
					content: "";
					margin-right: 0px;
				}
			}
    &:nth-last-child(1){
      text-transform: uppercase;
      font-weight: 500;
    }
  }
  &__icon{
    color: var(--text-color);
  }

  @media screen and (max-width: 500px){
    
      font-size: 12px;
    
  }

  @media screen and (max-width: 429px){
    &__link{
    &:nth-last-child(2){
      display: none;
    }
  }
  }
}
</style>