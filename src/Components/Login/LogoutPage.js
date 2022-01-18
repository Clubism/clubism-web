import React from 'react';
import axios from "../../Assets/axios";

const LogoutPage = ({history})=>{
  axios.get('auth/logout', {withCredentials : true})
  .then((res)=>{
    localStorage.clear();
    history.push("/");
  });
  return (
    <div />
  )
}

export default LogoutPage;