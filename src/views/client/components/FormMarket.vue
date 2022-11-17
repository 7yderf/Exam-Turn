<template>
  <Form_
    v-slot="{ errors }"
    @submit="onSubmit"
    :validation-schema="schema"
    :initial-values="initialValues"
    class="banners__form"
    ref="formm"
  >
    <div class="banners__inputs-content banners__inputs-content--column">
      <!-- <div class="banners__inputs banners__inputs--radio">
        <label for="type" class="label" :data-require="Boolean(errors.type)"
          >tipo</label
        >
        <div class="banners__inputs-radio banners__inputs-radio--child">
          <Field name="type" type="radio" value="Image" :checked="true" />
          <span class="banner__radio-label">imagen</span>
        </div>
        <div class="banners__inputs-radio">
          <Field name="type" type="radio" value="Video" v-model="type_Video" />
          <span class="banner__radio-label">video</span>
        </div>

        <span class="input__error">{{ errors.type }}</span>
      </div> -->
      <div class="banners__inputs">
        <label for="url" class="label">Url del banner</label>
        {{ active }}
        <Field
          as="input"
          name="url"
          v-model="urlVideo"
          class="input input--white"
          placeholder="https://www.facebook.co..."
        />
        <div class="banners__inputs-radio banners__inputs-radio--checkbox">
          <Field name="blank" type="checkbox" value="1" />
          <span class="banner__radio-label">Abrir en otra pestaña</span>
        </div>
      </div>
      <!-- <p class="banners__form-text">Descripción del banner</p>
      <div class="banners__inputs">
        <label for="title" class="label" :data-require="Boolean(errors.tile)"
          >Titulo del banner</label
        >
        <Field
          as="input"
          name="title"
          class="input input--white"
          :data-error="Boolean(errors.title)"
          placeholder="Ingresa texto"
        />
        <span class="input__error">{{ errors.title }}</span>
      </div> -->
      <!-- <div class="banners__inputs">
        <label
          for="description"
          class="label"
          :data-require="Boolean(errors.description)"
          >Texto del banner</label
        >
        <Field
          as="textarea"
          name="description"
          class="input input--white"
          :data-error="Boolean(errors.description)"
          placeholder="Ingresa texto"
        />
        <span class="input__error">{{ errors.description }}</span>
      </div> -->
      <div class="banners__inputs">
        <label for="temporized" class="label">Temporalidad del banner</label>

        <Field name="temporized" class="input input--white" v-slot="{ field }">
          <Datepicker
            v-bind="field"
            v-model="date"
            :enableTimePicker="false"
            range
          >
          </Datepicker>
        </Field>
        <!-- <div class="banners__inputs-radio banners__inputs-radio--checkbox">
          <Field name="default" type="checkbox" value="1" />
          <span class="banner__radio-label">Banner predeterminado</span>
        </div> -->
      </div>
    </div>

    <div class="banners__send">
      <button class="banners__send-btn" v-if="formValues[active]?.id">
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
    file: undefined,
  },
  setup(props, { emit }) {
    const urlVideo = ref("");
    const type_Video = ref("");
    const video_Iframe = ref("");
    const formm = ref(null);
    const date = ref();
    console.log(props.formValues);
    const initialValues = ref(props.formValues[props.active]);
    const schema = markRaw(
      yup.object().shape({
        /* type: yup.string().required("El dato es obligatorio"),
         */
        /* title: yup.string().required("El dato es obligatorio"),
        description: yup.string().required("El dato es obligatorio"),
       */
      })
    );

    /* watch(
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
    ); */
    /* watch(
      () => urlVideo.value,
      (val) => {
        if (type_Video.value == "Video") {
          if (val.includes("youtube.com")) {
            video_Iframe.value = val.replace("watch?v=", "embed/");
          }
        }
        emit("video", type_Video.value, video_Iframe.value);
      }
    ); */
    watch(
      () => props.active,
      (val) => {
        console.log("🚀 ~ file: FormUser.vue ~ line 134 ~ setup ~ val", val);
        formm.value.resetForm();
        urlVideo.value = "";
        video_Iframe.value = "";
        formm.value.setValues(props.formValues[val]);
        initialValues.value = props.formValues[val];
      }
    );

    const onSubmit = (values) => {
      /* console.log(values); */
      console.log(props.file);
      const formData = new FormData();
      const id = values.id;

      if (props.file) {
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
      formData.append("type", "Image");
      formData.append("url", values.url);
      formData.append("blank", values.blank);
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append(
        "temporized_ini",
        values.temporized
          ? values.temporized[0].toISOString().split("T")[0] + " 00:00:00"
          : ""
      );
      formData.append(
        "temporized_end",
        values.temporized
          ? values.temporized[1].toISOString().split("T")[0] + " 00:00:00"
          : ""
      );
      formData.append("default", values.temporized ? 0 : 1);
      formData.append("mobil", values.mobil);
      formData.append("where", "" /*  values.where */);

      /* ApiService.update(`/api/banners/marketplace/${values.id}`, formData)
          .then((res) => {
            console.log(res);
            console.log(values);
            Swal.fire({
              icon: "success",
              title: "¡Gracias!",
              text: "Guardado con exito",
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
      } else { */
      ApiService.post(`/api/banners/marketplace/${id}`, formData, true)
        .then(async (res) => {
          console.log(res);
          console.log(values);
          Swal.fire({
            icon: "success",
            title: "¡Gracias!",
            text: "Actualizado correctamente",
          });
          console.log(values);
          const toBase64 = (file) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = (error) => reject(error);
            });
          values.banner = await toBase64(props.file);
          emit("updateState", values, values.flag);
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
      /* } */
    };

    return {
      schema,
      onSubmit,
      urlVideo,
      type_Video,
      video_Iframe,
      formm,
      date,
      initialValues,
    };
  },
  emits: ["video", "updateState"],
};
</script>

<style scoped lang="scss"></style>
