import React, { useEffect, useRef, useState } from "react";
import "./style/IndexTemplate.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const IndexTemplate = ({children}) => {
  const isLoggedIn = useRef(false);
  
  //console.log(children);
  useEffect(()=>{
    axios.get("http://localhost:4000/auth/userSession", {withCredentials : true}).then(res=>{
      //console.log(res);
      console.log(res.data.isLoggedIn);
      isLoggedIn.current = res.data.isLoggedIn;
      console.log(isLoggedIn.current);
    });
  }, []);
  
  

  // console.log('isLoggedIn : ', isLoggedIn.current);
  return (
    <div className="IndexTemplate">
      <div className="topBar">
        <div className="ghost" />
        <div className="logo">
          <Link className="link" to="/">
            clubism
          </Link>
        </div>
        <div className={isLoggedIn.current ? "auth-hide" : "auth-show"}>
          <div className="login">
            <Link className="link" to="/login">
              로그인&nbsp;
            </Link>
          </div>
          <div className="login">|&nbsp; </div>
          <div className="login">
            <Link className="link" to="/signup">
              회원가입
            </Link>
          </div>
        </div>
        <div className={isLoggedIn.current ? "auth-show" : "auth-hide"}>
          <div className="mypage">
            <Link className="mypage link" to="/mypage">
              mypage
            </Link>
          </div>
          <span> | </span>
          <div className="logout">
            <Link className="logout link" to="/logout">
              logout
            </Link>
          </div>
        </div>
      </div>
      <div className="CategoryBar">
        <div className="CategoryBarContainer">
          <div className="mainClub">
            <Link className="link" to="/mainClub">
              중앙 동아리
            </Link>
          </div>
          <div className="semiClub">
            <Link className="link" to="/subClub">
              단과대 동아리 / 학회
            </Link>
          </div>
          <div className="elseClub">
            <Link className="link" to="/elseClub">
              소모임
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default IndexTemplate;
