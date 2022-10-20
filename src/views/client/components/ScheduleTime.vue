<template>
  <h3 class="fs-2 fw-bold">Horario</h3>
  <p class="fs-base">{{ title }}</p>
  <p class="fs-2 fw-bold">Por la mañana (am)</p>

  <el-radio-group v-model="hoursDate" size="large">
    <template v-for="time in times" :key="time.id">
      <el-radio-button v-if="parseInt(time.hora.slice(0,2)) < 12" @click="sendDateTime(time)" :label="time.hora.slice(0,5)" :name="time.id" class="mx-2 rounded fs-2 my-3"/>
    </template>
  </el-radio-group>
  <p class="fs-2 fw-bold mt-3">Por la tarde (pm)</p>
  <el-radio-group v-model="hoursDate" size="large">
    <template v-for="time in times" :key="time.id">
      <el-radio-button v-if="parseInt(time.hora.slice(0,2)) >= 12" @click="sendDateTime(time)" :label="time.hora.slice(0,5)" :name="time.id" class="mx-2 rounded fs-2 my-3"/>
    </template>
  </el-radio-group>
</template>

<script lang="ts">
  import { ref } from "vue";
  export default ({
    name: "ScheduleTime",
    
    props: {
      title: null,
      times: null
    },
    setup(props, { emit }){
      const hoursDate = ref({});
      
      const sendDateTime = (time) => {  
        emit("sendDateTime", time);
      };

      return {
        hoursDate,
        sendDateTime
      }
    },

    emits:["sendDateTime"],
  });

</script>

<style lang="scss">
  .el-radio-button {
    --el-radio-button-checked-bg-color: #0860f0;
    --el-radio-button-checked-text-color: var(--el-color-white);
    --el-radio-button-text-color: var(--el-color-white);
    --el-radio-button-checked-border-color: #0860f0;
  }

  .el-radio-button__inner {
    background-color: transparent ;
    border-radius: 8px !important;
    border: 1px solid #393840;
  }

  .el-radio-button__inner:checked {
    background-color: #0860f0 !important;
  }

  .el-radio-button__inner {
    color: white;
  }

  .el-radio-button:first-child .el-radio-button__inner {
    border-left: 1px solid #393840;
  }
</style>