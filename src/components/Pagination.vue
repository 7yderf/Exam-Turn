<template>
  <div class="pagination">
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      @click="goToPage(pageNumber)"
      :class="{ active: currentPage === pageNumber }"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  baseUrl: String, // URL base del paginador de Laravel
  currentPage: Number,
  totalPages: Number,
});

const emits = defineEmits(['pageChange']);

const goToPage = (pageNumber) => {
  emits.pageChange(pageNumber);
};
</script>

<style scoped>
/* Estilos de paginación */
</style>
