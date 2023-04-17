import { getAccessToken } from "./CookiesService";

export default function GuardService() {
  const token = getAccessToken()
  if (token) {
    const tokenExpirationDate = new Date(JSON.parse(atob(token.split('.')[1])).exp * 1000);
    const now = new Date();
    return now < tokenExpirationDate ? true : false;
  }
  return false;
}

