<template>
  <main class="detail">
    <HelloWorld />
    <div class="detail__hero-content" ref="hero">
      <article class="detail__hero">
        <div class="detail__hero-img-box">
          <img v-if="gallery.length > 0" :src="gallery[1]" alt="" class="detail__hero-img" />
        </div>
        <div class="detail__hero-detail" v-if="vehicle.brand != undefined">
          <div class="detail__hero-box">
            <p class="detail__hero-name">
              {{ `${vehicle.brand} ${vehicle.model}` }}
            </p>
            <p class="detail__hero-kms">
              {{ `${vehicle.year} - ${kmFormat(vehicle.kms)} km` }}
            </p>
          </div>
          <div class="detail__hero-box">
            <p class="detail__hero-txt">Precio</p>
            <p class="detail__hero-price">
              {{ `$${priceFormat(vehicle.price)}` }}
            </p>
          </div>
          <a :href="`https://api.whatsapp.com/send?${agency.wasap}`" target="_blank"
            class="detail__agency-btnWhat detail__agency-btnWhat--hero">
            <img :src="Whatassap" alt="" class="detail__agency-btnImg detail__agency-btnImg--hero" />
            <p class="detail__agency-btnText detail__agency-btnText--hero">
              Contactar <span>por WhatsApp</span>
            </p>
          </a>
          <a href="#contact" class="detail__agency-btnMail detail__agency-btnMail--hero">
            <img :src="Mail" alt="" class="detail__agency-btnImg detail__agency-btnImg--hero" />
            <p class="detail__agency-btnText detail__agency-btnText--hero">
              Contactar <span>por correo</span>
            </p>
          </a>
        </div>
      </article>
    </div>
    <div class="detail__detail-content">
      <article class="detail__detail-galery">
        <div class="detail__galery">
          <GalleryVehicle v-if="gallery.length > 0" :gallery="gallery" />
          <div v-if="gallery.length === 0" class="detail__galery-load"></div>
        </div>
        <div class="detail__content" v-if="vehicle.brand != undefined">
          <div class="detail__content-texts">
            <p class="detail__content-name">
              {{ `${vehicle.brand} ${vehicle.model}` }}
            </p>
            <p class="detail__content-kms">
              {{ `${vehicle.year} - ${kmFormat(vehicle.kms)} km` }}
            </p>
            <p class="detail__content-price">
              {{ `$${priceFormat(vehicle.price)}` }}
            </p>
          </div>
          <div class="detail__content-agency">
            <p class="detail__content-ubication">Ubicación</p>
            <div class="detail__agency">
              <IconAgency :prop_height="20" :prop_width="20" />

              <p class="detail__agency-text ps-2">{{ `${agency.name}` }}</p>
            </div>
            <p class="detail__agency-ubication">
              {{ `${agency.city}, ${agency.state}` }}
            </p>
            <p class="detail__agency-map">Ver mapa ></p>
          </div>
          <a :href="`https://api.whatsapp.com/send?${agency.wasap}`" target="_blank" class="detail__agency-btnWhat">
            <img :src="Whatassap" alt="" class="detail__agency-btnImg" />
            <p class="detail__agency-btnText">
              Contactar <span>por WhatsApp</span>
            </p>
          </a>
          <a href="#contact" class="detail__agency-btnMail">
            <img :src="Mail" alt="" class="detail__agency-btnImg" />
            <p class="detail__agency-btnText">
              Contactar <span>por correo</span>
            </p>
          </a>
        </div>
      </article>
    </div>
    <article class="detail__sumary" v-if="sumary.length > 0">
      <p class="detail__sumary-title">Resumen</p>
      <div class="detail__sumary-box">
        <div class="detail__sumary-sumary" v-for="(feature, i) in sumary" :key="i">
          <img :src="`img/sumary/${feature[0]}.svg`" alt="" class="detail__sumary-icon" />
          <p class="detail__sumary-text">{{ feature[1] }}</p>
        </div>
      </div>
    </article>
    <div class="detail__spec-content" v-if="specs.length > 0">
      <article class="detail__specs">
        <p class="detail__sumary-title detail__sumary-title--spec">
          Características
        </p>
        <div class="detail__sumary-box-specs" :data-watch="watchSpecs">
          <div class="detail__specs-box" v-for="(spec, i) in specs" :key="i">
            <p class="detail__specs-text">
              {{ spec[0] }}
              <span v-if="spec[1] !== 'true'">- {{ spec[1] }}</span>
            </p>
          </div>
        </div>
        <div class="detail__specs-box-bnt" :data-watch="watchSpecs">
          <button class="detail__spec-btn" @click="viewsAll">Ver todas</button>
        </div>
      </article>
    </div>
    <article class="detail__contact" id="contact">
      <p class="detail__sumary-title detail__sumary-title--contact">
        Estoy interesado
      </p>
      <p class="detail__contact-sub">
        Ingresa tus datos y nosotros te contactamos
      </p>
      <Form_ v-slot="{ errors }" @submit="onSubmit" :validation-schema="schema" class="detail__contact-form"
        :initial-values="formValues">
        <div class="detail__inputs">
          <label for="name" class="label" :data-require="Boolean(errors.name)">Nombre</label>
          <Field as="input" name="name" class="input input--white" :data-error="Boolean(errors.name)"
            placeholder="Juan" />
          <span class="input__error">{{ errors.name }}</span>
        </div>
        <div class="detail__inputs">
          <label for="name" class="label" :data-require="Boolean(errors.lastname)">Apellido</label>
          <Field as="input" name="lastname" class="input input--white" :data-error="Boolean(errors.lastname)"
            placeholder="Pérez" />
          <span class="input__error">{{ errors.lastname }}</span>
        </div>
        <div class="detail__inputs">
          <label for="name" class="label" :data-require="Boolean(errors.email)">Mail</label>
          <div class="input-icon">
            <Field as="input" name="email" class="input input--white input--icon" :data-error="Boolean(errors.email)"
              placeholder="ejemplo@correo.com" />
            <IconMail :prop_classes="['input-icon--icon']" />
          </div>
          <span class="input__error">{{ errors.email }}</span>
        </div>
        <div class="detail__inputs">
          <label for="name" class="label" :data-require="Boolean(errors.whatassap)">Whatassap</label>
          <div class="input-icon">
            <Field as="input" name="whatassap" class="input input--white input--icon"
              :data-error="Boolean(errors.whatassap)" placeholder="33 33 33 33 33 33" />
            <IconWhatsapp :prop_classes="['input-icon--icon']" />
          </div>

          <span class="input__error">{{ errors.whatassap }}</span>
        </div>
        <div class="detail__contact-send">
          <button class="detail__contact-send-btn">
            Quiero que me contacten
          </button>
        </div>
      </Form_>
    </article>

    <article class="detail__banner"
    v-for="(value, key, index ) in banner['desktop']" :key="index" 
    :data-device="windowSize" :data-default="!windowSize && !Boolean(banner['mobil'])"
    >
      <div class="detail__banner-box-img">
        <img :src="value.banner" alt="" class="detail__banner-img" />
      </div>
    </article>

    <article class="detail__banner"
    v-for="(value, key, index ) in banner['mobil']" :key="index"
    :data-device="!windowSize"
    >
      <div class="detail__banner-box-img">
        <img :src="value.banner" alt="" class="detail__banner-img" />
      </div>
    </article>

    


    <article class="detail__simil" v-if="Object.keys(simil).length > 0">
      <p class="detail__sumary-title">Vehículos similares</p>
      <div class="detail__simil-galery">
        <CarouselCards :vehicles="simil" />
      </div>
    </article>
  </main>
</template>

<script>
/* eslint-disable no-undef */
import { onMounted, ref, watch, markRaw, onBeforeMount, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import GalleryVehicle from "@/views/client/components/GalleryVehicle.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
import CarouselCards from "@/views/client/components/CarouselCards.vue";
import { Form as Form_, Field } from "vee-validate";
import * as yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import axios from "axios";
import Whatassap from "@/assets/images/icons/icon-btn_what.svg";
import IconWhatsapp from "@/views/client/components/IconWhatsapp.vue";
import IconMail from "@/views/client/components/IconMail.vue";
import Mail from "@/assets/images/icons/icon-btn_mail.svg";
import banner from "@/assets/images/detail-banner.jpg";
import "sweetalert2/src/sweetalert2.scss";
import "@/assets/styles/views/Detail.scss";
import "@/assets/styles/components/Input.scss";
import IconAgency from "@/views/client/components/IconAgency.vue";
import { object } from 'yup/lib/locale';
export default {
  name: "Detail",
  components: {
    GalleryVehicle,
    Form_,
    Field,
    CarouselCards,
    HelloWorld,
    IconWhatsapp,
    IconMail,
    IconAgency,
  },
  setup() {
    const store = useStore();
    const vehicle = ref([]);
    const sumary = ref([]);
    const specs = ref([]);
    const agency = ref([]);
    const gallery = ref([]);
    const vehicle_id = ref("");
    const watchSpecs = ref(false);
    const simil = ref([]);
    const scrollNow = ref("");
    const windowSize = ref(false);
    const banner = ref({
      desktop: '',
      mobile: '',
    });
    const formValues = {
      email: "",
      name: "",
      lastname: "",
      whatassap: "",
    };
    const hero = ref(null);

    const priceFormat = (value) => {
      const val = (value / 1).toFixed(2);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const kmFormat = (value) => {
      const val = value / 1;
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const viewsAll = () => {
      watchSpecs.value = !watchSpecs.value;
    };

    const route = useRoute();

    const schema = markRaw(
      yup.object().shape({
        name: yup.string().required("El dato es obligatorio"),
        lastname: yup.string().required("El dato es obligatorio"),
        email: yup
          .string()
          .email("Porfavor ingrese un formato valido"),
        whatassap: yup.string()
        .when('email', {
          is: "",
          then: yup.string()
          .required("El dato es obligatorio")
          .min(10, "Minimo 10 caracteres")
          .matches(/^[0-9]+$/, "Solo se aceptan numeros"),
        }),
          
      })
    );

    watch(
      () => route.params.id,
      async () => {
        specs.value = [];
        await getDetail(route.params.id);
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-load");
      }
    );

    const onScroll = (e) => {
      scrollNow.value = window.top.scrollY;
      if (scrollNow.value > 600) {
        hero.value.classList.add("detail__hero--fixed");
      } else {
        hero.value.classList.remove("detail__hero--fixed");
      }
    };

    const onSubmit = (values, { resetForm }) => {
      console.log("🚀 ~ file: DetalleVehiculo.vue ~ line 299 ~ onSubmit ~ values", values)
      // Submit values to API...
      if(values.email == '' && values.whatassap == ''){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debe ingresar un correo o un número de whatsapp",
        });
        return;
      }

      if (values) {
        const data = {
          name: values.name,
          surname: values.lastname,
          email: values.email,
          whatssap: values.whatassap,
          // vehicle_id: vehicle_id.value,
        };
        ApiService.post(`/api/vehicles/contact/${vehicle_id.value}`, data)
          .then((res) => {
            console.log(res);
            console.log(values);
            Swal.fire({
              icon: "success",
              title: "¡Gracias!",
              text: "Nos pondremos en contacto contigo a la brevedad",
            });
            resetForm();
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salió mal, intenta de nuevo",
            });
          });
      }
    };

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

    onMounted(async () => {
      vehicle_id.value = route.params.id;
      await getDetail(route.params.id);
      await getBanners();
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-load");
      window.addEventListener("scroll", onScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    const getDetail = async (id) => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-load");
      try {
        const { data } = await ApiService.get("/api/vehicles/show/" + id);
        gallery.value = data.data.gallery;
        vehicle.value = data.data.vehicle;
        simil.value = data.data.similar;
        agency.value = data.data.agency;
        sumary.value = Object.entries(data.data.features).filter(
          (sumary) => sumary[1] != null
        );
        data.data.specs.filter((spec) => {
          Object.entries(spec)
            .filter((spec) => spec[1] != "false")
            .map((spec) => {
              if (spec[1] !== "") {
                specs.value.push(spec);
              }
            });
        });

        if (localStorage.favorites) {
          const favorite = { ...data.data.vehicle, id };
          let favorites = JSON.parse(localStorage.favorites);
          if (!Object.keys(favorites).includes(id)) {
            favorites = { ...favorites, [id]: favorite };
            localStorage.favorites = JSON.stringify(favorites);
          }
        } else {
          const favorite = { ...data.data.vehicle, id };
          const favorites = { [id]: favorite };
          localStorage.favorites = JSON.stringify(favorites);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getBanners = async () => {
      try {
        const { data } = await ApiService.get("api/banners/detail");

        banner.value = data.data

        console.log("🚀 ~ file: DetalleVehiculo.vue ~ line 422 ~ getBanners ~ banner.value", banner.value['desktop'])

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
      specs,
      sumary,
      Whatassap,
      Mail,
      viewsAll,
      watchSpecs,
      schema,
      onSubmit,
      simil,
      formValues,
      hero,
      banner,
      IconAgency,
      windowSize
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
    left: 0px;
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
