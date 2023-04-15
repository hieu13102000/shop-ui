import Cookies from 'js-cookie';

export const handleAuthentication = (data: any) => {
  Cookies.set('info_user',JSON.stringify(data));
};

export const removeAuthentication = () => {
  Cookies.remove('info_user');
};

export const getAccessToken = () =>{
  const infoUser = Cookies.get('info_user');
  if (infoUser) {
    return JSON.parse(infoUser).accessToken;
  }
}

export const setAccessToken = (accessToken:string) =>{
  const infoUser = Cookies.get('info_user');
  if (infoUser) {
   const currentInfo = JSON.parse(infoUser);
   currentInfo.accessToken = accessToken
   Cookies.set('info_user',JSON.stringify(currentInfo));
  }
}

export const getRefreshToken = () => {
  const infoUser = Cookies.get('info_user');
  if (infoUser) {
    return JSON.parse(infoUser).refreshToken;
  }
}
