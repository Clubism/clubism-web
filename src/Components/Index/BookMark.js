import React, { useState } from "react";
import styled from "styled-components";

const BookMark = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

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
        <ListItem>공고 불러오는거 만들어주세요^~^</ListItem>
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
