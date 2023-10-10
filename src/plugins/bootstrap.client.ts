import { Modal, Offcanvas } from 'bootstrap'

export default defineNuxtPlugin(() => ({
  provide: {
    bootstrap: {
      Modal,
      Offcanvas,
    },
  },
}))
