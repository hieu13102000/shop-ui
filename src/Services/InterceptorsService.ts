import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { getAccessToken, getRefreshToken, setAccessToken } from "./CookiesService";

// Tạo instance axios mới
const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });
  
  // Thêm interceptor để thêm token vào header của mỗi request
  instance.interceptors.request.use(
    (config: AxiosRequestConfig<any> & { headers?: AxiosRequestHeaders }) => {
      const accessToken = getAccessToken();
      if (accessToken) {
        config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  // xử lý các phản hồi từ máy chủ
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      const refreshToken = getRefreshToken();
  
      if (
        refreshToken &&
        error.response.status === 401 &&
        !originalRequest._retry
        // Biểu thức !originalRequest._retry kiểm tra xem yêu cầu gửi lần đầu 
        // tiên (originalRequest) đã được thực hiện lại hay chưa.
  
        // Khi một yêu cầu gửi lần đầu tiên gặp lỗi và interceptor này được kích 
        // hoạt, biến _retry trong originalRequest được gán giá trị true, để đánh dấu
        //  rằng yêu cầu đã được thực hiện lại một lần.
  
        // Việc kiểm tra _retry giúp tránh việc yêu cầu bị lặp đi lặp lại nếu xảy
        //  ra lỗi và interceptor được kích hoạt trong lần gửi thực hiện lại. Vì thế, nếu _retry
        //   đã được gán giá trị true thì interceptor sẽ không thực hiện lại yêu cầu nữa, mà sẽ trả 
        //   về lỗi ban đầu.
      ) {
        originalRequest._retry = true;
        const response = await instance.post("/refresh-token", {
          refresh_token: refreshToken,
        });
        setAccessToken(response.data.accessToken);
        return axios(originalRequest);
      }
  
      return Promise.reject(error);
    }
  );
  const Interceptors = {
    instance
  };
  export default Interceptors;
  