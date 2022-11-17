<template>
  <div class="banners__form-content-prewiev" v-for="(value, key, index) in banners" :key="index"
    :data-active="value.flag === active">
    <div class="banners__form-img-box" v-if=" fileData[value.flag]?.img && value.flag === active">
      <div class="banners__form-img">
        <img :src="fileData[value.flag]?.img" alt="" class="banners__form-prewiev">
        <div class="banners__form-prewiev-data">
          <p class="class__form-prewiev-name">
            {{ fileData[value.flag]?.name }}
          </p>
          <p class="class__form-prewiev-size">
            {{ fileData[value.flag]?.size }}
          </p>

        </div>
      </div>
      <div class="banners__form-img-change" @click="changeImg(value.flag)">
        cambiar
      </div>
      <div class="banners__form-img-close" @click="closeImg(value.flag)">
        cerrar
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'

export default {
  name: "dropPreview",
  components: {
    
  },
  props: {
    banners: Object,
    active: String,
    fileData: Object,
    fileImg: String,
  },
  setup(props, { emit }) {
    



    const closeImg = (type) => {
      const imgActive = document.querySelector(`[data-close="${type}"]`);
      const closeImg = imgActive.children[0].children[1].children[0]
      closeImg.click();
    };
    const changeImg = (type) => {
      const imgActive = document.querySelector(`[data-close="${type}"]`);
      const changeImg = imgActive
      changeImg.click();
    };

    return {
      closeImg,
      changeImg,
    };
  },

};
</script>

<style scoped lang="scss">

</style>
