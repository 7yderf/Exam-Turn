<script setup lang="ts">
import { almacen } from '@/stores/TestStore';
import { useTestStore } from '@/stores/TestStoreSet';

const { message, setMessage } = useMessage();

const TestStore = almacen();
const store_2 = useTestStore();

message.value = "Hola mundo";
const user = ref("lucide:user");

</script>

<template>
  <div>
    <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
    <h1>{{ $t('text') }}</h1>
    <form>
      <label for="locale-select">{{ $t('language') }}: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="es">es</option>
      </select>
    </form>
    <div>
      
      <p><Icon :name="user"  />{{ message }}</p>
      <p><Icon :name="user"  />{{TestStore.obras[0].descripcion}}</p>
      <h1><Icon name="lucide:alert-octagon"  />{{store_2.getMessage}}</h1>
      <button type="button" class="btn btn-primary"  @click="store_2.setMensaje('ahh!! canijo!!!')" >Cambiar estado</button>
      <br>
      <button type="button" class="btn btn-info" @click="() => setMessage('adios mundo cruel')">Cambiar</button>
    </div>
    <div class="container">
      <Contact />
    </div>
  </div>
</template>
