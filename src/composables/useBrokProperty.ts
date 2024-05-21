// eslint-disable-next-line import/extensions
import { useFilters } from '@/stores/FiltersBrok'

export default function useBrokProperty() {
  // const config = useRuntimeConfig()
  const store = useFilters()

  const { transformFiltersToQueryParams } = store
  async function fetchProperties() {
    const productsList = ref(null)
    let error = null
    const queryParams = transformFiltersToQueryParams()
    const options = {
      method: 'GET',
    }

    const queryString = new URLSearchParams(queryParams).toString()
    console.log('🚀 ~ fetchProperties ~ queryString:', queryString)
    const url = `https://apieasybroker-production.up.railway.app?${decodeURIComponent(queryString)}`

    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de propiedades')
      }
      const data = await response.json()
      console.log('🚀 ~ fetchProperties ~ data:', data)
      productsList.value = data.data
    } catch (err: any) {
      error = err
    }
    return { productsList, error }
  }

  return { fetchProperties }
}
