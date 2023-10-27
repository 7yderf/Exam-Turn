<template>
  <section
    ref="servic"
    class="markets"
  >
    
    <div class="markets__hero-back js">
      <div id="canvas_markets" />
      <article class="container markets__hero">
        <div class="markets__hero-content">
          <h1>Markets</h1>
          <div class="markets__hero-img markets__hero-img">
            <img
              src="../assets/images/beyond-black.png"
              alt=""
            >
          </div>
          <div class="markets__hero-img markets__hero-img--logo">
            <img
              src="../assets/images/icon-go.png"
              alt=""
            >
          </div>
        </div>
        <div class="markets__hero-content markets__hero-content--bottom">
          <div class="markets__hero-img markets__hero-img--bottom">
            <img
              src="../assets/images/patron.png"
              alt=""
            >
          </div>
          <h3> {{ $t('markest-vision') }}</h3>
          <p> {{ $t('markets-vision-text') }}
          </p>
        </div>
        <div class="markets__hero-content markets__hero-content--bottom pt-5">
          <p>{{ $t('markets-vision-text-2') }}
          </p>
        </div>
      </article>
    </div>

    <div class="markets__cards">
      <div class="markets__cards-canvas">
        <div class="markets__cards-stroke markets__cards-stroke--uno" />
        <div class="markets__cards-stroke markets__cards-stroke--dos" />
        <div class="markets__cards-stroke-content">
          <div class="markets__cards-box">
            <div class="markets__card">
              <p>ACADEMY</p>
              <img
                src="/aca_demy.png"
                alt=""
              >
            </div>
            <div class="markets__card">
              <p>TRADING</p>
              <img
                src="/tradi-ding.jpg"
                alt=""
              >
            </div>
            <div class="markets__card">
              <p>PARTNERSHIP</p>
              <img
                src="/partners.jpg"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <article class="markets__academy container">
      <div class="markets__tit">
        <h4>{{ $t('markets-academy') }}</h4>
      </div>

      <h5 class="markets__academy-tit">
        {{ $t('markets-academy-sub-text') }}
      </h5>
      <p class="markets__acadmey-txt">
        {{ $t('markets-academy-sub-text-2') }}
      </p>
    </article>
    <article class=" container markets__paragraphs paused">
      <div class="markets__paragraph-1 ">
        <ServicesParagraph
          :titulo="$t('markets-academy-list-1')"
          :bullets="''"
          :texto="''"
          :action="''"
          :image="'/academy-1.png'"
        />
      </div>
      <div class="markets__list-1">
        <ServicesListServices
          :list-services="list_1"
        />
      </div>
    </article>
    <article class=" container markets__paragraphs paused">
      <div class="markets__list-1 markets__list-1--order">
        <ServicesListServices
          :list-services="list_2"
        />
      </div>
      <div class="markets__paragraph-1 markets__paragraph-1--order">
        <ServicesParagraph
          :titulo="$t('markets-academy-list-2')"
          :bullets="''"
          :texto="''"
          :action="''"
          :image="'/academy-02.png'"
        />
      </div>
    </article>
    <article class=" container markets__paragraphs paused">
      <div class="markets__paragraph-1">
        <ServicesParagraph
          :titulo="$t('markets-academy-list-3')"
          :bullets="''"
          :texto="''"
          :action="''"
          :image="'/academy-03.png'"
        />
      </div>
      <div class="markets__list-1">
        <ServicesListServices
          :list-services="list_3"
        />
      </div>
    </article>
    <article class=" container markets__paragraphs paused">
      <div class="markets__list-1 markets__list-1--order">
        <ServicesListServices
          :list-services="list_4"
        />
      </div>
      <div class="markets__paragraph-1 markets__paragraph-1--order">
        <ServicesParagraph
          :titulo="$t('markets-academy-list-4')"
          :bullets="''"
          :texto="''"
          :action="''"
          :image="'/academy-04.png'"
        />
      </div>
    </article>
    <article class="markets__trading">
      <div class=" container markets__tit">
        <h4>{{ $t('markets-trading') }}</h4>
      </div>
      <article class="container markets__products-card  paused">
        <div class="markets__trading-card markets__trading-card--left markets__trading-paragraph-1">

          <img
            src="../assets//images/trading.png"
            alt=""
            class="markets__trading-card-img"
          >

          <div class="markets__trading-card-txt">
            <h3>{{ $t('markets-trading-card-tit-1') }}</h3>
            <p>{{ $t('markets-trading-card-text-1') }}
            </p>
            <button
              type="button"
              class="markets__trading-card-btn-read markets__trading-card-btn-read--radius"
            >
              {{ $t('read-more') }}
              <icon :name="'ri:arrow-right-fill'" />
            </button>
          </div>
        </div>
        <div class="markets__trading-card markets__trading-card--rigth markets__trading-paragraph-1">

          <div class="markets__trading-card-txt">
            <h3>{{ $t('markets-trading-card-tit-2') }}</h3>
            <p>{{ $t('markets-trading-card-text-2') }}</p>
            <button
              type="button"
              class="markets__trading-card-btn-read markets__trading-card-btn-read--radius"
            >
              {{ $t('read-more') }}
              <icon :name="'ri:arrow-right-fill'" />
            </button>
          </div>
          <img
            src="../assets//images/tranding-2.png"
            alt=""
            class="markets__trading-card-img"
          >
        </div>
        <div class="markets__trading-card markets__trading-card--left markets__trading-paragraph-1">

          <img
            src="../assets//images/tranding-3.png"
            alt=""
            class="markets__trading-card-img"
          >

          <div class="markets__trading-card-txt">
            <h3>{{ $t('markets-trading-card-tit-3') }}</h3>
            <p>{{ $t('markets-trading-card-text-3') }}</p>
            <button
              type="button"
              class="markets__trading-card-btn-read markets__trading-card-btn-read--radius"
            >
              {{ $t('read-more') }}
              <icon :name="'ri:arrow-right-fill'" />
            </button>
          </div>
        </div>
        <div class="markets__trading-card markets__trading-card--rigth markets__trading-paragraph-1">

          <div class="markets__trading-card-txt">
            <h3>{{ $t('markets-trading-card-tit-4') }}</h3>
            <p>{{ $t('markets-trading-card-text-4') }}</p>
            <button
              type="button"
              class="markets__trading-card-btn-read markets__trading-card-btn-read--radius"
            >
              {{ $t('read-more') }}
              <icon :name="'ri:arrow-right-fill'" />
            </button>
          </div>
          <img
            src="../assets//images/tranding-4.png"
            alt=""
            class="markets__trading-card-img"
          >
        </div>
      </article>
    </article>
    <article class="paused markets__broker">
      <div class="markets__whoAre container">
        <img
          src="../assets/images/trading-2.png"
          class="markets__whoAre-img"
          alt=""
        >
        <div class="markets__whoAre-box">
          <div class="markets__whoAre-blur" />
          <div class="markets__whoAre-content">
            <h3>{{ $t('markets-broker') }}</h3>
            <p>{{ $t('markets-broker-txt') }}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>

import { ref, onMounted, render } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const list_1 = ref<any>(tm('markets-list-academy'))
const list_2 = ref<any>(tm('markets-list-academy-2'))
const list_3 = ref<any>(tm('markets-list-academy-3'))
const list_4 = ref<any>(tm('markets-list-academy-4'))
const servic = ref(null)

watch(() => t('lang'), value => {
  list_1.value = tm('markets-list-academy')
  list_2.value = tm('markets-list-academy-2')
  list_3.value = tm('markets-list-academy-3')
  list_4.value = tm('markets-list-academy-3')
})

const types_proyects = ref([

  {
    titulo: 'ACADEMIA BASICA',
    bullets: [
      'Diseño UX/UI',
    ],
    texto: 'La clave para desarrollar una aplicación exitosa es combinar la funcionalidad que exigen los usuarios con un diseño y una experiencia intuitivos que la hagan lo más simple posible de usar.',
    action: 'Cotiza tu proyecto',
  },
  {
    titulo: 'ACADEMIA INTERMEDIA',
    bullets: [
      'Aplicaciones nativos',
      'Aplicaciones nativos',
    ],
    texto: 'Confiamos en nuestra experiencia tecnológica en varias industrias para ofrecer aplicaciones web, móviles, de escritorio e híbridas altamente escalables, flexibles e interoperables.',
    action: 'Cotiza tu proyecto',
  },
  {
    titulo: 'ACADEMIA MEDIA',
    bullets: [
      'Desarrollos a la medida',
    ],
    texto: 'Servicios de desarrollo de software personalizado. Contamos con desarrolladores expertos, y con vasta experiencia en industrias específicas.',
    action: 'Cotiza tu proyecto',
  },
  {
    titulo: 'ACADEMIA AVANZADA',
    bullets: [
      'Desarrollos a la medida',
    ],
    texto: 'Servicios de desarrollo de software personalizado. Contamos con desarrolladores expertos, y con vasta experiencia en industrias específicas.',
    action: 'Cotiza tu proyecto',
  },

])

function isVisible(elm: any) {
  const rect = elm.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const animationScroll = () => {
  window.addEventListener('scroll', e => {
    document.querySelectorAll('.paused').forEach(elm => {
      if (isVisible(elm)) // que sean visibles...
      { elm.classList.remove('paused') } // les quitamos la clase paused
    })
  })
}

onMounted(async () => {
  animationScroll()
  // Three JS Template
  // ----------------------------------------------------------------- BASIC parameters
  const container = document.getElementById('canvas_markets')
  let renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  container.appendChild(renderer.domElement)
  if (container?.children.length > 1) {
    container?.children[0].remove()
  }
  console.log('🚀 ~ file: markets.vue:520 ~ onMounted ~ container:', container?.children)

  window.addEventListener('resize', onWindowResize, false)
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  var camera = new THREE.PerspectiveCamera(
    20,
    window.innerWidth / window.innerHeight,
    1,
    500,
  )

  camera.position.set(0, 2, 14)

  const scene = new THREE.Scene()
  const city = new THREE.Object3D()
  const smoke = new THREE.Object3D()
  const town = new THREE.Object3D()

  let createCarPos = true
  const uSpeed = 0.001

  // ----------------------------------------------------------------- FOG background

  // var setcolor = 0xF02050;
  const setcolor = 0x5C5E9C
  // var setcolor = 0xFF6347;

  scene.background = new THREE.Color(setcolor)
  scene.fog = new THREE.Fog(setcolor, 10, 16)
  // scene.fog = new THREE.FogExp2(setcolor, 0.05);
  // ----------------------------------------------------------------- RANDOM Function
  function mathRandom(num = 8) {
    const numValue = -Math.random() * num + Math.random() * num
    return numValue
  }
  // ----------------------------------------------------------------- CHANGE bluilding colors
  let setTintNum = true
  function setTintColor() {
    if (setTintNum) {
      setTintNum = false
      var setColor = 0x000000
    } else {
      setTintNum = true
      var setColor = 0x000000
    }
    // setColor = 0x222222;
    return setColor
  }

  // ----------------------------------------------------------------- CREATE City

  function init() {
    const segments = 2
    for (let i = 1; i < 100; i++) {
      const geometry = new THREE.CubeGeometry(
        1,
        0,
        0,
        segments,
        segments,
        segments,
      )
      const material = new THREE.MeshStandardMaterial({
        color: setTintColor(),
        wireframe: false,
        // opacity:0.9,
        // transparent:true,
        // roughness: 0.3,
        // metalness: 1,
        shading: THREE.SmoothShading,
        // shading:THREE.FlatShading,
        side: THREE.DoubleSide,
      })
      const wmaterial = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF,
        wireframe: true,
        transparent: true,
        opacity: 0.03,
        side: THREE.DoubleSide, /* ,
      shading:THREE.FlatShading */
      })

      const cube = new THREE.Mesh(geometry, material)
      const wire = new THREE.Mesh(geometry, wmaterial)
      const floor = new THREE.Mesh(geometry, material)
      const wfloor = new THREE.Mesh(geometry, wmaterial)

      cube.add(wfloor)
      cube.castShadow = true
      cube.receiveShadow = true
      cube.rotationValue = 0.1 + Math.abs(mathRandom(8))

      // floor.scale.x = floor.scale.z = 1+mathRandom(0.33);
      floor.scale.y = 0.05 // +mathRandom(0.5);
      cube.scale.y = 0.1 + Math.abs(mathRandom(8))
      // TweenMax.to(cube.scale, 1, {y:cube.rotationValue, repeat:-1, yoyo:true, delay:i*0.005, ease:Power1.easeInOut});
      /* cube.setScale = 0.1+Math.abs(mathRandom());

    TweenMax.to(cube.scale, 4, {y:cube.setScale, ease:Elastic.easeInOut, delay:0.2*i, yoyo:true, repeat:-1});
    TweenMax.to(cube.position, 4, {y:cube.setScale / 2, ease:Elastic.easeInOut, delay:0.2*i, yoyo:true, repeat:-1}); */

      const cubeWidth = 0.9
      cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth)
      // cube.position.y = cube.scale.y / 2;
      cube.position.x = Math.round(mathRandom())
      cube.position.z = Math.round(mathRandom())

      floor.position.set(
        cube.position.x,
        0 /* floor.scale.y / 2 */,
        cube.position.z,
      )

      town.add(floor)
      town.add(cube)
    }
    // ----------------------------------------------------------------- Particular

    const gmaterial = new THREE.MeshToonMaterial({
      color: 0xFFFF00,
      side: THREE.DoubleSide,
    })
    const gparticular = new THREE.CircleGeometry(0.01, 3)
    const aparticular = 5

    for (let h = 1; h < 300; h++) {
      const particular = new THREE.Mesh(gparticular, gmaterial)
      particular.position.set(
        mathRandom(aparticular),
        mathRandom(aparticular),
        mathRandom(aparticular),
      )
      particular.rotation.set(mathRandom(), mathRandom(), mathRandom())
      smoke.add(particular)
    }

    const pmaterial = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      roughness: 10,
      metalness: 0.6,
      opacity: 0.9,
      transparent: true,
    })
    const pgeometry = new THREE.PlaneGeometry(60, 60)
    const pelement = new THREE.Mesh(pgeometry, pmaterial)
    pelement.rotation.x = (-90 * Math.PI) / 180
    pelement.position.y = -0.001
    pelement.receiveShadow = true
    // pelement.material.emissive.setHex(0xFFFFFF + Math.random() * 100000);

    city.add(pelement)
  }

  // ----------------------------------------------------------------- MOUSE function
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  let INTERSECTED
  let intersected

  function onMouseMove(event) {
    event.preventDefault()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  }
  function onDocumentTouchStart(event) {
    if (event.touches.length == 1) {
      event.preventDefault()
      mouse.x = event.touches[0].pageX - window.innerWidth / 2
      mouse.y = event.touches[0].pageY - window.innerHeight / 2
    }
  }
  function onDocumentTouchMove(event) {
    if (event.touches.length == 1) {
      event.preventDefault()
      mouse.x = event.touches[0].pageX - window.innerWidth / 2
      mouse.y = event.touches[0].pageY - window.innerHeight / 2
    }
  }
  window.addEventListener('mousemove', onMouseMove, false)
  window.addEventListener('touchstart', onDocumentTouchStart, false)
  window.addEventListener('touchmove', onDocumentTouchMove, false)

  // ----------------------------------------------------------------- Lights
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 4)
  const lightFront = new THREE.SpotLight(0xFFFFFF, 20, 10)
  const lightBack = new THREE.PointLight(0xFFFFFF, 0.5)

  const spotLightHelper = new THREE.SpotLightHelper(lightFront)
  // scene.add( spotLightHelper );

  lightFront.rotation.x = (45 * Math.PI) / 180
  lightFront.rotation.z = (-45 * Math.PI) / 180
  lightFront.position.set(5, 5, 5)
  lightFront.castShadow = true
  lightFront.shadow.mapSize.width = 6000
  lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width
  lightFront.penumbra = 0.1
  lightBack.position.set(0, 6, 0)

  smoke.position.y = 2

  scene.add(ambientLight)
  city.add(lightFront)
  scene.add(lightBack)
  scene.add(city)
  city.add(smoke)
  city.add(town)

  // ----------------------------------------------------------------- GRID Helper
  const gridHelper = new THREE.GridHelper(60, 120, 0xFF0000, 0x000000)
  city.add(gridHelper)

  // ----------------------------------------------------------------- CAR world
  const generateCar = function () {}
  // ----------------------------------------------------------------- LINES world

  const createCars = function (cScale = 2, cPos = 20, cColor = 0xFFFF00) {
    const cMat = new THREE.MeshToonMaterial({
      color: cColor,
      side: THREE.DoubleSide,
    })
    const cGeo = new THREE.CubeGeometry(1, cScale / 40, cScale / 40)
    const cElem = new THREE.Mesh(cGeo, cMat)
    const cAmp = 3

    if (createCarPos) {
      createCarPos = false
      cElem.position.x = -cPos
      cElem.position.z = mathRandom(cAmp)

      TweenMax.to(cElem.position, 3, {
        x: cPos,
        repeat: -1,
        yoyo: true,
        delay: mathRandom(3),
      })
    } else {
      createCarPos = true
      cElem.position.x = mathRandom(cAmp)
      cElem.position.z = -cPos
      cElem.rotation.y = (90 * Math.PI) / 180

      TweenMax.to(cElem.position, 5, {
        z: cPos,
        repeat: -1,
        yoyo: true,
        delay: mathRandom(3),
        ease: Power1.easeInOut,
      })
    }
    cElem.receiveShadow = true
    cElem.castShadow = true
    cElem.position.y = Math.abs(mathRandom(5))
    city.add(cElem)
  }

  const generateLines = function () {
    for (let i = 0; i < 60; i++) {
      createCars(0.1, 20)
    }
  }

  // ----------------------------------------------------------------- CAMERA position

  const cameraSet = function () {
    createCars(0.1, 20, 0xFFFFFF)
  // TweenMax.to(camera.position, 1, {y:1+Math.random()*4, ease:Expo.easeInOut})
  }

  // ----------------------------------------------------------------- ANIMATE

  const animate = function () {
    const time = Date.now() * 0.00005
    requestAnimationFrame(animate)

    city.rotation.y -= (mouse.x * 8 - camera.rotation.y) * uSpeed
    city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed
    if (city.rotation.x < -0.05) city.rotation.x = -0.05
    else if (city.rotation.x > 1) city.rotation.x = 1
    const cityRotation = Math.sin(Date.now() / 5000) * 13
    // city.rotation.x = cityRotation * Math.PI / 180;

    // console.log(city.rotation.x);
    // camera.position.y -= (-(mouse.y * 20) - camera.rotation.y) * uSpeed;;

    for (let i = 0, l = town.children.length; i < l; i++) {
      const object = town.children[i]
    // object.scale.y = Math.sin(time*50) * object.rotationValue;
    // object.rotation.y = (Math.sin((time/object.rotationValue) * Math.PI / 180) * 180);
    // object.rotation.z = (Math.cos((time/object.rotationValue) * Math.PI / 180) * 180);
    }

    smoke.rotation.y += 0.01
    smoke.rotation.x += 0.01

    camera.lookAt(city.position)
    renderer.render(scene, camera)
  }

  // ----------------------------------------------------------------- START functions

  setTimeout(() => {
    init()
    animate()
  }, 50)
})

useHead({

})

</script>
<style lang="scss" scoped>
@import "@/assets/scss/Markets.scss";

#canvas_markets {
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;

}
</style>
