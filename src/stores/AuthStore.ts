import { defineStore } from "pinia";


export const useAuthentication = defineStore('auth', {


  state: () => ({
    user: {email: null,
    idToken: null,},
  }),

  actions: {
    listenerAuth( user: any ) {
      this.user = user;
    }
  },
  
  getters: {
    getUser(): any {
      return this.user;
    }
  }

})