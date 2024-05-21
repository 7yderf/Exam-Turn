<script lang="ts" setup>
const load = useload()
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
onMounted(async () => {
  load.value = false
})
</script>
<template>
  <main class="products__main">
    <article class="container">
      <div class="row">
        <!-- <div
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
        </div> -->
        <div
          class="col-md-12 col-sm-12 mb-5"
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
              <p>Con fundamento en los artículos 6, 8, 15, 16 y 17 de la <b> Ley Federal de Protección de Datos Personales en Posesión de Particulares </b> hacemos de su conocimiento que el Ing. José Luis Carrillo Escobar cuyo nombre comercial es EXSIN (en lo sucesivo “EXSIN”), con domicilio en Boulevard 51 Poniente 501-D Plaza América, Residencial Boulevares, Heroica Puebla de Zaragoza, Puebla C.P. 72440, es el responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección. Asimismo, les comunicamos que EXSIN cuenta con un Departamento de Privacidad y Protección de datos personales, el cual será el responsable del tratamiento de los datos personales proporcionados, dicho departamento puede ser contactado en la dirección de correo electrónico -------------------------al teléfono (222) 4301476.</p>

              <h5>I. De la exactitud y veracidad de los datos personales.</h5>
              <p>Se hace de su conocimiento que EXSIN en ningún caso y bajo ningún concepto será responsable de la veracidad de la información proporcionada por el cliente, proveedor y/o la persona encargada de proporcionar los datos personales, exonerando a EXSIN de cualquier responsabilidad al respecto. <br />En este sentido, el cliente, proveedor y/o el propietario de los datos personales a recabarse por EXSIN, garantizan y responden de la exactitud, vigencia y autenticidad de los datos personales proporcionados y se compromete a notificarle a EXSIN de cualquier cambio realizado en la información proporcionada, con el ánimo que EXSIN mantenga la misma actualizada.</p>

              <h5>II. Del Derecho de Acceso, Rectificación, Cancelación y Oposición. </h5>
              <p>El titular de los datos personales podrá ejercer sus derechos de acceso, rectificación, cancelación y oposición (ARCO) de conformidad con lo establecido por el numeral 16, Fracción IV y 33 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares, 90 y 120 de su reglamento, así como el artículo 28 de los Lineamientos del Aviso de Privacidad. <br />La información personal del titular será utilizada para las siguientes finalidades: la contratación de sus servicios dentro de EXSIN, para que funja como proveedor directo o indirecto de EXSIN </p>
              <ul>
                <li>Para contactar a diferentes terceros a fin de solicitar referencias respecto del titular, como posible comprador de los inmuebles promovidos por EXSIN
                </li>
                <li>Para celebrar los contratos de compraventa y/o promesa de compraventa, arrendamiento, de permuta, de cesión de derechos de constitución de derechos reales, etc., que se requieran y celebrar cualquier otro documento relacionado con la comercialización de inmuebles de EXSIN. 
                </li>
                <li>
                  La realización de todas y cada una de las operaciones y la celebración de los demás actos que EXSIN pueda realizar conforme a la legislación aplicable a la misma.
                </li>
                <li>
                  La publicidad, promoción o recomendación entre diversas Empresas de la misma actividad comercial a EXSIN.
                </li>
                <li>
                  La atención de requerimientos de cualquier autoridad competente conforme a la legislación aplicable a EXSIN.
                </li>
                <li>
                  La comunicación con sus clientes, proveedores, empleados, actuales o anteriores, para tratar cualquier tema relacionado con asuntos contractuales, comerciales y/o laborales.
                </li>
                <li>
                  La generación de gestiones internas necesarias, así como las consultas, investigaciones y revisiones en relación a cualquier queja y/o aclaración.
                </li>
              </ul>

              <p>Al brindar su consentimiento por escrito, nos autoriza a utilizar sus datos personales, para fines estadísticos y promocionales. Para las finalidades mencionadas en el párrafo anterior, será necesario recabar los siguientes datos personales: nombre, domicilio, ocupación, sexo, fecha y lugar de nacimiento, clave única de registro de población (en lo sucesivo “CURP”) número de seguro social, registro federal de contribuyentes (“RFC), nacionalidad, estado civil, régimen matrimonial, escolaridad, teléfono fijo y/o celular, correo electrónico, información relacionada con sus dependientes económicos (número, edad y ocupación)y/o acta constitutiva, poderes notariales de representantes legales, Constancia de Situación Fiscal, Opinión de Cumplimiento, referencias comerciales   así como la siguiente información sensible: información financiera y patrimonial, monto del sueldo y/o ingresos mensuales, declaraciones ante el S.A.T., historial crediticio, estados de cuenta bancarios. Antecedentes legales y consultas jurídicas y judiciales.<br>Así mismo, para las finalidades mencionadas y en caso que se requiera será necesario recabar los siguientes datos del cónyuge; nombre, ocupación, antigüedad, CURP, RFC, tipo y número de identificación, nacionalidad, teléfono celular y/o fijo, ingresos e información financiera y patrimonial.<br>Se hace constar para todos los efectos legales establecidos en la Ley Federal de Protección de Datos Personales en Protección de los Particulares, su reglamento, circulares y lineamientos, que el otorgante cuenta con autorización de su cónyuge para el tratamiento de sus datos personales incluso los considerados por la ley como sensibles, por lo que se obliga a sacar en paz y a salvo a EXSIN de cualquier requerimiento, multa, demanda o reclamación por cualquier autoridad respecto al trato de los datos personales. Se hace constar que el titular tendrá derecho a rectificar, cancelar u oponerse al uso de sus datos personales y/o los del cónyuge, siempre y cuando estos no sean indispensables para el cumplimiento de sus obligaciones. Para ello es necesario que el títular presente su solicitud por escrito en las oficinas de EXSIN antes mencionadas y en los términos establecidos por la Ley Federal de Protección de Datos Personales en Posesión de Particulares.<br>Para el caso de que la solicitud antes señalada sea presentada por un tercero distinto del titular, será necesario que dicho tercero acredite su personalidad mediante carta poder firmada por titular ante dos testigos y anexando copia de la identificación oficial del tercero.<br>EXSIN dará respuesta a la solicitud presentada por el titular en los términos establecidos por los artículo del 28 al 35 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares.</p>
              <h5> III. Medidas de Seguridad. </h5>
              <p>Se hace de su conocimiento que EXSIN, tendrá bajo su resguardo la información proporcionada y se obliga a conservar los datos personales con todas las medidas de seguridad necesarias, así mismo, EXSIN protegerá su información personal e información personal sensible aplicando las medidas de seguridad, administrativas, técnicas, físicas y organizacionales necesarias para prevenir acceso no autorizado o procesamiento de su información personal, por lo que sus empleados, funcionarios o autorizados para tratar los datos personales no utilizarán la información obtenida para fines distintos a los aquí establecidos.
              </p>
              <h5>IV. Transferencia de Datos Personales.</h5>
              <p>EXSIN podrá transferir sus datos personales a empresas afiliadas, subsidiarias o del mismo grupo de intereses, así como instituciones financieras, de seguros y/o a cualquier autoridad ya sea Federal, Estatal y/o Municipal con el objeto de dar cumplimiento a los propósitos específicos para los cuales fueron proporcionados los datos personales y/o cualquier obligación a cargo de EXSIN impuesta por una autoridad competente, ley, reglamento, norma oficial mexicana y/o cualquier disposición legal. 
              </p>
              <h5>V. De la Baja y Conservación de Datos Personales. 
              </h5>
              <p>Los datos personales serán conservados por un periodo determinado, lapso que estará en función del cumplimiento de otras disposiciones legales aplicables y hasta en tanto no se cumpla con la finalidad para los cuales son recabados. No obstante, EXSIN podrá conservar los datos personales para fines de promoción y publicidad de los productos y servicios de EXSIN. Independientemente de lo anterior, al finalizar la relación, los datos personales en cuestión se convertirán en anónimos. EXSIN está facultado de forma expresa y sin necesidad de consentimiento previo del titular a dar de baja de forma unilateral los datos personales en cualquier tiempo.
              </p>
              <h5>VI. Cambios en el presente Aviso de Privacidad. </h5>
              <p>EXSIN se reserva el derecho a modificar el presente aviso para adaptarlo a la legislación y/o criterios legales vigentes. En este caso EXSIN anunciará por diferentes mecanismos como pudieran ser folletos, correos electrónicos, carteles o cualquier otro medio los cambios realizados en el presente aviso. 
              </p>
              <h5>VII. Aviso Legal.
              </h5>
              <p>El objetivo del presente Aviso de Privacidad es informarle las finalidades del tratamiento de sus Datos Personales, así como los derechos ARCO, el contenido del presente Aviso de Privacidad se regirá conforme a las leyes, reglamentos y circulares en materia de protección de datos personales.
              </p>
              <p>bodegaspuebla@gmail.com</p>
              <p style="margin-left: auto;">Última actualización: <br />
                01/01/2024
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
