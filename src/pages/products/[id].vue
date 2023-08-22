<script lang="ts" setup>

const { id } = useRoute().params
const historyNav = useItemNav()
console.log("🚀 ~ file: [id].vue:5 ~ historyNav:", historyNav)

definePageMeta({
    middleware: 'observer-nav',
    icon: 'mdi-home',
    title: 'Productos',
    });
</script>
<template>
 <main>
  <article>
    <ListNavDirectory :links="historyNav"/>
  </article>
 <p> producto número {{ id }} </p>
 </main>
</template>
<style lang="scss" scoped>
</style>