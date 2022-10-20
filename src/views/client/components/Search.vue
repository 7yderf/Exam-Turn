<template>
  <div
    class="card border-radius col-11 mx-auto py-6 mb-10 px-4 py-10 gy-5 search-poosition d-none d-lg-block"
  >
    <div class="row align-items-center">
      <div class="col-lg-2 col-12 mx-auto border-end border-lg-secondary p-1">
        <label class="fw-bold d-flex align-items-center fs-2 ms-4" for=""
          ><i class="isax-calendar-1 text-white fs-2 me-2"></i> Año desde</label
        >
        <el-select
          class="search-select"
          v-model="years.value"
          filterable
          reserve-keyword
          clearable
          no-data-text="Sin datos para mostrar"
          no-match-text="Intenta con otra búsqueda"
          placeholder="Seleccionar año"
          size="large"
        >
          <el-option
            v-for="item in years.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="col-lg-2 col-12 mx-auto border-end border-lg-secondary p-1">
        <label class="fw-bold d-flex align-items-center fs-2 ms-4" for="">
          <i class="isax-autobrightness text-white fs-2 me-2"></i>
          Marca</label
        >
        <el-select
          class="search-select"
          @change="getModels"
          @clear="getModels"
          v-model="brands.value"
          filterable
          reserve-keyword
          clearable
          no-data-text="Sin datos para mostrar"
          no-match-text="Intenta con otra búsqueda"
          placeholder="Seleccionar marca"
        >
          <el-option
            v-for="item in brands.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="col-lg-2 col-12 mx-auto border-end border-lg-secondary p-1">
        <label class="fw-bold d-flex align-items-center fs-2 ms-4" for=""
          ><i class="isax-car text-white fs-2 me-2"></i> Modelo</label
        >
        <el-select
          class="search-select"
          v-model="models.value"
          filterable
          reserve-keyword
          clearable
          no-data-text="Selecciona primero una marca"
          no-match-text="Intenta con otra búsqueda"
          placeholder="Seleccionar modelo"
        >
          <el-option
            v-for="item in models.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="col-lg-2 col-12 mx-auto border-end border-lg-secondary p-1">
        <label class="fw-bold d-flex align-items-center fs-2 ms-4" for=""
          ><i class="isax-map-1 text-white fs-2 me-2"></i> Ubicación</label
        >
        <el-select
          class="search-select"
          v-model="locations.value"
          filterable
          reserve-keyword
          clearable
          no-data-text="Sin datos para mostrar"
          no-match-text="Intenta con otra búsqueda"
          placeholder="Seleccionar ubicación"
        >
          <el-option
            v-for="item in locations.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="col-lg-2 col-12 mx-auto border-end border-lg-secondary p-1">
        <label class="fw-bold d-flex align-items-center fs-2 ms-4" for=""
          ><i class="isax-card text-white fs-2 me-2"></i> Precio</label
        >
        <el-select
          class="search-select"
          v-model="cost.value"
          filterable
          reserve-keyword
          clearable
          no-data-text="Sin datos para mostrar"
          no-match-text="Intenta con otra búsqueda"
          placeholder="Seleccionar costo"
        >
          <el-option
            v-for="item in cost.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="col-auto text-center">
        <button
          @click="sendQuery"
          class="btn-primary btn mx-auto text-center mt-2 p-4 mt-lg-0"
        >
          <i class="isax-search-normal text-white fs-3"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="d-block d-lg-none mt-10">
    <div class="d-flex">
      <!-- <el-input
        v-model="searchGlobal"
        class="w-100 search-input"
        placeholder="¿Qué vehículo estás buscando?"
      >
      </el-input> -->
      <button
        class="btn-primary btn mx-auto mt-lg-0 col-11"
        data-bs-toggle="modal"
        data-bs-target="#modal_search"
      >
        <div class="d-flex justify-content-center align-items-center p-lg-1">
          <span class="me-2 fs-base">Buscar vehículo </span>
          <i class="isax-search-normal text-white fs-5"></i>
        </div>
      </button>
    </div>
  </div>
  <!--begin::Modal - New Card-->
  <div
    class="modal fade p-0"
    ref="modalSearch"
    id="modal_search"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
      <!--begin::Modal content-->
      <div class="modal-content">
        <div class="modal-header py-3 px-4 col-md-10 col-12 mx-auto">
          <h2 class="fs-2 fw-bold">Búsqueda</h2>
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <i class="isax-close-circle text-white fs-3 me-2"></i>
          </div>
        </div>
        <div class="modal-body px-5 py-3">
          <div class="row align-items-center">
            <div class="col-12 col-md-10 mx-auto my-3">
              <el-input
                v-model="searchGlobal"
                size="large"
                class="w-100 search-input fs-base"
                placeholder="¿Qué vehículo estás buscando?"
              >
              </el-input>
            </div>
            <div class="col-lg-6 my-md-4 my-3 col-md-10 mx-auto">
              <label class="fw-bold d-flex align-items-center fs-4 ms-4" for=""
                ><i class="isax-calendar-1 text-white fs-4 me-2"></i> 
                Año desde</label
              >
              <el-select
                class="search-select w-100"
                v-model="years.value"
                filterable
                reserve-keyword
                clearable
                size="large"
                no-data-text="Sin datos para mostrar"
                no-match-text="Intenta con otra búsqueda"
                placeholder="Seleccionar año"
              >
                <el-option
                  v-for="item in years.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="col-lg-6 my-md-4 my-3 col-md-10 mx-auto">
              <label class="fw-bold d-flex align-items-center fs-4 ms-4" for="">
                <i class="isax-autobrightness text-white fs-4 me-2"></i>
                Marca</label
              >
              <el-select
                class="search-select w-100"
                @change="getModels"
                @clear="getModels"
                v-model="brands.value"
                filterable
                size="large"
                reserve-keyword
                clearable
                no-data-text="Sin datos para mostrar"
                no-match-text="Intenta con otra búsqueda"
                placeholder="Seleccionar año"
              >
                <el-option
                  v-for="item in brands.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="col-lg-6 my-md-4 my-3 col-md-10 mx-auto">
              <label class="fw-bold d-flex align-items-center fs-4 ms-4" for=""
                ><i class="isax-car text-white fs-4 me-2"></i>
                Modelo</label
              >
              <el-select
                class="search-select w-100"
                v-model="models.value"
                filterable
                reserve-keyword
                clearable
                size="large"
                no-data-text="Selecciona primero una marca"
                no-match-text="Intenta con otra búsqueda"
                placeholder="Seleccionar año"
              >
                <el-option
                  v-for="item in models.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="col-lg-6 my-md-4 my-3 col-md-10 mx-auto">
              <label class="fw-bold d-flex align-items-center fs-4 ms-4" for=""
                ><i class="isax-map-1 text-white fs-4 me-2"></i>
                Ubicación</label
              >
              <el-select
                class="search-select w-100"
                v-model="locations.value"
                filterable
                reserve-keyword
                clearable
                size="large"
                no-data-text="Sin datos para mostrar"
                no-match-text="Intenta con otra búsqueda"
                placeholder="Seleccionar año"
              >
                <el-option
                  v-for="item in locations.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="col-lg-6 my-md-4 my-3 col-md-10 mx-auto">
              <label class="fw-bold d-flex align-items-center fs-4 ms-4" for=""
                ><i class="isax-card text-white fs-4 me-2"></i>
                Precio</label
              >
              <el-select
                class="search-select w-100"
                v-model="cost.value"
                filterable
                reserve-keyword
                clearable
                size="large"
                no-data-text="Sin datos para mostrar"
                no-match-text="Intenta con otra búsqueda"
                placeholder="Seleccionar año"
              >
                <el-option
                  v-for="item in cost.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="col-md-10 mx-auto text-center">
              <button
                @click="sendQuery"
                class="btn-primary btn ms-auto w-100 mt-4 mt-lg-0"
              >
                <div class="d-flex justify-content-center align-items-center p-lg-1">
                  <i class="isax-search-normal text-white fs-4"></i>
                  <span class="fs-4 ms-3">Buscar</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Card-->
</template>

<script lang="ts">
import { onMounted, ref, watch } from "vue";
import ApiService from "@/core/services/ApiService";
import { useRouter } from "vue-router";
import { hideModal } from "@/core/helpers/dom";
import axios from "axios";

export default {
  name: "SearchBar",
  components: {},
  setup() {
    const searchGlobal = ref("");
    const modalSearch = ref<null | HTMLElement>(null);
    const router = useRouter();
    const brandsArray = ref<any>([]);
    const allYearsArray = ref<any>([]);
    const locations = ref<any>({
      options: [],
      searchable: true,
      value: null,
    });
    const years = ref<any>({
      options: [],
      searchable: true,
      value: null,
    });
    const brands = ref<any>({
      value: null,
      searchable: true,
      options: [],
    });
    const models = ref<any>({
      value: null,
      searchable: true,
      options: [],
    });
    const cost = ref<any>({
      options: [
        { value: "0 - 100000", label: "$0 - $100,000" },
        { value: "100000 - 200000", label: "$100,000 - $200,000" },
        { value: "200000 - 300000", label: "$200,000 - $300,000" },
        { value: "300000 - 400000", label: "$300,000 - $400,000" },
        { value: "400000 - 500000", label: "$400,000 - $500,000" },
        { value: "500000 - 600000", label: "$500,000 - $600,000" },
        { value: "600000 - 700000", label: "$600,000 - $700,000" },
        { value: "700000 - 800000", label: "$700,000 - $800,000" },
        { value: "800000 - 900000", label: "$800,000 - $900,000" },
        { value: "900000 - 1000000", label: "$900,000 - $1,000,000" },
      ],
      searchable: true,
      value: null,
    });
    const getyears = async () => {
      try {
        let yearsAll = <any>([]);
        
        const { data } = await ApiService.get("/api/site/years");
        years.value.options = data.data.map((y) => {
          yearsAll.push(y.year);
         return {
          value: y.year,
          label: y.year,
          }
        });
        allYearsArray.value = yearsAll
      } catch (error) {
        console.log("Error al obtener years");
      }
    };
    const getBrands = async () => {
      try {
        const { data } = await ApiService.get("/api/site/brands-model");
        brands.value = Object.values(data.data).map((e: any) => {
          if (e) {
            e.models = Object.values(e.models);
          }
          return e;
        });
        brandsArray.value = brands.value;
        brands.value.options = brands.value.map((y: any) => ({
          value: y.brand,
          label: y.brand,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    const getStates = async () => {
      let estados: any = [];
      await axios.get("/api/site/locations").then((response) => {
        const datos = Object.entries(response.data.data);
        datos.forEach((val, ind) => {
          val.forEach((val1: any, ind1) => {
            if (val1.state !== undefined) {
              if (estados.indexOf(val1.state) == -1) {
                estados.push(val1.state);
              }
            }
          });
        });
        estados.forEach((value, index) => {
          let objOption = {
            value: value,
            lable: value,
          };
          locations.value.options.push(objOption);
        });
      });
      /* console.log("ESTADOS", data);
        data.value.data.forEach((val, ind) => {
        }); */
      /* locations.value.options = data.data.map((y:any) => ({
          value: y.state,
          label: y.state,
        })); */
    };
    const getModels = async (val) => {
      models.value.value = "";
      models.value.options = "";
      brandsArray.value.forEach((e) => {
        if (val == e.brand) {
          models.value.options = e.models.map((m: any) => {
            return { value: m.model, label: m.model };
          });
        }
      });
    };

    const sendQuery = () => {

      let url = "/catalogo";
      if (years.value.value) {
        const yearsArray = allYearsArray.value.filter(item => item >= years.value.value)
        url += "?year=" + yearsArray;
      }
      if (brands.value.value) {
        url += url.includes("?") ? "&" : "?";
        url += "brand=" + brands.value.value;
      }
      if (models.value.value) {
        url += url.includes("?") ? "&" : "?";
        url += "model=" + models.value.value;
      }
      if (cost.value.value) {
        url += url.includes("?") ? "&" : "?";
        url += "price=" + cost.value.value;
      }
      if (locations.value.value) {
        url += url.includes("?") ? "&" : "?";
        url += "state=" + locations.value.value;
      }
      if (searchGlobal.value.length > 0) {
        url += url.includes("?") ? "&" : "?";
        url += "search=" + searchGlobal.value;
      }
      hideModal(modalSearch.value);
      router.push(url);
    };

    onMounted(async () => {
      await Promise.all([getyears(), getBrands(), getStates()]);
    });

    return {
      locations,
      years,
      brands,
      models,
      cost,
      searchGlobal,
      getModels,
      sendQuery,
      modalSearch,
    };
  },
};
</script>

<style lang="scss">
.border-radius {
  border-radius: 20px;
}
.search-poosition {
  background: #393840f4;
  backdrop-filter: blur(2px);
  margin-top: -5em;
}

.search-select .el-input {
  --el-input-text-color: var(--el-text-color-regular);
  --el-input-border: none;
  --el-input-border-color: transparent;
  --el-input-border-radius: var(--el-border-radius-base);
  --el-input-bg-color: transparent;
  --el-input-icon-color: var(--el-text-color-placeholder);
  --el-input-placeholder-color: var(--el-text-color-placeholder);
  --el-input-hover-border: var(--el-border-color-hover);
  --el-input-clear-hover-color: var(--el-text-color-secondary);
  --el-input-focus-border: var(--el-color-primary);
  position: relative;
  font-size: var(--el-font-size-base);
  display: inline-flex;
  width: 100%;
  line-height: 40px;
  font-size: 0.875rem !important;
}
.search-select .el-input__wrapper,
.search-input .el-input__wrapper {
  background-color: #393840f4;
}
.search-input .el-input__wrapper {
  box-shadow: none;
}
.el-select__popper.el-popper[role="tooltip"] {
  background: #393840f4;
  border: 1px solid gray;
  box-shadow: var(--el-box-shadow-light);
}
.el-popper__arrow::before {
  background: #393840f4 !important;
}
.el-select-dropdown__item {
  color: white;
  &:hover {
    background: #393840f4 !important;
  }
  &.selected {
    background: #393840f4 !important;
  }
  &.hover {
    background: #393840f4 !important;
  }
}
.search-select .el-input__inner {
  color: white;
}
.search-select .el-input__icon {
  width: 24px;
  color: lightgray;
}
.search-input .el-input__inner {
  color: white;
}
</style>
