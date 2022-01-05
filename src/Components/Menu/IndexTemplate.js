import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import CategoryMain from "./CategoryMain";
import CategorySub from "./CategorySub";
import CategoryElse from "./CategoryElse";
//import {useSelector} from 'react-redux';

// import Logout from "../Pages/Logout";

const IndexTemplate = () => {
  const isLoggedIn = useRef(false);
  //const history = useHistory();
  const [category1, setCategory1] = useState(false);
  const [category2, setCategory2] = useState(false);
  const [category3, setCategory3] = useState(false);

  //useEffect(()=>{
    
   //}, []);

  //isLoggedIn.current = useSelector(state => state.isLogegdIn);

localStorage.getItem("user_id") !== null
    ? (isLoggedIn.current = true)
    : (isLoggedIn.current = false);
  console.log('isLoggedIn : ', isLoggedIn.current);


  const onClickLogout = () => {
    axios
      .get("http://localhost:4000/auth/logout", { withCredentials: true })
      .then((res) => {
        console.log('clicked');
        localStorage.clear();
        isLoggedIn.current = false;
        //history.push("/");
        window.location.replace("/")
      });
  };

  const onClickCategory = (e) => {
    setCategory1(false);
    setCategory2(false);
    setCategory3(false);
    if (e.target.innerText === "중앙 동아리") setCategory1(!category1);
    else if (e.target.innerText === "단과대 동아리 / 학회")
      setCategory2(!category2);
    else if (e.target.innerText === "소모임") setCategory3(!category3);
  };

  const onClickClose = (e) => {
    setCategory1(false);
    setCategory2(false);
    setCategory3(false);
  };

  const onClickTitle = (e) => {
    window.location.replace("/");
  };

  return (
    <div>
      <Container>
        <Title>
          <TitleItem onClick={onClickTitle}>
            club
            <TitleItem2>ism</TitleItem2>
          </TitleItem>
        </Title>
        <Menu>
          <MenuItem>
            <MenuItemLink onClick={onClickCategory}>중앙 동아리</MenuItemLink>
            <MenuBar1 toggle={category1} />
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={onClickCategory}>
              단과대 동아리 / 학회
            </MenuItemLink>
            <MenuBar2 toggle={category2} />
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={onClickCategory}>소모임</MenuItemLink>
            <MenuBar3 toggle={category3} />
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
            <UserItemLink to="/mypage">마이페이지&nbsp;</UserItemLink>
          </UserItem>
          <UserItemBar>|</UserItemBar>
          <UserItem
            onClick={() => {
              onClickLogout();
            }}
          >
            {/* <Link className="logout link" to="/logout"> */}
            <Logout>&nbsp;로그아웃</Logout>
            {/* </Link> */}
          </UserItem>
        </UserExist>
      </Container>
      <Category1 toggle={category1}>
        <CategoryMain close={onClickClose} />
      </Category1>
      <Category2 toggle={category2}>
        <CategorySub close={onClickClose} />
      </Category2>
      <Category3 toggle={category3}>
        <CategoryElse close={onClickClose} />
      </Category3>
    </div>
  );
};

export default IndexTemplate;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 100003;
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
  width: 190px;
  height: inherit;
  float: left;
  display: table;
  margin: 0 10% 0 11%;
  cursor: pointer;
`;

const TitleItem = styled.div`
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
  padding: 24px 30px;
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
  width: 200px;
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
  font-weight: 500;
  cursor: pointer;
`;

const Category1 = styled.div`
  display: ${(props) => (props.toggle ? "" : "none")};
`;

const Category2 = styled.div`
  display: ${(props) => (props.toggle ? "" : "none")};
`;

const Category3 = styled.div`
  display: ${(props) => (props.toggle ? "" : "none")};
`;

const MenuBar1 = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 132px;
  height: 4px;
  background-color: #023b6d;
  display: ${(props) => (props.toggle ? "" : "none")};
`;

const MenuBar2 = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 188px;
  height: 4px;
  background-color: #023b6d;
  display: ${(props) => (props.toggle ? "" : "none")};
`;

const MenuBar3 = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 102px;
  height: 4px;
  background-color: #023b6d;
  display: ${(props) => (props.toggle ? "" : "none")};
`;
