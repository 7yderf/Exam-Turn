<!-- eslint-disable vue/max-len -->
<!-- eslint-disable vue/no-template-target-blank -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>

  <footer class="footer">
    <div class="footer__hero container">
      <div class="footer__box-logo">
        <img
          src="../assets/images/logo_grupo_torres_blnk.png"
          alt=""
        >

      </div>
      <div class="footer__legal-box">
        <main-paragraph
          :class="`${from}__item`"
          :styles="{
            titleDirection: 'left',
            tilteTypeColor: 'binary',
            textTypeColor: 'binary',
            alignItem: 'flex-start',
          }"
          :title="{ h6: 'Contacto' }"
          :text="[
            'C. Octava # 588 Int 7 Plaza Lozano Zona Centro 22800, Ensenada B.C',
            '(646) 156 02 36/646 193 20 43/(664) 2963616',
            'contacto@grupotorresinmobiliario.com',
            'No. Licencia Inmobiliaria : Ens20160006',
          ]"
        />

      </div>
      <div class="footer__legal-box">
        <main-paragraph
          :class="`${from}__item`"
          :styles="{
            titleDirection: 'left',
            tilteTypeColor: 'binary',
            textTypeColor: 'binary',
            alignItem: 'flex-start',
          }"
          :title="{ h6: 'Sobre Nosotros' }"
          :text="[
            'Grupo Torres Inmobiliario inicio sus actividades en operaciones y servicios inmobiliarias en junio del año 2015. En su inicio de operaciones contábamos en este equipo con personas nuevas en el ramo de los bienes raíces, pero con mucha actitud hacia esta nueva faceta en su vida',
          ]"
        />
      </div>
    </div>
    <article class="footer__copyright-box w-100">
      <div class="footer__copyright container">
        <main-paragraph
          :styles="{
            alignItem: 'flex-start',
            textTypeColor: 'binary',
          }"
          :text="['© 2024 Grupo Torres Inmobiliario']"
        />
        <div class="box footer__legales">
          <global-icon-text
            v-for="(legal, index) in legales"
            :key="index"
            :class="`${from}__item`"
            :link="legal"
            :styles="{
              textTypeColor: 'binary',
            }"
          />
        </div>
        <global-follow
          :class="`${from}__follow`"
        />
      </div>
    </article>
  </footer>

</template>
<script lang="ts" setup>
const from = 'footer'
const legales = [
  {
    to: '',
    target: '_blank',
    text: 'Aviso de Privacidad',
  },
  {
    to: '',
    target: '_blank',
    text: 'Términos y Condiciones',
  },
  {
    to: '',
    target: '_blank',
    text: 'Contacto',
  },
]

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";

.footer {
 @include flex;
 flex-direction: column;
 width: 100%;
 background:var(--secondary-color);
 padding: 64px 0 0px;

 &__hero{
  @include flex(space-between, 24px, flex-start);
  padding: 0 16px 32px;
 }

 &__legal-box{
  @include flex(center, 8px, flex-start);
  flex-direction: column;
  width: 33%;
 }
 &__copyright-box{
  background: var(--primary-color);
 }
 &__copyright{
  @include flex(center, 8px, center);
 }
 &__legales{
  @include flex;
  gap: 16px;
 }
 @include for-size(tablet-landscape){
  &__hero{
    flex-wrap: wrap;
    gap: 4px;
  }
  &__legal-box{
    min-width: inherit;
  }
  &__copyright{
    flex-wrap: wrap;
  }
 }
 @include for-size(tablet-portrait){
  &__legal-box{
    width: 100%;
  }
 }
}
</style>
