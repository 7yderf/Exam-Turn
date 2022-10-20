<template>
  <main class="detail">

    <article class="detail__detail-galery">
      <div class="detail__galery">
        <GalleryVehicle :gallery="gallery" />
      </div>
      <div class="detail__content">
        <p class="detail__content-name">{{`${vehicle.brand} ${vehicle.model}`}}</p>
        <p class="detail__content-kms">{{`${vehicle.year} - ${kmFormat(vehicle.kms)} km`}}</p>
        <p class="detail__content-price">{{`$${priceFormat(vehicle.price)}`}}</p>
        <div class="detail__content-agency">
          <p class="detail__content-ubication">Ubicación</p>
          <div class="detail__agency">
             <img src="" alt="" class="detail__agency-img">
             <p class="detail__agency-text">{{`${agency.name}`}}</p> 
          </div>
          <p class="detail__agency-ubication">{{`${agency.city}, ${agency.state}`}}</p>
          <p class="detail__agency-map">Ver mapa ></p>
        </div>
      </div>
    </article>
    <article class="detail__sumary">
      <p class="detail__sumary-title"></p>
      <div class="detail__sumary-box">
        <div class="detail__sumary-sumary" v-for="(feature, i) in Object.keys(sumary)" :key="i">
          <img :src="`img/sumary/${feature}.svg`"  alt="" class="detail__sumary-icon">
          <p class="detail__sumary-text">{{sumary[feature]}}</p>
        </div>
      </div>

    </article>

  </main>
</template>

<script>
/* eslint-disable no-undef */
import { onMounted, ref, watch } from "vue";
import GalleryVehicle from "@/views/client/components/GalleryVehicle.vue";

import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";

import Swal from "sweetalert2/dist/sweetalert2.min.js";
import axios from "axios";
import "@/assets/styles/views/Detail.scss";

export default {
  name: "Detail",
  components: {
    GalleryVehicle,

  },
  setup() {

    const vehicle = ref([]);
    const sumary = ref([]);
    const agency = ref([]);
    const gallery = ref([]);
    const vehicle_id = ref("");

    const priceFormat = (value) => {
      const val = (value / 1).toFixed(2);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const kmFormat = (value) => {
      const val = value / 1;
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const route = useRoute();

    watch(() => route.params.id, async () => {
      // await getDetail(route.params.id);
      // vehicles.value = [];
    })

    onMounted(async () => {
      vehicle_id.value = route.params.id;
      console.log("🚀 ~ file: DetalleVehiculo.vue ~ line 59 ~ onMounted ~ route.params.id", route.params.id)

      await getDetail(route.params.id);
    });

    const getDetail = async (id) => {
      try {
        const { data } = await ApiService.get("/api/vehicles/show/" + id);
        console.log("🚀 ~ file: DetalleVehiculo.vue ~ line 71 ~ getDetail ~ data", data);
        gallery.value = data.data.gallery;
        vehicle.value = data.data.vehicle;
        agency.value = data.data.agency;
        sumary.value = data.data.features;

       
      } catch (error) {
        console.log(error);
      }
    };


    return {
      priceFormat,
      kmFormat,
      vehicle,
      vehicle_id,
      gallery, 
      agency, 
      sumary
    };
  },
};
</script>
<style lang="scss" scoped>
// .el-button {
//   --el-button-active-bg-color: #0860f0;
//   --el-button-hover-bg-color: #0860f0;
//   --el-button-bg-color: #0860f0;
//   --el-button-text-color: white;

// }
.title-vehicle {
  background-color: #272a31;
  top: 63px;
  z-index: 11;
  width: 100vw;

  @media screen and (max-width: 767px) {
    top: 0;
  }

  @media screen and (max-width: 991px) and (min-width: 768px) {
    top: 50px;
  }
}

.btn-square {
  width: 50px !important;
  max-width: 100% !important;
  max-height: 100% !important;
  height: 50px !important;
  text-align: center;
  padding: 0px;
  font-size: 7px;
}

.redes {
  position: fixed;
  bottom: 5%;
  right: 12%;
  width: auto;
  z-index: 2;

  @media screen and (max-width: 991px) {
    position: relative;
    left: 0px
  }

  @media screen and (max-width: 1660px) and (min-width: 992px) {
    bottom: 5%;
    right: 25px;
  }

  @media screen and (max-width: 1920px) and (min-width: 1660px) {
    bottom: 5%;
    right: 30px;
  }

  @media screen and (max-width: 2500px) and (min-width: 1921px) {
    bottom: 5%;
    right: 5%;
  }

  @media screen and (max-width: 4000px) and (min-width: 2501px) {
    bottom: 5%;
    right: 5%;
  }
}

.back-to {

  @media screen and (max-width: 991px) {
    z-index: 10;
    left: 10%;
    top: 8%;
  }

  @media screen and (max-width: 500px) {
    z-index: 10;
    left: 5%;
    top: 8%;
  }
}
</style>
