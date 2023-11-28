/* eslint-disable no-unused-expressions */
import { useFiltersEcom } from '@/stores/FiltersEcom'
import { storeToRefs } from 'pinia'

export default function useProperty() {
  const config = useRuntimeConfig()
  const store = useFiltersEcom()
  const { getPaginator } = storeToRefs(store)
  const { transforFiltesrToUrl, setFilters } = store

  async function useFetch({ ...props } = {}) {
    const productsList = ref(null)
    const data = ref<any>(null)
    const error = ref(null)
    let params

    if (getPaginator.value) {
      params = getPaginator.value
    } else {
      setFilters(props)
      params = `?key=${config.API_KEY}&lang=es&${transforFiltesrToUrl(props)}`
    }

    if (process.client) {
      try {
        const res = await fetch(`${config.API_BASE_URL}property${params}`)
        if (!res.ok) {
          throw new Error('No se pudo obtener la informacion')
        }
        data.value = await res.json()
        console.log("🚀 ~ file: useProperty.ts:31 ~ useFetch ~ data.value:", data.value)
        !!data.value && (productsList.value = data.value)
      } catch (err: any) {
        error.value = err.message
      }
    }
    return { productsList, error }
  }
  async function useFetchDetail(id: any) {
    const product = ref(null)
    const data = ref<any>(null)
    const error = ref(null)

    try {
      const res = await fetch(`${config.API_BASE_URL}products/${id}`)
      if (!res.ok) {
        throw new Error('No se pudo obtener la informacion')
      }
      data.value = await res.json()
      !!data.value && (product.value = data.value.data)
    } catch (err: any) {
      error.value = err.message
    }

    return { product, error }
  }

  return { useFetch, useFetchDetail }
}
