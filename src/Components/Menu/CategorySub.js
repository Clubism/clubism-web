import React, { useState, useEffect } from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const CategorySub = (props) => {
    const [ClubList, setClubList] = useState([]);

      //큰틀 category list 불러오기
      var fetchURL;
      if (props.category === undefined)
          fetchURL = "";
      else if ((props.category !== undefined) && (props.name === undefined))
          fetchURL = "../"
      else
          fetchURL = "../../"
  
      //세부 category 불러오기
      useEffect(() => {
          fetch(fetchURL + "dummy/subclubrecruitlist.json")
              .then((res) => res.json())
              .then(
                  (result) => {
                      setClubList(result);
                  },
                  (error) => {
                      console.log(error);
                  }
              );
      }, [fetchURL]);
  
  return (
    <div>
      <Container>
        <SubContainer>
          <Category>
            <CategoryTitle>
              <CategoryItem>전체보기</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>국제인문학부</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "국제인문학부").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>사회과학부</CategoryItem>
              <List>
                {ClubList.filter(
                  (data) => data.category === "사회과학부"
                ).map((item, index) => (
                  <ListTitle>
                    <ListItem>{item.name}</ListItem>
                  </ListTitle>
                ))}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>경제학부</CategoryItem>
              <List>
                {ClubList.filter(
                  (data) => data.category === "경제학부"
                ).map((item, index) => (
                  <ListTitle>
                    <ListItem>{item.name}</ListItem>
                  </ListTitle>
                ))}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>공학부</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "공학부").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>경영학부</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "경영학부").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>자연과학부</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "자연과학부").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>지융미학부</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "지융미학부").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )}
              </List>
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
export default CategorySub;

const Container = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 80px;
  left: 0px;
  right: 0;
  background-color: white;
  z-index: 100003;
  box-shadow: 0 2px 5px -2px gray;
  padding-bottom: 15px;
`;

const SubContainer = styled.div`
  width: 100%;
  position: relative;
  max-width: 1190px;
  margin: 0 auto;
`;

const Category = styled.ul`
  width: 100%;
  list-style: none;
  margin: 10px auto;
`;

const CategoryTitle = styled.li`
  float: left;
  width: 170px;
  font-size: 16px;
  margin: 0;
`;

const CategoryItem = styled.div`
  padding: 20px 0 17px;
`;

const List = styled.ul`
  list-style: none;
  width: 150px;
`;

const ListTitle = styled.li`
  width: 150px;
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;

const ListItem = styled.div`
  padding: 8px 0;
  font-weight: normal;
  &:hover {
    color: #009bd9;
  }
`;

const CloseButton = styled.span`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 25px;
`;