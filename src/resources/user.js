import { request } from "../helpers/request";

export default {
  login(email, password) {
    return request({
      url: "/user/login",
      method: "POST",
      data: {
        email,
        password,
      },
      onErrorCallBack: () => { },
    });
  },
  register(name, userName, email, password, phone) {
    return request({
      url: "/user/register",
      method: "POST",
      data: {
        name,
        userName,
        phone,
        email,
        password,
      },
      onErrorCallBack: () => { },
    });
  },
  recover(email) {
    return request({
      url: "/user/reset",
      method: "POST",
      data: {
        email,
      },
      onErrorCallBack: () => { },
    });
  },
  loadStart(token) {
    return request({
      url: "/user/load",
      method: "GET",
      token,
    });
  },
};
