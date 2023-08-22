import { useToken } from '@/stores/SessionStore'
const { getUser } = useToken()
export default function useCircuits() {
    const config = useRuntimeConfig();


    async function useFetchCircuits(url:any, page:any) {

        const circuits_list = ref(null);
        const data = ref<any>(null);
        const error = ref(null);
        let { token } = getUser;
        let params = url;
        !!url && (params =`?type=${url}`);
        !!page && (params = page);


        if (process.client) {

            !!params ?
                (params = `${params}&identifier=${token}`) :
                (params = `?identifier=${token}`);

            try {
                const res = await fetch(`${config.API_BASE_URL}circuits${params}`);
                if (!res.ok) {
                    throw Error("No se pudo obtener la informacion");
                }
                data.value = await res.json();
                !!data.value && (circuits_list.value = data.value.data)
            } catch (err: any) {
                error.value = err.message;
            }



        }
        return { circuits_list, error };

    }





    return { useFetchCircuits }

}