import { useToken } from '@/stores/SessionStore'

const { getUser } = useToken()
export default function useProducts() {
  const config = useRuntimeConfig();
  async function useFetch(url:any, page:any) {
    const products_list = ref(null);
    const data = ref<any>(null);
    const error = ref(null);
    let  { token } = getUser;
    let params
    !!url && (params =`?type=${url}`);
    !!page && (params = page);
    if (process.client) {
      !!params ?
      (params = `${params}&identifier=${token}`) :
      (params = `?identifier=${token}`);
      
    try {
      const res = await fetch(`${config.API_BASE_URL}products${params}`);
      if (!res.ok) {
        throw Error("No se pudo obtener la informacion");
      }
      data.value = await res.json();
      !!data.value && (products_list.value = data.value.data)
    } catch (err: any) {
      error.value = err.message;
    }
  }
    return { products_list, error };
    }
  return {useFetch}
}