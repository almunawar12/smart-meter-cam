import callAPI from "@/config/api";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function setLogin(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/users/login`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function setRegister(data: any) {
  const url = `${ROOT_API}/${API_VERSION}/users/register`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function setVerify(data: any) {
  const url = `${ROOT_API}/${API_VERSION}/users/activate`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}