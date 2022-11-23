<template>
  <div class="catalogo">
    <HelloWorld />
    <div class="hero-mobile">
      <span :class="[cuantity > 0 ? 'catalogo__text-results' : '']">
        {{ cuantity > 0 ? "Resultados de la busqueda" : "Vehículos" }}
      </span>
      <span class=""> {{ paginate.total }} resultados </span>
    </div>
    <div class="catalogo__hero d-none d-lg-block">
      <div class="catalogo__search">
        <div class="catalogo__clean-filters">
          <p class="catalogo__text-filters">
            Filtros<span>{{ ` (${cuantity})` }}</span>
          </p>

          <button
            @click="clearFilters"
            class="d-flex justify-content-between gap-3 catalogo__text-filters catalogo__text-filters--clear"
          >
            <span>Limpiar filtros</span>
            <img src="@/assets/images/icons/refresh.svg" alt="" />
          </button>
        </div>
        <div class="catalogo__input-box">
          <div class="d-flex d-none d-lg-block catalogo__results">
            <span class="catalogo__text-results">Vehículos</span
            ><span class="text-gray catalogo__text-results--sub">
              {{ paginate.total }} resultados</span
            >
          </div>
          <Search :prop_searchGlobal="searchGlobal" />
        </div>

        <div class="catalogo__order-select">
          <select
            class="pe-1 order input input__select"
            placeholder="Ordenar por:"
            v-model="order"
          >
            <option
              class="input__select-options"
              label="Ordenar"
              selected
              disabled
              :value="0"
            >
              Ordenar
            </option>
            
            <option
              class="input__select-options"
              label="Menor precio"
              :value="1"
            >
              Menor precio
            </option>
            <option
              class="input__select-options"
              label="Mayor precio"
              :value="2"
            >
              Mayor precio
            </option>
            <option
              class="input__select-options"
              label="Más antiguos"
              :value="3"
            >
            Más antiguos
            </option>
            <option
              class="input__select-options"
              label="Más recientes"
              :value="4"
            >
            Más recientes
            </option>
            <option
              class="input__select-options"
              label="Menos km"
              :value="5"
            >
            Menos km
            </option>
            <option
              class="input__select-options"
              label="Más km"
              :value="6"
            >
              Más km
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="catalogo__body mx-auto mt-4">
      <div class="row catalogo__row my-5">
        <div class="col-lg-3 catalogo__aside">
          <Filters
            :prop_brands="brands"
            :prop_models="models"
            :prop_years="years"
            :prop_locations="locations"
            :prop_cities="cities"
            :prop_fuel="fuel"
            :prop_colorex="colorExt"
            :prop_colorin="colorInt"
            :prop_type="type"
            :prop_trans="transmissions"
            :prop_agencies="agencies"
            :prop_prices="priceValue"
            :prop_kms="kmsValue"
            @filterActive="filterActives"
            :prop_qty_filters="cuantity"
            :prop_filters_active="filtersActive"
            @deleteFilter="(active) => deleteFilter(active)"
            @orderActive="selectOrderBy"
          />
        </div>
        <div class="col-lg-9">
          <div class="catalogo__options-filters">
            <p
              class="catalogo__filters-active"
              @click="deleteFilter(active)"
              v-for="active in filtersActive"
              :key="active"
            >
              {{ active }}
              <img :src="Clear" alt="" class="catalogo__filters-icon-close" />
            </p>
          </div>
          <div class="col-12">
            <div class="row cards-cart">
              <div
                class="cards-cart__card cards-cart__loading"
                v-for="cart in Array(9)
                  .fill('')
                  .map((_, i) => i)"
                :key="cart"
              >
                <div class="cards-cart__loading-img"></div>
                <div class="cards-cart__loading-title"></div>
                <div class="cards-cart__loading-price"></div>
              </div>
              <template v-if="Object.keys(vehicles).length > 0">
                <div
                  class="cards-cart__card"
                  v-for="(value, key, index) in vehicles"
                  :key="index"
                >
                  <CardVehicle
                    v-if="value.slug"
                    :typeCard="typeCard"
                    :vehicle="value"
                  />
                  <div
                    class="cards-cart__banners"
                    v-if="value.desktop?.banner && windowSize"
                  >
                    <img
                      :src="value.desktop?.banner"
                      alt=""
                      class="cards-cart__banners-img"
                    />
                  </div>
                  <div
                    class="cards-cart__banners"
                    v-if="value.mobile?.banner && !windowSize"
                  >
                    <img
                      :src="value.mobil?.banner"
                      alt=""
                      class="cards-cart__banners-img"
                    />
                  </div>
                  <div
                    class="cards-cart__banners"
                    v-if="
                      !value.mobile?.banner &&
                      !windowSize &&
                      value.desktop?.banner
                    "
                  >
                    <img
                      :src="value.desktop?.banner"
                      alt=""
                      class="cards-cart__banners-img"
                    />
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="col-lg-6 mx-auto text-center noSearch">
                  <img
                    class="img-fluid noSearch__img"
                    :src="IconNoSearch"
                    alt=""
                  />
                  <p class="fs-1 noSearch__tit">No se encontraron vehículos</p>
                  <p class="noSearch__text">
                    Modifica los filtros para encontrar más opciones.
                  </p>
                </div>
                <div
                  class="col-12 my-10 simil"
                  v-if="Object.keys(similar).length > 0"
                >
                  <p class="mb-1 simil__text">También te pueden interesar</p>
                  <hr />
                  <article>
                    <div class="slide">
                      <CarouselCards
                        :vehicles="similar"
                        :typeCards="'similares'"
                      />
                    </div>
                  </article>
                </div>
              </template>
            </div>
            <div class="row" v-if="Object.keys(vehicles).length > 0">
              <div
                class="col-sm-12 col-md-7 ms-auto d-flex align-items-center justify-content-center justify-content-md-end mb-10"
              >
                <div
                  class="catalogo__paginate"
                  v-if="paginate.links.length > 3"
                >
                  <button
                    class="catalogo__paginate-btn"
                    @click="
                      currentPageChange(
                        paginate.links[paginate.current_page - 1].url
                      )
                    "
                    :disabled="paginate.current_page <= 1"
                  >
                    <IconArrow :prop_classes="['icon-reverse']" />
                  </button>

                  <button
                    class="catalogo__paginate-btn"
                    :data-show="paginate.current_page == page.label"
                    v-for="page in paginate.links.slice(
                      paginate.links.length < 6
                        ? 1
                        : paginate.current_page + paginate.links_number >
                          paginate.links.length - 2
                        ? paginate.links.length - 1 - paginate.links_number
                        : paginate.current_page,
                      paginate.links.length < 6
                        ? paginate.links.length - 1
                        : paginate.current_page + paginate.links_number >
                          paginate.links.length - 2
                        ? paginate.links.length - 1
                        : paginate.current_page -
                          paginate.links.length -
                          -paginate.links_number
                    )"
                    :key="page.url"
                    @click="currentPageChange(page.url)"
                  >
                    {{ page.label }}
                  </button>
                  <button
                    class="catalogo__paginate-btn"
                    @click="
                      currentPageChange(
                        paginate.links[paginate.current_page + 1].url
                      )
                    "
                    :disabled="
                      paginate.current_page >= paginate.links.length - 2
                    "
                  >
                    <IconArrow :prop_classes="['icon']" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, onMounted, computed, onBeforeMount } from "vue";
import Filters from "./components/Filters.vue";
// import Carousel from "@/views/client/components/Carousel.vue";
import Clear from "@/assets/images/icons/icon-close-filter.svg";
import { useRoute, useRouter } from "vue-router";
import CardVehicle from "./components/CardVehicle.vue";
import Search from "@/views/client/components/Search.vue";
import CarouselCards from "@/views/client/components/CarouselCards.vue";
import ApiService from "@/core/services/ApiService";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import HelloWorld from "@/components/HelloWorld.vue";
import IconNoSearch from "@/assets/images/icons/icon-no-search.svg";
import IconArrow from "@/views/client/components/IconArrow.vue";
import { object } from "yup/lib/locale";

export default {
  name: "Catalogo",
  components: {
    Filters,
    CardVehicle,
    HelloWorld,
    CarouselCards,
    Search,
    IconArrow,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const typeCard = ref("cards");
    const order = ref<number | null>(0);
    const brands = ref<any>(null);
    const models = ref<any>(null);
    const brandsAll = ref<any>(null);
    const years = ref<any>(null);
    const transmissions = ref<any>(null);
    const type = ref<any>(null);
    const fuel = ref<any>(null);
    const locations = ref<any>(null);
    const cities = ref<any>(null);
    const colorExt = ref<any>(null);
    const agencies = ref<any>(null);
    const colorInt = ref<any>(null);
    const vehicles = ref<any[]>([]);
    const similares = ref<any[]>([]);
    const priceValue = ref([0, 0]);
    const kmsValue = ref([0, 0]);
    const transmission = ref<string[]>([]);
    const fuelModel = ref<string[]>([]);
    const locationsModel = ref<string[]>([]);
    const cityModel = ref<string[]>([]);
    const priceFrom = ref("");
    const priceTo = ref("");
    const kmsFrom = ref("");
    const kmsTo = ref("");
    const cuantity = ref<number>(0);
    const activesFilter = ref<any>([]);
    const windowSize = ref(false);
    const paginate = ref({
      current_page: 1,
      per_page: 30,
      total: 0,
      links: [] as any[],
      links_number: 4
    });
    const similar = ref<any>([]);
    const searchGlobal = ref<string>("");
    const paramsQuery = ref({
      year: "",
      model: "",
      brand: "",
      type: "",
      fuel: "",
      transmission: "",
      price: "",
      state: "",
      city: "",
      search: "",
      colorex: "",
      colorin: "",
      agency: "",
      kms: "",
    });
    watch(
      () => route.query,
      () => {
        assingParams();
        getVehicles();
      }
    );
    const paginator = ref({ ...paginate.value });
    watch(
      () => paginate.value.links,
      () => {
        paginator.value = paginate.value;
      }
    );
    watch(
      () => order.value,
      (val) => {
        console.log("🚀 ~ file: Catalogo.vue ~ line 382 ~ setup ~ val", val)
        getVehicles();
      }
    );
    const selectOrderBy = (id) => {
      order.value = id;
    };

    const clearFilters = async () => {
      paramsQuery.value = {
        year: "",
        model: "",
        brand: "",
        type: "",
        fuel: "",
        transmission: "",
        price: "",
        state: "",
        city: "",
        search: "",
        colorex: "",
        colorin: "",
        agency: "",
        kms: "",
      };

      priceFrom.value = "";
      priceTo.value = "";
      priceValue.value = [0, 0];
      kmsFrom.value = "";
      kmsTo.value = "";
      kmsValue.value = [0, 0];

      order.value = 0;

      router.replace({
        ...router.currentRoute,
        query: Object.fromEntries(
          Object.entries(paramsQuery.value).filter(([_, v]) => v != "")
        ),
      });
    };
    const currentPageChange = async (url) => {
      console.log(url);
      url = url.replace("http://vehicles:9008/", "");
      getVehicles(url);
    };

    const filterActives = (id) => {
      activesFilter.value.push(id);
      console.log(
        "🚀 ~ file: Catalogo.vue ~ line 326 ~ filterActives ~ activesFilter",
        activesFilter.value
      );
    };

    
    const assingParams = () => {
      paramsQuery.value.year = route.query["year"]
        ? route.query["year"].toString()
        : "";
      paramsQuery.value.model = route.query["model"]
        ? route.query["model"].toString()
        : "";
      paramsQuery.value.price = route.query["price"]
        ? route.query["price"].toString()
        : "";
      paramsQuery.value.kms = route.query["kms"]
        ? route.query["kms"].toString()
        : "";
      paramsQuery.value.brand = route.query["brand"]
        ? route.query["brand"].toString()
        : "";
      paramsQuery.value.fuel = route.query["fuel"]
        ? route.query["fuel"].toString()
        : "";
      paramsQuery.value.transmission = route.query["transmission"]
        ? route.query["transmission"].toString()
        : "";
      paramsQuery.value.state = route.query["state"]
        ? route.query["state"].toString()
        : "";
      paramsQuery.value.colorex = route.query["colorex"]
        ? route.query["colorex"].toString()
        : "";
      paramsQuery.value.colorin = route.query["colorin"]
        ? route.query["colorin"].toString()
        : "";
      paramsQuery.value.city = route.query["city"]
        ? route.query["city"].toString()
        : "";
      paramsQuery.value.agency = route.query["agency"]
        ? route.query["agency"].toString()
        : "";
      searchGlobal.value = route.query["search"]
        ? route.query["search"].toString()
        : "";
      paramsQuery.value.type = route.query["type"]
        ? route.query["type"].toString()
        : "";
    };

    let data_brands: any = [];
    let data_models: any = [];
    let data_transmissions: any = [];
    let data_type: any = [];
    let data_fuel: any = [];
    let data_colorExt: any = [];
    let data_colorInt: any = [];
    let data_agencies: any = [];

    const dataVehicles = async () => {
      const url = "/api/vehicles/marketplace";

      const { data } = await ApiService.get(url);

      data_brands = data.data.filters["brand"];
      data_models = data.data.filters["model"];
      data_transmissions = data.data.filters["transmission"];
      data_type = data.data.filters["body-type"];
      data_fuel = data.data.filters["fuel-type"];
      data_colorExt = data.data.filters["color-exterior"];
      data_colorInt = data.data.filters["color-interior"];
      data_agencies = data.data.filters["agency"];
    };

    const getVehicles = async (link = "") => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading-vehicle");
      paginate.value.links = [];
      paginate.value.current_page = 1;

      try {
        let url =
          "/api/vehicles/marketplace?showing=" +
          paginate.value.per_page +
          "&page=" +
          1;
        priceValue.value = [0, 0];
        kmsValue.value = [0, 0];

        for (const p in paramsQuery.value) {
          const actual = paramsQuery.value[p];
          if (p == "brand" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              url += `&${p}=`;
              url += findBrandByName(element);
            });
          } else if (p == "price" && actual.length > 0) {
            const price_from = parseInt(
              actual.replaceAll(" ", "").replaceAll(",", "").split("-")[0]
            );
            const price_to = parseInt(
              actual.replaceAll(" ", "").replaceAll(",", "").split("-")[1]
            );
            url += `&price_from=${price_from}&price_to=${price_to}`;
          } else if (p == "kms" && actual.length > 0) {
            const kms_from = parseInt(
              actual.replaceAll(" ", "").replaceAll(",", "").split("-")[0]
            );
            const kms_to = parseInt(
              actual.replaceAll(" ", "").replaceAll(",", "").split("-")[1]
            );
            url += `&kms_from=${kms_from}&kms_to=${kms_to}`;
          } else if (p == "model" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              url += `&${p}=`;
              url += findModelByName(element);
            });
          } else if (p == "fuel" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              if (findFuelByName(element)) {
                url += `&${"fuel_type"}=`;
                url += findFuelByName(element);
              }
            });
          } else if (p == "type" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              if (findTypeByName(element)) {
                url += `&${"body_type"}=`;
                url += findTypeByName(element);
              }
            });
          } else if (p == "transmission" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              url += `&${p}=`;
              url += findTransByName(element);
            });
          } else if (p == "state" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              url += `&${p}=`;
              url += element;
            });
          } else if (p == "city" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              url += `&${p}=`;
              url += element;
            });
          } else if (p == "colorex" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              url += `&${"ext_color"}=`;
              url += findColorExtByName(element);
            });
          } else if (p == "colorin" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              url += `&${"int_color"}=`;
              url += findColorIntByName(element);
            });
          } else if (p == "agency" && actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              url += `&${p}=`;
              url += findAgenciesByName(element);
            });
          } else if (actual.length > 0) {
            actual.split(",").forEach((element, index) => {
              url += `&${p}=`;
              url += element;
            });
          }
        }
        
        if (searchGlobal.value.length > 0) {
          url += `&search=${searchGlobal.value}`;
        }

        if (order.value == 1) {
          url += "&orderby=price_asc";
        } else if (order.value == 2) {
          url += "&orderby=price_desc";
        } else if (order.value == 3) {
          url += "&orderby=year_asc";
        } else if (order.value == 4) {
          url += "&orderby=year_desc";
        } else if (order.value == 5) {
          url += "&orderby=kms_asc";
        } else if (order.value == 6) {
          url += "&orderby=kms_desc";
        }

        if (link !== "") {
          url = link;
        }

        const { data } = await ApiService.get(url);
        vehicles.value = data.data.data;
        console.log(
          "🚀 ~ file: Catalogo.vue ~ line 562 ~ getVehicles ~ data.data.data",
          data.data.data
        );
        paginate.value.current_page = data.data.current_page;
        paginate.value.per_page = data.data.per_page;
        paginate.value.total = data.data.total;
        paginate.value.links = data.data.links;
        type.value = data.data.filters["body-type"];
        locations.value = data.data.filters["state"];
        cities.value = data.data.filters["city"];
        fuel.value = data.data.filters["fuel-type"];
        years.value = data.data.filters["year"].map((y) => y.name);
        colorExt.value = data.data.filters["color-exterior"];
        colorInt.value = data.data.filters["color-interior"];
        models.value = data.data.filters["model"];
        brands.value = data.data.filters["brand"];
        agencies.value = data.data.filters["agency"];
        transmissions.value = data.data.filters["transmission"];
        priceValue.value = [
          data.data.filters["price"][0].min,
          data.data.filters["price"][0].max,
        ];
        kmsValue.value = [
          data.data.filters["kms"][0].min,
          data.data.filters["kms"][0].max,
        ];
        similar.value = data.data.similar;

        const urlfiltersParam = url.split("?")[1];
        const arrayFilters = urlfiltersParam.split("&").filter((item) => !item.includes("orderby")).length - 2;
        console.log(
          "🚀 ~ file: Catalogo.vue ~ line 488 ~ getVehicles ~ arrayFilters",
          arrayFilters
        );

        cuantity.value = arrayFilters > 0 ? arrayFilters : 0;
      } catch (response) {
        console.error(response, "aqui");
      }
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading-vehicle");
    };

    const filtersActive = computed(() => {
      const query = { ...route.query };
      const actives: any = [];
      Object.keys(query).forEach((key) => {
        const arrayData: any = query;
        const val = arrayData[key].toString();
        if (val?.split(",")) actives.push(val?.split(","));
        else actives.push(val);
      });
      return actives.flat();
    });

    const deleteFilter = (activ) => {
      const query = { ...route.query };
      let queryDelete = {};
      Object.keys(query).forEach((key) => {
        console.log("key", key);
        const arrayData: any = query;
        const val = arrayData[key];
        if (val?.split(",").length > 1) {
          queryDelete = {
            ...query,
            [key]: val
              ?.split(",")
              .filter((item) => item !== activ)
              .join(","),
          };
        } else if (arrayData[key] === activ) {
          console.log("🚀 ~ file: Catalogo.vue ~ line 688 ~ Object.keys ~ key", key)
          key === "search" ? searchGlobal.value = "" : "";
          delete query[key];
         
          queryDelete = query;
          console.log(
            "🚀 ~ file: Catalogo.vue ~ line 586 ~ Object.keys ~ queryDelete",
            queryDelete
          );
        }
      });

      router.replace({
        ...router.currentRoute,
        query: queryDelete,
      });

      console.log(
        "🚀 ~ file: Catalogo.vue ~ line 57822 ~ queryDelete  ~ query",
        queryDelete
      );
    };

    const findBrandByName = (name) => {
      if (brands.value?.find((b) => b.name == name)) {
        return brands.value.find((b) => b.name == name)?.id ?? false;
      } else {
        return data_brands.find((b) => b.name == name)?.id ?? false;
      }
    };
    const findModelByName = (name) => {
      if (models.value?.find((b) => b.name == name)) {
        return models.value.find((b) => b.name == name)?.id ?? false;
      } else {
        return data_models.find((b) => b.name == name)?.id ?? false;
      }
    };
    const findFuelByName = (name) => {
      if (fuel.value?.find((b) => b.name == name)) {
        return fuel.value?.find((b) => b.name == name)?.id ?? false;
      } else {
        return data_fuel.find((b) => b.name == name)?.id ?? false;
      }
    };
    const findTypeByName = (name) => {
      if (type.value?.find((b) => b.name == name)) {
        return type.value?.find((b) => b.name == name)?.id ?? false;
      } else {
        return data_type?.find((b) => b.name == name)?.id ?? false;
      }
    };
    const findTransByName = (name) => {
      if (transmissions.value?.find((b) => b.name == name)) {
        return transmissions.value?.find((b) => b.name == name)?.id ?? false;
      } else {
        return data_transmissions?.find((b) => b.name == name)?.id ?? false;
      }
    };

    const findColorExtByName = (name) => {
      if (colorExt.value?.find((b) => b.name == name)) {
        return colorExt.value.find((b) => b.name == name)?.id ?? false;
      } else {
        return data_colorExt.find((b) => b.name == name)?.id ?? false;
      }
    };
    const findColorIntByName = (name) => {
      if (colorInt.value?.find((b) => b.name == name)) {
        return colorInt.value.find((b) => b.name == name)?.id ?? false;
      } else {
        return data_colorInt.find((b) => b.name == name)?.id ?? false;
      }
    };
    const findAgenciesByName = (name) => {
      if (agencies.value?.find((b) => b.name == name)) {
        return agencies.value.find((b) => b.name == name)?.id ?? false;
      } else {
        return data_agencies.find((b) => b.name == name)?.id ?? false;
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
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading-vehicle");

      await dataVehicles();
      assingParams();
      await getVehicles();

      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
    });

    return {
      searchGlobal,
      currentPageChange,
      paramsQuery,
      typeCard,
      order,
      vehicles,
      paginate,
      fuel,
      locations,
      cities,
      type,
      years,
      brands,
      models,
      colorExt,
      colorInt,
      similares,
      agencies,
      transmissions,
      getVehicles,
      // searchDebouncer,
      brandsAll,
      priceValue,
      kmsValue,
      transmission,
      fuelModel,
      locationsModel,
      cityModel,
      priceFrom,
      priceTo,
      kmsFrom,
      kmsTo,
      clearFilters,
      cuantity,
      filterActives,
      filtersActive,
      Clear,
      deleteFilter,
      similar,
      IconNoSearch,
      windowSize,
      selectOrderBy
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/views/Catalogo.scss";
@import "@/assets/styles/components/Input.scss";
</style>
