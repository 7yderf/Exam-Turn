/* eslint-disable max-len */
export default function useMockAvaluos() {
  return {
    data: [
      {
        status: {
          id: 1,
          status: "Negociación"
        },
        vehicle: {
          id: 1,
          brand: "Selecciona una marca",
          model: "MDX",
          version: "3.5 V6 Tech At",
          year: null,
          Owners: 2,
          Mileage: "2000"
        },
        client: {
          name: "Cita P2",
          email: "ruben.vicencio@turnmyapp.com",
          phone: "322-343-4343"
        },
        valuador: {
          id: 6,
          name: "Valuador uno",
          email: "valuador@solana.com",
          phone: "0000000000"
        },
        avaluo_info: {
          valuador: "Valuador uno",
          fecha: "2022-08-01",
          comentario: "Fue atendida",
          diagnostico: "http://ec2-54-208-154-159.compute-1.amazonaws.com/api/leads/storage/OvH6vZT5xcFoRnV7Ok6SEEtDxV7GPHjuLoFCJGlW.pdf"
        },
        negotiation: {
          intelli_offer: "0.00",
          initial_offer: "",
          final_offer: "",
          comments: []
        },
        documents: [
          {
            id_doc: 1,
            type: "De propiedad",
            document: "Factura original anterior",
            required: "Si",
            id_valuation_document: 1,
            uploaded_at: "2022-08-01 19:39:36",
            uploaded_by: "Valuador uno"
          },
          {
            id_doc: 2,
            type: "De propiedad",
            document: "Estado de cuenta de crédito",
            required: "Si",
            id_valuation_document: 2,
            uploaded_at: "2022-08-01 19:39:50",
            uploaded_by: "Valuador uno"
          },
          {
            id_doc: 3,
            type: "De propiedad",
            document: "Historial de facturas anteriores",
            required: "No",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 4,
            type: "De propiedad",
            document: "Auto factura o complemento factura",
            required: "No",
            id_valuation_document: 3,
            uploaded_at: "2022-08-01 19:40:27",
            uploaded_by: "Valuador uno"
          },
          {
            id_doc: 5,
            type: "De propiedad",
            document: "Factura de cliente emitida a la agencia",
            required: "No",
            id_valuation_document: 4,
            uploaded_at: "2022-08-01 19:40:52",
            uploaded_by: "Valuador uno"
          },
          {
            id_doc: 6,
            type: "Contratos",
            document: "contrato entre particulares",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 7,
            type: "Contratos",
            document: "Contrato múltiple (compra-venta, pago financiera, compensación)",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 8,
            type: "Identificación del cliente",
            document: "INE persona física o persona moral",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 9,
            type: "Identificación del cliente",
            document: "Comprobante de domicilio",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 10,
            type: "Identificación del cliente",
            document: "Estado de cuenta bancario",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 11,
            type: "Identificación del cliente",
            document: "Constancia de situación fiscal",
            required: "No",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 12,
            type: "Identificación del cliente",
            document: "Clave RFC",
            required: "No",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 13,
            type: "Identificación del cliente",
            document: "Poder representante legal",
            required: "No",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 14,
            type: "Vehículo",
            document: "Diagnóstico mecánico",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 15,
            type: "Vehículo",
            document: "Validación de factura origen",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 16,
            type: "Vehículo",
            document: "Reporte robo",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 17,
            type: "Vehículo",
            document: "Validación de factura SAT",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 18,
            type: "Vehículo",
            document: "Guía autométrica",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 19,
            type: "Vehículo",
            document: "Cálculo y carta de retencia",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 20,
            type: "Cambio de rol",
            document: "Solicitud de inscripción al RFC y expedición de CFDI",
            required: "No",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 21,
            type: "Cambio de rol",
            document: "Autorización expedición CFDI",
            required: "No",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 22,
            type: "Cambio de rol",
            document: "Anexo solicitud cambio de rol",
            required: "No",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 23,
            type: "Agencia fiscal",
            document: "Tenencias",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 24,
            type: "Agencia fiscal",
            document: "Cambios de propietario",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          },
          {
            id_doc: 25,
            type: "Agencia fiscal",
            document: "Baja",
            required: "Si",
            id_valuation_document: null,
            uploaded_at: null,
            uploaded_by: null
          }
        ]
      }
    ]
  };
}
