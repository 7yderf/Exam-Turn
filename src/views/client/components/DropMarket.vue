<template>
  <div class="banners__dropzone-box">
    <p style="color: black; position: absolute">{{ type }}</p>
    <DropZone
      :maxFiles="50"
      :uploadOnDrop="false"
      :multipleUpload="false"
      :parallelUpload="2"
      @addedFile="onFileAdd"
      @removedFile="onFileRemove"
      ref="file"
      :paramName="type"
      :data-close="type"
    />
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { DropZone } from "dropzone-vue";
export default {
  name: "drop",
  components: {
    DropZone,
  },
  props: {
    type: String,
    active: String,
    fileData: Object,
  },
  setup(props, { emit }) {
    const file = ref(null);
    const inputFileImg = ref(null);
    const inputFileData = ref({});
    const inputFile = ref(null);

    const onFileAdd = (e) => {
      inputFile.value = e.file;
      inputFileData.value = props.fileData;
      Object.values(file.value.all).forEach((item) => {
        const firsImage = Object.keys(file.value.all).reverse()[0];
        file.value.all = {
          [firsImage]: item,
        };
      });
      console.log("inputFileData.value,", inputFileData.value);

      setTimeout(() => {
        inputFileData.value = {
          ...inputFileData.value,
          [props.type]: {
            img: document.querySelector(
              `[data-close="${props.type}"] > .dropzone__item > .dropzone__item-thumbnail > img`
            ).src,
            name: document.querySelector(
              `[data-close="${props.type}"] > .dropzone__item > .dropzone__details > .dropzone__filename`
            ).innerText,
            size: document.querySelector(
              `[data-close="${props.type}"] > .dropzone__item > .dropzone__details > .dropzone__file-size`
            ).innerText,
          },
        };
        emit("changeAddFile", inputFile.value, inputFileData.value, props.type);
      }, 200);
    };

    const onFileRemove = (e) => {
      inputFile.value = null;
      inputFileData.value = props.fileData;
      inputFileData.value = {
        ...inputFileData.value,
        [props.type]: {
          img: null,
          name: null,
          size: null,
        },
      };

      emit(
        "changeRemoveFile",
        inputFile.value,
        inputFileData.value,
        props.type
      );
    };

    return {
      file,
      onFileAdd,
      onFileRemove,
    };
  },
  emits: ["changeAddFile", "changeRemoveFile"],
};
</script>

<style scoped lang="scss"></style>
