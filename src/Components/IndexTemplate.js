import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuCategory from "./Category";
// import Logout from "../Pages/Logout";

const IndexTemplate = ({ children, history }) => {
  const isLoggedIn = useRef(false);
  const [category1, setCategory1] = useState(false);

  //useEffect(()=>{
  localStorage.getItem("user_id") !== undefined
    ? (isLoggedIn.current = true)
    : (isLoggedIn.current = false);
  // }, []);

  isLoggedIn.current = false;

  const onClickLogout = () => {
    axios
      .get("localhost:4000/auth/logout", { withCredentials: true })
      .then((res) => {
        localStorage.clear();
        history.push("/");
      });
  };

  const onClickCategory = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "중앙 동아리") setCategory1(!category1);
  };

  const onClickClose = (e) => {
    setCategory1(false);
  };

  return (
    <div>
      <Container>
        <Title>
          <TitleItem to="/">
            LOGO club
            <TitleItem2>ism</TitleItem2>
          </TitleItem>
        </Title>
        <Menu>
          <MenuItem>
            <MenuItemLink onClick={onClickCategory}>중앙 동아리</MenuItemLink>
            <MenuBar1 toggle={category1} />
          </MenuItem>
          <MenuItem>
            <MenuItemLink>단과대 동아리 / 학회</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>소모임</MenuItemLink>
          </MenuItem>
        </Menu>
        <UserNotExist toggle={isLoggedIn.current}>
          <UserItem>
            <UserItemLink to="/login">로그인&nbsp;</UserItemLink>
          </UserItem>
          <UserItemBar>|</UserItemBar>
          <UserItem>
            <UserItemLink to="/signup">&nbsp;회원가입</UserItemLink>
          </UserItem>
        </UserNotExist>
        <UserExist toggle={isLoggedIn.current}>
          <UserItem>
            <UserItemLink to="/mypage">mypage&nbsp;</UserItemLink>
          </UserItem>
          <UserItemBar>|</UserItemBar>
          <UserItem
            onClick={() => {
              onClickLogout();
            }}
          >
            {/* <Link className="logout link" to="/logout"> */}
            <Logout>&nbsp;logout</Logout>
            {/* </Link> */}
          </UserItem>
        </UserExist>
        {/* {children} */}
      </Container>
      <Category toggle={category1}>
        <MenuCategory close={onClickClose} />
      </Category>
    </div>
  );
};

export default IndexTemplate;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 70px;
  display: flex;
  padding: 0px 80px;
  /* box-shadow: 0 2px 10px -2px gray; */
  border-bottom: 1px solid #e5e5e5;
  background-color: white;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Title = styled.div`
  width: 35%;
  height: inherit;
  float: left;
  padding: 0 0 0 13%;
  display: table;
`;

const TitleItem = styled(Link)`
  text-decoration-line: none;
  font-family: "BebasNeue-Regular";
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0.5px;
  display: table-cell;
  vertical-align: middle;
  color: #023b6d;
  &:hover {
    color: #023b6d;
  }
`;

const TitleItem2 = styled.span`
  color: #009bd9;
  font-family: "BebasNeue-Regular";
`;

const Menu = styled.div`
  width: 40%;
  height: inherit;
  float: left;
`;

const MenuItem = styled.div`
  position: relative;
  height: inherit;
  float: left;
  padding: 24px 20px;
`;

const MenuItemLink = styled.div`
  text-decoration-line: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const UserExist = styled.div`
  width: 30%;
  height: inherit;
  color: blue;
  float: left;
  ${(props) => {
    console.log(props);
    if (!props.toggle) {
      return `
        display: none;
      `;
    } else {
      return `
        display: "";
      `;
    }
  }}
`;

const UserNotExist = styled.div`
  width: 30%;
  height: inherit;
  color: blue;
  float: left;
  ${(props) => {
    if (props.toggle) {
      return `
        display: none;
      `;
    } else {
      return `
        display: "";
      `;
    }
  }}
`;

const UserItem = styled.div`
  height: inherit;
  float: left;
  padding: 24px 20px;
`;

const UserItemBar = styled.div`
  height: inherit;
  float: left;
  padding: 24px 0px;
  color: #023b6d;
`;

const UserItemLink = styled(Link)`
  text-decoration-line: none;
  color: #023b6d;
  font-size: 16px;
  font-weight: 500;
`;

const Logout = styled.span`
  text-decoration-line: none;
  color: #023b6d;
  font-size: 16px;
  font-weight: 1000;
  cursor: pointer;
`;

const Category = styled.div`
  display: ${(props) => (props.toggle ? "" : "none")};
`;

const MenuBar1 = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 110px;
  height: 4px;
  background-color: #023b6d;
  display: ${(props) => (props.toggle ? "" : "none")};
`;
