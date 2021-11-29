import React, { useRef } from "react";
import "./style/IndexTemplate.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Logout from "../Pages/Logout";

const IndexTemplate = ({ children, history }) => {
  const isLoggedIn = useRef(false);

  //console.log(children);
  //useEffect(()=>{
  localStorage.getItem("user_id") !== undefined
    ? (isLoggedIn.current = true)
    : (isLoggedIn.current = false);
  // }, []);

  const onClickLogout = () => {
    axios
      .get("localhost:4000/auth/logout", { withCredentials: true })
      .then((res) => {
        localStorage.clear();
        history.push("/");
      });
  };

  // console.log('isLoggedIn : ', isLoggedIn.current);
  return (
    <Container>
      <Title>
        <TitleItem className="link" to="/">
          LOGO club
          <TitleItem2>ism</TitleItem2>
        </TitleItem>
      </Title>
      <Menu>
        <MenuItem>
          <MenuItemLink to="/subClub">단과대 동아리 / 학회</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink to="/mainClub">중앙 동아리</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink to="/elseClub">소모임</MenuItemLink>
        </MenuItem>
      </Menu>
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
        <div
          className="logout"
          onClick={() => {
            onClickLogout();
          }}
        >
          {/* <Link className="logout link" to="/logout"> */}
          logout
          {/* </Link> */}
        </div>
      </div>
      {children}
    </Container>
  );
};

export default IndexTemplate;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0px 80px;
`;

const Title = styled.div`
  width: 35%;
  height: inherit;
  float: left;
  padding: 0 0 0 13%;
  display: table;
`;

const TitleItem = styled(Link)`
  font-family: "BebasNeue-Regular";
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0.5px;
  display: table-cell;
  vertical-align: middle;
  color: #023b6d;
`;

const TitleItem2 = styled.span`
  color: #009bd9;
  font-family: "BebasNeue-Regular";
`;

const Menu = styled.div`
  width: 40%;
  height: inherit;
  color: blue;
  float: left;
`;

const MenuItem = styled.div`
  height: inherit;
  float: left;
  padding: 28px 20px;
`;

const MenuItemLink = styled(Link)`
  text-decoration-line: none;
  color: #023b6d;
  font-size: 16px;
  font-weight: 1000;
`;
