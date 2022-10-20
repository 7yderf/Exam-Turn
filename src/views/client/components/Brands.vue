<template>
  <div class="col-xxl-7 col-xl-8 col-lg-11 col-md-12 mx-auto p-0 my-10">
    <h2 class="fw-bold fs-1 text-center py-3 px-3">Explora las mejores marcas</h2>
    <hr class="m-0" />
    <div class="col-12 p-5">
      <div class="row">
        <div
          class="col-md-6 col-lg-4 col-6 mx-auto my-2 my-md-4 d-flex align-items-center"
          v-for="(brand, index) in brands"
          :key="index"
        >
          <div
            @click="sendQuery(brand.name)"
            class="card border border-secondary w-100 py-5 px-5 px-lg-8 pointer"
          >
            <div class="row align-items-center">
              <div
                class="col-md-4 col-12 d-flex align-items-center justify-content-center"
              >
                <img
                  :src="`/media/images/brands/${brand.logo}`"
                  class="img-fluid h-45px"
                  :alt="brand.name"
                />
              </div>
              <div class="col-8 d-none d-md-block">
                <p class="mb-1 fs-5">{{ brand.name }}</p>
                <p class="mb-0 fs-sm">Desde {{ brand.minPrice }} mil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <router-link to="/catalogo" class="fs-5 link-blue text-center">
          Explora todo el catálogo
          <!-- <p class="text-center">
            <inline-svg
            class="me-3"
            src="media/images/home/masmarcas.svg"
          />  </p> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: "Brands",
  setup() {
    const router = useRouter();
    const brands = [
      {
        name: "Hyundai",
        logo: "HYUNDAI.svg",
        minPrice: "$40",
      },
      {
        name: "JAC",
        logo: "JAC.svg",
        minPrice: "$60",
      },
      {
        name: "Toyota",
        logo: "Toyota.svg",
        minPrice: "$60",
      },
      {
        name: "Volkswagen",
        logo: "VW.svg",
        minPrice: "$80",
      },
      {
        name: "Kia",
        logo: "KIA.svg",
        minPrice: "$80",
      },
      {
        name: "Suzuki",
        logo: "SUZUKI.svg",
        minPrice: "$75",
      },
    ];
    const sendQuery = (brand) => {
      let url = "/catalogo";
      if (brand) {
        url += url.includes("?") ? "&" : "?";
        url += "brand=" + brand;
        router.push(url);
      }
    };
    return {
      brands,
      sendQuery,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: transparent;

  &:hover {
    border: 1px solid #ffffff !important;
  }
}
</style>
