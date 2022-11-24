const ID_TOKEN_KEY = "id_token" as string;
const ID_TOKEN_KEY_GATEWAY = "id_token_gateway" as string;

const formdata = new FormData();
formdata.append("grant_type", "client_credentials");
formdata.append("client_id", "9778b75b-0d78-471f-9881-c475471f845d");
formdata.append("client_secret", "EIW1hdife8PyeIqTKqNTCx1Aqew5nFuTJWL15ftI");


const tokenClient = async() => {
  
  try {
    const response = await fetch("https://apivanguardia.demosturn.com/api/oauth/token", {
    method: "POST",
    body: formdata,
    redirect: 'follow'
  });
  
  const data = await response.json();
  console.log("data",data);
  sessionStorage.setItem(ID_TOKEN_KEY_GATEWAY, data.access_token);
    return data.access_token;
  } catch (e) {
    console.log("errorss", e);
    
  }
};


/**
 * @description get token form localStorage client gateway
 */
 export const getTokenGateway = async() => {
  if (sessionStorage.getItem(ID_TOKEN_KEY_GATEWAY)) {
    return sessionStorage.getItem(ID_TOKEN_KEY_GATEWAY);
  } else {
    return tokenClient();
  }
};

/**
 * @description get token form localStorage
 */
 export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken, getTokenGateway };
