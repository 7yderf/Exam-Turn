import ApiService from "@/core/services/ApiService";

export const getTypes = async (params = "") => {
  let urlparams = ""
  if (params !== ""){
    urlparams += "?" + params.split("&").filter((item) => !item.includes("body-type")).join("&");
  }
    const { data } = await ApiService.get(`/api/vehicles/body-types${urlparams}`);
  return data.data;
};

export const getlocations = async (params = "") => {
  let urlparams = ""
  if (params !== ""){
    urlparams += "?" + params.split("&").filter((item) => !item.includes("state")).join("&");
  }
  try {
    const { data } = await ApiService.get(`/api/vehicles/states${urlparams}`);
    console.log("🚀 ~ file: servicesVehicles.js ~ line 20 ~ getlocations ~ data.data", data.data)
    return data.data;
    
  } catch (error) {
    console.log(error);
  }
};