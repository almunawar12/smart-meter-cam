import callAPI from "../config/api";
import JwtToken from "./data";

const ROOT_API = process.env.NEXT_PUBLIC_API2;
const API_VERSION = "api/v1";

const appToken = localStorage.getItem('appToken');
  const userToken = localStorage.getItem('userToken');

export async function getAllDevice(token:any) {
  const url = `${ROOT_API}/${API_VERSION}/devices?page=1&limit=10`;
  
  // console.log(appToken);
  // const jwtToken = new JwtToken();
  // const appToken =await jwtToken.getAppToken()

  return callAPI({
    url,
    method: "GET",
    token: true,
    serverToken: `${appToken}`,
  });
}

export async function getDetaildevice(token:any, guid: any) {
  // const jwtToken = new JwtToken();
  // const appToken = await jwtToken.getAppToken()
  
  const url = `${ROOT_API}/${API_VERSION}/devices/guid/${guid}`;
  
  // console.log(appToken);
  
  return callAPI({
    url,
    method: "GET",
    token: true,
    serverToken: `${appToken}`,
  });
}

export async function addDevice(token:any, data: any) {
  const url = `${ROOT_API}/${API_VERSION}/devices/create`;
  
  // console.log('data ===>>', data);
  
  const jwtToken = new JwtToken();
  const appToken = await jwtToken.getAppToken()
  // const appToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWlkIjoiVVNFUi04MDQ4MTMwYi00ODQ3LTQwNGEtOWI2Yy01NmE2OTU4YTk0YjMtMjAyNCIsImd1aWRBcGxpY2F0aW9uIjoiUFJPSkVDVC1hMTY0N2NkNC03NzIwLTQ2MTMtOGJjZi1jODM3YzQ1MjljODAtMjAyNCIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnlHdWlkIjoiQ09NUEFOWS01OTQ2MzMwNS0wYWJlLTRjNjQtYTRmNS01MzM1Mjc5NTZlNDMtMjAyNCIsImlhdCI6MTcxNjQ0NDE2NiwiZXhwIjoxNzE3MDQ4OTY2fQ.9XxyyIkAmFHAD_Wxi5EQFYd0XRmWqv7zbrT6jxCu5cA'
  // console.log(appToken);

  return callAPI({
    url,
    method: "POST",
    token: true,
    serverToken: `${appToken}`,
    data: data
  });
}

export async function updateDevice(token:any, deviceGuid: any, data: any) {
  const url = `${ROOT_API}/${API_VERSION}/devices/update/${deviceGuid}`;
  
  // const jwtToken = new JwtToken();
  // const appToken = await jwtToken.getAppToken()
  // const appToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWlkIjoiVVNFUi04MDQ4MTMwYi00ODQ3LTQwNGEtOWI2Yy01NmE2OTU4YTk0YjMtMjAyNCIsImd1aWRBcGxpY2F0aW9uIjoiUFJPSkVDVC1hMTY0N2NkNC03NzIwLTQ2MTMtOGJjZi1jODM3YzQ1MjljODAtMjAyNCIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnlHdWlkIjoiQ09NUEFOWS01OTQ2MzMwNS0wYWJlLTRjNjQtYTRmNS01MzM1Mjc5NTZlNDMtMjAyNCIsImlhdCI6MTcxNjQ0NDE2NiwiZXhwIjoxNzE3MDQ4OTY2fQ.9XxyyIkAmFHAD_Wxi5EQFYd0XRmWqv7zbrT6jxCu5cA'
  // console.log(appToken);

  return callAPI({
    url,
    method: "PUT",
    token: true,
    serverToken: `${appToken}`,
    data: data
  });
}

export async function deletDevice(token:any, guidDevice: any) {
  const url = `${ROOT_API}/${API_VERSION}/devices/delete/${guidDevice}`;
  
  console.log('guidDevice ===>>', guidDevice);  
  // const jwtToken = new JwtToken();
  // const appToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJndWlkIjoiVVNFUi04MDQ4MTMwYi00ODQ3LTQwNGEtOWI2Yy01NmE2OTU4YTk0YjMtMjAyNCIsImd1aWRBcGxpY2F0aW9uIjoiUFJPSkVDVC1hMTY0N2NkNC03NzIwLTQ2MTMtOGJjZi1jODM3YzQ1MjljODAtMjAyNCIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnlHdWlkIjoiQ09NUEFOWS01OTQ2MzMwNS0wYWJlLTRjNjQtYTRmNS01MzM1Mjc5NTZlNDMtMjAyNCIsImlhdCI6MTcxNjQ0NDE2NiwiZXhwIjoxNzE3MDQ4OTY2fQ.9XxyyIkAmFHAD_Wxi5EQFYd0XRmWqv7zbrT6jxCu5cA'
  // console.log(appToken);

  return callAPI({
    url,
    method: "DELETE",
    token: true,
    serverToken: `${appToken}`,
  });
}

export async function getHistory(token: any) {
  const url = `${ROOT_API}/${API_VERSION}/history/device/POWERCAM-P001?page=1&limit=10`;
  // const jwtToken = new JwtToken();
  // const appToken =await jwtToken.getAppToken()
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
