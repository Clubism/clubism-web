import React from 'react';
import axios from 'axios';

const LogoutPage = ({history})=>{
  axios.get('localhost:4000/auth/logout', {withCredentials : true})
  .then((res)=>{
    localStorage.clear();
    history.push("/");
  });
  return (
    <div />
  )
}

export default LogoutPage;