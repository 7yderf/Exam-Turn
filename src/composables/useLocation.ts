/* eslint-disable no-unused-expressions */

export default function useLocation() {
  const config = useRuntimeConfig()

  async function useCountry() {
    const countryList = ref(null)
    const data = ref<any>(null)
    const error = ref(null)

    if (process.client) {
      try {
        const res = await fetch(`${config.API_BASE_URL}country/14?key=${config.API_KEY}&lang=es`)
        if (!res.ok) {
          throw new Error('No se pudo obtener la informacion')
        }
        data.value = await res.json()
        console.log("🚀 ~ file: useProperty.ts:31 ~ useFetch ~ data.value:", data.value)
        !!data.value && (countryList.value = data.value)
      } catch (err: any) {
        error.value = err.message
      }
    }
    return { countryList, error }
  }
  async function useState(id: any) {
    const state = ref(null)
    const data = ref<any>(null)
    const error = ref(null)

    try {
      const res = await fetch(`${config.API_BASE_URL}state/${id}?key=${config.API_KEY}&lang=es`)
      if (!res.ok) {
        throw new Error('No se pudo obtener la informacion')
      }
      data.value = await res.json()
      console.log("🚀 ~ file: useLocation.ts:37 ~ useState ~ data.value:", data.value)
      !!data.value && (state.value = data.value)
    } catch (err: any) {
      error.value = err.message
    }

    return { state, error }
  }
  async function useLoc(id: any) {
    const loc = ref(null)
    const data = ref<any>(null)
    const error = ref(null)

    try {
      const res = await fetch(`${config.API_BASE_URL}location/${id}?key=${config.API_KEY}&lang=es`)
      if (!res.ok) {
        throw new Error('No se pudo obtener la informacion')
      }
      data.value = await res.json()
      !!data.value && (loc.value = data.value)
    } catch (err: any) {
      error.value = err.message
    }

    return { loc, error }
  }
  async function useType() {
    const type = ref(null)
    const data = ref<any>(null)
    const error = ref(null)

    try {
      const res = await fetch(`${config.API_BASE_URL}property_type?key=${config.API_KEY}&lang=es_ar`)
      if (!res.ok) {
        throw new Error('No se pudo obtener la informacion')
      }
      data.value = await res.json()
      !!data.value && (type.value = data.value)
    } catch (err: any) {
      error.value = err.message
    }

    return { type, error }
  }

  return { useCountry, useState, useLoc, useType }
}
