import React, { useCallback } from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions/category";

const CategoryElse = (props) => {
  const ElseClubCategories = [
    { category: "전체보기", category_path: "/all" },
    { category: "스터디", category_path: "/study" },
    { category: "프로젝트", category_path: "/project" },
    { category: "구독", category_path: "/subscribe" }
  ];

  const dispatch = useDispatch();

  const setCategory = useCallback(
    (data) => {
      dispatch(actions.setCatetory(data));
    },
    [dispatch]
  );

  return (
    <div>
      <Container>
        <SubContainer>
          <Category>
            {ElseClubCategories.map((category, index) => {
              return (
                <CategoryTitle key={category.category}>
                  <CategoryItem>
                    <CategoryLink
                      style={{ textDecoration: "none" }}
                      to={"/elseClub" + category.category_path}
                      onClick={(e) => {
                        // window.location.replace("/elseClub"+category.category_path);
                        props.close();
                        setCategory(category.category);
                      }}
                    >
                      {category.category}
                    </CategoryLink>
                  </CategoryItem>
                </CategoryTitle>
              );
            })}
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
`;
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
