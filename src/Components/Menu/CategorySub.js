import React, { useState, useEffect } from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const CategorySub = (props) => {
  const [ClubList, setClubList] = useState([]);

  //세부 category 불러오기
  useEffect(() => {
    fetch("dummy/subclubrecruitlist.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setClubList(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const onclickCategory = (e) => {
    if (e.target.innerText === "전체보기") window.location.replace("/subclub");
    else if (e.target.innerText === "국제인문학부")
      window.location.replace("/subclub/liberalarts");
    else if (e.target.innerText === "사회과학부")
      window.location.replace("/subclub/sdoss");
    else if (e.target.innerText === "경제학부")
      window.location.replace("/subclub/econ");
    else if (e.target.innerText === "공학부")
      window.location.replace("/subclub/eng");
    else if (e.target.innerText === "자연과학부")
      window.location.replace("/subclub/science");
    else if (e.target.innerText === "지식융합미디어학부")
      window.location.replace("/subclub/smas");
    else if (e.target.innerText === "경영학부")
      window.location.replace("/subclub/sbs");
  };

  return (
    <div>
      <Container>
        <SubContainer>
          <Category>
            <CategoryTitle>
              <CategoryItem onClick={onclickCategory}>전체보기</CategoryItem>
              <Empty />
              <CategoryTitle>
                <CategoryItem onClick={onclickCategory}>경영학부</CategoryItem>
                <List>
                  <ListTitle>
                    <ListItem>경영학전공</ListItem>
                  </ListTitle>
                  {/* {ClubList.filter((data) => data.category === "경영학부").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )} */}
                </List>
              </CategoryTitle>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem onClick={onclickCategory}>
                국제인문학부
              </CategoryItem>
              <List>
                <ListTitle>
                  <ListItem>국어국문학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>사학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>철학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>종교학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>영미어문전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>미국문화전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>유럽문화전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>중국문화전공</ListItem>
                </ListTitle>
                {/* {ClubList.filter(
                    (data) => data.category === "국제인문학부"
                  ).map((item, index) => (
                    <ListTitle key={index}>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  ))} */}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem onClick={onclickCategory}>사회과학부</CategoryItem>
              <List>
                <ListTitle>
                  <ListItem>사회학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>정치외교학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>심리학전공</ListItem>
                </ListTitle>
                {/* {ClubList.filter((data) => data.category === "사회과학부").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )} */}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem onClick={onclickCategory}>경제학부</CategoryItem>
              <List>
                <ListTitle>
                  <ListItem>경제학전공</ListItem>
                </ListTitle>
                {/* {ClubList.filter((data) => data.category === "경제학부").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )} */}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem onClick={onclickCategory}>공학부</CategoryItem>
              <List>
                <ListTitle>
                  <ListItem>컴퓨터공학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>전자공학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>화공생명공학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>기계공학전공</ListItem>
                </ListTitle>
                {/* {ClubList.filter((data) => data.category === "공학부").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )} */}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem onClick={onclickCategory}>자연과학부</CategoryItem>
              <List>
                <ListTitle>
                  <ListItem>수학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>물리학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>화학전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>생명과학전공</ListItem>
                </ListTitle>
                {/* {ClubList.filter((data) => data.category === "자연과학부").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )} */}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem onClick={onclickCategory}>
                지식융합미디어학부
              </CategoryItem>
              <List>
                <ListTitle>
                  <ListItem>지식융합미디어학부</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>신문방송학 전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>미디어&엔터테인먼트 전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>아트&테크놀로지 전공</ListItem>
                </ListTitle>
                <ListTitle>
                  <ListItem>글로벌 한국학 전공</ListItem>
                </ListTitle>
                {/* {ClubList.filter((data) => data.category === "지융미학부").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )} */}
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
  top: 70px;
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

const Category = styled.div`
  margin: 10px auto;
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

const List = styled.div`
  list-style: none;
  width: 150px;
`;

const ListTitle = styled.div`
  width: 150px;
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;

const ListItem = styled.div`
  padding: 8px 0;
  font-weight: normal;
  cursor: pointer;
  &:hover {
    color: #009bd9;
  }
`;

const CloseButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 320px;
`;

const Empty = styled.div`
  margin: 10px 0;
`;
