import { defineStore } from "pinia";

export const useTestStore = defineStore('test', {

  state: () => ({
    message: 'Hello',
  }),

  actions: {
    setMensaje(newMessage: string) {
      this.message = newMessage;
    }
  },
  
  getters: {
    getMessage(): string {
      return this.message.toUpperCase();
    }
  }

})