<template>
  <main class="benefits">
    <article class="benefits__copy">
      <img :src="buyCar" alt="" class="benefits__copy-img" />
      <div class="benefits__copy-box benefits__copy-box--drak">
        <h2 class="benefits__copy-title benefits__copy-title--dark">
          Vende tu vehículo
        </h2>
        <p class="benefits__copy-text benefits__copy-text--dark">
          ¡Hazlo fácil! Con la confianza, seguridad, garantía y protección que
          nos distinguen.
        </p>
        <router-link
          to="/vende"
          class="benefits__copy-button benefits__copy-button--dark"
        >
          Quiero vender mi auto
        </router-link>
      </div>
    </article>

    <article class="benefits__copy">
      <div class="benefits__copy-box benefits__copy-box--white">
        <div class="benefits__copy-box-content">
          <h2 class="benefits__copy-title benefits__copy-title">
            ¡Vende con nosotros!
          </h2>
          <p class="benefits__copy-text benefits__copy-text">
            Encuentra las mejores ofertas
          </p>

          <div class="benefits__copy-opcion-text">
            <div class="benefits__copy-opcion">
              <div class="benefits__copy-opcion-btn">1</div>
              <div class="benefits__copy-opcioxt">
                <p class="benefits__copy-txt1">Háblanos de tu auto</p>
                <p class="benefits__copy-txt2 benefits__desktop">
                  Somos un grupo automotriz con mas de 60 Cuentanos las
                  características principales como año, marca, modelo, versión y
                  kilometraje.
                </p>
                <p class="benefits__copy-txt2 benefits__mobile">
                  Cuentanos las características principales como año, marca,
                  modelo, versión y kilometraje.
                </p>
              </div>
            </div>
            <br />

            <div class="benefits__copy-opcion">
              <div class="benefits__copy-opcion-btn">2</div>
              <div class="benefits__copy-opcioxt">
                <p class="benefits__copy-txt1">Agenda cita</p>
                <p class="benefits__copy-txt2">
                  Tenemos varios puntos de revisión para que escojas el más
                  cercano a ti.
                </p>
              </div>
            </div>
          </div>

          <router-link
            to="/vende"
            class="benefits__copy-button benefits__copy-button benefits__button_evaluacion"
          >
            Obtener evaluación
          </router-link>
        </div>
      </div>
      <img :src="sellYourCar" alt="" class="benefits__copy-img" />
    </article>
    <article class="faq">
      <h1 class="faq_title">Preguntas Frecuentes</h1>
      <div class="faq-accordion" id="faq_accordion">
        <div class="faq-accordion-item">
          <h2 class="faq-accordion-header" id="faq_accordion_1_header_1">
            <button
              class="accordion-button faq-accordion-button"
              :class="'collapsed'"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq_accordion_1_body_1"
              aria-expanded="true"
              aria-controls="faq_accordion_1_body_1"
            >
              <span class="faq-accordion-header-text"
                >¿Puedo vender mi auto si vivo en otro estado? ¿Puedo vender mi
                auto si vivo en otro estado?</span
              >
            </button>
          </h2>
          <div
            class="accordion-collapse collapse"
            id="faq_accordion_1_body_1"
            aria-labelledby="faq_accordion_1_header_1"
          >
            <div class="faq-accordion-body">Si</div>
          </div>
        </div>
        <div class="faq-accordion-item">
          <h2 class="faq-accordion-header" id="faq_accordion_1_header_2">
            <button
              class="accordion-button faq-accordion-button"
              :class="'collapsed'"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq_accordion_1_body_2"
              aria-expanded="true"
              aria-controls="faq_accordion_1_body_2"
            >
              <span class="faq-accordion-header-text"
                >¿Cómo es el proceso de inspección? ¿Pueden realizarlo a
                domicilio? ¿Tengo que estar presente?</span
              >
            </button>
          </h2>
          <div
            class="faq-accordion-collapse collapse"
            id="faq_accordion_1_body_2"
            aria-labelledby="faq_accordion_1_header_2"
          >
            <div class="faq-accordion-body">Si, Si y Si.</div>
          </div>
        </div>
        <div class="faq-accordion-item">
          <h2 class="faq-accordion-header" id="faq_accordion_1_header_3">
            <button
              class="accordion-button faq-accordion-button"
              :class="'collapsed'"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq_accordion_1_body_3"
              aria-expanded="true"
              aria-controls="faq_accordion_1_body_3"
            >
              <span class="faq-accordion-header-text"
                >¿Puedo venderles cualquier tipo de auto?</span
              >
            </button>
          </h2>
          <div
            class="faq-accordion-collapse collapse"
            id="faq_accordion_1_body_3"
            aria-labelledby="faq_accordion_1_header_3"
          >
            <div class="faq-accordion-body">
              Tan sólo entra en la sección de cambia o vende tu auto y responde
              las preguntas para cotizarlo. El proceso toma solamente 2 minutos
              y al finalizar recibirás de forma instantanea ofertas por tu auto.
              Posteriormente deberás agendar una cita para inspección y obtener
              tu oferta final.
            </div>
          </div>
        </div>

        <div class="faq-accordion-item">
          <h2 class="faq-accordion-header" id="faq_accordion_1_header_4">
            <button
              class="accordion-button faq-accordion-button"
              :class="'collapsed'"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq_accordion_1_body_4"
              aria-expanded="true"
              aria-controls="faq_accordion_1_body_4"
            >
              <span class="faq-accordion-header-text">Pregunta 4</span>
            </button>
          </h2>
          <div
            class="faq-accordion-collapse collapse"
            id="faq_accordion_1_body_4"
            aria-labelledby="faq_accordion_1_header_4"
          >
            <div class="faq-accordion-body border-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laboriosam asperiores aperiam, ipsam optio laudantium iste sit
              obcaecati fugit. Adipisci provident dolorem iste dolor! Aliquid
              amet illum iure provident architecto!
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>
<script>
/* eslint-disable no-undef */
import {
  onMounted,
  ref,
  onUnmounted,
  computed,
  watch,
  onBeforeMount,
} from "vue";

import "@/assets/styles/views/Benefits.scss";

import buyCar from "@/assets/images/ben-banner-1.jpg";
import sellYourCar from "@/assets/images/clientsBanner.png";

export default {
  name: "benefits",
  components: {},
  setup() {
    const windowSize = ref(false);

    const mobile = window.matchMedia("(min-width: 767px)");
    const handleMobile = (e) => {
      if (e.matches) {
        windowSize.value = true;
      } else {
        windowSize.value = false;
      }
    };
    mobile.addEventListener("change", handleMobile);

    onBeforeMount(async () => {
      handleMobile(mobile);
    });

    return {
      windowSize,
      buyCar,
      sellYourCar,
    };
  },
};
</script>

<style lang="scss" scoped></style>
