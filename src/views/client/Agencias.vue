/* eslint-disable */
<template>

  <main class="agency">
    <article class="agency__hero">
      <h1 class="agency__hero-title">Nuestras agencias</h1>
      <div class="agency__hero-box-btn">
        <button class="agency__hero-btn" @click="geolocation">
          Usar mi ubicación actual
        </button>
      </div>
    </article>
    <div ref="mapDiv" class="agency__map" id="map"></div>
    <article class="agency__card slide">
      <h2 class="agency__card-title">Agencias</h2>
      <CarouselHome :cardContent="agencies" :type="'agency'" :active="agencies_active" />
    </article>
  </main>



</template>

<script>
/* eslint-disable no-undef */
import { onMounted, ref, onUnmounted } from "vue";


import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader";
import ApiService from "@/core/services/ApiService";
import CarouselHome from "@/views/client/components/CarouselHome.vue";
import "@/assets/styles/views/Agency.scss";
import market_select from "@/assets/images/icons/icon-ubication.svg";
import market from "@/assets/images/icons/icon-ubication-select.svg";

const API_KEY = "AIzaSyACDXm5WBEngJZHLoEiSzzYCdlkg3THQmI";

export default {
  name: "Agencias",
  components: {
    CarouselHome
  },
  setup() {

    const mapDiv = ref(null);
    const loader = new Loader({ apiKey: API_KEY });
    const map = ref();
    const agencies = ref([]);
    const agencies_active = ref([]);
    const orderAgencies = ref([]);


    const getAgencies = async () => {
      const url = "/api/vehicles/business-unitss";
      try {
        const { data } = await ApiService.get(url);
        if (data.success) {
          if (data.data.length > 0) {
            data.data.forEach(agency => {
              if (agency.latitude != '' && agency.longitude != '') {
                newAgencies.push(agency);
              }
            });
          }
        }
        agencies.value = newAgencies;
      } catch (response) {
        console.error(response, "aqui");
        agencies.value = [
          {
            "id": 6,
            "name": "Renault Américas",
            "address": "domicilio conocido",
            "phone": null,
            "facebook_page": null,
            "instagram_page": null,
            "twitter_page": null,
            "latitude": 19.5464909,
            "longitude": -99.1998606,
            "icon": null,
            "vehicles": 31
          },
          {
            "id": 5,
            "name": "Kia Corregidora",
            "address": "domicilio conocido",
            "phone": null,
            "facebook_page": null,
            "instagram_page": null,
            "twitter_page": null,
            "latitude": 19.2009271,
            "longitude": -99.3521166,
            "icon": null,
            "vehicles": 19
          },
          {
            "id": 1,
            "name": "Audi Galerías",
            "address": "domicilio conocido",
            "phone": null,
            "facebook_page": null,
            "instagram_page": null,
            "twitter_page": null,
            "latitude": 19.0401541,
            "longitude": -98.3364924,
            "icon": null,
            "vehicles": 11
          },
          {
            "id": 3,
            "name": "Honda Gonzalez Gallo",
            "address": "domicilio conocido",
            "phone": null,
            "facebook_page": null,
            "instagram_page": null,
            "twitter_page": null,
            "latitude": 20.6738686,
            "longitude": -103.3704326,
            "icon": null,
            "vehicles": 11
          },
          {
            "id": 2,
            "name": "Honda Galerias",
            "address": "domicilio conocido",
            "phone": null,
            "facebook_page": null,
            "instagram_page": null,
            "twitter_page": null,
            "latitude": 21.025147,
            "longitude": -101.2753897,
            "icon": null,
            "vehicles": 8
          },
          {
            "id": 4,
            "name": "Kia Altaria",
            "address": "domicilio conocido",
            "phone": null,
            "facebook_page": null,
            "instagram_page": null,
            "twitter_page": null,
            "latitude": 19.1539275,
            "longitude": -103.0217916,
            "icon": null,
            "vehicles": 7
          },
          {
            "id": 7,
            "name": "Acura",
            "address": "domicilio conocido",
            "phone": null,
            "facebook_page": null,
            "instagram_page": null,
            "twitter_page": null,
            "latitude": 19.2401254,
            "longitude": -103.7636272,
            "icon": null,
            "vehicles": 3
          }
        ];
      }
    };

    onMounted(async () => {

      await loader.load();
      map.value = new google.maps.Map(mapDiv.value, {
        center: { lat: 20.724671, lng: -103.3471888 },
        zoom: 5,
      });

      await getAgencies();
      

      agencies.value.forEach((agency) => {
        if (agency.latitude && agency.longitude) {
          const marker = new google.maps.Marker({
            position: {
              lat: parseFloat(agency.latitude),
              lng: parseFloat(agency.longitude),
            },
            title: agency.name,
            map: map.value,
            icon: {
              scaledSize: new google.maps.Size(32, 32),
              url: market,
            },
          });

          marker.addListener("click", function () {
            const logoMarker = this.icon.url;
            const agencyActive = this.title;

            if (logoMarker == market) {
              this.setIcon({
                scaledSize: new google.maps.Size(32, 32),
                url: market_select,
              });
              agencies_active.value.unshift(agencyActive);
            } else {
              this.setIcon({
                scaledSize: new google.maps.Size(32, 32),
                url: market,
              });
              agencies_active.value = agencies_active.value.filter(
                (agency) => agency != agencyActive
              );
            }
            const agencies_selected = agencies.value.filter((agency) => agencies_active.value.includes(agency.name));
            const agencies_not_selected = agencies.value.filter((agency) => !agencies_active.value.includes(agency.name));
            agencies.value = [...agencies_selected, ...agencies_not_selected];
          });

          //   marker.addListener("mouseout", function() {
          //     infowindow.close();
          //   });
        }
      });
    });
    const geolocation = () => {
      navigator.geolocation.getCurrentPosition(geoposOK, geoposFail);
    }

    const geoposOK = async (position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      map.value.setCenter({ lat: latitude, lng: longitude });
      map.value.setZoom(10);
    };
    const geoposFail = (error) => {
      console.log(error);
      checkUbication.value = false;
    };

    return { mapDiv, geolocation, agencies, agencies_active, orderAgencies };
  },
};
</script>

<style lang="scss" scoped>

</style>
