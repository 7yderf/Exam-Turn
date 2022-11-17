<template>
  <main class="banners">
    <HelloWorld />

    <div class="banners__go">
      <router-link to="/dashboard" class="banners__go-back">
        <img :src="GoBack" alt="" />
        <span>Página de inicio</span>
      </router-link>
    </div>

    <article class="banners__body">
      <div class="banners__aside order-aside">
        <div class="banners_subtitle">Ver</div>
        <div class="banners__buttons_devices">
          <button
            class="banners__btn-device"
            :class="[device === 'desktop' ? 'active' : '']"
            @click="deviceActive('desktop')"
          >
            <IconDesktop :prop_class="['banner_button_icon']" />

            <span> Escritorio </span>
          </button>
          <button
            class="banners__btn-device"
            :class="[device === 'mobile' ? 'active' : '']"
            @click="deviceActive('mobile')"
          >
            <IconMobile :prop_class="['banner_button_icon']" />
            <span> Móvil </span>
          </button>
        </div>
      </div>

      <div class="order-preview">
        <div class="banners_subtitle">Previsualización</div>
        <div class="banners-market" v-if="device === 'desktop'">
          <div
            v-for="value in Object.keys(formValues)
              .map((key) => formValues[key])
              .slice(0, 3)"
            :key="value.flag"
            :style="{ display: none }"
          >
            <div
              v-if="device === 'desktop'"
              class="banners__carrusel-box"
              @click="active = value.flag"
              :data-active="device === 'desktop' ? true : false"
            >
              <div class="banners__box-media">
                <img
                  :src="
                    fileData[value.flag] && fileData[value.flag]?.img
                      ? fileData[value.flag].img
                      : formValues[value.flag].banner
                      ? formValues[value.flag].banner
                      : IconCar
                  "
                  alt=""
                  class="bannesr_box-media-img"
                />
              </div>
              <div
                class="banners__carrusel-background"
                :data-update="Boolean(value.id)"
                v-if="value.where == 'marketplace'"
              >
                <IconImg :prop_width="100" :prop_height="100" />

                <p class="banners__carrusel-back-text">
                  Arrastra o
                  <span class="banners__carrusel-back-span">
                    selecciona una imgen
                  </span>
                  para el Banner
                  {{ value.flag }}
                </p>
                <p class="banners__carrusel-back-info">
                  (280x350 px, .png .jpeg. jpg)
                </p>
              </div>

              <Drop
                :type="value.flag"
                :active="active"
                :fileData="fileData"
                @changeAddFile="onFileAdd"
                @changeRemoveFile="onFileRemove"
              />
            </div>
          </div>
        </div>

        <div class="banners-market" v-if="device === 'mobile'">
          <div
            v-for="value in Object.keys(formValues)
              .map((key) => formValues[key])
              .slice(3, 6)"
            :key="value.flag"
            :style="{ display: none }"
          >
            <div
              v-if="device === 'mobile'"
              class="banners__carrusel-box"
              @click="active = value.flag"
              :data-active="device === 'mobile' ? true : false"
            >
              <div class="banners__box-media">
                <img
                  :src="
                    fileData[value.flag] && fileData[value.flag]?.img
                      ? fileData[value.flag].img
                      : formValues[value.flag].banner
                      ? formValues[value.flag].banner
                      : Background
                  "
                  alt=""
                  class="bannesr_box-media-img"
                />
              </div>
              <div
                class="banners__carrusel-background"
                :data-update="Boolean(value.id)"
                v-if="
                  !fileData[value.flag] &&
                  !fileData[value.flag]?.img &&
                  !formValues[value.flag].banner
                "
              >
                <IconImg :prop_width="100" :prop_height="100" />

                <p class="banners__carrusel-back-text">
                  Arrastra o
                  <span class="banners__carrusel-back-span">
                    selecciona una imgen
                  </span>
                  para el Banner
                  {{ value.flag }}
                </p>
                <p class="banners__carrusel-back-info">
                  (280x350 px, .png .jpeg. jpg)
                </p>
              </div>

              <Drop
                :type="value.flag"
                :active="true"
                :fileData="fileData"
                @changeAddFile="onFileAdd"
                @changeRemoveFile="onFileRemove"
              />
            </div>
          </div>
        </div>
        <div class="banners__prewiev-banners order-preview2">
          <div class="banners__prewiev" v-if="device === 'desktop'">
            <div class="preview-desktop-subtitle">Vehículos</div>
            <div class="desktop">
              <div v-for="index in 12" :key="index">
                <div
                  class="card-vehicle"
                  v-if="index !== 4 && index !== 8 && index !== 12"
                >
                  <img :src="IconCar" alt="" class="card-img" />
                  <div class="card-title">Vehículo</div>
                </div>
                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 4 &&
                    !fileData.marketplace_1 &&
                    !fileData.marketplace_1?.img &&
                    !formValues.marketplace_1.banner
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_1 && fileData.marketplace_1?.img
                        ? fileData.marketplace_1.img
                        : formValues.marketplace_1.banner
                        ? formValues.marketplace_1.banner
                        : Background
                    "
                    alt=""
                    class="card-img-no-active"
                  />
                </div>

                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 4 &&
                    ((fileData.marketplace_1 && fileData.marketplace_1?.img) ||
                      formValues.marketplace_1.banner)
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_1 && fileData.marketplace_1?.img
                        ? fileData.marketplace_1.img
                        : formValues.marketplace_1.banner
                        ? formValues.marketplace_1.banner
                        : Background
                    "
                    alt=""
                    class="card-img-active"
                  />
                </div>

                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 8 &&
                    !fileData.marketplace_2 &&
                    !fileData.marketplace_2?.img &&
                    !formValues.marketplace_2.banner
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_2 && fileData.marketplace_2?.img
                        ? fileData.marketplace_2.img
                        : formValues.marketplace_2.banner
                        ? formValues.marketplace_2.banner
                        : Background
                    "
                    alt=""
                    class="card-img-no-active"
                  />
                </div>

                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 8 &&
                    ((fileData.marketplace_2 && fileData.marketplace_2?.img) ||
                      formValues.marketplace_2.banner)
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_2 && fileData.marketplace_2?.img
                        ? fileData.marketplace_2.img
                        : formValues.marketplace_2.banner
                        ? formValues.marketplace_2.banner
                        : Background
                    "
                    alt=""
                    class="card-img-active"
                  />
                </div>

                <div
                  class="card-vehicle"
                  v-else-if="
                    index === 12 &&
                    !fileData.marketplace_3 &&
                    !fileData.marketplace_3?.img &&
                    !formValues.marketplace_3.banner
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_3 && fileData.marketplace_3?.img
                        ? fileData.marketplace_3.img
                        : formValues.marketplace_3.banner
                        ? formValues.marketplace_3.banner
                        : Background
                    "
                    alt=""
                    class="card-img-no-active"
                  />
                  <div class="card-title">Banner</div>
                </div>

                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 12 &&
                    ((fileData.marketplace_3 && fileData.marketplace_3?.img) ||
                      formValues.marketplace_3.banner)
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_3 && fileData.marketplace_3?.img
                        ? fileData.marketplace_3.img
                        : formValues.marketplace_3.banner
                        ? formValues.marketplace_3.banner
                        : Background
                    "
                    alt=""
                    class="card-img-active"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="banners__prewiev banners__prewiev_mobile"
            v-else-if="device === 'mobile'"
          >
            <div class="preview-mobile-subtitle">Vehículos</div>
            <div class="mobile">
              <div v-for="index in 12" :key="index">
                <div
                  class="card-vehicle"
                  v-if="index !== 4 && index !== 8 && index !== 12"
                >
                  <img :src="IconCar" alt="" class="card-img" />
                  <div class="card-title">Vehículo</div>
                </div>
                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 4 &&
                    !fileData.marketplace_4 &&
                    !fileData.marketplace_4?.img &&
                    !formValues.marketplace_4.banner
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_4 && fileData.marketplace_4?.img
                        ? fileData.marketplace_4.img
                        : formValues.marketplace_4.banner
                        ? formValues.marketplace_4.banner
                        : Background
                    "
                    alt=""
                    class="card-img-no-active"
                  />
                  <div class="card-title">Banner</div>
                </div>

                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 4 &&
                    ((fileData.marketplace_4 && fileData.marketplace_4?.img) ||
                      formValues.marketplace_4.banner)
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_4 && fileData.marketplace_4?.img
                        ? fileData.marketplace_4.img
                        : formValues.marketplace_4.banner
                        ? formValues.marketplace_4.banner
                        : Background
                    "
                    alt=""
                    class="card-img-active"
                  />
                </div>
                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 8 &&
                    !fileData.marketplace_5 &&
                    !fileData.marketplace_5?.img &&
                    !formValues.marketplace_5.banner
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_5 && fileData.marketplace_5?.img
                        ? fileData.marketplace_5.img
                        : formValues.marketplace_5.banner
                        ? formValues.marketplace_5.banner
                        : Background
                    "
                    alt=""
                    class="card-img-no-active"
                  />
                  <div class="card-title">Banner</div>
                </div>

                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 8 &&
                    ((fileData.marketplace_5 && fileData.marketplace_5?.img) ||
                      formValues.marketplace_5.banner)
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_5 && fileData.marketplace_5?.img
                        ? fileData.marketplace_5.img
                        : formValues.marketplace_5.banner
                        ? formValues.marketplace_5.banner
                        : Background
                    "
                    alt=""
                    class="card-img-active"
                  />
                </div>
                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 12 &&
                    !fileData.marketplace_6 &&
                    !fileData.marketplace_6?.img &&
                    !formValues.marketplace_6.banner
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_6 && fileData.marketplace_6?.img
                        ? fileData.marketplace_6.img
                        : formValues.marketplace_6.banner
                        ? formValues.marketplace_6.banner
                        : Background
                    "
                    alt=""
                    class="card-img-no-active"
                  />
                </div>

                <div
                  class="card-vehicle-active"
                  v-else-if="
                    index === 12 &&
                    ((fileData.marketplace_6 && fileData.marketplace_6?.img) ||
                      formValues.marketplace_6.banner)
                  "
                >
                  <img
                    :src="
                      fileData.marketplace_6 && fileData.marketplace_6?.img
                        ? fileData.marketplace_6.img
                        : formValues.marketplace_6.banner
                        ? formValues.marketplace_6.banner
                        : Background
                    "
                    alt=""
                    class="card-img-active"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banners__form-box order-form">
        <div class="banners_subtitle">Opciones</div>
        <DropPreview
          :banners="formValues"
          :active="active"
          :fileData="fileData"
        />
        <div v-if="active !== ''">
          <FormMarket
            :formValues="formValues"
            :active="active"
            :file="file"
            @video="checkVideo"
            @updateState="updateState"
          />
        </div>
        <div v-else class="banners_selection">Selecciona un banner</div>
      </div>
    </article>
  </main>
</template>

<script>
/* eslint-disable no-undef */
import { onMounted, ref, watch, markRaw, defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import ApiService from "@/core/services/ApiService";

import Drop from "@/views/client/components/Drop.vue";
import DropPreview from "@/views/client/components/DropPreview.vue";
import FormMarket from "@/views/client/components/FormMarket.vue";

import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import HelloWorld from "@/components/HelloWorld.vue";
import IconImg from "@/views/client/components/IconImg.vue";
import Background from "@/assets/images/icons/icon-img-back.svg";
import IconCar from "@/assets/images/icons/icon-car.svg";
import "sweetalert2/src/sweetalert2.scss";
import "@/assets/styles/views/Banners.scss";
import "@/assets/styles/components/Input.scss";
import IconDesktop from "@/views/client/components/IconDesktop.vue";
import IconMobile from "@/views/client/components/IconMobile.vue";
import GoBack from "@/assets/images/icons/icon-go-back.svg";

export default {
  name: "dashboard",
  components: {
    FormMarket,
    HelloWorld,
    DropPreview,
    Drop,
    IconDesktop,
    IconMobile,
    IconImg,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const date = ref();
    const fileImg = ref(null);
    const fileData = ref({});
    const file = ref("");
    const active = ref("");

    const typeVideo = ref("");
    const videoIframe = ref("");
    const device = ref("desktop");

    const deviceActive = (val) => {
      device.value = val;
      active.value = "";
      fileData.value = {};
    };

    const formValues = ref({
      marketplace_1: {
        id: "",
        type_of_banner: "Marketplace",
        type: "Image",
        file: "",
        url: "",
        blank: "",
        title: "Banner market 1",
        description: "Banner market 1",
        temporized_ini: "",
        temporized_end: "",
        default: "",
        mobil: "0",
        where: "",
        flag: "marketplace_1",
      },
      marketplace_2: {
        id: "",
        type_of_banner: "Marketplace",
        type: "Image",
        file: "",
        url: "",
        blank: "",
        title: "",
        description: "",
        temporized_ini: "",
        temporized_end: "",
        default: "",
        mobil: "0",
        where: "",
        flag: "marketplace_2",
      },
      marketplace_3: {
        id: "",
        type_of_banner: "Marketplace",
        type: "Image",
        file: "",
        url: "",
        blank: "",
        title: "",
        description: "",
        temporized_ini: "",
        temporized_end: "",
        default: "",
        mobil: "0",
        where: "",
        flag: "marketplace_3",
      },
      marketplace_4: {
        id: "",
        type_of_banner: "Marketplace",
        type: "Image",
        file: "",
        url: "",
        blank: "",
        title: "",
        description: "",
        temporized_ini: "",
        temporized_end: "",
        default: "",
        mobil: 1,
        where: "",
        flag: "marketplace_4",
      },
      marketplace_5: {
        id: "",
        type_of_banner: "Marketplace",
        type: "Image",
        file: "",
        url: "",
        blank: "",
        title: "",
        description: "",
        temporized_ini: "",
        temporized_end: "",
        default: "",
        mobil: 1,
        where: "",
        flag: "marketplace_5",
      },
      marketplace_6: {
        id: "",
        type_of_banner: "Marketplace",
        type: "Image",
        file: "",
        url: "",
        blank: "",
        title: "",
        description: "",
        temporized_ini: "",
        temporized_end: "",
        default: "",
        mobil: 1,
        where: "",
        flag: "marketplace_6",
      },
    });
    const updateState = (data, flag) => {
      console.log(formValues.value);
      formValues.value[flag] = data;
      console.log(formValues.value);
    };
    const checkVideo = (type_Video, video_Iframe) => {
      typeVideo.value = type_Video;
      videoIframe.value = video_Iframe;
    };

    const bannerActive = (flag) => {
      active.value = flag;
      file.value = "";
    };

    const onFileAdd = (inputFile, inputFileData, type) => {
      file.value = inputFile;
      fileData.value = inputFileData;
      active.value = type;
    };

    const onFileRemove = (inputFile, inputFileData, type) => {
      file.value = inputFile;
      fileData.value = inputFileData;
      console.log(fileData);
    };

    onMounted(async () => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-load");
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
      await fetch(
        "https://apivanguardia.demosturn.com/api/banners/marketplace",
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.id_token_gateway}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(
            "🚀 ~ file: ConfigView.vue ~ line 306 ~ onMounted ~ res",
            res.data
          );
          Object.keys(formValues.value).forEach((element, index) => {
            console.log(index);
            formValues.value[`marketplace_${index + 1}`] = {
              ...formValues.value[`marketplace_${index + 1}`],
              id: res.data.desktop[index] ? res.data.desktop[index].id : "",
              type_of_banner: res.data.desktop[index]
                ? res.data.desktop[index].type_of_banner
                : formValues.value[`marketplace_${index + 1}`].type_of_banner,
              type: res.data.desktop[index] ? res.data.desktop[index].type : "",
              file: res.data.desktop[index] ? res.data.desktop[index].file : "",
              url: res.data.desktop[index] ? res.data.desktop[index].url : "",
              blank: res.data.desktop[index]
                ? res.data.desktop[index].blank
                : "",
              title: res.data.desktop[index]
                ? res.data.desktop[index].title
                : "",
              description: res.data.desktop[index]
                ? res.data.desktop[index].description
                : "",
              temporized_ini: res.data.desktop[index]
                ? res.data.desktop[index].temporized_ini
                : "",
              temporized_end: res.data.desktop[index]
                ? res.data.desktop[index].temporized_end
                : "",
              default: res.data.desktop[index]
                ? res.data.desktop[index].default
                : "",
              mobil: res.data.desktop[index]
                ? res.data.desktop[index].mobil
                : "",
              banner: res.data.desktop[index]
                ? res.data.desktop[index].banner
                : "",
              where: res.data.desktop[index]
                ? res.data.desktop[index].where
                : formValues.value[`marketplace_${index + 1}`].where,
              flag: `marketplace_${index + 1}`,
            };
          });

          Object.keys(formValues.value)
            .slice(3, 6)
            .forEach((element, index) => {
              formValues.value[`marketplace_${index + 4}`] = {
                ...formValues.value[`marketplace_${index + 4}`],
                id: res.data.mobil[index] ? res.data.mobil[index].id : "",
                type_of_banner: res.data.mobil[index]
                  ? res.data.mobil[index].type_of_banner
                  : formValues.value[`marketplace_${index + 3}`].type_of_banner,
                type: res.data.mobil[index] ? res.data.mobil[index].type : "",
                file: res.data.mobil[index] ? res.data.mobil[index].file : "",
                url: res.data.mobil[index] ? res.data.mobil[index].url : "",
                blank: res.data.mobil[index] ? res.data.mobil[index].blank : "",
                title: res.data.mobil[index] ? res.data.mobil[index].title : "",
                description: res.data.mobil[index]
                  ? res.data.mobil[index].description
                  : "",
                temporized_ini: res.data.mobil[index]
                  ? res.data.mobil[index].temporized_ini
                  : "",
                temporized_end: res.data.mobil[index]
                  ? res.data.mobil[index].temporized_end
                  : "",
                default: res.data.mobil[index]
                  ? res.data.mobil[index].default
                  : "",
                mobil: res.data.mobil[index] ? res.data.mobil[index].mobil : "",
                banner: res.data.mobil[index]
                  ? res.data.mobil[index].banner
                  : "",
                where: res.data.mobil[index]
                  ? res.data.mobil[index].where
                  : formValues.value[`marketplace_${index + 4}`].where,
                flag: `marketplace_${index + 4}`,
              };
            });
        })
        .catch((err) => console.log(err));

      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-load");

      console.log(formValues);
    });

    return {
      onFileRemove,
      onFileAdd,
      fileImg,
      fileData,
      file,
      Background,
      date,
      bannerActive,
      active,
      typeVideo,
      videoIframe,
      checkVideo,
      formValues,
      IconCar,
      device,
      deviceActive,
      updateState,
      GoBack,
    };
  },
};
</script>
<style lang="scss" scoped>
.desktop {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  justify-items: center;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.mobile {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  justify-items: center;
}
.card-vehicle {
  border: 1px solid #9f9f9f;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 18rem;
  height: 22.5rem;
}
.card-vehicle-active {
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background: #d9d9d9;
  width: 18rem;
  height: 22.5rem;
}
.card-img-no-active {
  width: 50%;

  height: 100%;
}

.card-img-active {
  width: 100%;

  height: 100%;
}
.card-title {
  color: black;
  font-weight: 500;
  font-size: 2rem;
  height: 50%;
  display: flex;
  justify-items: center;
  align-items: center;
}
.card-img {
  width: 100%;
  background: #ababab;
  height: 50%;
}
.banners-market {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6.5rem;
  padding: 0rem 0rem 2rem;
  min-width: 100%;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.banners__carrusel-back-text,
.banners__carrusel-back-info {
  @media screen and (max-width: 1120px) {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 970px) {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.2rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2rem;
  }
}
.banners_subtitle {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-bottom: 32px;
}
.banners_selection {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-top: 2rem;
}
.banners__btn-device {
  display: flex;
  flex-direction: column;
  height: auto;
  fill: black !important;
  border-radius: 1rem;
  padding: 1.5rem 3rem;
  font-weight: 500;
  background-color: white !important;
  border: 1px solid #000;
}
.banners__btn-device:hover,
.banners__btn-device.active {
  fill: white !important;
  background-color: black !important;
  color: white !important;
  font-weight: 500;
}
.banners__btn-device.active {
  color: black;
  border-radius: 1rem;
  background-color: white;
  border: 1px solid black;
}

.banners__prewiev_mobile {
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
}

.preview-mobile-subtitle {
  font-size: 1.9rem;
  font-weight: 400;
  width: 70%;

  margin: 0 auto;
  padding-top: 4rem;
}
.banners__carrusel-box {
  width: 18rem;
  height: 22.5rem;
}
.banners__box-media {
  width: 100%;
  height: 100%;
}
.banners__carrusel-background {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 1rem 2rem;
  gap: 2rem;
}
.banners__carrusel-back-info {
  color: #818181;
}

.banners__prewiev {
  border: 1px solid black;
  background-color: white;
  border-radius: 6px;
  padding: 2rem;
}
.preview-desktop-subtitle {
  font-size: 1.9rem;
  font-weight: 400;
  width: 100%;
  padding-top: 2rem;
  padding-left: 2rem;
}
.banners__body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding: 1rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 1.5rem;
  }
}
.order-aside {
  order: 1;
  @media screen and (max-width: 800px) {
    order: 1;
  }
}
.order-preview {
  order: 2;
  @media screen and (max-width: 800px) {
    order: 3;
  }
}

.order-form {
  order: 3;

  @media screen and (max-width: 800px) {
    order: 2;
  }
}

.order-preview2 {
  order: 4;
  @media screen and (max-width: 800px) {
    order: 4;
  }
}
.banners__aside {
  display: flex;
  flex-direction: column;
}

.banners__buttons_devices {
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 990px) {
    flex-direction: row;
    gap: 2rem;
  }
}
/* .banners__prewiev-banners {
  grid-column: 1 / span 3;
  max-width: 67rem;
  margin: 0 auto 0 22rem;
  @media screen and (max-width: 1100px) {
    grid-column: 1 / span 1;
    margin: 0 auto;
  }
} */
.banners__aside {
  padding: 0;
}
.banners__go {
  padding: 1rem;

  width: 100%;
}
</style>
