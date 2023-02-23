<template>
  <div class="field" :data-Type="data">
    <div class="label" :data-Type="data">
      <label class="label__text" >{{ label }}</label>
    </div>

      <div class="input input__box" :data-Type="data">
        
          <VField :name="name"  v-model="searchGlobal" v-slot="{ field, meta, errors  }">
            <span class="input__bullet">
              <!-- <i class="input__bullet-icon" :class="leftIcon"></i> -->
              <img class="input__bullet-icon" :src="icon" alt="">
            </span>
            <input
              v-bind="field"
              class="input__input input__input--select"
              :class="{
                'is-success': meta.valid && meta.touched,
                'is-danger': !meta.valid && meta.touched,
              }"
              :placeholder="placeholder"
              :type="type"
              autocomplete="off"
              :data-search="true"
              @focus="showSearch"
              @blur="handelSerch"
              @click="debounceInput"
              id="input_search_enter"
              readonly
            />
            <div
              class="search__resultSerch"
              :data-Show="opcionSerch"
              v-if="searchInputService !== ''"
            >
              <div
                class="search__resultSerch-list"
                v-for="item in searchInputService"
                :key="item.id"
                @click="serchParams(item)"
                data-bs-dismiss="modal"
              >
                {{ `${item.name}` }}
              </div>
            </div>
            <span
              class="input__check--select"
              :data-check="meta.valid && meta.touched"
            >
              <img src="@/assets/icons/isax/linear/arrow-down.svg" alt="">
            </span>
            
            <p class="input__text-danger" v-if="!meta.valid && meta.touched">
              {{ errors[0] }}
            </p>
          </VField>
       
      </div>

  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  data: {
    type: String,
    default: "",
  },
});
const searchGlobal = ref("");
const searchInput = ref([]);
const searchInputService = ref([]);
const opcionSerch = ref(false);
const mod = ref(false);
  
    const showSearch = async () => {
      opcionSerch.value = true;
    };
    const handelSerch = () => {
      setTimeout(() => {
        opcionSerch.value = false;
      }, 500);
    };
    
    
    const serchParams = (value) => {
      console.log(value);
      searchGlobal.value = value.value;
      // emit("cityValue", value.value);
    };
  
    const debounceInput = async () => {
      
      searchInputService.value = [
        {
        id: 1,
        value: 300000,
        name: '$300,000'
        },
        {
        id: 2,
        value: 700000,
        name: '$700,000'
        },
        {
        id: 3,
        value: 1500000,
        name: '$1500,000'
        }
      ];
      
    };

    // const debounceInput = _.debounce(async () => {
    //   const { data } = await ApiService.get(
    //       `/api/cities?search=${searchGlobal.value}`
    //     );
    //     searchInputService.value = data.data.map((c, index) => {
    //       return { id: index + 1, value: c.city, name: c.name };
    //     });

    //     searchInput.value = [];
      
    // }, 400);


</script>
<style lang="scss" scoped>
@import "@/assets/scss/Input.scss";

.search {
  &__content-search {
    position: relative;
    width: 100%;
    input{
      width: 100%;
      height: 50px;
      background: #151317;
      border-radius: 5px;
      padding: 20px;
    }
  }
  &__content-search {
    display: flex;
    align-items: center;
    justify-content: center;
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
    background: #151317;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    display: none;
    max-height: 250px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: #ff5b2011 #f3f3f300;
    scrollbar-width: thin;
    &::-webkit-scrollbar-thumb {
      background: #565656;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar{
      width: 5px;
    }
    
    &::-webkit-scrollbar-thumb:active {
      background-color: #565656;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: #565656;
    }
    
     /* Estilos track de scroll */
    &::-webkit-scrollbar-track {
      background: #f3f3f300;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-track:hover, 
    &::-webkit-scrollbar-track:active {
      background: #00000000;
    }
    &[data-Show="true"] {
      display: flex;
      z-index: 2;
    }
  }
  &__resultSerch-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 8px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color:#252427;
      font-weight: 400;
    }
  }
}

</style>
