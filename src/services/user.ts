import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API2;
const API_VERSION = "api/v1";

const appToken = localStorage.getItem('appToken');
  const userToken = localStorage.getItem('userToken');

export async function getAllDevice(token:any) {
  const url = `${ROOT_API}/${API_VERSION}/devices?page=1&limit=10`;
  
  // console.log(appToken);
  

  return callAPI({
    url,
    method: "GET",
    token: true,
    serverToken: `${appToken}`,
  });
}

export async function getHistory(token: any) {
  const url = `${ROOT_API}/${API_VERSION}/history/device/POWERCAM-P001?page=1&limit=10`;
  // console.log('Token:',token);
  return callAPI({
    url,
    method: "GET",
    token: true,
    serverToken: `${appToken}`,
  });
}

export async function getImage() {
  const url = `${ROOT_API}/${API_VERSION}/images/`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
