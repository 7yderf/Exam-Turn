<template>
  <button
          @click="() => active(team, key)" 
          class="about__our-btns"
          :id="`team_${key}`"
          :class="key_teem == team ? 'about__our-btns--active' : ''"
          >
          {{ team }}
        </button>
</template>
<script setup lang="ts">
 import { defineProps } from "vue";

 const emit = defineEmits(['activeTeem']);
 const props = defineProps<{
        key:string
        team:string
        key_teem:string
    }>();

  const active = (team:string, id:string) => {
    emit('activeTeem', team, id)
  }
</script>