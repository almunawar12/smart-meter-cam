import { jwtDecode } from "jwt-decode";


// Define a custom JWT payload type
interface CustomJwtPayload {
  companyGuid?: string;
  [key: string]: any; // Include other properties as needed
}

class JwtToken {

  async getCompanyGuid(): Promise<string | null> {
    const userToken = localStorage.getItem('userToken');

    if (!userToken) {
      return null;
    }

    const decoded: CustomJwtPayload = jwtDecode(userToken);
    return decoded.companyGuid || null;
  }

  async getUserGuid(): Promise<string | null> {
    const userToken = localStorage.getItem('userToken');

    if (!userToken) {
      return null;
    }

    const decoded: CustomJwtPayload = jwtDecode(userToken);
    return decoded.guid || null;
  }

  async getAppToken (){
    const appToken = localStorage.getItem('appToken');
    return appToken;
  }
  async getuserToken (){
    const userToken = localStorage.getItem('userToken');
    return userToken;
  }
}

export default JwtToken;
