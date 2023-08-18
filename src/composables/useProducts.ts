

export default function useProducts() {
  const config = useRuntimeConfig();
 
  const products_list = ref(null);
  const products_offers = ref(null);

  async function products(){
    const { data, error}: any = await useFetch(`${config.API_BASE_URL}products?type=highlights`);
    !!data.value && (products_list.value = data.value.data)
    return { products_list, error };
  }

  async function productsOffers(){
    const { data, error}: any = await useFetch(`${config.API_BASE_URL}products?type=offers`);
    !!data.value && (products_offers.value = data.value.data)
    return { products_offers, error };
  }
  
    
  return { products, productsOffers}

}