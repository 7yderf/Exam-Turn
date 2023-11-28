<template>
  <div class="body">
    <main class="about">
      <article class="w-100 about__hero">
        <global-background-src
          :img-src="'/backgrounds/nosotros.png'"
        />
        <section class="about__hero-section">
          <h4>Nosotros</h4>
          <p>Nuestra especialidad es el ramo comercial e industrial</p>
        </section>
      </article>
      <article class="about__mision">
        <global-background-src
          :img-src="'/backgrounds/background-val.png'"
        />
        <section class="container about__mision-section">
          <div class="box about__mision-box">
            <h4>Misión</h4>
            <p>proporcionar una asesoría profesional apegada a la realidad, dar una respuesta rápida y eficiente a las necesidades de los clientes, apoyados en nuestra amplia experiencia, conocimientos técnicos, del mercado, legales y fiscales para maximizar el beneficio. <br />Ayudamos a cuidar e incrementar el patrimonio de los clientes. Nuestra especialidad es el ramo comercial e industrial.
            </p>
          </div>
          <div class="box about__mision-box">
            <div class="box about__mision-icons">
              <global-background-src
                :blur="'true'"
              />
              <h5>Las principales actividades que desempeñamos son </h5>
              <global-icon-text
                :icon="'ri:medal-fill'"
                :text="'Promoción'"
              />
              <global-icon-text
                :icon="'ri:coins-fill'"
                :text="'Valuación de inmuebles'"
              />
              <global-icon-text
                :icon="'ri:verified-badge-fill'"
                :text="'Administración'"
              />
              <global-icon-text
                :icon="'ri:user-2-fill'"
                :text="'Capacitación'"
              />
              <global-icon-text
                :icon="'ri:shake-hands-fill'"
                :text="'Asesoría'"
              />
            </div>
          </div>
        </section>
      </article>
      <article class="about__val">
        <global-background-src
          :img-src="'/backgrounds/background-val-card.png'"
        />
        <section class="about__val-row container">
          <h3>Valores</h3>
          <div class="box about__val-cards">
            <global-values-card
              img-src="/icon/Accessories.png"
              text="Eficacia"
            />
            <global-values-card
              img-src="/icon/Medical.png"
              text="Generación de valor"
            />
            <global-values-card
              img-src="/icon/Pet-food.png"
              text="Honestidad"
            />
            <global-values-card
              img-src="/icon/Grooming.png"
              text="Superación constante"
            />
            <global-values-card
              img-src="/icon/Grooming2.png"
              text="Resiliencia"
            />
          </div>
        </section>
        <div class="box about__val-image-bottom">
          <global-background-src
            :img-src="'/backgrounds/val-work.png'"
            :position="'bottom'"
          />
        </div>
      </article>
      <article class="w-100 about__hero about__hero--valores">
        <global-background-src
          :img-src="'/backgrounds/valores.png'"
        />
        <section class="about__hero-section">
          <h4>Visión</h4>
          <p>Ser la empresa líder en México en la comercialización de inmuebles comerciales e industriales
          </p>
        </section>
      </article>
      <article class="about__contact">
        <section class="container about__contact-section">
          <div class="box about__contact-left">
            <h4>¿Tiene alguna duda o Proyecto en mente?</h4>
            <h5>Estamos para ayudarle</h5>
            <Contact />
          </div>
          <div
            class="box about__contact-right"
          >
            <global-background-src
              :img-src="'/backgrounds/contact.png'"
            />
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script lang="ts" setup>

function isVisible(elm: any) {
  const rect = elm.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const animationScroll = () => {
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.paused').forEach(elm => {
      if (isVisible(elm)) // que sean visibles...
      { elm.classList.remove('paused') } // les quitamos la clase paused
    })
  })
}

onMounted(async () => {
  console.log('mounted', window.scroll)
  animationScroll()
})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/About.scss";
</style>
