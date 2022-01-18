// axios의 base url, token 관리 등을 설정하는 코드

import axios from "axios";

const instance = axios.create({
  //이 경로가 제일 앞에 붙음
  baseURL: "http://localhost:4000/",
});

// request 하기 전에 access token을 가져와서 헤더에 넣어줌
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    config.headers.Authorization = null;
  }

  return config;
});

// response를 받고 access token이 만료됐으면 refresh token을 보내서 다시 acccess token을 발급 받음
instance.interceptors.response.use((res) => {
    return res;
  }, (err) => {
    const { config, response: { status },} = err;

    const originalRequest = config;

    if (status === 401) {
      const refreshToken = sessionStorage.getItem('refreshToken');
      axios.get("http://localhost")
      axios({
        method: 'get',
        url: "http://localhost:4000/auth/refresh",
        headers: `Bearer ${ refreshToken }`,
      }).then((res) => {
        const accessToken = res.data.accessToken;
        sessionStorage.setItem('accessToken', accessToken);
        return axios(originalRequest);
      });
    }
    return Promise.reject(err);
  },
);

export default instance;