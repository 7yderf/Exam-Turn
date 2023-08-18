import { param } from "lightgallery/plugins/video/lg-video-utils";


export default function useProducts() {
  const config = useRuntimeConfig();
 
  
  
  //realizar las peticiones con el fetch nativo
  async function useFetch(url: string) {
    //verificar si localstorage existe
    if (process.client) {
      console.log("🚀 ~ file: useProducts.ts:26 ~ useFetch ~ url", localStorage)
    }    
    const products_list = ref(null);
    const data = ref<any>(null);
    const error = ref(null);
    try {
      const res = await fetch(`${config.API_BASE_URL}products?type=${url}`);
      if (!res.ok) {
        throw Error("No se pudo obtener la informacion");
      }
      data.value = await res.json();
      !!data.value && (products_list.value = data.value.data)
      // console.log("🚀 ~ file: useProducts.ts:26 ~ useFetch ~ data.value:", data.value)
    } catch (err: any) {
      error.value = err.message;
    }
    return { products_list, error };
  }

  
    
  return { useFetch}

}