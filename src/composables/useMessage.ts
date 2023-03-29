import { useI18n } from "vue-i18n"

export const useMessage = () => {
  const { t } = useI18n()
  const message = ref('')

  const setMessage = (NewMessage: string) => {
    message.value = NewMessage
  }

  return {
    message,
    setMessage,
    t
  }
}