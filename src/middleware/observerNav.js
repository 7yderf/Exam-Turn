//escuchar el cambio de ruta y la procedencia de la ruta

export default defineNuxtRouteMiddleware((to, from, next) => {
  const historyNav = useItemNav()
  
  if (!to.params?.id)  {
    
    historyNav.value = [
      { name: "Atrás", url: "/", icon: "ri:arrow-left-line" },
      { name: "Inicio", url: "/", icon: "" },
      { name: to.meta.title, url: to.path, icon: '' }
  ]
  } else if (to.params?.id) {
     historyNav.value = [
      { name: "Atrás", url: `/${to.path.split('/')[1]}`, icon:'ri:arrow-left-line'},
      { name: "Inicio", url: "/", icon: "" },
      { name: to.meta.title, url: `/${to.path.split('/')[1]}`, icon: '' },
      { name: to.params?.id, url:to.path, icon: '' }
     ]
  }
});
