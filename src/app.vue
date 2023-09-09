<script setup lang="ts">
import { useToken } from '@/stores/SessionStore'
const { getUser } = useToken()

useHead({
  titleTemplate: (title) => title ? `${title} - Turn ` : 'Turn ',
})

const generateRandomString = async(length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for(let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }
  
  let  { token } = getUser;
  if (!token) useToken().setUser({ token: await generateRandomString(20) })  

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
