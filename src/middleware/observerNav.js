// escuchar el cambio de ruta y la procedencia de la ruta
const storB = useFilters()

const {
  cleanFilters, cleanProductsList
} = storB

export default defineNuxtRouteMiddleware((to, from, next) => {
  console.log('🚀 ~ file: observerNav.js:4 ~ defineNuxtRouteMiddleware ~ to:', to)
  const load = useload()
  cleanFilters()
  cleanProductsList()
  load.value = true

  console.log('🚀 ~ file: observerNav.js:4 ~ defineNuxtRouteMiddleware ~ to:', load.value)
  if (to.hash === '#contact') {
    load.value = false
  }

  // if (!to.params?.id) {
  //   historyNav.value = [
  //     { name: 'Atrás', url: '/', icon: 'ri:arrow-left-line' },
  //     { name: 'Inicio', url: '/', icon: '' },
  //     { name: to.meta.title, url: to.path, icon: '' },
  //   ]
  // } else if (to.params?.id) {
  //   historyNav.value = [
  //     { name: 'Atrás', url: `/${to.path.split('/')[1]}`, icon: 'ri:arrow-left-line' },
  //     { name: 'Inicio', url: '/', icon: '' },
  //     { name: to.meta.title, url: `/${to.path.split('/')[1]}`, icon: '' },
  //     { name: to.meta.detail, url: to.path, icon: '' },
  //   ]
  // }
})
