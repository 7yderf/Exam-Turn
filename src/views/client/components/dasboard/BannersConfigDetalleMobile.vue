<template>
  <div class="userDetalle__main">
    <div class="userDetalle__prewiev">

      <h2 class="userDetalle__title">Previsualización</h2>

      <div class="userDetalle__box-detail userDetalle__box-detail--mobil">
        <div class="userDetalle__detail userDetalle__detail--mobil"><img :src="imgArray[1]" alt=""></div>
        <div class="userDetalle__deatil-text-box userDetalle__deatil-text-box--mobile">
          <div class="userDetalle__deatil-text">Vehículo</div>
          <div class="userDetalle__deatil-subtext">Detalles</div>
          <div class="userDetalle__deatil-price">$999.999</div>
          <div class="userDetalle__deatil-ubication">Ubicación</div>
        </div>
      </div>

      <div class="userDetalle__box-desc userDetalle__box-desc--mobile">
        <p class="userDetalle__desc-title">Características del vehículo</p>
        <p class="userDetalle__desc-text">Dirección - Hidráulica
        </p>
        <p class="userDetalle__desc-text">Airbag laterales
        </p>
        <p class="userDetalle__desc-text">Adaptador para MP3 portátil (i-pod)
        </p>
        <p class="userDetalle__desc-text">Frenos ABS
        </p>
        <p class="userDetalle__desc-text">Transmisión - Automática
        </p>
        <p class="userDetalle__desc-text">Comando remoto para radio en el volante
        </p>
        <p class="userDetalle__desc-text">Motor - 2.0
        </p>
      </div>

      <div class="userDetalle__dummy userDetalle__dummy--mobile">

        <div class="userDetalle__dummy-box-form">
          <h3 class="userDetalle__dummy-title">Contacto</h3>

          <div class="userDetalle__dummy-box">
            <div class="userDetalle__dummy-inputs">
              <label for="title" class="label">Nombre</label>
              <input name="title" class="input input--white" placeholder="Ingresa texto" />
            </div>
            <div class="userDetalle__dummy-inputs">
              <label for="title" class="label">Apellidos</label>
              <input name="title" class="input input--white" placeholder="Ingresa texto" />
            </div>
          </div>
          <div class="userDetalle__dummy-inputs">
            <label for="title" class="label">Correo</label>
            <input name="title" class="input input--white" placeholder="Ingresa texto" />
          </div>
          <div class="userDetalle__dummy-inputs">
            <label for="title" class="label">Whatsapp</label>
            <input name="title" class="input input--white" placeholder="Ingresa texto" />
          </div>

          <div class="userDetalle__btn-subbmit"> Contacto </div>

        </div>
      </div>

      <div class="userDetalle__home2 userDetalle__home2--mobile">
        <div v-for="(value, key, index) in formValues" :key="index" class="userDetalle__home2-box"
          :data-active="value.where === 'detail'">
          <div class="userDetalle__home2-active-box" v-if="!show" @click="bannerActive(value.flag)">
          </div>
          <div class="userDetalle__home2-box-drop" v-if="value.where === 'detail'">
            <img :src="value.banner" alt="" class="banners__home2-img-back">
            <div class="userDetalle__home2-back-copy">
              <img :src="Background" alt="" />
              <p class="userDetalle__home2-text-copy">
                Arrastra o
                <span> selecciona una imagen </span>
                para el Banner
              </p>
              <p class="userDetalle__home2-subtext-copy">(320x450 px, .png .jpeg. jpg)</p>
            </div>
            <div class="userDetalle__home2-drop">
              <Drop :type="value.flag" :active="active" :fileData="fileData" @changeAddFile="onFileAdd"
                @changeRemoveFile="onFileRemove" />
            </div>

          </div>

        </div>
        <div class="userDetalle__home2-box" :data-active="true">

          <div class="userDetalle__added userDetalle__added--mobil">
            <p class="userDetalle__added-title">Recientemente agregados</p>
            <div class="userDetalle__added-box userDetalle__added-box--mobile" v-for="mock in Array(3)
            .fill('')
            .map((_, i) => i)" :key="mock">
              <div class="userDetalle__added-box-img">
                <img :src="imgArray[4]" alt="">
              </div>
              <div class="userDetalle__added-box-text">
                <p class="userDetalle__added-text">Vehículo</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="userDetalle__form-box">
      <h2 class="userDetalle__title userDetalle__title--form">Opciones</h2>
      <div class="userDetalle__subtitle-content">
        <p class="userDetalle__subtitle">Selecciona un banner</p>
        <button v-show="show" class="userDetalle__subtitle" @click="showForm">
          <img :src="Close" alt="" class="userDetalle__btn-set">
        </button>
      </div>

      <div class="userDetalle__form-stycky" v-show="show" :data-show="show">
        <DropPreview :banners="formValues" :active="active" :fileData="fileData" />

        <FormUserDetalle :formValues="formValues" :active="active" :file="file" @update="listenerUpdate"/>
      </div>
    </div>

  </div>
</template>


<script>
/* eslint-disable no-undef */
import { onMounted, ref, watch, markRaw, defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import ApiService from "@/core/services/ApiService";


import Drop from "@/views/client/components/Drop.vue";
import DropPreview from "@/views/client/components/DropPreview.vue";
import FormUserDetalle from "@/views/client/components/FormUserDetalle.vue";

import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import HelloWorld from "@/components/HelloWorld.vue";
import Background from "@/assets/images/icons/icon-img-back.svg";
import icon_edit from "@/assets/images/icons/icon-edit.svg";

import Shell from "@/assets/images/icons/icon-shell.svg";
import Cart from "@/assets/images/icons/icon-cart.svg";
import Medal from "@/assets/images/icons/icon-medalla.svg";
import Market from "@/assets/images/icons/icon-market.svg";
import User from "@/assets/images/icons/icon-user.svg";
import Play from "@/assets/images/icons/icon-play.png";
import Close from "@/assets/images/icons/icon-close.svg";
import "sweetalert2/src/sweetalert2.scss";
import "@/assets/styles/views/UserDetalle.scss";

export default {
  name: "dashboard-detail-mobile",
  components: {


    FormUserDetalle,
    DropPreview,
    Drop
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const fileImg = ref(null);
    const fileData = ref({});
    const file = ref("");
    const active = ref("home_1");


    const date = ref("");
    const imgArray = ref([Shell, Cart, Medal, Market, User]);
    const show = ref(false);
    



    const formValues = ref({
      home_1: {
        id: '',
        type_of_banner: 'Detail',
        type: 'Image',
        file: '',
        url: '',
        blank: '',
        title: '',
        description: '',
        temporized_ini: '',
        temporized_end: '',
        default: '1',
        mobil: '1',
        where: 'detail',
        flag: 'home_1',
      },
    });



    const bannerActive = (flag) => {
      active.value = flag;
      file.value = '';
      show.value = true;
    }

    const showForm = () => {
      show.value = false;

    }

    const onFileAdd = (inputFile, inputFileData, type) => {
      file.value = inputFile;
      fileData.value = inputFileData;
      show.value = true;
    };

    const onFileRemove = (inputFile, inputFileData, type) => {
      file.value = inputFile;
      fileData.value = inputFileData;
      show.value = true;
    };

    const listenerUpdate = (value) => {
      console.log("🚀 ~ file: BannersConfigDetalle.vue ~ line 228 ~ listenerUpdate ~ value", value)
      getData();
    };

    async function getData() {
      
      const { data } = await ApiService.get("api/banners/detail");

      console.log("🚀 ~ file: ConfigView.vue ~ line 306 ~ onMounted ~ res", data.data.mobil)
      //Array(9).fill('').map 
      Object.keys(formValues.value).map((element, index) => {
        formValues.value[`home_${index + 1}`] = {
          ...formValues.value[`home_${index + 1}`],
          id: data.data.mobil[index] ? data.data.mobil[index].id : '',
          type_of_banner: data.data.mobil[index] ? data.data.mobil[index].type_of_banner : formValues.value[`home_${index + 1}`].type_of_banner,
          type: data.data.mobil[index] ? data.data.mobil[index].type : 'Image',
          file: data.data.mobil[index] ? data.data.mobil[index].file : '',
          url: data.data.mobil[index] ? data.data.mobil[index].url : '',
          blank: data.data.mobil[index] ? data.data.mobil[index].blank : '',
          title: data.data.mobil[index] ? data.data.mobil[index].title : '_',
          description: data.data.mobil[index] ? data.data.mobil[index].description : '_',
          temporized_ini: data.data.mobil[index] ? data.data.mobil[index].temporized_ini : '',
          temporized_end: data.data.mobil[index] ? data.data.mobil[index].temporized_end : '',
          default: data.data.mobil[index] ? data.data.mobil[index].default : '',
          mobil: data.data.mobil[index] ? data.data.mobil[index].mobil : '',
          banner: data.data.mobil[index] ? data.data.mobil[index].banner : '',
          where: 'detail',
          flag: `home_${index + 1}`,

        }
      });
    }
    onMounted(async () => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-load");
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];

     await getData();

      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-load");
    });

    return {
      onFileRemove,
      onFileAdd,
      fileImg,
      fileData,
      file,
      Background,
      bannerActive,
      active,
      listenerUpdate,
      formValues,
      icon_edit,
      imgArray,
      date,
      Play,
      Close,
      showForm,
      show
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
