<template>
  <main class="home">
    <HelloWorld />
    <article class="home__hero-top" ref="hero">
      <router-link to="/catalogo" class="home__hero-top-btn">
        Comprar un auto
      </router-link>
      <router-link
        to="/vende"
        class="home__hero-top-btn home__hero-top-btn--white"
      >
        Vender mi auto
      </router-link>
    </article>
    <article class="home__hero">
      <Slide
        :desktop="bannerDesktop"
        :mobile="bannerMobile"
        :windowSize="windowSize"
      />
      <div class="home__search">
        <Search />
      </div>
    </article>
    <div class="home__search_mobile">
      <span class="home__search_mobile_title">Busca tu vehículo</span>
      <Search />
    </div>
    <article class="home__copy">
      <div
        v-for="(banner, index) in Object.keys(bannerDesktop).filter(
          (banner) => bannerDesktop[banner].where === 'home2'
        )"
        :key="index"
        class="home__copy-box-img"
        :data-device="windowSize"
        :data-default="
          !windowSize &&
          !Object.keys(bannerMobile).filter(
            (banner) => bannerMobile[banner].where === 'home2'
          )
        "
      >
        <img
          :src="bannerDesktop[banner].banner"
          alt=""
          class="home__copy-img"
        />
        <a
          v-if="
            bannerDesktop[banner].url != 'null' &&
            bannerDesktop[banner].type == 'Image'
          "
          :href="bannerDesktop[banner].url"
          :target="bannerDesktop[banner].blank ? '_blank' : ''"
          class="home__link-banner"
        ></a>
      </div>
      <div
        v-for="(banner, index) in Object.keys(bannerMobile).filter(
          (banner) => bannerMobile[banner].where === 'home2'
        )"
        :key="index"
        class="home__copy-box-img"
        :data-device="!windowSize"
      >
        <img :src="bannerMobile[banner].banner" alt="" class="home__copy-img" />
        <a
          v-if="
            bannerMobile[banner].url != 'null' &&
            bannerMobile[banner].type == 'Image'
          "
          :href="bannerMobile[banner].url"
          :target="bannerMobile[banner].blank ? '_blank' : ''"
          class="home__link-banner"
        ></a>
      </div>
      <div class="home__copy-box">
        <h2 class="home__copy-title">Compra un auto certificado</h2>
        <p class="home__copy-text">Revisa nuestros planes de financiamiento</p>
        <router-link to="/catalogo" class="home__copy-button">
          Ver todos los vehículos
        </router-link>
      </div>
    </article>
    <article class="home__ubication slide">
      <h2 class="home__ubication-title" v-if="ubicationTitle === ''">
        Recientemente agregados
      </h2>
      <h2 class="home__ubication-title" v-else>
        {{
          ubicationTitle === "Vehículos agregados recientemente"
            ? "Recientemente agregados"
            : "Vehículos cercanos"
        }}
      </h2>
      <div class="home__ubication-check">
        <button
          class="home__ubication-btn"
          @click="geolocation"
          v-if="ubication == ''"
        >
          Usar mi ubicación actual
        </button>
        <button class="home__ubication-btn" v-else>
          {{
            `${ubication.split(",")[ubication.split(",").length - 2]}, 
          ${ubication.split(",")[ubication.split(",").length - 1]}`
          }}
        </button>
        <CarouselCards :vehicles="vehicles" />

        <div class="home__ubication-loading" v-if="vehicles.length === 0">
          <div
            class="cart__loading"
            v-for="cart in Array(4)
              .fill('')
              .map((_, i) => i)"
            :key="cart"
          >
            <div class="cart__loading-img"></div>
            <div class="cart__loading-title"></div>
            <div class="cart__loading-price"></div>
          </div>
        </div>

        <div class="home__ubication-bottm">
          <router-link to="/catalogo" class="home__ubication-send">
            Ver todos los vehículos
          </router-link>
        </div>
      </div>
    </article>
    <article class="home__copy home__copy--dark">
      <div
        v-for="(banner, index) in Object.keys(bannerDesktop).filter(
          (banner) => bannerDesktop[banner].where === 'home3'
        )"
        :key="index"
        class="home__copy-box-img"
        :data-device="windowSize"
        :data-default="
          !windowSize &&
          !Object.keys(bannerMobile).filter(
            (banner) => bannerMobile[banner].where === 'home3'
          )
        "
      >
        <img
          :src="bannerDesktop[banner].banner"
          alt=""
          class="home__copy-img"
        />
        <a
          v-if="
            bannerDesktop[banner].url != 'null' &&
            bannerDesktop[banner].type == 'Image'
          "
          :href="bannerDesktop[banner].url"
          :target="bannerDesktop[banner].blank ? '_blank' : ''"
          class="home__link-banner"
        ></a>
      </div>
      <div
        v-for="(banner, index) in Object.keys(bannerMobile).filter(
          (banner) => bannerMobile[banner].where === 'home3'
        )"
        :key="index"
        class="home__copy-box-img"
        :data-device="!windowSize"
      >
        <img :src="bannerMobile[banner].banner" alt="" class="home__copy-img" />
        <a
          v-if="
            bannerMobile[banner].url != 'null' &&
            bannerMobile[banner].type == 'Image'
          "
          :href="bannerMobile[banner].url"
          :target="bannerMobile[banner].blank ? '_blank' : ''"
          class="home__link-banner"
        ></a>
      </div>
      <div class="home__copy-box home__copy-box--drak">
        <h2 class="home__copy-title home__copy-title--dark">Vende tu auto</h2>
        <p class="home__copy-text home__copy-text--dark">
          Obtén una valuación en segundos
        </p>
        <router-link
          to="/vende"
          class="home__copy-button home__copy-button--dark"
        >
          Quiero vender mi auto
        </router-link>
      </div>
    </article>
    <div class="home__content">
      <article class="home__security slide">
        <h2 class="home__security-title">Un movimiento seguro y garantizado</h2>
        <p class="home__security-text">
          Porqué comprar o vender tu auto con nosotros:
        </p>
        <CarouselHome
          :cardContent="cardContent"
          :type="'security'"
          class="home__security-desktop"
        />
        <CardHome
          v-for="card in cardContent"
          :key="card"
          :card="card"
          class="home__security-mobile"
        />
      </article>
    </div>
    <article class="home__agency">
      <h2 class="home__agency-title">Tú decides la entrega</h2>
      <p class="home__agency-subtitle">
        Ven a cualquier concesionaria de Grupo Vanguardia a recoger o estrena
        con nuestras entregas a domicilio, una experiencia que no vas a olvidar.
      </p>
      <p class="home__agency-subtitle">Vamos a donde estés</p>
      <div class="home__agency-box slide">
        <CarouseAgencyHome :cards="cardAgency" />
      </div>
      <div class="home__agency-Boxbtn">
        <router-link to="/agencias" class="home__agency-btn">
          Ver todas las agencias
        </router-link>
      </div>
    </article>
    <div class="home__content home__content--white">
      <article class="home__client slide">
        <h2 class="home__client-title">Clientes felices</h2>
        <CarouselHome :cardContent="cardClientContent" :type="'client'" />
      </article>
    </div>
  </main>
</template>
<script>
/* eslint-disable no-undef */
import {
  onMounted,
  ref,
  onUnmounted,
  computed,
  watch,
  onBeforeMount,
} from "vue";
import Slide from "@/views/client/components/Slide.vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { Loader } from "@googlemaps/js-api-loader";
import CarouselCards from "@/views/client/components/CarouselCards.vue";
import CardHome from "@/views/client/components/CardHome.vue";
import Search from "@/views/client/components/Search.vue";
import CarouselHome from "@/views/client/components/CarouselHome.vue";
import CarouseAgencyHome from "@/views/client/components/CarouseAgencyHome.vue";
import HelloWorld from "@/components/HelloWorld.vue";

import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";
import "@/assets/styles/views/Home.scss";
import "@/assets/styles/components/Input.scss";
import Shell from "@/assets/images/icons/icon-shell.svg";
import Cart from "@/assets/images/icons/icon-cart.svg";
import Medal from "@/assets/images/icons/icon-medalla.svg";
import Ubication from "@/assets/images/icons/icon-ubication.svg";
import Attainment from "@/assets/images/icons/icon-attainment.svg";
import Dollar from "@/assets/images/icons/icon-dollar.svg";
import Client1 from "@/assets/images/client.png";
import Client2 from "@/assets/images/client2.png";
import Client3 from "@/assets/images/client3.png";
import Client4 from "@/assets/images/client4.png";
import Client5 from "@/assets/images/client5.png";
import Score1 from "@/assets/images/icons/icon-start.png";
import Score2 from "@/assets/images/icons/icon-start2.png";
import Score3 from "@/assets/images/icons/icon-start3.png";
import Score5 from "@/assets/images/icons/icon-start5.png";
import buyCar from "@/assets/images/clientsCart.png";
import sellYourCar from "@/assets/images/clientsBanner.png";
import imgBanner from "@/assets/images/banerHero.png";
import imgBannerMovil from "@/assets/images/banner3m.png";
import Agency1 from "@/assets/images/home-agency1.png";
import Agency2 from "@/assets/images/home-agency2.png";

const API_KEY = "AIzaSyACDXm5WBEngJZHLoEiSzzYCdlkg3THQmI";

export default {
  name: "Home",
  components: {
    Slide,
    CarouselCards,
    CarouselHome,
    CarouseAgencyHome,
    Search,
    HelloWorld,
    CardHome,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const ubication = ref("");
    const checkUbication = ref(false);
    const vehicles = ref([]);
    const cardContent = ref([]);
    const cardClientContent = ref([]);
    const cardAgency = ref([]);
    const imgSrc = ref();
    const loader = new Loader({ apiKey: API_KEY });
    const windowSize = ref(false);
    const ubicationTitle = ref("");
    const scrollNow = ref("");
    const hero = ref(null);
    const bannerDesktop = ref({});

    const bannerMobile = ref({});

    const getVehicles = async (params = "") => {
      let url = "api/vehicles/nearby";
      if (params) {
        url = `${url}?location=${params}`;
      }

      try {
        const { data } = await ApiService.get(url);
        vehicles.value = data.data;
        console.log(
          "🚀 ~ file: Home.vue ~ line 210 ~ getVehicles ~ data.data.data",
          data.data
        );
        ubicationTitle.value = data.message;
        console.log(
          "🚀 ~ file: Home.vue ~ line 56 ~ getVehicles ~ vehicles.value ",
          vehicles.value
        );
      } catch (response) {
        console.error(response, "aqui");
      }
    };

    const getBanners = async () => {
      try {
        const { data } = await ApiService.get("api/banners/home");

        const desktopLength = data.data.desktop.length;
        const mobileLength = data.data.mobil.length;

        Array(5)
          .fill("")
          .map((element, index) => {
            bannerDesktop.value[`desktop_${index + 1}`] = {
              ...bannerDesktop.value[`desktop_${index + 1}`],
              id: data.data.desktop[index] ? data.data.desktop[index].id : "",
              type: data.data.desktop[index]
                ? data.data.desktop[index].type
                : bannerDesktop.value[`desktop_${index + 1}`].type,
              url: data.data.desktop[index]
                ? data.data.desktop[index].url
                : bannerDesktop.value[`desktop_${index + 1}`].url,
              blank: data.data.desktop[index]
                ? data.data.desktop[index].blank
                : bannerDesktop.value[`desktop_${index + 1}`].blank,
              banner: data.data.desktop[index]
                ? data.data.desktop[index].banner
                : bannerDesktop.value[`desktop_${index + 1}`].banner,
              title: data.data.desktop[index]
                ? data.data.desktop[index].title
                : bannerDesktop.value[`desktop_${index + 1}`].title,
              description: data.data.desktop[index]
                ? data.data.desktop[index].description
                : bannerDesktop.value[`desktop_${index + 1}`].description,
              where: data.data.desktop[index]
                ? data.data.desktop[index].where
                : bannerDesktop.value[`desktop_${index + 1}`].where,
            };
          });
        Array(mobileLength)
          .fill("")
          .map((element, index) => {
            bannerMobile.value[`mobile_${index + 1}`] = {
              ...bannerMobile.value[`mobile_${index + 1}`],
              id: data.data.mobil[index] ? data.data.mobil[index].id : "",
              type: data.data.mobil[index]
                ? data.data.mobil[index].type
                : bannerMobile.value[`mobile_${index + 1}`].type,
              url: data.data.mobil[index]
                ? data.data.mobil[index].url
                : bannerMobile.value[`mobile_${index + 1}`].url,
              blank: data.data.mobil[index]
                ? data.data.mobil[index].blank
                : bannerMobile.value[`mobile_${index + 1}`].blank,
              banner: data.data.mobil[index]
                ? data.data.mobil[index].banner
                : bannerMobile.value[`mobile_${index + 1}`].banner,
              title: data.data.mobil[index]
                ? data.data.mobil[index].title
                : bannerMobile.value[`mobile_${index + 1}`].title,
              description: data.data.mobil[index]
                ? data.data.mobil[index].description
                : bannerMobile.value[`mobile_${index + 1}`].description,
              where: data.data.mobil[index]
                ? data.data.mobil[index].where
                : bannerMobile.value[`mobile_${index + 1}`].where,
            };
          });
      } catch (error) {
        console.log(error);
      }
    };

    cardAgency.value = [
      {
        img: Agency1,
        title: "Entregas en agencia",
      },
      {
        img: Agency2,
        title: "Entregas a domicilio",
      },
    ];

    cardContent.value = [
      {
        img: Shell,
        title: "Tomamos tu auto a cuenta",
        text: "Si quieres estrenar",
      },
      {
        img: Cart,
        title: "Sin riesgos y con respaldo",
        text: "Somos un grupo automotriz con mas de 60 años de experiencia.",
      },
      {
        img: Medal,
        title: "Garantía",
        text: "3 meses o 3,000 km en motor y transmisión.",
      },
      {
        img: Attainment,
        title: "Extensión de Garantía",
        text: "Te ofrecemos una Póliza por un año.",
      },
      {
        img: Dollar,
        title: "Planes de financiamiento ",
        text: "Que se adaptan a tus posibilidades.",
      },
    ];
    cardClientContent.value = [
      {
        img: Client1,
        name: "Ivan Rodriguez Palacios",
        city: "Guadalajara",
        scoreText: "4.5",
        scoreImg: Score1,
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam luctus, nunc nisl aliquam lorem, eu aliquam nisl nisl eu nisl. Sed euismod",
        ubicationImg: Ubication,
        ubicationText: "A domicilio",
      },
      {
        img: Client2,
        name: "Julian Marcos Cortes Díaz",
        city: "Aguascalientes",
        scoreText: "4.0",
        scoreImg: Score2,
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam luctus, ",
        ubicationImg: Ubication,
        ubicationText: "Acura Vanguardia Qro.",
      },
      {
        img: Client3,
        name: "Gabriela Itzel Vidal García",
        city: "Guadalajara",
        scoreText: "5.0",
        scoreImg: Score3,
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam luctus,",
        ubicationImg: Ubication,
        ubicationText: "Audi Vanguardia Gallo",
      },
      {
        img: Client4,
        name: "Juan Carlos Bravo Rea",
        city: "Guadalajara",
        scoreText: "5.0",
        scoreImg: Score3,
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam luctus,",
        ubicationImg: Ubication,
        ubicationText: "A domicilio",
      },
      {
        img: Client5,
        name: "Mirna Maria Palacios Burgos",
        city: "Aguascalientes",
        scoreText: "4.0",
        scoreImg: Score5,
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam luctus,",
        ubicationImg: Ubication,
        ubicationText: "A domicilio",
      },
    ];

    const mobile = window.matchMedia("(min-width: 767px)");
    const handleMobile = (e) => {
      if (e.matches) {
        windowSize.value = true;
      } else {
        windowSize.value = false;
      }
    };
    mobile.addEventListener("change", handleMobile);

    onBeforeMount(async () => {
      handleMobile(mobile);
    });
    const onScroll = (e) => {
      scrollNow.value = window.top.scrollY;
      console.log(scrollNow);
      /* if (scrollNow.value > 100) {
        hero.value.classList.add("home__hero-top--fixed");
      } else {
        hero.value.classList.remove("home__hero-top--fixed");
      } */
    };

    onMounted(async () => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-load");
      await loader.load();
      await getVehicles();
      await getBanners();
      window.addEventListener("scroll", onScroll);
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-load");
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    const geolocation = () => {
      navigator.geolocation.getCurrentPosition(geoposOK, geoposFail);
    };

    const geoposOK = async (position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      const latlng = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      };
      const geocoder = await new google.maps.Geocoder().geocode({
        location: latlng,
      });
      ubication.value = geocoder.results[0].formatted_address;
      getVehicles(ubication.value);
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
      sellYourCar,
      imgSrc,
      windowSize,
      geolocation,
      ubicationTitle,
      hero,
      bannerDesktop,
      bannerMobile,
      imgBanner,
      imgBannerMovil,
      cardAgency,
    };
  },
};
</script>

<style lang="scss" scoped></style>
