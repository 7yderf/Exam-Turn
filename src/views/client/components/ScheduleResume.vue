<template>
    <h3 class="fs-2 fw-bold">Resumen</h3>
    <p class="fs-base">Resumen de tu cita</p>
    <h3 class="fs-2 fw-bold">{{ data.appointment.formatted_date }}</h3>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <label for="" class="fs-base fw-bold mt-4 mb-4">Nombre <span class="text-danger">*</span></label>
        <el-input class="w-100 fs-base fw-bold" size="large" clearable placeholder="Nombre" v-model="data.customer.Names" :disabled="true">
          <template #prefix>
            <i class="isax-user text-white"></i>
            <!-- <img class="el-input__icon me-5 p-1" style="cursor:pointer" src="media/icons/iconsax/person.svg" /> -->
          </template>
        </el-input>
      </div>

      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <label for="" class="fs-base fw-bold mt-4 mb-4">Apellidos <span class="text-danger">*</span></label>
        <el-input class="w-100 fs-base" size="large" clearable placeholder="Apellidos" v-model="data.customer.Surnames" :disabled="true">
          
        </el-input>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <label for="" class="fs-base fw-bold mt-4 mb-4">Correo electrónico <span class="text-danger">*</span></label>
        <el-input class="w-100 fs-base" size="large" clearable placeholder="Correo electrónico" v-model="data.customer.Email" :disabled="true">
          <template #prefix>
            <i class="isax-attach-circle text-white"></i>
          </template>
        </el-input>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <label for="" class="fs-base fw-bold mt-4 mb-4">Teléfono <span class="text-danger">*</span></label>
        <el-input class="w-100 fs-base" size="large" clearable placeholder="Teléfono" v-model="data.customer.Phone" :disabled="true">
          <template #prefix>
            <i class="isax-call text-white"></i>
          </template>
        </el-input>
      </div>
    </div>

    <div class="row" v-if="data.appointment.tipo == '1'">
      <div class="col-md-12 text-left mt-10">
        <div class="d-flex justify-content-left">
          
          <div class="float-start inline-logo">
            <img width="40" src="media/icons/iconsax/shop.svg" alt="logo"/>
          </div>

          <div class="float-start">
            <p class="fs-base mb-1">{{ data.agency.name }}<br>
              <span class="fs-sm text-gray">{{ data.agency.address }}, {{ data.agency.colonia }}</span> <br>
              <span class="fs-sm text-gray">{{ data.agency.city }}, {{ data.agency.state }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  export default ({
    name: "ScheduleResume",
    data() {
      return {
        appointment: {
          day:"",
          time:"",
          date_id:"",
          agency: "TOYOTA HERMOSILLO",
          agency_id:"",
          apellidos:"",
          email:"",
          fecha:"",
          nombre:"",
          phone:"",
          tipo:"3",
          vehicle_client:"",
          formatted_date:"Selecciona una fecha y un horario",
        },
        vehicle: {
            vehiculo: "Audi Q5 3.0 V6 SQ5 Tiptronic At 2019",
            kms: "33600",
            year: "2020",
            brand: "Hyundai",
            model: "Tucson",
            version: "GLS",
        },
        customer: {
            Names: "Luis Ramos",
            Surnames: "Luis Ramos",
            Phone: "1234567811",
            Email: "mail@mail.com",
            Address: "Gomez Cuervo 31",
            Colony: "La Perla",
            Location: "Guadalajara, Jalisco",
            City:"",
            CityId:"",
            State:"",
            StateId:"",
            CP:"",
            Between:"",
            OutSideNumber:"",
            InsideNumber:"",
        },
        agency: {
          address: "Direccion",
          city: "Hermosillo",
          colonia: "Colonia 1",
          cp: "11111",
          email: "tes2s@gmg.com",
          id: 6,
          id_state: 26,
          latitude: "19.39271801953999",
          longitude: "-99.12452365006473",
          name: "TOYOTA HERMOSILLO",
          phone: "1111111111",
          state: "Sonora",
          url_whatsapp: "jhasdkjhas kashdk",
        },
      };
    },
    props: {
      title: null,
      data:null,
    },
    methods: {},
  });

</script>