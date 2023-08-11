import { useAuthentication } from '@/stores/AuthStore'


if (process.client) {
  const storageIdToken = localStorage.idToken;
  const storageUser = localStorage.user;
  const user = storageUser
  ? { ...JSON.parse(storageUser), idToken: storageIdToken }
  : { email: null, idToken: null };
  
  console.log("🚀 ~ file: isLoggedIn.js:8 ~ user:", user)
  
  useAuthentication().listenerAuth({ ...user });

}



export default defineNuxtRouteMiddleware((to, from, next) => {
  const  { getUser }  = useAuthentication()
  const user = getUser
  // console.log("🚀 ~ file: isLoggedIn.js:18 ~ user:", useAuthentication())
  // console.log("🚀 ~ file: isLoggedIn.js:25 ~ defineNuxtRouteMiddleware ~ to.path:", to.path)
  
  if (process.client) {

  if ((user.idToken) && (to.path === '/login' || to.path === '/register')) {
    
    return !!user.idToken &&  navigateTo('/admin')
  }

  if (!user.idToken && to.path?.includes('admin')) {
    console.log("🚀 ~ file: isLoggedIn.js:31 ~ defineNuxtRouteMiddleware ~ user.idToken:", user.idToken)
    return navigateTo('/login')
  }
}
})