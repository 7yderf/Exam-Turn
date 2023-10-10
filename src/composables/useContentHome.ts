/* eslint-disable vue/max-len */
export const useFaqItems = () => {
  const faqItems = [
    {
      title: '¿Cuáles son las formas de pago?',
      description: `
            Las formas de pago son las siguientes: 
            <br> 
            <ul>
            <li>Pagos por transferencia bancaria (SPEI)</li>
            <li>Pagos por depósito bancario</li>
            <li>Pagos con tarjeta</li>
            <li>Pago en efectivo y dólares</li>
            <li>Mercado Pago</li>
            <li>Paypal</li>
            </ul> 
            También aceptamos las principales tarjetas: 
            <ul>
            <li>Visa</li> 
            <li>Master Card</li> 
            <li>American Express.</li>
            </ul> 
            CONDICIONES DE PAGO: 50% de anticipo al confirmar su orden y 50% al aviso de entrega o al aviso de embarque del equipo.
            `,
    },
    {
      title: '¿Cuáles son los tiempos de entrega?',
      description: 'El tiempo de entrega se contempla a partir de la fecha en que se reciba y se confirme el anticipo. El vendedor confirmará el día de entrega del equipo al cliente. Equipo Nuevo: Se entregará en un plazo de 3 a 5 días (en el caso de un equipo de preventa, el tiempo corre a partir de que el equipo llegue a bodega). Equipo Remanufacturado: El tiempo de entrega será de 7 a 10 semanas dependiendo de la dificultad del trabajo. Equipo Seminuevo: El tiempo de entrega dependerá del nivel de habilitación solicitado, el vendedor proporcionará el estimado.',
    },
    {
      title: '¿Por qué necesito cotizar el envío de los productos?',
      description: 'El envío de los productos es un servicio que tiene un costo adicional y es por parte del cliente debido a que son equipos de dimensiones y pesos grandes.',
    },
    {
      title: '¿Incluye instalación?',
      description: 'La instalación, los fletes, maniobras y traslados de nuestra bodega a cualquier lugar en la república mexicana serán por cuenta y cargo al cliente. No obstante, en caso de requerir envío por la Zona Metropolitana de Guadalajara, estos formarán parte del servicio de Optimum Equipo; en caso de requerir envío dentro de la Zona Metropolitana de Guadalajara, favor de contactar con su vendedor asignado.',
    },
    {
      title: '¿Manejan paquetes y/o ventas individuales?',
      description: 'En Optimum Equipo podemos ofrecerte desde paquetes, hasta la venta individual de nuestros productos. No hay mínimo ni máximo de compra.',
    },
  ]
  return faqItems
}

export const useHowBuy = () => {
  const howBuy = [
    {
      name: 'Paso 1',
      type: 'Explora nuestro catálogo',
      description: 'Agrega los productos al carrito de compras y ve al carrito para finalizar la compra.',
      images: '/home/HowToBuy-1.png',
      icon: 'ri:shopping-basket-line',
    },
    {
      name: 'Paso 2',
      type: 'Revisa tu carrito',
      description: 'Completa el formulario de facturación y elige tu método de pago. Haz clic en “Cotizar pedido”',
      images: '/home/HowToBuy-2.png',
      icon: 'ri:price-tag-2-line',
    },
    {
      name: 'Paso 3',
      type: 'Finaliza la cotización',
      description: 'Te cotizaremos tus productos y el envío y te proporcionaremos los detalles cotizados.',
      images: '/home/HowToBuy-3.png',
      icon: 'ri:hand-heart-line',
    },

  ]
  return howBuy
}
