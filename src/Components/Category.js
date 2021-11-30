import React, { useState, useEffect } from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import styled from "styled-components";

const MenuCategory = (props) => {
  const [ClubList, setClubList] = useState([]);
  // const [ClubListFilter, setClubListFilter] = useState([]);
  const [mainCategory, setMainCategory] = useState([]);
  const [hoverItem, setHoverItem] = useState("");

  //큰틀 category list 불러오기
  var fetchURL;
  if (props.category === undefined) fetchURL = "";
  else if (props.category !== undefined && props.name === undefined)
    fetchURL = "../";
  else fetchURL = "../../";

  useEffect(() => {
    fetch(fetchURL + "dummy/maincategorylist.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setMainCategory(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [fetchURL]);

  //세부 category 불러오기
  useEffect(() => {
    fetch(fetchURL + "dummy/clublist.json")
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

  //큰틀 category에 세부 category subNav배열에 할당
  var newCategoryList = [];
  newCategoryList = JSON.parse(JSON.stringify(mainCategory));
  for (var i = 0; i < newCategoryList.length; i++) {
    for (var j = 0; j < ClubList.length; j++) {
      if (ClubList[j].category === newCategoryList[i].title) {
        newCategoryList[i].subNav.push({
          title: ClubList[j].name,
          itemId: newCategoryList[i].itemId + "/" + ClubList[j].label
        });
      }
    }
  }
  const handleHover = (e) => {
    setHoverItem(e.target.innerText);
  };

  return (
    <div>
      <Container>
        <SubContainer1>
          {mainCategory.map((item, index) => (
            <SubDiv1 key={index} onMouseEnter={handleHover}>
              <SubSpan1>{item.title}</SubSpan1>
            </SubDiv1>
          ))}
        </SubContainer1>
        <SubContainer2>
          {ClubList.filter((data) => data.category === hoverItem).map(
            (item) => (
              <div>{item.name}</div>
            )
          )}
        </SubContainer2>
      </Container>
    </div>
  );
};
export default MenuCategory;

const Container = styled.div`
  height: 300px;
  width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 10px 25px 10px 25px;
  display: flex;
  box-shadow: 0 4px 8px -1px gray;
  border-radius: 5px;
`;

const SubContainer1 = styled.div`
  height: 280px;
  width: 200px;
  margin-right: 50px;
  background-color: white;
  border-right: 2px solid #fafafa;
`;

const SubDiv1 = styled.div`
  padding: 8px;
  margin-right: 25px;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;
const SubSpan1 = styled.span``;

const SubContainer2 = styled.div`
  height: 280px;
  width: 350px;
  background-color: white;
`;
