/* eslint-disable import/prefer-default-export */
import config from "@config";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Cookie", "laravel_session=7xKzQEyGTuDpPdha7HdxL70iXkbJcvA3N5gk9rGO");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

export const infoAvaluo = async () => {
  const request = await fetch(`${config.api}/api/leads/avaluos/1`, requestOptions);
  const { data, error } = await request.json();
  if (error) throw new Error(error);
  return data;
};
