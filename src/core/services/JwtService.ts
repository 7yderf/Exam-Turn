const ID_TOKEN_KEY = "id_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
 
 if (!window.localStorage.getItem(ID_TOKEN_KEY)) {
  return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Nzc4Yjc1Yi0wYTY0LTRlZWUtYjIyOC1hZTljNTUzMjc3MTUiLCJqdGkiOiIxNjBhMDlhZjY2ZDVkYWQzODc0YjE1ZTc0ZGQzYzI3NDNlM2ZiNWMzMWU4Y2I4YTZiYTMxYjc3MzJmZmE5NTczZWY3NDhkMzYyNjcwZmU0MiIsImlhdCI6MTY2NTQ0NzU0NC44NTY1MDMsIm5iZiI6MTY2NTQ0NzU0NC44NTY1MDYsImV4cCI6MTY2Njc0MzU0NC44NTEwMTcsInN1YiI6IiIsInNjb3BlcyI6W119.ZPV7N50QzDyzESESJ9nWvkE2CFJ-gEVHmYGewLtxCusLb42h1nLyia4-DV8-aNEPtKiJGARHfwZXJJaDiWoxwptpDLKlgJ82zCZWlYbga9zjYv8ba7UwrhjsbnZrj2ONOmnSBp5VhES3GME-Eh1mibtGnMakgoAgEFlsGP0TCyB5lNwFnBZybU34rMq4DctxYmTQ6d3hkhp0lkv07D8Dc5CIESAT6vS168OgQMAchYoROKki7k0M9dSQoMFay5W_0suJWN08vBfXOkSybTVdSIqOJlE4R-zybaLdT5MZSo7WE4lfSG3ZILMUCCHENMAjvP69BxM8B31xe4G2yjaDlDdYDR0C_OJVDkkmwk3A0zFBDgjOAxEVpASvJmn8zxVHSJvUqAcrRts5UlJSB7Fbb-BorQxnBEoT_iF-fiWPzCy1cG1GxsrIQSrLv33GqxpyKZh19l6SP6xUC9CtzO4FQyrZvXh9Q_P8-gQGv70T6ASLv9zLsP5aMST59lw6ue36g9suO44wYxOGIk0hZY-dvViY4Xq5M0NU165pDkn2xIZ6Euq2ZATZS_DczGqNmtRca4LoquAGG7mXcgQ1G_JBfPocU_8Qjn2pWyaTJB1u99uYxYhbb_DoccqpAVDvG9pwDPNWh3kjgFCVE5jzPoh65j4lmHToa7Ij0KUnhSrCzLw";
 } else { 
  return window.localStorage.getItem(ID_TOKEN_KEY);
 }
  
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

export default { getToken, saveToken, destroyToken };
