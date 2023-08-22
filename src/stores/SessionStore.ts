import { defineStore } from "pinia";



export const useToken = defineStore('token', {


  state: () => ({
    user: {
    token: ''}
  }),

  actions: {
    setUser( user: any ) {
      this.user = user;
    }
  },
  getters: {
    getUser(): any {
      return this.user;
    }
  }

})