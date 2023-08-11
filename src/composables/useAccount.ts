
import { useAuthentication } from '@/stores/AuthStore'


export default function useNewAccount() {
  const config = useRuntimeConfig();
 

  async function newAcoount(values: any){
 
    const { data, error}: any = await useLazyFetch(`${config.API_BASE_URL}v2/accounts`, {
      method: "POST",
      body: JSON.stringify({ ...values}),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("idToken")}` || "",
      },
    });

    // if (data.value){
     
    // } else {
      
    // }

    return { data, error };
  }
  
    
  return {  newAcoount}

}