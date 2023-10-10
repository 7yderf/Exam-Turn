import { defineStore } from 'pinia'

// eslint-disable-next-line import/prefer-default-export
export const useToken = defineStore('token', {

  state: () => ({
    user: { token: '' },
  }),

  actions: {
    setUser(user: any) {
      this.user = user
    },
  },
  getters: {
    getUser(): any {
      return this.user
    },
  },

})
