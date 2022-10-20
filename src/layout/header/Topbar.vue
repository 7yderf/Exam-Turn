<template>
  <div class="d-flex align-items-stretch flex-shrink-0">

    <div
      class="d-flex align-items-center ms-1 ms-lg-3"
      id="kt_header_user_menu_toggle"
    >
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
        @click="showArrow = !showArrow"
      >
        <div class="row" style="margin-right: 15px;">
          <div class="col-2">
            <div class="w-40px h-40px rounded-circle bg-gray-lighten d-flex justify-content-center align-items-center">
              <span>
              {{ name + last }}
              </span>
            </div>
          </div>
          <div class="col-9" style="padding-right:0px;">
            <ul style="list-style-type: none; margin-bottom: 0px; padding-left: 13px;">
              <li>
                <span class="tituloPerfil">
                  {{ nameComplete + " " + lastComplete }}
                </span>
              </li>
              <li>
                <span class="emailPerfil">
                  {{ email }}
                </span>
              </li>
            </ul>
          </div>
          <div class="col-1" style="padding: 0px 0px 0px 5px; pointer-events: none;">
            <inline-svg src="media/icons/iconsax/dropWhite.svg" height="15" width="15" style="vertical-align:bottom; top: 8px; position: relative;" v-if="!showArrow"/>
            <inline-svg src="media/icons/iconsax/dropBlue.svg" 
            style="-webkit-transform:rotate(180deg);
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg);
            vertical-align:bottom; 
            top: 8px; 
            position: relative;" 
            height="15" 
            width="15" v-if="showArrow"/>
          </div>
        </div>
      </div>
      <KTUserMenu></KTUserMenu>
    </div>
    <div
      class="d-flex align-items-center d-none ms-2 me-n3"
      title="Show header menu"
    >
      <div
        class="btn btn-icon btn-active-light-primary"
        id="kt_header_menu_mobile_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/text/txt001.svg" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import KTSearch from "@/layout/header/partials/Search.vue";
import KTNotificationsMenu from "@/layout/header/partials/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";
import store from "@/store";

export default defineComponent({
  name: "topbar",
  components: {
    KTSearch,
    KTNotificationsMenu,
    KTQuickLinksMenu,
    KTUserMenu,
  },
  setup (){
    const showArrow = ref<boolean>(false);
    const name = ref<any>();
    const last = ref<any>();
    const nameComplete = ref<any>();
    const lastComplete = ref<any>();
    const email = ref<any>();
    const userInfo = ref<any>();

    onMounted(()=>{
      let userInfoObj:any = localStorage.getItem('userinfo');
      userInfo.value = JSON.parse(userInfoObj);
      name.value=userInfo.value.name.charAt(0).toUpperCase();
      last.value=userInfo.value.last_name.charAt(0).toUpperCase();
      nameComplete.value=userInfo.value.name.charAt(0).toUpperCase() + userInfo.value.name.slice(1);
      lastComplete.value=userInfo.value.last_name.charAt(0).toUpperCase() + userInfo.value.last_name.slice(1);;
      email.value=userInfo.value.email;
    });

    return {
      currentUser: computed(() => store.getters.currentUser),
      showArrow,
      name,
      last,
      userInfo,
      email,
      nameComplete,
      lastComplete
    }
  }
});
</script>
<style scoped>
.btnPerfil {
  padding: 14px;
  background-color: #393840;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
 .btnPerfil span {
    position: relative;
    top: -3px;
    left: -3px;
 }
.tituloPerfil {
  font-size: 13px;
}

.emailPerfil {
  font-size: 11px;
}

</style>