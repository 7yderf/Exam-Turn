<template>
  <Form_ v-slot="{ errors }" @submit="onSubmit" :validation-schema="schema" :initial-values="formValues"
    class="banners__form" ref="formm">
    <div class="banners__inputs-content banners__inputs-content--column">
      <div v-show="!formValues?.where.includes('home')" class="banners__inputs banners__inputs--radio">
        <label for="type" class="label" :data-require="Boolean(errors.type)">Tipo</label>
        <div class="banners__inputs-radio banners__inputs-radio--child">
          <Field name="type" type="radio" value="Image" :checked="true" />
          <span class="banner__radio-label">imagen</span>
        </div>
        <div class="banners__inputs-radio">
          <Field name="type" type="radio" value="Video" v-model="type_Video" />
          <span class="banner__radio-label">video</span>
        </div>

        <span class="input__error">{{ errors.type }}</span>
      </div>
      <div class="banners__inputs">
        <label for="url" class="label">Url del banner</label>
        <Field as="input" name="url" v-model="urlVideo" class="input input--white"
          placeholder="https://www.facebook.co..." />
        <div class="banners__inputs-radio banners__inputs-radio--checkbox">
          <Field name="blank" type="checkbox" value="1" />
          <span class="banner__radio-label">Abrir en otra pestaña</span>
        </div>
      </div>
      <p v-show="!formValues?.where.includes('home')" class="banners__form-text">
        {{active}}
      </p>
      <div class="banners__inputs" v-show="!formValues?.where.includes('home')">
        <label for="title" class="label" :data-require="Boolean(errors.tile)">Titulo del banner</label>
        <Field as="input" name="title" class="input input--white" :data-error="Boolean(errors.title)"
          v-model="title_banner" placeholder="Ingresa texto" />
        <span class="input__error">{{ errors.title }}</span>
      </div>
      <div class="banners__inputs" v-show="!formValues?.where.includes('home')">
        <label for="description" class="label" :data-require="Boolean(errors.description)">Texto del
          banner</label>
        <Field as="textarea" name="description" class="input input--white" :data-error="Boolean(errors.description)"
          v-model="texto_banner" placeholder="Ingresa texto" />
        <span class="input__error">{{ errors.description }}</span>
      </div>
      <div class="banners__inputs">
        <label for="temporized" class="label">Temporalidad del banner</label>

        <Field name="temporized" class="input input--white" v-slot="{ field }">
          <Datepicker v-bind="field" v-model="date" :enableTimePicker="false" range>
          </Datepicker>
        </Field>
        <div class="banners__inputs-radio banners__inputs-radio--checkbox"
          v-show="!formValues?.where.includes('home')">
          <Field name="default" type="checkbox" value="1" />
          <span class="banner__radio-label">Banner predeterminado</span>
        </div>
      </div>
    </div>

    <div class="banners__send">
      <button class="banners__send-btn" v-if="formValues?.id">
        Actualizar
      </button>
      <button class="banners__send-btn" v-else>Guardar Cambios</button>
    </div>
  </Form_>
</template>
<script>
import { ref, onMounted, markRaw, watch } from "vue";
import { Form as Form_, Field, useResetForm, useForm } from "vee-validate";
import ApiService from "@/core/services/ApiService";
import * as yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import "sweetalert2/src/sweetalert2.scss";
import "@/assets/styles/views/Banners.scss";
import "@/assets/styles/components/Input.scss";
export default {
  name: "drop",
  components: {
    Form_,
    Field,
  },
  props: {
    formValues: Object,
    active: String,
    file: { type: File, default: String },

  },
  setup(props, { emit }) {
    const urlVideo = ref("");
    const type_Video = ref("");
    const video_Iframe = ref("");
    const formm = ref(null);
    const date = ref();
    const title_banner = ref("");
    const texto_banner = ref("");

    const schema = markRaw(
      yup.object().shape({
        type: yup.string().required("El dato es obligatorio"),
        title: yup.string().required("El dato es obligatorio"),
        description: yup.string().required("El dato es obligatorio"),
      })
    );

    watch(
      () => type_Video.value,
      (val) => {
        if (val == "Video") {
          console.log(
            "🚀 ~ file: ConfigView.vue ~ line 332 ~ setup ~ val",
            urlVideo.value
          );
          if (urlVideo.value.includes("youtube.com")) {
            video_Iframe.value = urlVideo.value.replace("watch?v=", "embed/");
          }
        }
        emit("video", type_Video.value, video_Iframe.value);
      }
    );
    watch(
      () => urlVideo.value,
      (val) => {
        if (type_Video.value == "Video") {
          if (val.includes("youtube.com")) {
            video_Iframe.value = val.replace("watch?v=", "embed/");
          }
        }
        emit("video", type_Video.value, video_Iframe.value);
      }
    );
    watch(
      () => props.active,
      (val) => {
        console.log("🚀 ~ file: FormUser.vue ~ line 133~ setup ~ val", val);
        console.log("🚀 ~ file: FormUser.vue ~ line 138 ~ setup ~ texto_banner.value", texto_banner.value)
        urlVideo.value = "";
        video_Iframe.value = "";
        title_banner.value = "";
        texto_banner.value = "";
        
        formm.value.resetForm();
        
      }
    );
    watch(
      () => title_banner.value,
      (val) => {
        emit("title", title_banner.value);
      }
    );
    watch(
      () => texto_banner.value,
      (val) => {
        emit("texto", texto_banner.value);
      }
    );

    const onSubmit = (values) => {
      console.log(values);
      console.log(props.file);

      console.log(props.formValues?.id);
      let id = '';
      if (props.formValues?.id) {
        id = props.formValues?.id;
      }

      const formData = new FormData();

      if (props.file && values.type == "Image") {
        formData.append("file", props.file);
      } else if (values.type == "Video") {
        formData.append("file", props.file);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debes seleccionar un archivo",
        });
        return;
      }

      formData.append("type_of_banner", values.type_of_banner);
      formData.append("type", values.type);
      formData.append("url", values.url);
      formData.append("blank", values.blank);
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append(
        "temporized_ini",
        values.temporized ? values.temporized[0].toISOString().split('T')[0] + ' 00:00:00' : '');
      formData.append(
        "temporized_end",
        values.temporized ? values.temporized[1].toISOString().split('T')[0] + ' 00:00:00' : '');
      if (values.where.includes('home')) {
        formData.append("default", values.temporized ? 0 : 1);
      } else {
        formData.append("default", values.default);
      }

      formData.append("mobil", values.mobil);
      formData.append("where", values.where);


      ApiService.post(`/api/banners/home/${id}`, formData)
        .then((res) => {
          console.log(res);
          console.log(values);
          emit("update", res.data);
          Swal.fire({
            icon: "success",
            title: "¡Gracias!",
            text: "Actualizado correctamente",
          });
        })
        .catch((err) => {
          console.log(
            "🚀 ~ file: ConfigView.vue ~ line 167 ~ onSubmit ~ err",
            err
          );
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal, intenta de nuevo",
          });
        });

    };

    return {
      schema,
      onSubmit,
      urlVideo,
      type_Video,
      video_Iframe,
      title_banner,
      texto_banner,
      formm,
      date,
    };
  },
  emits: ["video", "title", "texto", "update"],
};
</script>

<style scoped lang="scss">

</style>
