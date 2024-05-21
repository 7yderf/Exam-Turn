<!-- eslint-disable vue/max-len -->
<template>
  <div class="body">
    <main class="about">
      <!--start banner secion  -->
      <MainBanner
        :back-src="{
          imgSrc: '/backgrounds/about-back.png',
        }"
        :text-content="{
          title: 'Nosotros',
          description: 'Donde hay una empresa de éxito, alguien tomó alguna vez una decisión valiente',
        }"
        :styles="{ height: '300px' }"
      />
      <!--end banner secion  -->
      <!--start about secion  -->
      <article>
        <global-background-src
          :blur="true"
          :background="'#F4F4F4'"
        />
        <div class="about__box-title box container">
          <main-paragraph
            :styles="{
              alignItem: 'center',
              titleDirection: 'center',
            }"
            :title="{ h4: 'Somos una empresa reconocida y exitosa dentro del sector inmobiliario de Baja California.' }"
            :is-title="true"
          />
        </div>
        <main-flex-box
          :class="`${from}__about`"
          :styles="{
            gap: '8%',
            maxWidhtleft: '40%',
          }"
        >
          <template #left>

            <global-background-src
              :img-src="'/backgrounds/nosotros.png'"
              :position="'top'"
            />
            <div class="about__decorate" />
          </template>
          <template #rigth>
            <main-paragraph
              :class="`${from}__about`"
              :styles="{
                alignItem: 'center',
                titleDirection: 'center',
                gap: '40px',
              }"
              :title="{ h3: 'Sobre nosotros' }"
              :text="[
                'Grupo Torres Inmobiliario inicio sus actividades en operaciones y servicios inmobiliarias en junio del año 2015. En su inicio de operaciones contábamos en este equipo con personas nuevas en el ramo de los bienes raíces, pero con mucha actitud hacia esta nueva faceta en su vida.',
                'El equipo esta conformado por Wendy Terrones, Dennise Hernández, Mariela Méndez, Mirza Arellano, Yasinthe Montoya, Emanuel Dichi, Yajaira Ortega y su servidora Lae. Flora Torres Gil.',
              ]"
            />
            <global-follow />
          </template>
        </main-flex-box>
        <div class="about__box-title box container">
          <main-paragraph
            :styles="{
              alignItem: 'center',
              titleDirection: 'center',
              gap: '40px',
            }"
            :title="{ h4: '“Donde hay una empresa de éxito, alguien tomó alguna vez una decisión valiente”' }"
            :text="['En Agosto del año 2016 SEDECO nos autoriza la Licencia Inmobiliaria con numero ENS20160006. Terminando este año con muchos éxitos cerrando un gran ciclo e iniciamos nuevos proyectos en año el 2017. Asi como también la incorporación a la mesa directiva de la Asociacion de Profesionales Inmobiliarios de Ensenada con el cargo de Tesorera', 'En este año La Asociacion de profesionales inmobiliarios de Ensenada nos brinda la oportunidad de Asociarnos como Empresa y formar parte de APIE.']"
            :is-title="true"
          />
        </div>
      </article>
      <!--end about secion  -->
      <!-- start seller-->
      <article class="w-100">
        <div class="box container py-5">
          <main-paragraph
            :styles="{
              alignItem: 'center',
              titleDirection: 'center',
            }"
            :title="{ h4: 'Nuestros vendedores', h5: 'Te ayudamos a encontrar la casa perfecta para ti' }"
            :is-title="true"
          />
        </div>
        <div class="box container">
          <global-carousel
            :cards="sellers"
            type="sellers"
          />
        </div>
      </article>
      <!-- end seller -->
      <!--start vision secion  -->
      <article>
        <global-background-src
          :blur="true"
          :background="'linear-gradient(to bottom, rgba(68,99,173,1) 0%, rgba(68,99,173,1) 53%, rgba(255,255,255,1) 53%, rgba(255,255,255,1) 100%);'"
        />
        <div class="about__box-title box container">
          <main-paragraph
            :styles="{
              alignItem: 'center',
              titleDirection: 'center',
              tilteTypeColor: 'binary',
            }"
            :title="{ h4: 'Misión, Visión & Valores' }"
            :is-title="true"
          />
        </div>
        <main-flex-box
          :class="`${from}__vision`"
          gap="0px"
        >
          <template #left>
            <global-background-src
              :blur="true"
              :background="'#FFF'"
            />
            <div class="about__list-vision box container">

              <global-icon-text
                v-for="(metric, index) in vision"
                :key="index"
                :class="`${from}__vision-item`"
                :title="metric?.title"
                :text="metric?.text"
              />

            </div>

          </template>
          <template #rigth>
            <global-background-src
              :img-src="'/backgrounds/vision.png'"
              :position="'top'"
            />
          </template>
        </main-flex-box>
        <div class="about__metrics box container">

          <global-icon-text
            v-for="(metric, index) in metrics"
            :key="index"
            :class="`${from}__metrics-item`"
            :title="metric?.title"
            :text="metric?.text"
            :icon="metric?.icon"
            :img-src="metric?.imgSrc"
            :styles="{
              textDirection: 'center',
            }"
          />

        </div>
      </article>
      <!--end vision secion  -->
      <!--start partners secion  -->
      <global-partners />
      <!--end partners secion  -->
    </main>
  </div>
</template>

<script lang="ts" setup>
const from = 'about'
const load = useload()
const mediaQueryXL = useMediaQueryXL()
const vision = [
  {
    title: 'Misión',
    // eslint-disable-next-line vue/max-len
    text: 'Ofrecer servicio profesional de la más alta calidad a través de nuestros productos: casas y terrenos. Buscar la excelencia en todo lo que realicemos impactando favorablemente en el cliente y en el desarrollo de su patrimonio.',
  },
  {
    title: 'Visión',
    // eslint-disable-next-line vue/max-len
    text: 'convertirnos en una empresa altamente competitiva, reconocida y exitosa dentro del sector inmobiliario de Baja California y estamos convencidos de que el éxito radica en la capacidad de poder trabajar en equipo.',
  },
  {
    title: 'Valores',
    text: 'Pasión, Responsabilidad, Compromiso, Honestidad, Trabajo En Equipo',
  },
]
const metrics = ref<any>([
  { title: '2015', text: 'Año de fundación' },
  { title: '43', text: 'propiedades' },
  { title: '08', text: 'Miembros del equipo' },
  { title: '250', text: 'Clientes satisfechos' },
])

const sellers = useSellers()

function isVisible(elm: any) {
  const rect = elm.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const animationScroll = () => {
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.paused').forEach(elm => {
      // que sean visibles...
      if (isVisible(elm)) {
        elm.classList.remove('paused')
      } // les quitamos la clase paused
    })
  })
}

definePageMeta({
  middleware: 'observer-nav',
  icon: 'mdi-home',
  title: 'Nosotros',
})

onMounted(async () => {
  // console.log('mounted', window.scroll)
  console.log('🚀 ~ mediaQueryXL:', mediaQueryXL.value)
  animationScroll()
  load.value = false
})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Home.scss";
</style>
