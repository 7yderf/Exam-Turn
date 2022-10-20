<template>
  <div class="catalogo">
    <HelloWorld />
    <div class="catalogo__hero d-none d-lg-block">
      <div class="catalogo__search">
        <div class="catalogo__clean-filters">
          <p class="catalogo__text-filters">Filtros<span>{{` (${cuantity})`}}</span></p>

          <button @click="clearFilters" class="catalogo__text-filters catalogo__text-filters--clear">
            Limpiar filtros
          </button>
        </div>
        <div class="catalogo__input-box">
          <div class="d-flex d-none d-lg-block catalogo__results">
            <span class="catalogo__text-results">Vehículos</span><span class="text-gray catalogo__text-results--sub">
              {{ paginate.total }} resultados</span>
          </div>
          <div class="catalogo__content-search">
            <img src="@/assets/images/icons/icon-serch.svg" alt="" class="catalogo__icon-search" />
            <input v-model="searchGlobal" class="input input__input" :data-search="true" clearable
              placeholder="Buscar vehículo" />
          </div>
        </div>
        <div class="catalogo__order-select">
          <select class="w-100 pe-1 order input input__select" placeholder="Ordenar por:" v-model="order">
            <option class="input__select-options" label="Ordenar" selected disabled :value="0">
              Ordenar
            </option>
            <option class="input__select-options" label="Menor precio" :value="1">
              Menor precio
            </option>
            <option class="input__select-options" label="Mayor precio" :value="2">
              Mayor precio
            </option>
            <option class="input__select-options" label="Menor Kilometraje" :value="3">
              Menor Kilometraje
            </option>
            <option class="input__select-options" label="Mayor Kilometraje" :value="4">
              Mayor Kilometraje
            </option>
            <option class="input__select-options" label="Menor Año" :value="5">
              Menor Año
            </option>
            <option class="input__select-options" label="Mayor Año" :value="6">
              Mayor Año
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="catalogo__body mx-auto mt-4">
      <div class="row catalogo__row my-5">
        <div class="col-lg-3 catalogo__aside">
          <Filters :prop_brands="brands" :prop_models="models" :prop_years="years" :prop_locations="locations"
            :prop_cities="cities" :prop_fuel="fuel" :prop_colorex="colorExt" :prop_colorin="colorInt" :prop_type="type"
            :prop_trans="transmissions" :prop_agencies="agencies" :prop_prices="priceValue" :prop_kms="kmsValue"
            @filterActive="filterActives" />
        </div>
        <div class="col-lg-9">
          <div class="col-12">
            <div class="row cards-cart">
              <div class="cards-cart__card cards-cart__loading" v-for="cart in Array(9).fill('').map((_, i) => i)"
                :key="cart">
                <div class="cards-cart__loading-img"></div>
                <div class="cards-cart__loading-title"></div>
                <div class="cards-cart__loading-price"></div>
              </div>
              <template v-if="vehicles.length > 0">
                <div class="cards-cart__card" v-for="vehicle in vehicles" :key="vehicle.identificador">
                  <CardVehicle :typeCard="typeCard" :vehicle="vehicle" />
                </div>
              </template>
              <template v-else>
                <div class="col-lg-6 mx-auto text-center noSearch">
                  <img class="img-fluid" src="/media/images/Sin vehículos.png" alt="" />
                  <p class="fs-1 fw-bold my-5">No se encontraron vehículos</p>
                  <p class="my-5">
                    Modifica los filtros para encontrar más opciones.
                  </p>
                </div>
                <div class="col-12 my-10 simil" v-if="similares.length > 0">
                  <p class="mb-1 fs-5">También te pueden interesar</p>
                  <hr />
                  <div class="row">
                    <div class="col-12" v-for="vehicle in similares" :key="vehicle.identificador">
                      <!-- <CardVehicle :typeCard="typeCard" :vehicle="vehicle" /> -->
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div class="row">
              <div class="
                  col-sm-12 col-md-7
                  ms-auto
                  d-flex
                  align-items-center
                  justify-content-end
                  mb-10
                ">
                <div class="catalogo__paginate" v-if="paginate.links.length > 1">
                  <button class="catalogo__paginate-btn" :data-show="paginate.current_page == page.label"
                    v-for="page in paginate.links" :key="page.url" :disabled="page.url == null"
                    @click="currentPageChange(page.url)">
                    {{ page.label.includes('Previous') ? '<' : '' }} {{ page.label.includes('Next') ? '>' : '' }} {{
                    page.label.includes('Next') || page.label.includes('Previous') ? '' : page.label }} </button>
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
import { ref, watch, onMounted, onBeforeMount } from "vue";
import Filters from "./components/Filters.vue";
// import Carousel from "@/views/client/components/Carousel.vue";
import { useRoute, useRouter } from "vue-router";
import CardVehicle from "./components/CardVehicle.vue";
import ApiService from "@/core/services/ApiService";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import HelloWorld from "@/components/HelloWorld.vue";
import _ from "lodash";
export default {
  name: "Catalogo",
  components: {
    Filters,
    CardVehicle,
    HelloWorld
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
    const cuantity = ref<number | null>(0);
    const activesFilter = ref<any>([]);
    const paginate = ref({
      current_page: 1,
      per_page: 9,
      total: 0,
      links: [],
    });
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
        kms: ""
      };

      priceFrom.value = "";
      priceTo.value = "";
      priceValue.value = [0, 0];
      kmsFrom.value = "";
      kmsTo.value = "";
      kmsValue.value = [0, 0];

      router.replace({
        ...router.currentRoute,
        query: Object.fromEntries(
          Object.entries(paramsQuery.value).filter(([_, v]) => v != "")
        ),
      });
    };
    const currentPageChange = async (url) => {
      url = url.replace("http://vehicles:9008/", "");
      getVehicles(url);

    };

    const searchDebouncer = _.debounce(() => {
      if (searchGlobal.value.length > 0) {
        router.replace({
          ...router.currentRoute,
          query: { ...route.query, search: searchGlobal.value },
        });
      } else {
        paramsQuery.value.search = "";
        router.replace({
          ...router.currentRoute,
          query: Object.fromEntries(
            Object.entries(paramsQuery.value).filter(([_, v]) => v != "")
          ),
        });
      }
      getVehicles();
    }, 500);

    const filterActives = (id) => {
      activesFilter.value.push(id);
      console.log("🚀 ~ file: Catalogo.vue ~ line 326 ~ filterActives ~ activesFilter", activesFilter.value)
    }

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

    const getVehicles = async (link = "") => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading-vehicle");
      paginate.value.links = [];
      try {
        let url = "/api/vehicles/marketplace?showing=" +
          paginate.value.per_page +
          "&page=" + 1;
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
        if (searchGlobal.value) {
          url += "&search=" + searchGlobal.value;
        }
        if (order.value == 1) {
          url += "&orderbyprice=asc";
        } else if (order.value == 2) {
          url += "&orderbyprice=desc";
        } else if (order.value == 3) {
          url += "&orderbykm=asc";
        } else if (order.value == 4) {
          url += "&orderbykm=desc";
        } else if (order.value == 5) {
          url += "&orderbyyear=asc";
        } else if (order.value == 6) {
          url += "&orderbyyear=desc";
        }

        if (link !== "") {
          url = link;
        }

        const { data } = await ApiService.get(url);
        vehicles.value = data.data.data;
        // similares.value =
        //   data.data.Similar.data.length > 2
        //     ? data.data.Similar.data.slice(0, 3)
        //     : data.data.Similar.data;
        paginate.value.current_page = data.data.current_page;
        paginate.value.per_page = data.data.per_page;
        paginate.value.total = data.data.total;
        paginate.value.links = data.data.links;
        type.value = data.data.filters['body-type'];
        locations.value = data.data.filters['state'];
        cities.value = data.data.filters['city'];
        fuel.value = data.data.filters['fuel-type'];
        years.value = data.data.filters['year'].map((y) => y.name);
        colorExt.value = data.data.filters['color-interior'];
        colorInt.value = data.data.filters['color-exterior'];
        models.value = data.data.filters['model'];
        brands.value = data.data.filters['brand'];
        agencies.value = data.data.filters['agency'];
        transmissions.value = data.data.filters['transmission'];
        priceValue.value = [data.data.filters['price'][0].min, data.data.filters['price'][0].max];
        kmsValue.value = [data.data.filters['kms'][0].min, data.data.filters['kms'][0].max];

        const urlfiltersParam = url.split("?")[1];
        const arrayFilters = urlfiltersParam.split("&").length - 2;
        console.log("🚀 ~ file: Catalogo.vue ~ line 488 ~ getVehicles ~ arrayFilters", arrayFilters)

        cuantity.value = arrayFilters > 0 ? arrayFilters : 0;


      } catch (response) {
        console.error(response, "aqui");
      }
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading-vehicle");
    };
    const getTypes = async (params = "") => {
      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("body_type")).join("&");
      }
      try {
        const { data } = await ApiService.get(`/api/vehicles/body-types${urlparams}`);
        type.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getlocations = async (params = "") => {
      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("state")).join("&");
      }

      try {
        const { data } = await ApiService.get(`/api/vehicles/states${urlparams}`);
        locations.value = Object.values(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getCities = async (params = "") => {
      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("city")).join("&");
      }

      try {
        const { data } = await ApiService.get(`/api/vehicles/cities${urlparams}`);
        cities.value = Object.values(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getFuel = async (params = "") => {
      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("fuel_type")).join("&");
      }
      try {
        const { data } = await ApiService.get(`/api/vehicles/fuel-types${urlparams}`);
        fuel.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getYears = async (params = "") => {

      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("year")).join("&");
      }
      try {
        const { data } = await ApiService.get(`/api/vehicles/years${urlparams}`);
        years.value = data.data.map((y) => y.name);

      } catch (error) {
        console.log(error);
      }
    };
    const getColorExt = async (params = "") => {
      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("ext_color")).join("&");
      }
      try {
        const { data } = await ApiService.get(`/api/vehicles/colors/exterior${urlparams}`);
        colorExt.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getColorInt = async (params = "") => {
      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("int_color")).join("&");
      }
      try {
        const { data } = await ApiService.get(`/api/vehicles/colors/interior${urlparams}`);
        colorInt.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getModels = async (params = "") => {

      let urlparams = ""
      urlparams += "?" + params.split("&").filter((item) => !item.includes("model")).join("&");

      try {
        const { data } = await ApiService.get(`/api/vehicles/models${urlparams}`);
        models.value = Object.values(data.data).map((e: any) => e);
      } catch (error) {
        console.log(error);
      }

    };
    const getBrands = async (params = "") => {
      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("brand")).join("&");
      }
      try {
        const { data } = await ApiService.get(`/api/vehicles/brands${urlparams}`);
        brands.value = Object.values(data.data).map((e: any) => e);
      } catch (error) {
        console.log(error);
      }
    };

    const getAgencies = async (params = "") => {
      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("agency")).join("&");
      }
      try {
        const { data } = await ApiService.get(`/api/vehicles/agencies${urlparams}`);
        agencies.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    const gettransmission = async (params = "") => {
      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => !item.includes("transmission")).join("&");
      }
      try {
        const { data } = await ApiService.get(`/api/vehicles/transmissions${urlparams}`);
        transmissions.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    const getRangePrice = async (params = "") => {

      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => (!item.includes("price_to") || !item.includes("price_from"))).join("&");

      }
      try {
        priceValue.value = [0, 0];
        const { data } = await ApiService.get(`/api/vehicles/price-range${urlparams}`);
        priceValue.value = [data.data[0].min, data.data[0].max];
      } catch (error) {
        console.log(error);
      }
    };
    const getMileage = async (params = "") => {

      let urlparams = ""
      if (params !== "") {
        urlparams += "?" + params.split("&").filter((item) => (!item.includes("kms_to") || !item.includes("kms_from"))).join("&");
      }
      try {
        kmsValue.value = [0, 0];
        const { data } = await ApiService.get(`/api/vehicles/km-range${urlparams}`);
        kmsValue.value = [data.data[0].min, data.data[0].max];
      } catch (error) {
        console.log(error);
      }
    };

    const findBrandByName = (name) => {
      console.log("name", name);
      console.log("name", brands.value);
      if (brands.value?.find((b) => b.name == name)) {
        return brands.value.find((b) => b.name == name)?.id ?? false;
      }
    };
    const findModelByName = (name) => {

      if (models.value?.find((b) => b.name == name)) {
        return models.value.find((b) => b.name == name)?.id ?? false;
      }

    };
    const findFuelByName = (name) => {
      return fuel.value?.find((b) => b.name == name)?.id ?? false;
    };
    const findTypeByName = (name) => {
      return type.value?.find((b) => b.name == name)?.id ?? false;
    };
    const findTransByName = (name) => {
      return transmissions.value?.find((b) => b.name == name)?.id ?? false;
    };

    const findColorExtByName = (name) => {
      if (colorExt.value?.find((b) => b.name == name)) {
        return colorExt.value.find((b) => b.name == name)?.id ?? false;
      }
    };
    const findColorIntByName = (name) => {
      if (colorInt.value?.find((b) => b.name == name)) {
        return colorInt.value.find((b) => b.name == name)?.id ?? false;
      }
    };
    const findAgenciesByName = (name) => {
      if (agencies.value?.find((b) => b.name == name)) {
        return agencies.value.find((b) => b.name == name)?.id ?? false;
      }
    };
    onMounted(async () => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading-vehicle");

      Object.keys(route.query).includes("brand") && await getBrands();
      Object.keys(route.query).includes("model") && await getModels();
      Object.keys(route.query).includes("type") && await getTypes();
      Object.keys(route.query).includes("transmission") && await gettransmission();
      Object.keys(route.query).includes("fuel") && await getFuel();
      Object.keys(route.query).includes("colorex") && await getColorExt();
      Object.keys(route.query).includes("colorin") && await getColorInt();
      Object.keys(route.query).includes("agency") && await getAgencies();
      // Object.keys(route.query).includes("year") && await getYears();
      // Object.keys(route.query).includes("state") && await getlocations();
      // Object.keys(route.query).includes("city") && await getCities();
      // Object.keys(route.query).includes("kms") && await getMileage();
      // Object.keys(route.query).includes("price") && await getRangePrice();
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
      searchDebouncer,
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
      filterActives
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/views/Catalogo.scss";
@import "@/assets/styles/components/Input.scss";
</style>
