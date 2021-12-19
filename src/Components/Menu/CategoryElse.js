import React from "react";
import { Link } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const CategoryElse = (props) => {
  // const onclickCategory = (e) => {
  //   if (e.target.innerText === "전체보기") window.location.replace("/elseclub");
  //   else if (e.target.innerText === "스터디")
  //     window.location.replace("/elseclub/study");
  //   else if (e.target.innerText === "프로젝트")
  //     window.location.replace("/elseclub/project");
  //   else if (e.target.innerText === "구독")
  //     window.location.replace("/elseclub/subscribe");
  // };

  return (
    <div>
      <Container>
        <SubContainer>
          <Category>
            <CategoryTitle>
              <CategoryLink to="/elseclub" onClick={props.close}>
              <CategoryItem >전체보기</CategoryItem>
              </CategoryLink>
            </CategoryTitle>
            <CategoryTitle>
            <CategoryLink to="/elseclub/study"  onClick={props.close}>
              <CategoryItem>스터디</CategoryItem>
              </CategoryLink>
            </CategoryTitle>
            <CategoryTitle>
            <CategoryLink to="/elseclub/project"  onClick={props.close}>
              <CategoryItem>프로젝트</CategoryItem>
              </CategoryLink>
            </CategoryTitle>
            <CategoryTitle>
            <CategoryLink to="/elseclub/subscribe"  onClick={props.close}>
              <CategoryItem>구독</CategoryItem>
              </CategoryLink>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem></CategoryItem>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem></CategoryItem>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem></CategoryItem>
            </CategoryTitle>
          </Category>
        </SubContainer>
        <CloseButton onClick={props.close}>
          <MdClose size="25" color="black" />
        </CloseButton>
      </Container>
    </div>
  );
};
export default CategoryElse;

const Container = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  top: 70px;
  left: 0px;
  right: 0;
  background-color: white;
  z-index: 100003;
  box-shadow: 0 2px 5px -2px gray;
  padding-bottom: 35px;
`;

const SubContainer = styled.div`
  width: 100%;
  position: relative;
  max-width: 1190px;
  margin: 0 auto;
`;

const Category = styled.div`
  margin: 10px auto;
`;

const CategoryLink = styled(Link)`
  all: unset;
`
const CategoryTitle = styled.div`
  float: left;
  width: 170px;
  font-size: 16px;
  margin: 0;
`;

const CategoryItem = styled.div`
  padding: 20px 0 17px;
  font-weight: 700;
  cursor: pointer;
`;

const CloseButton = styled.span`
  cursor: pointer;
  position: relative;
  top: 18px;
`;
