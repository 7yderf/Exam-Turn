<template>
    <section class=" container about"  >
        <article class="about__hero">
            <div class="about__hero-tit">
                <h1>
                    Nosotros
                </h1>
                <p>
                    Queremos convertirnos en una de las principales compañías de México para el desarrollo de software.
                </p>
                <button>
                    Cotiza tu desarrollo
                </button>

            </div>
            <div class="about__hero-img">
                <GlobalHomeImgCircleApp
                :img_top="'/turn.png'" 
                :image_bottom="'/circle_2.png'"
                :type="'about'"
                />
            </div>
        </article>

        <article class="about__strategy">
            <h2>El mejor aliado estratégico</h2>
            <p>Trabajamos de la mano contigo desde el proceso de creación y diseño hasta la operación de tu nuevo negocio digital.</p>
            <div class="about__strategy-cards">
                <GlobalAboutCardAbout
                v-for="kpi, index in kpis"
                :key="index"
                :title="kpi.title"
                :description="kpi.description"
                :type="'strategy'"
                :id="index"
                />
            </div>
        </article>

        <article class="about__our">
            <h2>Nuestro equipo</h2>
            <p>Lleno de personas talentosas en diversas áreas.</p>
            <div class="about__our-cards">
                <button
                v-for="(teem, index) in Object.keys(teems)"
                :key="index"
                @click="(e) => key_teem = teem" 
                class="about__our-btns"
                :class="key_teem == teem ? 'about__our-btns--active' : ''"
                >
                {{teem}}
                </button>
            </div>
            <div class="about__our-self">
              <GlobalHomeCarousel :cards="teems[`${key_teem}`]" :type="'about'" />
            </div>
        </article>
        <article class="about__ideology">
          <h4 class="about__ideology-tit">
            Nosotros creemos en
          </h4>
          <div class="about__ideology-cards">
            <GlobalAboutCardIcons
              v-for="idelogy, index in card_idelogy"
              :key="index"
              :img="idelogy.img"
              :description="idelogy.description"
              :type="'strategy'"
              :id="index"
              />
          </div>

        </article>
        
        <article class="about__contact">
            <h2>Contactános</h2>
            <p>Estamos encantados de oir tu proyecto</p>

            <GlobalContact />

        </article>

    </section>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from "vue";
    type Teem = {
      img: string;
      title: string;
      description: string;
    };
    type Teems = {
      [key: string]: Teem[];
    };
    
    const key_teem = ref<String>('');

    const kpis = ref([
        {
            title: "6+",
            description: "años laborales",
        },
        {
            title: "100+",
            description: "proyectos realizados",
        },
        {
            title: "10+",
            description: "industrias",
        },
    ]);

    const teems = ref<Teems>({
      analisis: [
        {
          img: "/profiles/profile.png",
          title: "Diana Marisol",
          description: "Frontend",
        },
        {
          img: "/profiles/profile.png",
          title: "Tabita Ku",
          description: "Análisista",
        },
        {
          img: "/profiles/profile.png",
          title: "Ailton Ramos",
          description: "Diseñador UI/UX",
        },
      ],
      front: [
        {
          img: "/profiles/profile.png",
          title: "Fredy Nazario",
          description: "Frontend",
        },
        {
          img: "/profiles/profile.png",
          title: "Jose Luis",
          description: "Frontend",
        },
      ],
    });

    const card_idelogy = ref([
      {
        img: "./icon/tecn_1.svg",
        description: "El software es el cambio",
      },
      {
        img: "./icon/tecn_2.svg",
        description: "El software nos conecta",
      },
      {
        img: "./icon/tecn_3.svg",
        description: "El software es cotidiano",
      },
      {
        img: "./icon/tecn_4.svg",
        description: "El software es indispensable",
      },
    ]);

      onMounted(() => {
        key_teem.value = Object.keys(teems.value)[0];
      });


</script>
<style lang="scss" scoped>
@import "@/assets/scss/About";
</style>