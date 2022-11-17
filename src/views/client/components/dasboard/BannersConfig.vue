<template>
  <div class="banners__main">
    <div class="banners__prewiev">

      <h2 class="banners__title">Previsualización</h2>

      <div class="banners__carrusel-box" v-for="(value, key, index) in formValues" :key="index"
        :data-active="value.flag === active">
        <div class="banners__box-media">
          <div class="banners__box-play" v-if="typeVideo == 'Video'">
            <img :src="Play" alt="" class="banners__box-play-im">
          </div>
          <iframe v-if="typeVideo == 'Video'"
            :src="value.flag === active && value.where === 'slider' ? videoIframe : formValues['home_1'].url"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <img v-else
            :src="value.flag === active && value.where === 'slider' ? value.banner : formValues['home_1'].banner" alt=""
            class="bannesr_box-media-img">
        </div>
        <div class="banners__carrusel-background" :data-update="Boolean(value.id)"
          v-if="value.where == 'slider' && value.flag == active && typeVideo == 'Image'">
          <img :src="Background" alt="">
          <p class="banners__carrusel-back-text">
            Arrastra o
            <span class="banners__carrusel-back-span">
              selecciona una imgen
            </span>
            para el Banner
            {{ value.flag }}
          </p>
          <p class="banners__carrusel-back-info">
            (1920x1080 px, .png .jpeg. jpg)
          </p>

        </div>

        <Drop v-if="typeVideo == 'Image' && value.flag === active && value.where === 'slider'" :type="value.flag"
          :active="active" :fileData="fileData" @changeAddFile="onFileAdd" @changeRemoveFile="onFileRemove" />
        <div class="banners__box-tex-banners">
          <h2 class="banners__box-title">{{ value.flag === active && value.where === 'slider' ? titles :
              formValues['home_1'].title
          }}</h2>
          <p class="banners__box-text">{{ value.flag === active && value.where === 'slider' ? texts :
              formValues['home_1'].description
          }}</p>
        </div>


      </div>

      <div class="banners__opcions-active">
        <button v-for="(value, key, index) in formValues" :key="index" :data-active="value.where === 'slider'"
          class="banners__opcion-btn-active" @click="bannerActive(value.flag)">
          {{ index + 1 }}
        </button>
      </div>

      <div class="banners__home2">
        <div v-for="(value, key, index) in formValues" :key="index" class="banners__home2-box"
          :data-active="value.where === 'home2'">
          <div class="banners__home2-active-box" v-if="value.flag !== active" @click="bannerActive(value.flag)">
          </div>
          <div class="banners__home2-box-drop" v-if="value.where === 'home2'">
            <img :src="value.banner" alt="" class="banners__home2-img-back">
            <div class="banners__home2-drop">
              <Drop :type="value.flag" :active="active" :fileData="fileData" @changeAddFile="onFileAdd"
                @changeRemoveFile="onFileRemove" />
            </div>
            <button class="banners__home2-btn-active" @click="bannerActive(value.flag)">
              <img :src="icon_edit" alt="" />
            </button>
          </div>

        </div>
        <div class="banners__home2-box" :data-active="true">

          <p class="banners__home2-copy-1">Compra un auto certificado</p>
          <p class="banners__home2-copy-2">Revisa nuestros planes de financiamiento</p>

        </div>
      </div>

      <div class="banners__added">
        <p class="banners__added-title">Recientemente agregados</p>
        <div class="banners__added-box" v-for="mock in Array(3)
        .fill('')
        .map((_, i) => i)" :key="mock">
          <div class="banners__added-box-img">
            <img :src="imgArray[1]" alt="">
          </div>
          <div class="banners__added-box-text">
            <p class="banners__added-text">Vehículo</p>
          </div>
        </div>
      </div>

      <div class="banners__home2">
        <div v-for="(value, key, index) in formValues" :key="index" class="banners__home2-box"
          :data-active="value.where === 'home3'">
          <div class="banners__home2-active-box" v-if="value.flag !== active" @click="bannerActive(value.flag)">
          </div>
          <div class="banners__home2-box-drop" v-if="value.where === 'home3'">
            <img :src="value.banner" alt="" class="banners__home2-img-back">
            <div class="banners__home2-drop">
              <Drop :type="value.flag" :active="active" :fileData="fileData" @changeAddFile="onFileAdd"
                @changeRemoveFile="onFileRemove" />
            </div>
            <button class="banners__home2-btn-active" @click="bannerActive(value.flag)">
              <img :src="icon_edit" alt="" />
            </button>
          </div>

        </div>
        <div class="banners__home2-box banners__home2-box--dark" :data-active="true">

          <p class="banners__home2-copy-1 banners__home2-copy-1--dark">Compra un auto certificado</p>
          <p class="banners__home2-copy-2 banners__home2-copy-2--dark">Revisa nuestros planes de financiamiento</p>

        </div>
      </div>

      <div class="banners__added banners__added--shell">
        <p class="banners__added-title banners__added-title--shell">Recientemente agregados</p>
        <div class="banners__added-box banners__added-box--shell" v-for="(mock, index) in Array(3)
        .fill('')
        .map((_, i) => i)" :key="mock">
          <div class="banners__added-box-img banners__added-box-img--shell">
            <img :src="imgArray[index]" alt="">
          </div>
        </div>
      </div>

      <div class="banners__added banners__added--delivery">
        <p class="banners__added-title banners__added-title--delivery">Tú decides la entrega</p>
        <div class="banners__added-box banners__added-box--delivery" v-for="mock in Array(2)
        .fill('')
        .map((_, i) => i)" :key="mock">
          <div class="banners__added-box-img banners__added-box-img--delivery">
            <img :src="imgArray[3]" alt="">
          </div>
          <div class="banners__added-box-text banners__added-box-text--delivery">
            <p class="banners__added-text banners__added-text--delivery">Vehículo</p>
          </div>
        </div>
      </div>

      <div class="banners__added">
        <p class="banners__added-title">Recientemente agregados</p>
        <div class="banners__added-box" v-for="mock in Array(3)
        .fill('')
        .map((_, i) => i)" :key="mock">
          <div class="banners__added-box-img">
            <img :src="imgArray[4]" alt="">
          </div>
          <div class="banners__added-box-text">
            <p class="banners__added-text">Vehículo</p>
          </div>
        </div>
      </div>

    </div>

    <div class="banners__form-box">
      <h2 class="banners__title banners__title--form">Opciones</h2>
      <div class="banners__subtitle-content">
        <p class="banners__subtitle">Selecciona un banner</p>
        <button v-show="show" class="banners__subtitle" @click="showForm">
          <img :src="Close" alt="" class="banners__btn-set">
        </button>
      </div>

      <div class="banners__form-stycky" v-show="show" v-if="refreshData">
        <DropPreview :banners="formValues" :active="active" :fileData="fileData" />

        <FormUser :formValues="defaultValues ? defaultValues : formValues['home_1']" :active="active" :file="file"
          @video="checkVideo" @title="listenerTitle" @texto="listenerText" @update="listenerUpdate" />
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
import FormUser from "@/views/client/components/FormUser.vue";

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
import "@/assets/styles/views/Banners.scss";
import "@/assets/styles/components/Input.scss";

export default {
  name: "dashboard",
  components: {

   
    FormUser,
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

    const typeVideo = ref("");
    const videoIframe = ref("");
    const titles = ref("");
    const texts = ref("");
    const date = ref("");
    const imgArray = ref([Shell, Cart, Medal, Market, User]);
    const show = ref(false);
    const defaultValues = ref(false);
    const refreshData = ref(true);




    const formValues = ref({
      home_1: {
        id: '',
        type_of_banner: 'Home',
        type: 'Image',
        file: '',
        url: '',
        blank: '',
        title: 'tietulo',
        description: '',
        temporized_ini: '',
        temporized_end: '',
        default: '',
        mobil: '',
        where: 'slider',
        flag: 'home_1',
      },
      home_2: {
        id: '',
        type_of_banner: 'Home',
        type: 'Image',
        file: '',
        url: '',
        blank: '',
        title: '',
        description: '',
        temporized_ini: '',
        temporized_end: '',
        default: '',
        mobil: '',
        where: 'slider',
        flag: '',
      },
      home_3: {

        id: '',
        type_of_banner: 'Home',
        type: 'Image',
        file: '',
        url: '',
        blank: '',
        title: '',
        description: '',
        temporized_ini: '',
        temporized_end: '',
        default: '',
        mobil: '',
        where: 'slider',
        flag: '',
      },
      home_4: {

        id: '',
        type_of_banner: 'Home',
        type: 'Image',
        file: '',
        url: '',
        blank: '',
        title: 'No aplica',
        description: 'No aplica',
        temporized_ini: '',
        temporized_end: '',
        default: '',
        mobil: '',
        where: 'home2',
        flag: '',
      },
      home_5: {
        id: '',
        type_of_banner: 'Home',
        type: 'Image',
        file: '',
        url: '',
        blank: '',
        title: 'No aplica',
        description: 'No aplica',
        temporized_ini: '',
        temporized_end: '',
        default: '',
        mobil: '',
        where: 'home3',
        flag: '',
      },
    });

    watch(
      () => active.value,
      (val) => {
        refreshData.value = false
        console.log("🚀 ~ file: BannersConfig.vue ~ line 336 ~ setup ~  refreshData.value", refreshData.value)
        console.log("🚀 ~ active ~ setup ~ val", val)
        console.log("🚀 ~ file: FormUser.vue ~ line 134 ~ setup ~ val", val);


        setTimeout(() => {
          defaultValues.value = formValues.value[val];
          titles.value = defaultValues.value.title;
          texts.value = defaultValues.value.description;
          refreshData.value = true
          console.log("🚀 ~ file: BannersConfig.vue ~ line 341 ~ setup ~ refreshData.value", refreshData.value)
        }, 100);
      }
    );


    watch(
      () => defaultValues.value,
      (val) => {
        if (val?.type === "Video"){
          console.log("🚀 ~ file: BannersConfig.vue ~ line 357 ~ setup ~ val?.type", val?.type)
          if (val?.url.includes("youtube.com")){
            typeVideo.value = "Video";
            videoIframe.value = val?.url.replace("watch?v=", "embed/");
          }
        } else if (val?.type === "Image"){
          typeVideo.value = "Image";
          videoIframe.value = "";
        } 
        
      }
    );
    const checkVideo = (type_Video, video_Iframe) => {
      typeVideo.value = type_Video;
      videoIframe.value = video_Iframe;
    }

    const listenerTitle = (title) => {
      titles.value = title;
    }
    const listenerText = (text) => {
      texts.value = text;
    }
    const bannerActive = (flag) => {
      active.value = flag;
      defaultValues.value = formValues.value[flag];
      file.value = '';
      show.value = true;
    }

    const showForm = () => {
      show.value = false
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
      const response = await fetch('https://apivanguardia.demosturn.com/api/banners/home', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.id_token_gateway}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      const data = await response.json();

      console.log("🚀 ~ file: ConfigView.vue ~ line 306 ~ onMounted ~ res", data.data.desktop)
      //Array(9).fill('').map 
      Object.keys(formValues.value).map((element, index) => {
        formValues.value[`home_${index + 1}`] = {
          ...formValues.value[`home_${index + 1}`],
          id: data.data.desktop[index] ? data.data.desktop[index].id : '',
          type_of_banner: data.data.desktop[index] ? data.data.desktop[index].type_of_banner : formValues.value[`home_${index + 1}`].type_of_banner,
          type: data.data.desktop[index] ? data.data.desktop[index].type : 'Image',
          file: data.data.desktop[index] ? data.data.desktop[index].file : '',
          url: data.data.desktop[index] ? data.data.desktop[index].url : '',
          blank: data.data.desktop[index] ? data.data.desktop[index].blank : '',
          title: data.data.desktop[index] ? data.data.desktop[index].title : '_',
          description: data.data.desktop[index] ? data.data.desktop[index].description : '_',
          temporized_ini: data.data.desktop[index] ? data.data.desktop[index].temporized_ini : '',
          temporized_end: data.data.desktop[index] ? data.data.desktop[index].temporized_end : '',
          default: data.data.desktop[index] ? data.data.desktop[index].default : '',
          mobil: data.data.desktop[index] ? data.data.desktop[index].mobil : '',
          banner: data.data.desktop[index] ? data.data.desktop[index].banner : '',
          where: data.data.desktop[index] ? data.data.desktop[index].where : formValues.value[`home_${index + 1}`].where,
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
      typeVideo,
      videoIframe,
      checkVideo,
      formValues,
      listenerTitle,
      listenerText,
      titles,
      texts,
      icon_edit,
      imgArray,
      date,
      Play,
      Close,
      showForm,
      listenerUpdate,
      show,
      defaultValues,
      refreshData
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
