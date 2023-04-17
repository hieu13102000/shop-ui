import { message } from "antd";
import TypesAuthData from "../Types/Auth";

import { handleAuthentication, removeAuthentication, } from "./CookiesService";
import Interceptors from "./InterceptorsService";

const instance = Interceptors.instance

// Sử dụng instance đã tạo để gửi request
const login = async (username: string, password: string) => {
  try {
    const response = await instance.post('/api/auth/signin', { username, password });
    const roles = response.data.roles;
    const hasAdminRole = roles.includes("admin") || roles.includes("superAdmin");
    if(hasAdminRole){
      handleAuthentication(response.data)
    }
    else {
      alert("khon co quyen")
    }
  } catch (error) {
    // handle error
    alert("có lỗi")
  }
};

const Logout = () => {
  removeAuthentication()
}

const AuthService = {
  login,
  Logout
};
export default AuthService;
