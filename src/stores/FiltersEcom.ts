/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia'

export const useFiltersEcom = defineStore('filtersEcom', {
  state: () => ({
    filters: {
      to: null,
      id: null,
      perPage: null,
      page: null,
      identifier: 1,
      search: null,
      type: null,
      brand: null,
      status: null,
      category: null,
      subcategory: null,
      price_to: null,
      price_from: null,
      orderby: null,
      description: null,
      estatus: null,
      favorite: null,
      hidePrice: null,
      presale: null,
      outstock: null,
      quoteneeded: null,
      format: 'json',
      key: null,
      lang: 'es',
    },
    productsList: [],
    linkPaginate: null,
  }),
  getters: {
    getFilters: state => state.filters,
    getProductsList: state => state.productsList,
    getPaginator: state => state.linkPaginate,
  },
  actions: {

    setLinkPaginate() {
      this.linkPaginate = null
    },
    setFilters(filters: any) {
      this.filters = filters
    },
    async getProducts({ paginate = null, ...params }: any = {}) {
      const { useFetch } = useProperty()
      const dataProperty = ref<any>({
        meta: {},
        objects: [],
      })

      if (JSON.stringify(params) !== '{}') {
        this.filters = { ...params, identifier: 1 }
      }

      if (paginate) {
        this.linkPaginate = paginate
      }

      try {
        const { productsList }: any = await useFetch(this.filters)
        dataProperty.value = productsList.value || dataProperty.value
        const { objects } = dataProperty.value
        this.productsList = objects
      } catch (error) {}
    },
    // async getCircuits({ paginate = null, ...params }: any = {}) {
    //   const { useFetchCircuits } = useCircuits()

    //   if (JSON.stringify(params) !== '{}') {
    //     this.filters = { ...params, identifier: 1 }
    //   }

    //   if (paginate) {
    //     this.linkPaginate = paginate
    //   }

    //   try {
    //     const { circuitsList }: any = await useFetchCircuits(this.filters)
    //     this.productsList = circuitsList.value
    //   } catch (error) {}
    // },
    constructorFiltersArray(filters: any) {
      const filtersArray: any = []
      for (const key in filters) {
        if (filters[key] !== null && filters[key] !== '') {
          filtersArray.push(`${key}=${filters[key]}`)
        }
      }
      return filtersArray.join('&')
    },
    revertingFiltersArrayToObj(filtersArray: any) {
      const filtersObj: any = {}
      for (const filter of filtersArray) {
        const [key, value] = filter.split('=')
        filtersObj[key] = value
      }
      this.filters = {
        ...this.filters,
        ...filtersObj,
      }
      return filtersObj
    },
    transforFiltesrToUrl(filters: any) {
      const filtersArray: any = []
      for (const key in filters) {
        if (filters[key] !== null && filters[key] !== '') {
          if (typeof filters[key] === 'string' && filters[key].includes(',')) {
            const values = filters[key].split(',')
            for (const value of values) {
              filtersArray.push(`${key}=${value.trim()}`)
            }
          } else {
            filtersArray.push(`${key}=${filters[key]}`)
          }
        }
      }
      return filtersArray.join('&')
    },
    transformUrlToFiltersObject(url: any) {
      const filtersObj: any = {}
      const filtersArray = url.split('&')
      for (const filter of filtersArray) {
        const [key, value] = filter.split('=')
        let keyRepite:any = false
        for (const keyObj in filtersObj) {
          if (keyObj === key) {
            keyRepite = keyObj
          }
        }
        if (keyRepite) {
          if (typeof filtersObj[keyRepite] === 'string') {
            filtersObj[keyRepite] = `${filtersObj[keyRepite]},${value}`
          } else {
            filtersObj[keyRepite].push(value)
          }
        } else {
          filtersObj[key] = value
        }
      }
      this.filters = {
        ...this.filters,
        ...filtersObj,
      }
      return filtersObj
    },
    paramsFromChecks(filters: any) {
      return filters.reduce((acc: any, item: any) => {
        const key = Object.keys(item)[0]
        const value = item[key]
        if (acc[key]) {
          // transformar el valor del arreglo en un string
          acc[key] = `${acc[key].toString()},${value}`
        } else {
          acc[key] = `${value}`
        }
        return acc
      }, {})
    },
    rangePriceParams(filters: any) {
      const params: any = {}
      const { price, ...rest } = filters
      const priceMin = price?.split(',')[0]
      const priceMax = price?.split(',')[1]
      params.value = { ...rest, price_from: priceMin, price_to: priceMax }
      return params.value
    },
  },
})
