
<template>

  <main class="home">
    <article class="home__hero">
      <Slide />
      <div class="home__search">
      </div>
    </article>
    <article class="home__copy">
      <img :src="buyCar" alt="" class="home__copy-img">
      <div class="home__copy-box">
        <h2 class="home__copy-title">Compra un auto certificado</h2>
        <p class="home__copy-text">Revisa nuestros planes de financiamiento</p>
        <button class="home__copy-button">Ver todos los vehículos</button>
      </div>
    </article>
    <article class="home__ubication slide">
      <h2 class="home__ubication-title">Usar mi ubicación actual</h2>
      <div v-if="checkUbication && vehicles.length > 0" class="home__ubication-check">
        <button class="home__ubication-btn">Usar mi ubicación actual</button>
        <CarouselCards :vehicles="vehicles" />
        <div class="home__ubication-bottm">
          <p class="home__ubication-send">Ver todos los vehículos </p>

        </div>

      </div>
      <div v-else class="home__ubication-Check">
        <p>Mapa</p>
      </div>
    </article>
    <article class="home__copy home__copy--dark">
      <img :src="sellYourCar" alt="" class="home__copy-img">
      <div class="home__copy-box home__copy-box--drak">
        <h2 class="home__copy-title home__copy-title--dark">Vende tu auto</h2>
        <p class="home__copy-text home__copy-text--dark">Obtén una valuación en segundos</p>
        <button class="home__copy-button home__copy-button--dark">Quiero vender mi auto</button>
      </div>
    </article>
    <article class="home__security slide">
      <h2 class="home__security-title">Un movimiento seguro y garantizado</h2>
      <p class="home__security-text">Porqué comprar o vender tu auto con nosotros:</p>
      <CarouselHome :cardContent="cardContent" :type="'security'" />
    </article>
    <article class="home__agency">
      <h2 class="home__agency-title">Tú decides la entrega</h2>
      <p class="home__agency-subtitle">Ven a cualquier concesionaria de Grupo Vanguardia a recoger o estrena con
        nuestras entregas a domicilio, una experiencia que no vas a olvidar.</p>
      <p class="home__agency-subtitle">Vamos a donde estés</p>
      <div class="home__agency-box">
        <div class="home__agency-card">
          <img src="@/assets/images/home-agency1.png" alt="" class="home__agency-img">
          <p class="home__agency-txt">Entregas en agencia</p>
        </div>
        <div class="home__agency-card">
          <img src="@/assets/images/home-agency2.png" alt="" class="home__agency-img">
          <p class="home__agency-txt">Entregas a domicilio</p>
        </div>
      </div>
      <div class="home__agency-Boxbtn">
        <button class="home__agency-btn">Ver todas las agencias</button>
      </div>
    </article>
    <article class="home__client slide">
      <h2 class="home__client-title">Clientes felices</h2>
      <CarouselHome :cardContent="cardClientContent" :type="'client'" />
    </article>
  </main>
</template>
<script>
/* eslint-disable no-undef */
import { onMounted, ref, onUnmounted } from "vue";
import Slide from "@/views/client/components/Slide.vue";
import { Loader } from "@googlemaps/js-api-loader";
import CarouselCards from "@/views/client/components/CarouselCards.vue";
import CarouselHome from "@/views/client/components/CarouselHome.vue";
import { useStore } from "vuex";
import axios from "axios";
import ApiService from "@/core/services/ApiService";
import "@/assets/styles/views/Home.scss";
import Shell from "@/assets/images/icons/icon-shell.svg";
import Cart from "@/assets/images/icons/icon-cart.svg";
import Medal from "@/assets/images/icons/icon-medalla.svg";
import Ubication from "@/assets/images/icons/icon-ubication.svg";
import Client1 from "@/assets/images/client.png";
import Score1 from "@/assets/images/icons/icon-start.png";
import buyCar from "@/assets/images/clientsCart.png";
import sellYourCar from "@/assets/images/clientsBanner.png";

const API_KEY = "AIzaSyACDXm5WBEngJZHLoEiSzzYCdlkg3THQmI";


export default {
  name: "Home",
  components: {
    Slide,
    CarouselCards,
    CarouselHome
  },
  setup() {
    const store = useStore();
    const ubication = ref(null);
    const checkUbication = ref(false);
    const vehicles = ref([]);
    const cardContent = ref([]);
    const cardClientContent = ref([]);

    const loader = new Loader({ apiKey: API_KEY });

    const getVehicles = async (link = "") => {
      const url = "/api/vehicles/marketplace"
      try {
        const { data } = await ApiService.get(url);
        vehicles.value = data.data.data;
        console.log("🚀 ~ file: Home.vue ~ line 56 ~ getVehicles ~ vehicles.value ", vehicles.value)
      } catch (response) {
        console.error(response, "aqui");
      }
    };

    cardContent.value = [
      {
        img: Shell,
        title: "Tomamos tu auto a cuenta",
        text: "Si quieres estrenar"
      },
      {
        img: Cart,
        title: "Sin riesgos y con respaldo",
        text: "Somos un grupo automotriz con mas de 60 años de experiencia."
      },
      {
        img: Medal,
        title: "Garantía",
        text: "3 meses o 3,000 km en motor y transmisión."
      },
      {
        img: Medal,
        title: "Garantía",
        text: "3 meses o 3,000 km en motor y transmisión."
      }
    ];
    cardClientContent.value = [
      {
        img: Client1,
        name: "Ivan Rodriguez Palacios",
        city: "Guadalajara",
        scoreText: "4.5",
        scoreImg: Score1,
        text: "Es el primer carro que me compro y me ayudaron mucho, me atendieron muy rápido haciendo mi cita desde la página y el carro que me gusto en excelentes condiciones.",
        ubicationImg: Ubication,
        ubicationText: "A domicilio"
      },
      {
        img: Client1,
        name: "Ivan Rodriguez Palacios",
        city: "Guadalajara",
        scoreText: "4.5",
        scoreImg: Score1,
        text: "Es el primer carro que me compro y me ayudaron mucho, me atendieron muy rápido haciendo mi cita desde la página y el carro que me gusto en excelentes condiciones.",
        ubicationImg: Ubication,
        ubicationText: "A domicilio"
      },
      {
        img: Client1,
        name: "Ivan Rodriguez Palacios",
        city: "Guadalajara",
        scoreText: "4.5",
        scoreImg: Score1,
        text: "Es el primer carro que me compro y me ayudaron mucho, me atendieron muy rápido haciendo mi cita desde la página y el carro que me gusto en excelentes condiciones.",
        ubicationImg: Ubication,
        ubicationText: "A domicilio"
      },
      {
        img: Client1,
        name: "Ivan Rodriguez Palacios",
        city: "Guadalajara",
        scoreText: "4.5",
        scoreImg: Score1,
        text: "Es el primer carro que me compro y me ayudaron mucho, me atendieron muy rápido haciendo mi cita desde la página y el carro que me gusto en excelentes condiciones.",
        ubicationImg: Ubication,
        ubicationText: "A domicilio"
      }
    ]


    onMounted(async () => {
      await loader.load();
      navigator.geolocation.getCurrentPosition(geoposOK, geoposFail);
      await getVehicles();
    });


    const geoposOK = async (position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      const latlng = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      };
      const geocoder = await new google.maps.Geocoder().geocode({ location: latlng });
      ubication.value = geocoder.results[0].formatted_address;
      checkUbication.value = true;
    };
    const geoposFail = (error) => {
      console.log(error);
      checkUbication.value = false;
    };

    return {
      ubication,
      checkUbication,
      vehicles,
      cardContent,
      cardClientContent,
      buyCar,
      sellYourCar
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
