<template>
  <!--begin::Menu wrapper-->
  <div
    id="kt_aside_menu_wrapper"
    ref="scrollElRef"
    class="hover-scroll-overlay-y my-5 my-lg-5"
    data-kt-scroll="true"
    data-kt-scroll-activate="{default: false, lg: true}"
    data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-height="auto"
    data-kt-scroll-offset="0"
    data-kt-scroll-wrappers="#kt_aside_menu"
  >
    <!--begin::Menu-->
    <div
      class="divAgencia"
      v-if="tipoRol == 'Agencia'"
      :style="showAgencies ? 'background-color: #303740;' : ''"
    >
      <small>Agencia</small>
      <br />
      <span class="spanAgencia" style="padding-bottom: 5px">
        <b>
          {{ agencySelected }}
        </b>
      </span>
    </div>
    <div
      class="selectAgencias"
      v-if="tipoRol == 'Agencia'"
      @click="openAgencias"
      :style="
        showAgencies
          ? 'background-color: #303740; border-top: 1px solid #454652; border-bottom: 1px solid #454652;'
          : 'border-radius: 0px 0px 5px 5px;'
      "
    >
      <span style="float: left"> Cambiar de agencia </span>
      <span style="float: right">
        <inline-svg
          style="position: relative; top: -10px"
          v-show="!showAgencies"
          src="media/icons/iconsax/arrow-down.svg"
        />
        <inline-svg
          style="position: relative; top: -10px"
          v-show="showAgencies"
          src="media/icons/iconsax/arrow-up.svg"
        />
      </span>
    </div>
    <div
      class="selectAgencias"
      v-if="tipoRol == 'Agencia'"
      :style="
        showAgencies
          ? 'background-color: #303740; padding: 7px; padding-left: 18px; margin-bottom: 5px; border-radius: 0px 0px 5px 5px;'
          : 'padding: 7px; padding-left: 18px; margin-bottom: 5px;'
      "
      v-show="showAgencies"
    >
      <ul
        style="list-style-type: none; line-height: 25px; margin-bottom: 0px; padding: 0"
      >
        <li
          class="liAgencies"
          v-for="(agencie, index) in agencies"
          :key="index"
          @click="changeAgencie(agencie.id, agencie.name)"
        >
          <small>{{ agencie.name }}</small>
        </li>
      </ul>
    </div>
    <div
      id="#kt_header_menu"
      class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
      data-kt-menu="true"
    >
      <template v-for="(item, i) in newDocMenu" :key="i">
        <div v-if="item.heading && item.show" class="menu-item">
          <div class="menu-content pt-8 pb-2">
            <span class="menu-section text-white text-uppercase fs-xs fw-bold">
              {{ (tipoRol != 'Múltiples agencias' && tipoRol != 'Ciudad') ? item.heading : '' }}
            </span>
          </div>
        </div>
        <template v-for="(menuItem, j) in item.pages" :key="j">
          <template
            v-if="
              menuItem.heading &&
              (can(menuItem.permission) || (menuItem.heading == 'Inicio' && (tipoRol != 'Múltiples agencias' && tipoRol != 'Ciudad')) )
            "
          >
            <div class="menu-item">
              <router-link class="menu-link" active-class="active" :to="menuItem.route">
                <span v-if="menuItem.fontIcon" class="menu-icon">
                  <i :class="menuItem.fontIcon" class="text-white fs-5"></i>
                </span>
                <span class="menu-title fs-base fw-normal">translate</span>
              </router-link>
            </div>
          </template>
          <div
            v-if="menuItem.sectionTitle"
            :class="{ show: hasActiveChildren(menuItem.route) }"
            class="menu-item menu-accordion"
            data-kt-menu-sub="accordion"
            data-kt-menu-trigger="click"
          >
            <span class="menu-link">
              <span v-if="menuItem.svgIcon || menuItem.fontIcon" class="menu-icon">
                <i
                  v-if="asideMenuIcons === 'fontdocument-text-1'"
                  :class="menuItem.fontIcon"
                  class="bi fs-3"
                ></i>
                <span v-else-if="asideMenuIcons === 'svg'" class="svg-icon svg-icon-2">
                  <inline-svg :src="menuItem.svgIcon" />
                </span>
              </span>
              <span class="menu-title">{{ translate(menuItem.sectionTitle) }}</span>
              <span class="menu-arrow"></span>
            </span>
            <div
              :class="{ show: hasActiveChildren(menuItem.route) }"
              class="menu-sub menu-sub-accordion"
            >
              <template v-for="(item2, k) in menuItem.sub" :key="k">
                <div v-if="item2.heading" class="menu-item">
                  <router-link class="menu-link" active-class="active" :to="item2.route">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{ translate(item2.heading) }}</span>
                  </router-link>
                </div>
                <div
                  v-if="item2.sectionTitle"
                  :class="{ show: hasActiveChildren(item2.route) }"
                  class="menu-item menu-accordion"
                  data-kt-menu-sub="accordion"
                  data-kt-menu-trigger="click"
                >
                  <span class="menu-link">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">{{ translate(item2.sectionTitle) }}</span>
                    <span class="menu-arrow"></span>
                  </span>
                  <div
                    :class="{ show: hasActiveChildren(item2.route) }"
                    class="menu-sub menu-sub-accordion"
                  >
                    <template v-for="(item3, k) in item2.sub" :key="k">
                      <div v-if="item3.heading" class="menu-item">
                        <router-link
                          class="menu-link"
                          active-class="active"
                          :to="item3.route"
                        >
                          <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                          </span>
                          <span class="menu-title">{{ translate(item3.heading) }}</span>
                        </router-link>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </template>
    </div>
    <!--end::Menu-->
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { asideMenuIcons } from "@/core/helpers/config";
//import MainMenuConfig from "@/core/config/MainMenuConfig";
import MainMenuConfig from "@/core/config/CleanMainMenuConfig";
import store from "@/store/";
import _ from "lodash";
import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from "axios";

export default defineComponent({
  name: "kt-menu",
  components: {},
  setup() {
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);
    let MainMenuConfig2 = ref<any>([]);
    let newDocMenu = reactive<any>([]);
    const tipoRol = ref<any>();
    const userRole = ref<any>();
    const agencySelected = ref<any>();
    const agencies = ref<any>([]);
    const showAgencies = ref<boolean>(false);
    const router = useRouter();
    const agencyIdSelected = ref<any>();

    /**
     * Menu Validation fuction by permissions
     * @method checkMainMenu
     * @variables CleanMainMenuConfig
     * @returns
     *  CleanMainMenuConfig with validations
     */
    const checkPermissions = async () => {
      if(tipoRol.value != 'Corporativo'){
        MainMenuConfig2.value = [
          {
            heading: "",
            route: "/apps",
            show: true,
            pages: [
              {
                heading: "Inicio",
                route: "/dashboard",
                svgIcon: "",
                fontIcon: "isax-home",
                permission: null,
              },
            ],
          },
          {
            heading: "Empresarial",
            route: "/apps",
            show: true,
            pages: [
              {
                heading: "Agencia",
                route: "/agencies",
                svgIcon: "",
                fontIcon: "isax-shop",
                permission: "Ver listado de agencias",
              },
              {
                heading: "Vehículos",
                route: "/vehicles",
                svgIcon: "",
                fontIcon: "isax-car",
                permission: "Ver listado de vehículos",
              },
              {
                heading: "Apartados",
                route: "/apartados",
                svgIcon: "",
                fontIcon: "isax-receipt-2-1",
                permission: "Ver listado de vehículos", //Cambiar permiso
              },
              {
                heading: "Calendario",
                route: "/calendario",
                svgIcon: "",
                fontIcon: "isax-calendar-1",
                permission: "Ver calendario",
              },
              {
                heading: "Avalúos",
                route: "/avaluos",
                svgIcon: "",
                fontIcon: "isax-receipt-item",
                permission: "Ver listado de avalúos",
              },
              {
                heading: "Avalúos",
                route: "/appraisals",
                svgIcon: "",
                fontIcon: "isax-receipt-item",
                permission: "Ver listado de avalúos en agencia",
              },
              {
                heading: "Avalúos a domicilio",
                route: "/appraisals",
                svgIcon: "",
                fontIcon: "isax-receipt-item",
                permission: "Ver listado de avalúos a domicilio",
              },
              {
                heading: "Leads",
                route: "/leads",
                svgIcon: "",
                fontIcon: "isax-personalcard",
                permission: "Ver listado de leads",
              },
              
            ],
          },
        ];
      }else{
        MainMenuConfig2.value = MainMenuConfig;
      }

      if (tipoRol.value == "Corporativo") {
        MainMenuConfig2.value[2].pages[6] =  {
          heading: "",
          route: "",
          svgIcon: "",
          fontIcon: "",
          permission: "",
        };
        MainMenuConfig2.value[2].pages.slice(6);
      }

      MainMenuConfig2.value.forEach((valuePage, index) => {
        newDocMenu.push(valuePage);
        let unoTienePermiso = false;
        valuePage["pages"].forEach(async (page) => {
          let module = page.route.replace("/", "");
          
          if (module != "dashboard") {
            if (module.includes("agencies")) {
              if (tipoRol.value == "Corporativo") {
                page.route = "/agencies";
              }

              if (tipoRol.value == "Agencia") {
                page.route = "/agencies/" + agencyIdSelected.value;
                page.permission = "Ver detalle de agencia";
              }
            }
            
            if (module.includes("calendario")) {
              if (tipoRol.value == "Ciudad") {
                page.permission = "Ver detalle de cita a domicilio";
              }else{
                page.permission = "Ver calendario";
              }
            }
            
            //@Todo delete page link
            // if (valuePage[index].heading.includes("Gestión de agencias") && page.permission == "Ver listado de avalúos a domicilio" && tipoRol.value == "Corporativo") {
            //   newDocMenu[index].show = false;
            // }

            if (can(page.permission)) {
              unoTienePermiso = true;
            }
          } else {
            if(tipoRol.value == 'Agencia'){
              page.route = "/dashboard/"+agencyIdSelected.value;
            }
            newDocMenu[index].show = true;
          }
        });
        newDocMenu[index].show = unoTienePermiso;
      });
    };

    onMounted(async () => {
      let userRolObj: any = await localStorage.getItem("userRole");
      let agenciesObj: any = await localStorage.getItem("userAgencies");
      agencies.value = JSON.parse(agenciesObj);
      userRole.value = JSON.parse(userRolObj);
      //tipoRol.value = userRole.value.tipo.name;

      // console.log(userRole.value);

      const { data } = await axios.get(
        process.env.VUE_APP_API_URL + "/api/get-current-agency"
      );
      if (data.success) {
        if (data.data.id != undefined && data.data.id > 0) {
          window.localStorage.setItem("agencyIdSelected", data.data.id);
          agencyIdSelected.value = data.data.id;
          let agenciesObj: any = await localStorage.getItem("userAgencies");
          let agencies = JSON.parse(agenciesObj);
          agencies.forEach((val, ind) => {
            if (val.id == data.data.id) {
              window.localStorage.setItem("agencySelected", val.name);
              agencySelected.value = val.name;
            }
          });
        }
      } else {
        agencySelected.value = await localStorage.getItem("agencySelected");
        agencyIdSelected.value = await localStorage.getItem("agencyIdSelected");
      }
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
      await axios.get(process.env.VUE_APP_API_URL + "/api/auth/user").then((response) => {
        if (response.status == 200) {
          tipoRol.value = response.data.data[0].type;
        }
      });
      checkPermissions();
    });

    

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    const can = (permissions) => {
      const Permissions = store.getters.getPermissions;

      if (_.size(Permissions)) {
        if (Array.isArray(permissions)) {
          let flag = false;
          _.map(permissions, (permission) => {
            if (Permissions.indexOf(permission) !== -1) {
              flag = true;
            }
          });
          return flag;
        } else {
          return Permissions.indexOf(permissions) !== -1;
        }
      }
      return false;
    };

    const changeAgencie = async (idAgencie, nameAgency) => {
      let url = process.env.VUE_APP_API_URL + "/api/set-current-agency/" + idAgencie;
      await axios
        .get(url)
        .then(async (response) => {
          if (response.data.success) {
            localStorage.setItem("agencyIdSelected", idAgencie);
            localStorage.setItem("agencySelected", nameAgency);
            agencySelected.value = nameAgency;
            showAgencies.value = !showAgencies.value;
            const { data } = await axios.get(
              process.env.VUE_APP_API_URL + "/api/set-current-agency/" + idAgencie
            );
            router.replace("/dashboard/"+idAgencie);
            //router.go(0);
          }
        })
        .catch((error) => {
          if (error.response) {
            let errors = Object.entries(error.response.data.errors);
            let mensaje = "";
            errors.forEach((value, index) => {
              mensaje += value[1];
            });
            Swal.fire({
              position: "center",
              icon: "error",
              title: mensaje,
              showConfirmButton: true,
            });
          }
        });
    };

    const openAgencias = () => {
      showAgencies.value = !showAgencies.value;
    };

    return {
      hasActiveChildren,
      MainMenuConfig,
      asideMenuIcons,
      checkPermissions,
      newDocMenu,
      can,
      tipoRol,
      userRole,
      agencySelected,
      openAgencias,
      agencies,
      showAgencies,
      changeAgencie,
      agencyIdSelected,
      MainMenuConfig2
    };
  },
});
</script>
<style scoped>
.selectAgencias {
  border: 1px solid #33333b;
  margin-left: 5px;
  margin-right: 5px;
  width: 95%;
  padding: 15px;
  line-height: 2px;
}

.spanAgencia {
  font-size: 15px;
}

.divAgencia {
  margin-left: 5px;
  padding-left: 15px;
  padding-bottom: 5px;
  padding-top: 5px;
  border: 1px solid #33333b;
  border-bottom: 0px;
  width: 95%;
  border-radius: 5px 5px 0px 0px;
}

.selectAgencias:hover {
  cursor: pointer;
}

.liAgencies:hover {
  background-color: #2b3137;
}
.aside-dark .menu .menu-item .menu-section {
    color: #ffffff !important;
}
.aside-dark .menu .menu-item .menu-link .menu-title {
  color: #ffffff;
}
</style>
