import { defineStore } from "pinia";

export const almacen = defineStore('main', {
  state: () => {
    return {
      obras: [
        { author: "01", title: "Gamora", photo: "./imagenes/Gamora.jpeg", descripcion: "Gamora es la hija adoptiva de Thanos, y la última de su especie. Sus poderes incluyen fuerza y agilidad sobrehumanas y un factor de curación acelerada"},
        { author: "02", title: "Groot", photo: "./imagenes/Groot.jpeg", descripcion: "Groot es un coloso Flora del Planeta X, la capital de los mundos secundarios"},
        { author: "03", title: "Rocket", photo: "./imagenes/Rocket.jpeg", descripcion: "Rocket, es un individuo genéticamente modificado parecido a un mapache que se convirtió en un criminal al igual que su amigo Groot"},
        { author: "04", title: "StarLord", photo: "./imagenes/StarLord.jpeg", descripcion: "Es el hijo mestizo del emperador J'Son del planeta Spartax y la humana Meredith Quill"},
      ]
    }
  },
})
