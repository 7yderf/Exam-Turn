/* eslint-disable no-unused-expressions */
import { useFiltersEcom } from '@/stores/FiltersEcom'
import { storeToRefs } from 'pinia'

export default function useProperty() {
  const config = useRuntimeConfig()
  const store = useFiltersEcom()
  const { getPaginator, getOffset } = storeToRefs(store)
  console.log('🚀 ~ file: useProperty.ts:9 ~ useProperty ~ getOffset:', getOffset)
  const { transforFiltesrToUrl, setFilters } = store

  async function useFetch({ ...props } = {}) {
    const productsList = ref(null)
    const response = ref<any>(null)
    const error = ref(null)
    let params

    if (getPaginator.value) {
      params = getPaginator.value
    } else {
      setFilters(props)
      params = `${props?.data ? '/search' : ''}?key=${config.API_KEY}&lang=es&offset=${getOffset.value || 0}&${transforFiltesrToUrl(props)}`
    }

    if (process.client) {
      try {
        const res = await fetch(`${config.API_BASE_URL}property${params}`)
        if (!res.ok) {
          throw new Error('No se pudo obtener la informacion')
        }
        response.value = await res.json()
        console.log('🚀 ~ file: useProperty.ts:31 ~ useFetch ~ response.value:', response.value)
        !!response.value && (productsList.value = response.value)
      } catch (err: any) {
        error.value = err.message
      }
    }
    return { productsList, error }
  }
  async function usePropertyDetail(id: any) {
    const product = ref(null)
    const data = ref<any>(null)
    const error = ref(null)

    try {
      const res = await fetch(`${config.API_BASE_URL}property/${id}?key=${config.API_KEY}&lang=es`)
      if (!res.ok) {
        throw new Error('No se pudo obtener la informacion')
      }
      data.value = await res.json()
      console.log('🚀 ~ file: useProperty.ts:51 ~ usePropertyDetail ~  data.value:', data.value)
      !!data.value && (product.value = data.value)
    } catch (err: any) {
      error.value = err.message
    }

    return { product, error }
  }

  return { useFetch, usePropertyDetail }
}
