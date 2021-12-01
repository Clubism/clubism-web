// import React, { useState, useEffect } from "react";
// import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
// import styled from "styled-components";

// const MenuCategory = (props) => {
//   const [ClubList, setClubList] = useState([]);
//   // const [ClubListFilter, setClubListFilter] = useState([]);
//   const [mainCategory, setMainCategory] = useState([]);
//   const [hoverItem, setHoverItem] = useState("");
//   const [subCategory, setSubCategory] = useState([]);

//   //큰틀 category list 불러오기
//   var fetchURL;
//   if (props.category === undefined) fetchURL = "";
//   else if (props.category !== undefined && props.name === undefined)
//     fetchURL = "../";
//   else fetchURL = "../../";

//   useEffect(() => {
//     fetch(fetchURL + "dummy/maincategorylist.json")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setMainCategory(result);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   }, [fetchURL]);

//   //세부 category 불러오기
//   useEffect(() => {
//     fetch(fetchURL + "dummy/clublist.json")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setClubList(result);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   }, [fetchURL]);

//   const handleHover = (e) => {
//     setHoverItem(e.target.innerText);
//   };

//   //큰틀 category에 세부 category subNav배열에 할당
//   useEffect(() => {
//     setSubCategory(ClubList.filter((data) => data.category === hoverItem));
//     // setSubCategory(
//     //   subCategory.map((item, index) => <SubDiv2>{item.name}</SubDiv2>)
//     // );
//   }, [ClubList, hoverItem]);

//   return (
//     <div>
//       <Container>
//         <SubContainer1>
//           {mainCategory.map((item, index) => (
//             <SubDiv1 key={index} onMouseEnter={handleHover}>
//               <SubSpan1>{item.title}</SubSpan1>
//             </SubDiv1>
//           ))}
//         </SubContainer1>
//         <SubContainer2>
//           {subCategory.map((item) => (
//             <SubDiv2>{item.name}</SubDiv2>
//           ))}
//         </SubContainer2>
//       </Container>
//     </div>
//   );
// };
// export default MenuCategory;

// const Container = styled.div`
//   position: absolute;
//   top: 80px;
//   left: 30%;
//   z-index: 2;
//   height: 300px;
//   width: 600px;
//   margin: 0 auto;
//   background-color: white;
//   padding: 10px 25px 10px 25px;
//   display: flex;
//   box-shadow: 0 4px 8px -1px gray;
//   border-radius: 5px;
// `;

// const SubContainer1 = styled.div`
//   height: 280px;
//   width: 200px;
//   margin-right: 50px;
//   background-color: white;
//   border-right: 2px solid #fafafa;
// `;

// const SubDiv1 = styled.div`
//   padding: 8px;
//   margin-right: 25px;
//   cursor: pointer;
//   &:hover {
//     background-color: #fafafa;
//   }
// `;
// const SubSpan1 = styled.span``;

// const SubContainer2 = styled.div`
//   max-height: 280px;
//   overflow-y: auto;
//   width: 350px;
//   background-color: white;
// `;

// const SubDiv2 = styled.div`
//   float: left;
//   width: 150px;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: #fafafa;
//   }
// `;

//////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const MenuCategory = (props) => {
  const [ClubList, setClubList] = useState([]);

  //큰틀 category list 불러오기
  var fetchURL;
  if (props.category === undefined) fetchURL = "";
  else if (props.category !== undefined && props.name === undefined)
    fetchURL = "../";
  else fetchURL = "../../";

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
              <CategoryItem>봉사분과</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "봉사분과").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>사회교양분과</CategoryItem>
              <List>
                {ClubList.filter(
                  (data) => data.category === "사회교양분과"
                ).map((item, index) => (
                  <ListTitle>
                    <ListItem>{item.name}</ListItem>
                  </ListTitle>
                ))}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>언행예술분과</CategoryItem>
              <List>
                {ClubList.filter(
                  (data) => data.category === "언행예술분과"
                ).map((item, index) => (
                  <ListTitle>
                    <ListItem>{item.name}</ListItem>
                  </ListTitle>
                ))}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>종교분과</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "종교분과").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>체육분과</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "체육분과").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>학술분과</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "학술분과").map(
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
          <AiOutlineClose size="25" color="black" />
        </CloseButton>
      </Container>
    </div>
  );
};
export default MenuCategory;

const Container = styled.div`
  width: 100%;
  height: 780px;
  position: absolute;
  top: 80px;
  left: 0px;
  right: 0;
  background-color: white;
  z-index: 100003;
  box-shadow: 0 2px 5px -2px gray;
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
    color: #023b6d;
  }
`;

const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 25px;
`;
