<template>
  <el-space direction="vertical">
    <el-space>
      <el-input-number
        v-model="num"
        :min="initialValue"
        :max="10"
        size="small"
        controls-position="right"
        @change="handleChange"
      />
    </el-space>
    <!-- <el-space>
      <el-input-number
        v-model="num"
        controls-position="right"
      />
    </el-space> -->
  </el-space>
</template>

<script lang="ts" setup>
const emit = defineEmits(['listenerNumber'])
const props = defineProps<{
 type: string,
  initialValue: number,
  vueModel: any,
}>()
const num = ref(props.vueModel ? props.vueModel : props.initialValue)
watch(
  () => props.vueModel,
  value => {
    if (!value) {
      num.value = props.initialValue
    }
  },
)

// *verificar si se puede hacer con computed
// const num = computed({
//   get: () => props.initialValue,
//   set: (value: number) => {
//     emit('listenerNumber', value, props.type)
//   },
// })
const handleChange = (value: number) => {
  console.log(value)
  emit('listenerNumber', value, props.type)
}
</script>
