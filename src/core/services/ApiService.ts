import { App } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/JwtService";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import store from "@/store/";
import router from "@/router/";
import Alert from "sweetalert2/dist/sweetalert2.js";
import { Mutations } from "@/store/enums/StoreEnums";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App;

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    ApiService.vueInstance.axios.interceptors.response.use(
      (response) => {
        if (process.env.NODE_ENV == "production") {
          setTimeout(function () {
            console.clear();
            console.log(
              "%cAlto!",
              "font-size: 60px;color:red; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;"
            );
            console.log(
              "%cEsta característica del navegador es para desarrolladores, no ejecute scripts ya que puede sufrir perdida de información!",
              "font-size: 12px; color:yellow;"
            );
          }, 50);
        }
        return response;
      },
      async (error) => {
        const { status } = error.response;
        if (status === 401) {
          store.commit(Mutations.PURGE_AUTH);
          router.push("/sign-in");
        }

        if (status === 403) {
          Alert.fire({
            icon: "warning",
            title: "¡No autorizado!",
            text: "Usted no tiene permisos para acceder a este modulo.",
            confirmButtonText: "Aceptar",
          });
          router.push("/dashboard");
        }

        return Promise.reject(error);
      }
    );
  }

  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    ApiService.vueInstance.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
    ApiService.vueInstance.axios.defaults.headers.common["Accept"] =
      "application/json";
    ApiService.vueInstance.axios.defaults.headers.common["Pragma"] =
      "no-cache";
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    ApiService.setHeader();
    return ApiService.vueInstance.axios.get(resource, params);
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(
    resource: string,
    slug = "" as string
  ): Promise<AxiosResponse> {
    if (slug != "") {
      ApiService.setHeader();
      return ApiService.vueInstance.axios.get(`${resource}/${slug}`);
    } else {
      ApiService.setHeader();
      return ApiService.vueInstance.axios.get(`${resource}`);
    }
  }

  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(
    resource: string,
    params: AxiosRequestConfig | FormData
  ): Promise<AxiosResponse> {
    ApiService.setHeader();
    return ApiService.vueInstance.axios.post(`${resource}`, params);
  }

  /**
   * @description send the UPDATE HTTP request
   * @param resource: string
   * @param slug: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static update(
    resource: string,
    slug: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    ApiService.setHeader();
    return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params);
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    ApiService.setHeader();
    return ApiService.vueInstance.axios.put(`${resource}`, params);
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    ApiService.setHeader();
    return ApiService.vueInstance.axios.delete(resource);
  }
}

export default ApiService;
