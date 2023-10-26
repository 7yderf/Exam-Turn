<!-- eslint-disable no-tabs -->
<template>
  <section
    ref="servic"
    class="services"
  >
    <div class="services__home-back">
      <div id="canvas_container" />
      <article class=" container services__hero ">
        <div class="services__hero-tit">
          <span><p>{{ $t('home-hero-title') }}</p></span>
          <span class="services__hero_tit-top">
            <span>{{ $t('home-hero-title-2') }}</span> {{ $t('home-hero-title-2-span') }}
          </span>
          <span class="services__hero_tit-top services__hero_tit-top--rigth">
            {{ $t('home-hero-title-3') }}<span> {{ $t('home-hero-title-3-span') }}</span>
          </span>

        </div>
        <span class="services__hero-img">
          <!-- <img
            src="../assets//images/Ellipse.png"
            class="elipse"
            alt=""
          /> -->
          <img
            src="../assets/images/liner_back.png"
            class="services__hero-img-back"
            alt=""
          />
          <img
            src="../assets/images/icon-go.png"
            class="services__hero-img-icon"
            alt=""
          />
        </span>
      </article>
      <div class="container services__hero-bottom">
        <p>{{ $t('home-hero-subtitle') }}<span>{{ $t('home-hero-subtitle-span-1') }}</span> {{ $t('home-hero-subtitle-span-2') }}</p>
      </div>
    </div>
    <div class="services__box-city paused">

      <div class="glitch glitch--style-1">
        <div class="glitch__img" />
        <div class="glitch__img" />
        <div class="glitch__img" />
        <div class="glitch__img" />
        <div class="glitch__img" />
      </div>

      <div class="services__box-city-content" />
      <p>
        {{ $t('home-hero-subtitle-2') }}
      </p>
    </div>
    <article class="container paused">
      <div class="services__whoAre">
        <div class="services__whoAre-box">
          <div class="services__whoAre-blur" />
          <div class="services__whoAre-content">
            <h3>{{ $t('home-about-title') }}</h3>
            <p>{{ $t('home-about-text') }}</p>
          </div>
        </div>
        <img
          src="../assets/images/woman-enjoy.png"
          class="services__whoAre-img"
          alt=""
        >
      </div>
    </article>
    <article class="container services__products-card paused">
      <div class="services__card services__card--left services__paragraph-1">

        <img
          src="../assets//images/knowl-web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Knowledge</h3>
          <p>{{ $t('knowledge-text') }}</p>
          <NuxtLink
            class="services__card-btn-read services__card-btn-read--radius"
            to="/knowledge"
          >
            {{ $t('read-more') }}
            <icon :name="'ri:arrow-right-fill'" />
          </NuxtLink>

        </div>
      </div>
      <div class="services__card services__card--rigth services__paragraph-1">

        <img
          src="../assets//images/finnace_web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Finance</h3>
          <p>{{ $t('finance-text') }}</p>
          <NuxtLink
            class="services__card-btn-read services__card-btn-read--radius"
            to="/finance"
          >
            {{ $t('read-more') }}
            <icon :name="'ri:arrow-right-fill'" />
          </NuxtLink>

        </div>
      </div>
      <div class="services__card services__card--left services__paragraph-1">

        <img
          src="../assets//images/knw_web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Connect</h3>
          <p>{{ $t('connect-text') }}</p>
          <NuxtLink
            class="services__card-btn-read services__card-btn-read--radius"
            to="/connect"
          >
            {{ $t('read-more') }}
            <icon :name="'ri:arrow-right-fill'" />
          </NuxtLink>
        </div>
      </div>
      <div class="services__card services__card--rigth services__paragraph-1">

        <img
          src="../assets//images/markets_web.png"
          alt=""
          class="services__card-img"
        >

        <div class="services__card-txt">
          <h3>Markets</h3>
          <p>{{ $t('markets-text') }}</p>
          <NuxtLink
            class="services__card-btn-read services__card-btn-read--radius"
            to="/markets"
          >
            {{ $t('read-more') }}
            <icon :name="'ri:arrow-right-fill'" />
          </NuxtLink>
        </div>
      </div>
    </article>
    <article class="container services__partners">
      <h2>{{ $t('parners-title') }}</h2>

      <div class="services__partners-img">
        <img
          src="../assets/images/partners/axi.png"
          alt=""
        >
        <img
          src="../assets/images/partners/bingx.png"
          alt=""
        >
        <img
          src="../assets/images/partners/bitget.png"
          alt=""
        >
        <img
          src="../assets/images/partners/okx.png"
          alt=""
        >
        <img
          src="../assets/images/partners/part1.png"
          alt=""
        >
      </div>

    </article>
    <article class="container paused">
      <div class="services__process">
        <div class="services__process-box">
          <div class="services__process-blur" />
          <div class="services__process-content">
            <h3>{{ $t('success-story-title') }}</h3>
            <p>{{ $t('success-story-text') }}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
// import * as THREE from 'three'
import {  OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { SphereGeometry } from 'three/src/geometries/SphereGeometry.js'

const servic = ref(null)

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
  

  // three js
  let renderer
  let scene
  let camera
  let sphereBg
  let nucleus
  let stars
  let controls
  const container = document.getElementById('canvas_container')
  let timeout_Debounce
  const noise = new SimplexNoise()
  const cameraSpeed = 0
  const blobScale = 0.5

  

  function init() {
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.01, 1000)
    camera.position.set(0, 0, 230)

    const directionalLight = new THREE.DirectionalLight('#fff', 2)
    directionalLight.position.set(0, 50, -20)
    scene.add(directionalLight)

    const ambientLight = new THREE.AmbientLight('#ffffff', 1)
    ambientLight.position.set(0, 20, 20)
    scene.add(ambientLight)

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    // OrbitControl
    controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.autoRotateSpeed = 4
    controls.maxDistance = 350
    controls.minDistance = 150
    controls.enablePan = false

    const loader = new THREE.TextureLoader()
    const textureSphereBg = loader.load('https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg')
    const texturenucleus = loader.load('https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg')
    const textureStar = loader.load('https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png')
    const texture1 = loader.load('https://i.ibb.co/F8by6wW/p2-b3gnym.png')
    const texture2 = loader.load('https://i.ibb.co/yYS2yx5/p3-ttfn70.png')
    const texture4 = loader.load('https://i.ibb.co/yWfKkHh/p4-avirap.png')

    /*  Nucleus  */
    texturenucleus.anisotropy = 16
    const icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10)
    const lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus })
    nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial)
    scene.add(nucleus)

    /*    Sphere  Background   */
    textureSphereBg.anisotropy = 16
    const geometrySphereBg = new SphereGeometry(150, 40, 40)
    const materialSphereBg = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      map: textureSphereBg,
    })
    sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg)
    scene.add(sphereBg)

    /*    Moving Stars   */
    const starsGeometry = new THREE.Geometry()
    console.log("🚀 ~ file: index.vue:349 ~ init ~ starsGeometry:", starsGeometry)
   

    for (let i = 0; i < 50; i++) {
      const particleStar = randomPointSphere(150)

      particleStar.velocity = THREE.MathUtils.randInt(50, 200)

      particleStar.startX = particleStar.x
      particleStar.startY = particleStar.y
      particleStar.startZ = particleStar.z

      starsGeometry.vertices.push(particleStar)
    }
    const starsMaterial = new THREE.PointsMaterial({
      size: 5,
      color: '#ffffff',
      transparent: true,
      opacity: 0.8,
      map: textureStar,
      blending: THREE.AdditiveBlending,
    })
    starsMaterial.depthWrite = false
    stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    /*    Fixed Stars   */
    function createStars(texture, size, total) {
      const pointGeometry = new THREE.Geometry()
      const pointMaterial = new THREE.PointsMaterial({
        size,
        map: texture,
        blending: THREE.AdditiveBlending,
      })

      for (let i = 0; i < total; i++) {
        const radius = THREE.MathUtils.randInt(149, 70)
        const particles = randomPointSphere(radius)
        pointGeometry.vertices.push(particles)
      }
      return new THREE.Points(pointGeometry, pointMaterial)
    }
    scene.add(createStars(texture1, 15, 20))
    scene.add(createStars(texture2, 5, 5))
    scene.add(createStars(texture4, 7, 5))

    function randomPointSphere(radius) {
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      const dx = 0 + (radius * Math.sin(phi) * Math.cos(theta))
      const dy = 0 + (radius * Math.sin(phi) * Math.sin(theta))
      const dz = 0 + (radius * Math.cos(phi))
      return new THREE.Vector3(dx, dy, dz)
    }
  }

  function animate() {
    // Stars  Animation
    stars.geometry.vertices.forEach(v => {
      v.x += (0 - v.x) / v.velocity
      v.y += (0 - v.y) / v.velocity
      v.z += (0 - v.z) / v.velocity

      v.velocity -= 0.3

      if (v.x <= 5 && v.x >= -5 && v.z <= 5 && v.z >= -5) {
        v.x = v.startX
        v.y = v.startY
        v.z = v.startZ
        v.velocity = THREE.MathUtils.randInt(50, 300)
      }
    })

    // Nucleus Animation
    nucleus.geometry.vertices.forEach(v => {
      const time = Date.now()
      v.normalize()
      const distance = nucleus.geometry.parameters.radius + noise.noise3D(
        v.x + time * 0.0005,
        v.y + time * 0.0003,
        v.z + time * 0.0008,
      ) * blobScale
      v.multiplyScalar(distance)
    })
    nucleus.geometry.verticesNeedUpdate = true
    nucleus.geometry.normalsNeedUpdate = true
    nucleus.geometry.computeVertexNormals()
    nucleus.geometry.computeFaceNormals()
    nucleus.rotation.y += 0.002

    // Sphere Beckground Animation
    sphereBg.rotation.x += 0.002
    sphereBg.rotation.y += 0.002
    sphereBg.rotation.z += 0.002

    controls.update()
    stars.geometry.verticesNeedUpdate = true
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  init()
  animate()
  /*     Resize     */
  window.addEventListener('resize', () => {
    clearTimeout(timeout_Debounce)
    timeout_Debounce = setTimeout(onWindowResize, 80)
  })
  function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  }

/*     Fullscreen btn     */
// let fullscreen;
// let fsEnter = document.getElementById('fullscr');
// fsEnter.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (!fullscreen) {
//         fullscreen = true;
//         document.documentElement.requestFullscreen();
//         fsEnter.innerHTML = "Exit Fullscreen";
//     }
//     else {
//         fullscreen = false;
//         document.exitFullscreen();
//         fsEnter.innerHTML = "Go Fullscreen";
//     }
// });
})
useHead({

})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Services";
@import "@/assets/scss/demo3.scss";
body {
  margin: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-image: url("https://user-images.githubusercontent.com/26748614/96337246-f14d4580-1085-11eb-8793-a86d929e034d.jpg");
  background-size: cover;
  backdrop-filter:  brightness(50%);
}

canvas {
  display: block;
}

#canvas_container {
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  
}

button {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid white;
  border-radius: 5px;
  font-size: 0.9rem;
  padding: 0.5rem 0.9em;
  background: #000000;
  color: white;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  cursor: pointer;
  transition: all .3s;
}

button:hover {
  background: #ffffff;
  color: #000000;
}
</style>
