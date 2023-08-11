
import { useAuthentication } from '@/stores/AuthStore'


export default function useAuth() {
  const config = useRuntimeConfig();
  const DEFAULT_IMAGE = "/default-user.png";
  const authtentication = useAuthentication();


  async function login(values: any){
    const browser = navigator.userAgent;
    const { data, error}: any = await useLazyFetch(`${config.API_BASE_URL}api/login`, {
      method: "POST",
      body: JSON.stringify({ ...values,  'name': browser}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.value){
      const {displayName='',email='', photoURL='', token = '', phoneNumber ='', ...defaultUser} = data.value
      const profileImage = photoURL === "" ? DEFAULT_IMAGE : photoURL;
      const idToken = token;
      const user = {...defaultUser, displayName, email, profileImage, idToken, phoneNumber}
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("idToken", idToken);
      authtentication.listenerAuth({...user});
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("idToken");
      authtentication.listenerAuth({email: null, idToken: null});
    }

    return { data, error };
  }
  
    async function logout(){
      const { data, error}: any = await useLazyFetch(`${config.API_BASE_URL}api/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("idToken")}` || "",
        },
      });

      if (data.value){
        localStorage.removeItem("user");
        localStorage.removeItem("idToken");
        authtentication.listenerAuth({email: null, idToken: null});
        
      }

      return { data, error };
    }
  return { login, logout}

}