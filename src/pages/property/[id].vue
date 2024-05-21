<script lang="ts" setup>
const load = useload()
const { id } = useRoute().params
const products = ref<any>({})
const { usePropertyDetail } = useProperty()
const { product }: any = await usePropertyDetail(id)
products.value = product.value || products.value

onMounted(async () => {
  setTimeout(() => {
    load.value = false
  }, 100)
})

definePageMeta({
  middleware: 'observer-nav',
  icon: 'mdi-home',
  title: 'Detalle de propiedad',
})

</script>
<template>
  <main class="detail">
    <article>
      <section class="container">
        <div class="detail__title">
          <h1>{{ products.publication_title }}</h1>
        </div>
        <div class="box">
          <global-detail-property
            :property="products"
          />
        </div>
      </section>
    </article>
    <article class="">
      <section class="container detail__map">
        <div class="box detail__map-box">
          <iframe
            class="detail__map-iframe box"
            title="map"
            height="400"
            :src="`https://maps.google.com/maps?q=${products.geo_lat},${products.geo_long}&hl=es;z=14&amp;output=embed`"
          />
        </div>
        <div class="box detail__map-direction">
          <global-icon-text
            :icon="'ri:map-pin-2-fill'"
            title="Dirección del inmueble"
            :text="products.location.name"
          />
          <p class="detail__map-contact">Datos de contacto</p>
          <global-icon-text
            :icon="'ri:user-2-fill'"
            title=""
            :text="products.branch.name"
          />
          <global-icon-text
            :icon="'ri:mail-fill'"
            title="Correo electrónico"
            :text="products.branch.email"
          />
          <global-icon-text
            :icon="'ri:phone-fill'"
            title="Teléfono"
            :text="products.branch.phone_area + ' ' + products.branch.phone"
          />
        </div>
      </section>
    </article>

  </main>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/DetailProperty.scss";
</style>
