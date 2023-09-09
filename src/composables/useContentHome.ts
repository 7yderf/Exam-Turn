export const useFaqItems = () => {
    const faqItems = [
        {
            title: '¿Cuáles son las formas de pago disponibles en Optimum?',
            description: 'Placeholder content for this accordion...'
        },
        {
            title: '¿Por qué se necesita cotizar el envío de los productos?',
            description: 'Placeholder content for this accordion...'
        },
        {
            title: '¿Cómo puedo cotizar el envío de mi pedido?',
            description: 'La cotización del envío de los productos es necesaria para proporcionarte un costo preciso y transparente de los gastos de envío. Los costos de envío pueden variar según el peso, tamaño y destino de los productos. Al cotizar el envío, podemos calcular de manera precisa los cargos correspondientes, incluyendo posibles tarifas adicionales, impuestos o servicios especiales requeridos en ciertas ubicaciones. Esto te brinda la información necesaria para tomar una decisión informada sobre tu compra y asegurarte de conocer todos los costos asociados antes de finalizar el pedido.'
        },
        {
            title: '¿Cuál es la garantía que ofrecen en los equipos nuevos y usados?',
            description: 'Placeholder content for this accordion...'
        },
        {
            title: '¿Tienen servicio de instalación para los equipos comprados en Optimum?',
            description: 'Placeholder content for this accordion...'
        },
    ]
    return faqItems;
}

export const useHowBuy = () => {
    const howBuy = [
        {
            name: 'Paso 1',
            type: 'Explora nuestro catálogo',
            description: 'Agrega los productos al carrito de compras y ve al carrito para finalizar la compra.',
            images: '/home/HowToBuy-1.png',
            icon: 'ri:shopping-basket-line'
        },
        {
            name: 'Paso 2',
            type: 'Revisa tu carrito',
            description: 'Completa el formulario de facturación y elige tu método de pago. Haz clic en “Cotizar pedido”',
            images: '/home/HowToBuy-2.png',
            icon: 'ri:price-tag-2-line'
        },
        {
            name: 'Paso 3',
            type: 'Finaliza la cotización',
            description: 'Te cotizaremos tus productos y el envío y te proporcionaremos los detalles cotizados.',
            images: '/home/HowToBuy-3.png',
            icon: 'ri:hand-heart-line'
        }
        
    ]
    return howBuy;
}