import React, { useRef } from "react";
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

  isLoggedIn.current = false;
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
        <TitleItem to="/">
          LOGO club
          <TitleItem2>ism</TitleItem2>
        </TitleItem>
      </Title>
      <Menu>
      <MenuItem>
          <MenuItemLink to="/mainClub">중앙 동아리</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink to="/subClub">단과대 동아리 / 학회</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink to="/elseClub">소모임</MenuItemLink>
        </MenuItem>
      </Menu>
      <UserNotExist toggle={isLoggedIn.current}>
        <UserItem>
          <UserItemLink to="/login">
            로그인&nbsp;
          </UserItemLink>
        </UserItem>
        <UserItemBar>|</UserItemBar>
        <UserItem>
          <UserItemLink to="/signup">
            &nbsp;회원가입
          </UserItemLink>
        </UserItem>
      </UserNotExist>
      <UserExist toggle={isLoggedIn.current}>
        <UserItem>
          <UserItemLink to="/mypage">
            mypage&nbsp;
          </UserItemLink>
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
  );
};

export default IndexTemplate;

const Container = styled.div`
  position:fixed;
  top:0;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0px 80px;
  box-shadow: 0 2px 10px -2px gray;
  background-color:white;
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
  &:hover{
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

const UserExist = styled.div`
  width: 30%;
  height: inherit;
  color: blue;
  float: left;
  ${props=>{
    console.log(props);
    if(!props.toggle){
      return `
        display: none;
      `
    }
    else{
      return`
        display: "";
      `
    }
  }}
`;

const UserNotExist = styled.div`
  width: 30%;
  height: inherit;
  color: blue;
  float: left;
  ${props=>{
    if(props.toggle){
      return `
        display: none;
      `
    }
    else{
      return`
        display: "";
      `
    }
  }}
`;

const UserItem = styled.div`
  height: inherit;
  float: left;
  padding: 28px 20px;
`;

const UserItemBar = styled.div`
  height: inherit;
  float: left;
  padding: 28px 0px;
  color: #023b6d;
`;

const UserItemLink = styled(Link)`
  text-decoration-line: none;
  color: #023b6d;
  font-size: 16px;
  font-weight: 1000;
`;

const Logout = styled.span`
  text-decoration-line: none;
  color: #023b6d;
  font-size: 16px;
  font-weight: 1000;
  cursor: pointer;
`;