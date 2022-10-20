<template>
  <div class="row">
    <div class="col-md-8">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="[image.cover == 1 ? 'active' : '']"
            v-for="(image, index) in images"
            :key="index"
          >
            <img :alt="image.Name" class="d-block w-100" v-bind:src="`data:image/${image.Ext};base64,${ image.Image }`" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          data-bs-target="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"
            ><span class="customIcon" aria-hidden="true">&lt;</span></span
          >
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          data-bs-target="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"
            ><span class="customIcon">></span></span
          >
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row mt-2">
        <div
          class="col-md-6 mt-2"
          v-for="(image, index) in images"
          :key="index"
        >
          <img :alt="image.Name"
            class="d-block w-100 bora5"
            :class="
              imgChecked == 'checkImg' + index.toString()
                ? 'selectedBorder'
                : ''
            "
            v-bind:src="`data:image/${image.Ext};base64,${ image.Image }`"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GalleryDetail",
  props: {
    images: Array,
  },
};
</script>
<style lang="scss">
.preview {
  background-color: #f5f8fa !important;
}

.carousel-inner,
.bora5 {
  border-radius: 5px;
}

.carousel-control-prev,
.carousel-control-next {
  height: 80%;
  opacity: 1 !important;
}

.carousel {
  border: 1px solid #F5F5F5;
  border-radius: 5px;
}

.selectedBorder {
  border: 1px solid #D93E41;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  border-radius: 25px;
  background-color: white;
}

.customIcon {
  color: #263238;
  font-size: 19px;
}
</style>
