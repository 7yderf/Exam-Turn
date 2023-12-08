/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
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
      data: {} as any,
    },
    productsList: [],
    linkPaginate: null,
    nextPaginate: null,
    prevPaginate: null,
    limit: null,
    offset: 0,
    total: 0,
  }),
  getters: {
    getFilters: state => state.filters,
    getProductsList: state => state.productsList,
    getPaginator: state => state.linkPaginate,
    getNextPaginator: state => state.nextPaginate,
    getPrevPaginator: state => state.prevPaginate,
    getLimit: state => state.limit,
    getOffset: state => state.offset,
    getTotal: state => state.total,
  },
  actions: {

    setLinkPaginate() {
      this.linkPaginate = null
    },
    setFilters(filters: any) {
      this.filters = filters
    },
    setOffset(offset: any) {
      this.offset = offset
    },

    isArrayOrString(value: any) {
      if (Array.isArray(value)) {
        return value
      }
      return value.split('')
    },
    async getProducts({ paginate = null, ...params }: any = {}) {
      console.log('🚀 ~ file: FiltersEcom.ts:57 ~ getProducts ~ params:', params)
      const {
        property_types, operation_types, price_from, price_to, offset,
      } = params
        console.log('🚀 ~ file: FiltersEcom.ts:70 ~ getProducts ~ offset:', offset)
      this.offset = offset
      if (property_types) params.property_types = this.isArrayOrString(property_types)
      else params.property_types = ''
      if (operation_types) params.operation_types = this.isArrayOrString(operation_types)
      else params.operation_types = ''
      if (price_from && price_to) {
        params.price_from = price_from
        params.price_to = price_to
      } else {
        params.price_from = ''
        params.price_to = ''
      }

      const { useFetch } = useProperty()
      const dataProperty = ref<any>({
        meta: {},
        objects: [],
      })

      if (JSON.stringify(params) !== '{}') {
        this.filters = {
          data: JSON.stringify({
            ...params, filters: [],
          }),
        }
      }

      if (paginate) {
        this.linkPaginate = paginate
      }

      try {
        const { productsList }: any = await useFetch(this.filters)
        dataProperty.value = productsList.value || dataProperty.value
        const { objects, meta } = dataProperty.value
        this.productsList = objects
        this.nextPaginate = meta.next
        this.prevPaginate = meta.previous
        this.limit = meta.limit
        this.offset = meta.offset
        this.total = meta.total_count
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

    // transforFiltesrToUrl con if para añadir parametros por separado dentro de un array

    // transforFiltesrToUrl(filters: any) {
    //   const filtersArray: any = []
    //   for (const key in filters) {
    //     if (filters[key] !== null && filters[key] !== '') {
    //       if (typeof filters[key] === 'string' && filters[key].includes(',')) {
    //         const values = filters[key].split(',')
    //         for (const value of values) {
    //           filtersArray.push(`${key}=${value.trim()}`)
    //         }
    //       } else {
    //         filtersArray.push(`${key}=${filters[key]}`)
    //       }
    //     }
    //   }
    //   return filtersArray.join('&')
    // },
    transforFiltesrToUrl(filters: any) {
      const filtersArray: any = []
      for (const key in filters) {
        if (filters[key] !== null && filters[key] !== '') {
          filtersArray.push(`${key}=${filters[key]}`)
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
