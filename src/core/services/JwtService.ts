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
    localStorage.setItem(ID_TOKEN_KEY_GATEWAY, data.access_token);
    return data.access_token;
  } catch (e) {
    console.log("errorss", e);
    const mockToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Nzc4Yjc1Yi0wZDc4LTQ3MWYtOTg4MS1jNDc1NDcxZjg0NWQiLCJqdGkiOiI4MzM2ZGQ4ZTFhODQxZWIwMmQyNWE1M2Y0OTRjZmUwYjYzMGQxNzMzZTBhMDI3NzkxNDJkYjI4ZTZlOWU0Mjg4MzMyMTNhZmM5ODRmYjZiZCIsImlhdCI6MTY2NzQ4NzUwNC4wMzQ2ODgsIm5iZiI6MTY2NzQ4NzUwNC4wMzQ2OTEsImV4cCI6MTY2ODc4MzUwNC4wMjkwMjIsInN1YiI6IiIsInNjb3BlcyI6W119.Rk3Ss20QwxtFG0PT0mwo8bSK0kQXPnDt7MAMpVzjhsrxDB5pBdS6bhk_fuP_qq72rMy4ElZbd8TKiOPI-IRIM3uIyRqYAgDLMxSvxr4axkcV-ObnjDlgfXIfnQ_4_hL97ewxqLdWozFCzWri2Dj-yMFGGWibK_Qe17RzCAYV3SEwZwknEZ95PeavelgO1LM0mZnQdvDd98R4DUprzycrFOt_x7PFpKUtxWlbfMEjhb6uu70WVQeJ183r9toPabcAhyWhfwNE46CJb5WD5Xf87o_J9myzYwFJsiHC5rDWIDUdel567QQb_OnzjD_ApQvHG8eInF1Raaog5EMC8QCE-jzQSlRNOFUOSCfhRuafhTuCtT48XpoGoqU8GMx28z517Ayph28b5hzcn2m7aU62UYb4BdGQh0uXBsNp6vztTBrQvS8XL7EK7dPmmsoWygidxTx8pjA1hDFEAU2bQEpqX0HpnZC2-75SYQrTLdfStDUE_tqpC884jyNm73AJAuvogwZoEef0nJoeR_2-yAvhHWtDDRVY76qtQ7Hurbo8Nzg9OubxvBZW5J7w9KqigqTeb8jTqXAqns9LYjfT6k7bAD-3BME4wq05FRBIjTbUNiSNQkybUU48twA_j1XrZNS7iX7q53C7zX0dmtYyKWtES0nujdbw8rZ6ehO0bOx1m7g";
    localStorage.setItem(ID_TOKEN_KEY_GATEWAY, mockToken);
    return mockToken;
  }
};


/**
 * @description get token form localStorage client gateway
 */
 export const getTokenGateway = async() => {
  if (localStorage.getItem(ID_TOKEN_KEY_GATEWAY)) {
    return localStorage.getItem(ID_TOKEN_KEY_GATEWAY);
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
