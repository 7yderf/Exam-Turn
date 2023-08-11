<script setup>

import { useAuthentication } from '@/stores/AuthStore'
import CreateAccount from '~/components/CreateAccount.vue';

const  {getUser}  = useAuthentication()
console.log("🚀 ~ file: index.vue:6 ~ user:",getUser)

definePageMeta({
  middleware: 'is-logged-in',
});

</script>

<template>
  <client-only>
    
    <main>
      <h1>
        Admin
      </h1>
      <div class="p-2">
           <create-account />
      </div>
    </main>
  </client-only>
</template>

