<script lang="ts" setup>

const { tab } = useRoute().params
const isRezise = useSizeResponsive()
const isActive = useActiveTab()

const legalRoutes = [
  'aviso-privacidad',
  'terminos-condiciones',
  'politicas-garantias',
]

if (!legalRoutes.includes(tab)) {
  navigateTo('/legales/aviso-privacidad')
}

const LEGALES = {
  'aviso-privacidad': 'Aviso de privacidad',
  'terminos-condiciones': 'Términos y condiciones',
  'politicas-garantias': 'Políticas y garantías',
}
const AVISO = 'aviso-privacidad'
const TERMINOS = 'terminos-condiciones'
const POLITICAS = 'politicas-garantias'

const showTabs = () => {
  isActive.value = !isActive.value
}

watch(
  () => isRezise.value,
  value => {
    if (value) {
      isActive.value = false
    } else {
      isActive.value = true
    }
  },
)
</script>
<template>
  <main class="products__main">
    <article class="container">
      <div class="row">
        <div
          class="col-md-3 col-sm-12 mr-2 legales-list"
          :data-background="isActive"
        >
          <h5
            class="mb-4 title-legales"
            style="margin-top: 4rem"
          >
            LEGALES
          </h5>
          <div
            class="d-flex"
            style="justify-content: space-between"
            @click="showTabs"
          >
            <p
              v-if="!isRezise"
              class="list-group-item list-group-item-action"
            >
              {{ LEGALES[tab] }}
              <icon
                :name="isActive ? 'ep:plus' : 'ep:minus'"
                class="icon-minus"
              />
            </p>
          </div>
          <Transition>
            <div
              v-if="!isActive"
              id="list-tab"
              class="list-group"
              role="tablist"
            >
              <NuxtLink
                :data-show="!isRezise && tab === AVISO"
                :to="`/legales/${AVISO}`"
                class="list-group-item list-group-item-action"
                :class="tab === AVISO ? 'active' : ''"
                @click="!isRezise && (isActive = !isActive)"
              >Aviso de privacidad
              </NuxtLink>
              <NuxtLink
                :data-show="!isRezise && tab === TERMINOS"
                :to="`/legales/${TERMINOS}`"
                class="list-group-item list-group-item-action"
                :class="tab === TERMINOS ? 'active' : ''"
                @click="!isRezise && (isActive = !isActive)"
              >Términos y condiciones</NuxtLink>
              <NuxtLink
                :data-show="!isRezise && tab === POLITICAS"
                :to="`/legales/${POLITICAS}`"
                class="list-group-item list-group-item-action"
                :class="tab === POLITICAS ? 'active' : ''"
                @click="!isRezise && (isActive = !isActive)"
              >Políticas y garantías</NuxtLink>
            </div>
          </Transition>
        </div>
        <div
          class="col-md-9 col-sm-12 mb-5"
          style="margin-top: 4rem"
        >
          <div
            id="nav-tabContent"
            class="tab-content"
          >
            <div
              class="tab-pane fade"
              :class="tab === AVISO ? 'show active' : ''"
            >
              <h3>Aviso de privacidad</h3>
              <p>Optimum Equipo mejor conocido como Optimum Equipo, con domicilio
                en Zapopan, Jalisco y portal de internet
                https://optimumequipo.com/, es el responsable del uso y
                protección de sus datos personales, y al respecto le informamos
                lo siguiente:
              </p>
              <h5>¿Para qué fines utilizaremos sus datos personales?</h5>
              <p>Los datos personales que recabamos de usted, los utilizaremos
                para las siguientes finalidades que son necesarias para el
                servicio que solicita: Respuesta a mensajes del formulario de
                contacto, Prestación de cualquier servicio solicitado, Envío de
                productos adquiridos en esta tienda en línea
              </p>
              <h5>
                ¿Con quién compartimos su información personal y para qué fines?
              </h5>
              <p>Para llevar a cabo las finalidades descritas en el presente
                aviso de privacidad, utilizaremos los siguientes datos
                personales: Datos de identificación y contacto
              </p>
              <h5>
                ¿Con quién compartimos su información personal y para qué fines?
              </h5>
              <p>Le informamos que sus datos personales son compartidos fuera del
                país con las siguientes personas, empresas, organizaciones o
                autoridades distintas a nosotros, para los siguientes fines:
                Dentro del país Paqueterías, para envío de paquetes
              </p>
              <h5>
                ¿Cómo puede acceder, rectificar o cancelar sus datos personales,
                u oponerse a su uso o ejercer la revocación de consentimiento?
              </h5>
              <p>Usted tiene derecho a conocer qué datos personales tenemos de
                usted, para qué los utilizamos y las condiciones del uso que les
                damos (Acceso). Asimismo, es su derecho solicitar la corrección
                de su información personal en caso de que esté desactualizada,
                sea inexacta o incompleta (Rectificación); que la eliminemos de
                nuestros registros o bases de datos cuando considere que la
                misma no está siendo utilizada adecuadamente (Cancelación); así
                como oponerse al uso de sus datos personales para fines
                específicos (Oposición). Estos derechos se conocen como derechos
                ARCO. <br />Para el ejercicio de cualquiera de los derechos
                ARCO, debe enviar una petición vía correo electrónico a
                contacto@optimumequipo.com y deberá contener: <br />Nombre
                completo del titular. <br />Domicilio. <br />Teléfono.
                <br />Correo electrónico usado en este sitio web. <br />Copia de
                una identificación oficial adjunta. <br />Asunto «Derechos ARCO»
                <br />Descripción el objeto del escrito, los cuales pueden ser
                de manera enunciativa más no limitativa los siguientes:
                Revocación del consentimiento para tratar sus datos personales;
                y/o Notificación del uso indebido del tratamiento de sus datos
                personales; y/o Ejercitar sus Derechos ARCO, con una descripción
                clara y precisa de los datos a Acceder, Rectificar, Cancelar o
                bien, Oponerse. En caso de Rectificación de datos personales,
                deberá indicar la modificación exacta y anexar la documentación
                soporte; es importante en caso de revocación del consentimiento,
                que tenga en cuenta que no en todos los casos podremos atender
                su solicitud o concluir el uso de forma inmediata, ya que es
                posible que por alguna obligación legal requiramos seguir
                tratando sus datos personales. Asimismo, usted deberá considerar
                que, para ciertos fines, la revocación de su consentimiento
                implicará que no le podamos seguir prestando el servicio que nos
                solicitó, o la conclusión de su relación con nosotros.
              </p>
              <h5>¿En cuántos días le daremos respuesta a su solicitud?</h5>
              <p>5 días</p>
              <h5>
                ¿Por qué medio le comunicaremos la respuesta a su solicitud?
              </h5>
              <p>Al mismo correo electrónico de donde se envió la petición.</p>
              <h5>
                El uso de tecnologías de rastreo en nuestro portal de internet
              </h5>
              <p>Le informamos que en nuestra página de internet utilizamos
                cookies, web beacons u otras tecnologías, a través de las cuales
                es posible monitorear su comportamiento como usuario de
                internet, así como brindarle un mejor servicio y experiencia al
                navegar en nuestra página. Los datos personales que obtenemos de
                estas tecnologías de rastreo son los siguientes:
                Identificadores, nombre de usuario y contraseñas de sesión,
                Idioma preferido por el usuario Estas cookies, web beacons y
                otras tecnologías pueden ser deshabilitadas. Para conocer cómo
                hacerlo, consulte el menú de ayuda de su navegador. Tenga en
                cuenta que, en caso de desactivar las cookies, es posible que no
                pueda acceder a ciertas funciones personalizadas en nuestro
                sitio web.
              </p>
              <h5>
                ¿Cómo puede conocer los cambios en este aviso de privacidad?
              </h5>
              <p>El presente aviso de privacidad puede sufrir modificaciones,
                cambios o actualizaciones derivadas de nuevos requerimientos
                legales; de nuestras propias necesidades por los productos o
                servicios que ofrecemos; de nuestras prácticas de privacidad; de
                cambios en nuestro modelo de negocio, o por otras causas. Nos
                comprometemos a mantener actualizado este aviso de privacidad
                sobre los cambios que pueda sufrir y siempre podrá consultar las
                actualizaciones que existan en el sitio web
                https://optimumequipo.com/. Última actualización de este aviso
                de privacidad: 29/08/2023
              </p>
            </div>
            <div
              class="tab-pane fade"
              :class="tab === TERMINOS ? 'show active' : ''"
            >
              <h3>Términos y condiciones</h3>
              <h5>CONDICIONES DE PAGO</h5>
              <p>50% de anticipo al confirmar su orden y 50% al aviso de entrega
                o al aviso de embarque del equipo.
              </p>
              <h5>TIEMPO DE ENTREGA</h5>
              <p>El tiempo de entrega corre a partir de la fecha en que se reciba
                y se confirme el anticipo. El vendedor confirmará el día de
                entrega del equipo al cliente. El equipo nuevo se entregará en
                un plazo de 3 a 5 días, en el caso de un equipo de preventa, en
                cuanto llegue el equipo a bodega, será entregado en un plazo de
                3 a 5 días. El tiempo de entrega del equipo remanufacturado será
                de 7 a 10 semanas. Una vez que el equipo este en bodega listo
                para su entrega el cliente tienen un plazo de 15 días para
                efectuar su liquidación y programar la entrega o recolección,
                después de los 15 días se empezara a causar un cobro de
                almacenaje correspondiente al 3% mensual sobre el total del
                pedido. La empresa no se hace responsable por los daños que se
                puedan causar por esta razón. Todos los equipos son puestos a
                domicilio dentro de la ZMG. La entrega en casas es a puerta de
                domicilio, en departamentos o torres se entrega en planta baja,
                ya que se desconocen las condiciones de los inmuebles, no se
                realizan maniobras ni volados. Los fletes, maniobras y traslados
                de nuestra bodega a cualquier lugar en la república mexicana
                serán por cuenta y cargo al cliente. Para envíos fuera de la
                ZMG, es responsabilidad del cliente cotizar y contratar la
                fletera de su elección. La empresa se compromete a entregar los
                equipos en perfectas condiciones en la sucursal o en la bodega.
                No haciéndonos responsables de cualquier daño causado por las
                mudanzas o transportes. *Para recolección con transporte
                particular o fleteras es necesario enviar la carta responsiva de
                embarque al menos 24 hrs antes de la recolección del pedido. *Toda
                reclamación por daños o entregas incompletas deberá reportarse
                de inmediato al momento de estar recibiendo el equipo, mediante
                un correo a bodega@optimumequipo.com con fotos de los daños. De
                lo contrario se entenderá que se recibió a entera satisfacción
                del cliente
              </p>
              <h5>CONDICIONES GENERALES</h5>
              <p>OPTIMUM EQUIPO cotiza el precio de sus equipos en dólares
                americanos o su equivalente en moneda nacional al tipo de cambio
                vigente al momento de la transacción al precio a la venta que
                publique el SAT en su sitio web. OPTIMUM EQUIPO no será
                responsable por errores que el cliente cometa al momento de
                confirmar su orden como pueden ser: colores, modelos,
                especificaciones generales, eléctricas, etc. OPTIMUM EQUIPO no
                acepta devolución de equipos que han sido autorizados y/o
                confirmados por el cliente, en el supuesto de ser aceptada una
                devolución estará sujeta a autorización y tendrá un cargo del
                25% del valor total de los equipos sujetos a devolución. Cuando
                el pago se haya realizado con tarjeta de crédito o débito se
                descontarán también las comisiones bancarias. En cualquier caso
                no hay devolución de dinero, se entregará un voucher
                electrónico, que después podrá ser intercambiado por producto de
                menor o igual valor. Las facturas serán realizadas de acuerdo a
                las políticas de la empresa y deberán de solicitarse al momento
                de la compra. Respetamos los precios cotizados por un plazo de
                30 días naturales. Los precios y condiciones estarán sujetos a
                cambio sin previo aviso, mientras no exista confirmación por
                parte del cliente. En caso de cualquier duda o comentario no
                dude en contactarnos. Estamos a sus órdenes.
              </p>
            </div>
            <div
              class="tab-pane fade"
              :class="tab === POLITICAS ? 'show active' : ''"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/Mixins";
.legales-list {
  &[data-background="true"] {
    background-color: #e8e8e8;
    transition-delay: 0.5s; /* Retardo de 1 segundo */
    padding-right: 22px;
  }
  &[data-background="false"] {
    //padding-right: 22px;
  }
}
.list-group {
  &[data-show="false"] {
    display: none;
  }
  &[data-active="true"] {
    display: block !important;
  }
}
.list-group-item {
  &[data-show="true"] {
    display: none;
  }
}
.list-group-item-action {
  border: none;
  border-radius: 0px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  height: 48px;
  padding: 12px 16px 12px 0px;
}
.list-group-item-action.active {
  background-color: #fff;
  color: #000;
  border-right: solid 4px #2d679f;
}
.tab-content {
  padding-left: 4rem;
}
.tab-content p {
  margin: 24px 0px;
}
.legales-list {
  box-shadow: 4px 0px 4px -2px rgba(0, 0, 0, 0.25);
  padding-right: 0px;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@media (max-width: 767px) {
  .tab-content {
    padding-left: 0rem;
  }
  .legales-list {
    box-shadow: none;
    border-bottom: 2px solid #e8e8e8;
    padding-right: 0px;
  }
  .title-legales {
    display: none;
  }
  .list-group-item-action.active {
    border-right: none;
  }
  .icon-minus {
    color: var(--text-color);
    margin: 0;
    width: 15px;
    position: absolute;
    right: 0;
  }
}
@media (max-width: 991px) {
  .list-group-item-action {
    height: auto;
  }
}
</style>
