<template>
  <div class="search__content-search">
    <img
      src="@/assets/images/icons/icon-serch.svg"
      alt=""
      class="search__icon-search"
      @click="serchEnter(searchGlobal)"
      data-bs-dismiss="modal"
    />
    <input
      v-model="searchGlobal"
      class="input input__input"
      :data-search="true"
      @keyup.enter="serchEnter(searchGlobal)"
      placeholder="Buscar vehículo"
      @focus="showSearch"
      @blur="handelSerch"
      v-on:input="debounceInput"
      id="input_search_enter"
    />
    <div
      class="search__resultSerch"
      :data-Show="opcionSerch"
      v-if="searchInput !== ''"
    >
      <div
        class="search__resultSerch-list"
        v-for="item in searchInput"
        :key="item.id"
        @click="serchParams(item.id)"
        data-bs-dismiss="modal"
      >
        {{ `${item.brand} ${item.model} ${item.year}` }}
      </div>
    </div>
    <div
      class="search__resultSerch"
      :data-Show="opcionSerch"
      v-if="searchInputService !== ''"
    >
      <div
        class="search__resultSerch-list"
        v-for="item in searchInputService.slice(0, 5)"
        :key="item.id"
        @click="serchParams(item.slug)"
        data-bs-dismiss="modal"
      >
        {{ `${item.title}` }}
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";
import _ from "lodash";
import * as bootstrap from "bootstrap";
export default {
  name: "Search",

  props: {
    prop_searchGlobal: String,
  },
  setup(props, { emit }) {
    const searchGlobal = ref("");
    const searchInput = ref([]);
    const searchInputService = ref([]);
    const opcionSerch = ref(false);
    const route = useRoute();
    const router = useRouter();
    const limitResults = props.limitResults ?? "";
    const mod = ref(false);
    const windowWidth = ref(window.innerWidth);
    const resized = ref(false);
    const mobile = ref(windowWidth.value < 990 ? true : false);
    const showSearch = async () => {
      opcionSerch.value = true;
      try {
        if (searchInput.value.length === 0 && searchGlobal.value == "") {
          if (localStorage.getItem('favorites')) {
            const favorites = JSON.parse(localStorage.getItem('favorites'));
            searchInput.value = Object.values(favorites).reverse().slice(0, 5);
            searchInputService.value = [];
          }
          opcionSerch.value = true;
        }
      } catch (error) {
        console.log(error);
      }
    };
    const handelSerch = () => {
      setTimeout(() => {
        opcionSerch.value = false;
      }, 500);
    };
    const getResized = () => {
      windowWidth.value = window.innerWidth;
      /*  console.log(windowWidth.value); */
      if (windowWidth.value < 990) {
        (resized.value = true), (mobile.value = true);
      } else {
        resized.value = false;
        mobile.value = false;
      }
    };
    onMounted(() => {
      window.addEventListener("resize", getResized);
      getResized();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", getResized);
    });
    const serchParams = (cart) => {
      const url = "/detalle/" + cart;
      router.push(url);
    };

    const serchEnter = async (search) => {
      searchGlobal.value = search;
      const url = `/catalogo?search=${search}`;

      let modal = bootstrap.Modal.getInstance(
        document.getElementById("modal_search")
      );
      if (modal) {
        modal.hide();
      }
      modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      if (modal) {
        modal.hide();
      }
      console.log(modal);
      router.push(url);
    };

    const debounceInput = _.debounce(async () => {
      if (searchGlobal.value == "" || !searchGlobal.value) {
        if (localStorage.getItem('favorites')) {
          const favorites = JSON.parse(localStorage.getItem('favorites'));
          searchInput.value = Object.values(favorites).reverse().slice(0, 5);
          searchInputService.value = [];
        }
      } else {
        const { data } = await ApiService.get(
          `api/vehicles/search?str=${searchGlobal.value}`
        );
        searchInputService.value = data.data;
        searchInput.value = [];
        console.log("query", data.data);
      }
    }, 400);

    return {
      showSearch,
      handelSerch,
      serchParams,
      searchGlobal,
      searchInput,
      opcionSerch,
      debounceInput,
      searchInputService,
      serchEnter,
      limitResults,
      mod,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/Mixins";
$clock: url("@/assets/images/icons/icon-clock.svg");
.search {
  &__content-search {
    position: relative;
  }
  &__content-search {
    @include flex();
    position: relative;
  }
  &__icon-search {
    position: absolute;
    right: 15px;
    z-index: 2;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      transition: 0.3s;
    }
  }
  &__resultSerch {
    @include flex(flex-start, false, flex-start);
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    display: none;
    &[data-Show="true"] {
      display: flex;
    }
  }
  &__resultSerch-list {
    @include flex(flex-start, false, center);
    width: 100%;
    background-color: var(--primary-color);
    padding: 8px;
    @include text(1.4rem, 300, 2.4rem);
    color: var(--text-contrast-color);
    &::before {
      @include background-img($clock);
      content: "";
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
    &:hover {
      background-color: var(--text-contrast-color);
      color: var(--text-color);
      font-weight: 400;
      &::before {
        filter: invert(1);
      }
    }
  }
}
</style>
