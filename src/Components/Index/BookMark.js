import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BookMarkContent from "./BookMarkComtenent";
/*


*/
const BookMark = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [mainClub, setMainClub] = useState([]);
  const [subClub, setSubClub] = useState([]);
  const [elseClub, setElseClub] = useState([]);

  // 처음 페이지가 로드될 때 즐겨찾기를 불러옴
  useEffect(() => {
    const dbId = localStorage.getItem("user_db_id");
    axios.get(`http://localhost:4000/auth/favorites/${dbId}`).then((res) => {
      console.log(res.data);
      setMainClub(res.data);
    });
  }, []);

  // 카테고리 클릭 시
  const onClickCategory = (e) => {
    if (e === 0) setSelectedCategory(0);
    if (e === 1) setSelectedCategory(1);
    if (e === 2) setSelectedCategory(2);
  };

  return (
    <Container>
      <Title>즐겨찾기</Title>
      <Category>
        <CategoryItem
          onClick={(e) => {
            onClickCategory(0);
          }}
          select={selectedCategory}
          index="0"
        >
          중앙동아리
        </CategoryItem>
        <CategoryItem
          onClick={(e) => {
            onClickCategory(1);
          }}
          select={selectedCategory}
          index="1"
        >
          단과대 동아리 / 학회
        </CategoryItem>
        <CategoryItem
          onClick={(e) => {
            onClickCategory(2);
          }}
          select={selectedCategory}
          index="2"
        >
          소모임
        </CategoryItem>
      </Category>
      <List>
        <ListItem />
        <BookMarkContent
          type={selectedCategory}
          mainClub={mainClub}
          subClub={subClub}
          elseClub={elseClub}
        />
      </List>
    </Container>
  );
};

export default BookMark;

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
`;

const Category = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 60px;
`;

const CategoryItem = styled.div`
  width: 33.3%;
  height: 60px;
  line-height: 60px;
  float: left;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  ${(props) => {
    if (props.select === parseInt(props.index)) {
      return `
        background-color: black;
        color: white;
      `;
    } else {
      return `
      background-color: white;
        color: black;
      `;
    }
  }}
`;
const Title = styled.div`
  width: 100%;
  height: 150px;
  line-height: 150px;
  /* background-color: #FCE9C5; */
  margin: 20px 0px 0px 0px;
  text-align: center;
  vertical-align: middle;
  font-size: 40px;
  font-weight: 800;
`;

const List = styled.div`
  width: 90%;
  height: 300px;
  background-color: grey;
  margin: 20px auto;
`;

const ListItem = styled.div`
  width: 20%;
`;
