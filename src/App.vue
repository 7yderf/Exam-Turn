<template>
  <router-view />
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, nextTick, onMounted } from "vue";
import { Mutations } from "@/store/enums/StoreEnums";


export default defineComponent({
  name: "app",
  setup() {
    const store = useStore();

    onMounted(() => {
      /**
       * this is to override the layout config using saved data from localStorage
       * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
       */
      store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);

    });
  },
});
</script>

<style lang="scss">


@import "assets/styles/General.scss";


</style>
