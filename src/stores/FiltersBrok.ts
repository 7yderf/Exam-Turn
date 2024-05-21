/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

import { defineStore } from 'pinia'
// eslint-disable-next-line import/extensions
import { useInitialValues } from '@/stores/InitialValuesStore'

const initialValues = useInitialValues()

interface QueryParams {
  [key: string]: any; // Add index signature
}
interface Filters {
  [key: string]: any; // Add index signature
}

export const useFilters = defineStore('filters', {

  state: () => ({
    filters: <Filters> {
      page: 1,
      limit: 20,
      search: {
        property_types: [], // check Select
        // statuses: ['published'],
        operation_type: null, // select
        min_price: null, // range
        max_price: null, // range
        min_bedrooms: null, // input
        min_construction_size: null, // range
        max_construction_size: null, // range
        min_lot_size: null, // range
        max_lot_size: null, // range
        min_bathrooms: null, // input
        sort_by: null,
        // sort_by: 'updated_at-asc', // updated_at-desc
      },
    },
    productsList: [],
    linkPaginate: null,
    nextPaginate: null,
    prevPaginate: null,
    offset: 0,
    total: 0,
  }),
  getters: {
    getFilters: state => (singleFilter: string = '') => {
      if (singleFilter) {
        return state.filters.search[singleFilter]
      }
      return state.filters
    },
    getProductsList: state => state.productsList,
    getInitialValues: () => (type: string) => initialValues.getInitialValues(type),
    getSearchIdForName:
      () => (type: string, name: string, nameOpcional: string) => initialValues.getSearchIdForName(type, name, nameOpcional),
    getSearchNameForId:
      () => (type: string, id: string, otherId: string) => initialValues.getSearchNameForId(type, id, otherId),
  },
  actions: {
    setOffset(newOffset: any) {
      this.offset = newOffset
    },
    setPaginate(newPaginate: any) {
      this.filters.page = Number(newPaginate)
    },
    cleanFilters() {
      this.total = 0
      this.filters = {
        page: 1,
        limit: 20,
        search: {
          property_types: [], // check Select
          // statuses: ['published'],
          operation_type: null, // select
          min_price: null, // range
          max_price: null, // range
          min_bedrooms: null, // input
          min_construction_size: null, // range
          max_construction_size: null, // range
          min_lot_size: null, // range
          max_lot_size: null, // range
          min_bathrooms: null, // input
          sort_by: null,
          // sort_by: 'updated_at-asc', // updated_at-desc
        },
      }
    },
    cleanProductsList() {
      this.productsList = []
    },
    transformFiltersToQueryParams() {
      const queryParams: QueryParams = {
        page: this.filters.page,
        limit: this.filters.limit,
        search: {},
      }

      Object.keys(this.filters).forEach(key => {
        if (Object.prototype.hasOwnProperty.call(this.filters, key)) {
          // Verificar si el valor no es nulo o vacío
          if (this.filters[key] !== null && this.filters[key] !== '') {
            // Verificar si el filtro es parte de la búsqueda
            if (key.startsWith('search[') && key.endsWith(']' || '[]')) {
              console.log('🚀 ~ Object.keys ~ key.startsWith', key.endsWith(']'))
              queryParams.search[key] = this.filters[key]
            } else {
              console.log('🚀 ~ Object.keys ~ this.filters[key]:', this.filters[key])
              queryParams[key] = this.filters[key]
            }
          }
        }
      })

      let queryString = `?page=${queryParams.page}&limit=${queryParams.limit}`
      Object.keys(queryParams.search).forEach(key => {
        // console.log('🚀 ~ Object.keys ~ queryParams.search[key]:', queryParams.search)
        if (Object.prototype.hasOwnProperty.call(queryParams.search, key)) {
          if (Array.isArray(queryParams.search[key]) && queryParams.search[key].length > 0) {
            queryParams.search[key].forEach((value: any) => {
              queryString += `&search[${key}][]=${value}`
            })
          } else if (queryParams.search[key] !== null && queryParams.search[key] !== '' && queryParams.search[key]?.length > 0) {
            queryString += `&search[${key}]=${queryParams.search[key]}`
          }
        }
      })

      return queryString
    },
    async getProperties(query: any) {
      const load = useload()
      this.productsList = []
      console.log('🚀 ~ getProperties ~ this.productsList:', this.productsList)
      console.log('🚀 ~ getProperties ~ load.value:', load.value)
      const { page, limit, ...queryRestante } = query

      page && (this.filters.page = Number(page))
      limit && (this.filters.limit = Number(limit))

      if (JSON.stringify(query) !== '{}') {
        console.log('🚀 ~ getProperties ~ query:', query)
        Object.keys(queryRestante).forEach(key => {
          this.filters.search[key] = queryRestante[key]
        })
      } else {
        this.filters.search = {}
        this.filters.page = 1
        this.filters.limit = 20
      }

      const { fetchProperties } = useBrokProperty()
      const { productsList, error } :any = await fetchProperties()
      console.log('🚀 ~ getProperties ~  error:', error)
      if (error) return
      this.productsList = productsList.value?.content
      this.total = productsList.value?.pagination.total
      this.nextPaginate = productsList.value?.pagination.next_page
      this.prevPaginate = productsList.value?.pagination?.prev_page
      setTimeout(() => {
        load.value = false
        console.log('🚀 ~ getProperties ~ load.value:', load.value)
      }, 100)
      console.log('🚀 ~ getProperties ~ properties:', productsList.value)
    },
    splitRanges(filters: any) {
      let data: any
      const modifiedFilters = { ...filters }
      return new Promise((resolve: any) => {
        Object.keys(modifiedFilters).forEach(key => {
          if (key === 'price') {
            this.filters.search.min_price = modifiedFilters[key]?.split(',')[0]
            this.filters.search.max_price = modifiedFilters[key]?.split(',')[1]
            // eliminar la propiedad price
            delete modifiedFilters[key]
          }
          if (key === 'construction_size') {
            this.filters.search.min_construction_size = modifiedFilters[key]?.split(',')[0]
            this.filters.search.max_construction_size = modifiedFilters[key]?.split(',')[1]
            // eliminar la propiedad construction_size
            delete modifiedFilters[key]
          }
          if (key === 'lot_size') {
            this.filters.search.min_lot_size = modifiedFilters[key]?.split(',')[0]
            this.filters.search.max_lot_size = modifiedFilters[key]?.split(',')[1]
            // eliminar la propiedad lot_size
            delete modifiedFilters[key]
          }
          data = modifiedFilters
        })
        resolve(data)
      })
    },
    stringToArray(query : any, { ...keys }: any) {
      const data = { ...keys }
      Object.keys(query).forEach(key => {
        if (data[key]) {
          this.filters.search[data[key]] = query[key].split(',')
          delete query[key]
        }
      })
      return query
    },
  },

})
