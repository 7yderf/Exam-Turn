import { AxiosResponse } from "axios";
import ApiService from "@/core/services/ApiService";

/**
 * @description service to make HTTP request via Axios
 */


 class SolanaServices {

   /**
   * DASHBOARD
   */
   /**
   * @method getDashboard
   * @return data para el dashboard
   * @description Método para llenar los contadores del
   * dashboard
   */

   public static getDashboard = (id = "", fecha_inicial = "", fecha_final = ""): Promise<AxiosResponse> => {
      let url = process.env.VUE_APP_API_URL + "/api/dashboard/metrics";
      if(id != "" && fecha_inicial == "" && fecha_final == ""){
         url += "?agency="+id;
      }
      if(id == "" && fecha_inicial != "" && fecha_final != ""){
         url += "?from="+fecha_inicial+"&to="+fecha_final;
      }
      if(id != "" && fecha_inicial != "" && fecha_final != ""){
         url += "?agency="+id+"&from="+fecha_inicial+"&to="+fecha_final;
      }
      const data = ApiService.get(url);
      return data;
   }; 

   /**
   * AGENCIES
   */

   /**
    * @method getCiudades
    * @description metodo para obtener las agencias registradas 
    */
   public static getCiudades = (): Promise<AxiosResponse> => {
      const url = process.env.VUE_APP_API_URL + "/api/agency-cities";
      const data = ApiService.get(url);
      return data;
   }

   /**
    * @method getPlaces
    * @params latitude:string, longitude:string
    * @return place data
    * @description Obtiene información de un lugar por medio de la
    * api de places de google
    */
   public static getPlaces = (latitude:string, longitude:string):any => {
      const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&key=AIzaSyACDXm5WBEngJZHLoEiSzzYCdlkg3THQmI';
      return fetch(url).then(response => response.json());
   }

   /**
    * @method searchPlaces
    * @params latitude:string, longitude:string
    * @return place data
    * @description Obtiene información de un lugar por medio de la
    * api de places de google
    */
    public static searchPlaces = (address:string):any => {
      const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&inputtype=textquery&key=AIzaSyACDXm5WBEngJZHLoEiSzzYCdlkg3THQmI';
      return fetch(url).then(response => response.json());
   }

   /**
    * @method getTipoRol
    * @params nothing
    * @return User Type: string
    * @description Return user type in string
    */
   public static getTipoRol = (): Promise<AxiosResponse> => {
      const url = process.env.VUE_APP_API_URL + "/api/auth/user";
      const data = ApiService.get(url);
      return data;
  }

     /**
    * @method getDateFormatString
    * @params nothing
    * @return Date format Type: string
    * @description Return date format string
    */
      public static getDateFormatString = (fecha:string): string => {
         const meses = ["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
         let fechaString = "";
         if(fecha.includes(':')){
            const fechaConHoras = fecha.split(' ');
            const soloFecha = fechaConHoras[0].split('-');
            const mes = meses[parseInt(soloFecha[1])];
            fechaString = soloFecha[2] + " de " + mes + " " + soloFecha[0];
         }else{
            const soloFecha = fecha.split('-');
            const mes = meses[parseInt(soloFecha[1])];
            fechaString = soloFecha[2] + " de " + mes + " " + soloFecha[0];
         }
         return fechaString;
     }



 }

 export default SolanaServices;