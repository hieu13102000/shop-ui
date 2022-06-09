import { message } from "antd";
import http from "../http-common";
import TypesAuthData from "../Types/Auth";
import { useLocalStorage} from "./useLocalStorage";

const login = (username: string,password: string) => {
  http.get<Array<TypesAuthData>>("/user")
      .then((response: any) => {
        const data = response.data;
        // eslint-disable-next-line array-callback-return
        data.find((user:any) => {
          if (user.username === username && user.password === password){
          useLocalStorage("UserAdmin",user)
          window.location.reload();
        }
        // else
        // message.error('sai tên đăng nhập hoặc mật khẩu');
      })
        
      })
      .catch((e: Error) => {
        console.log(e);
      });
};
const  AuthService = {
  login
};
export default  AuthService;