<<<<<<< HEAD
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
import { MdClose } from "react-icons/md";

const CategoryMain = (props) => {
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
=======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import axios from "../../Assets/axios";

const CategoryMain = (props) => {
  const [ClubList, setClubList] = useState([]);
 
  useEffect(()=>{
    axios.get('mainClub/clubs')
    .then(res=>{
      console.log('load clubs success');
      setClubList(res.data);
    })
  }, []);
  /*
  useEffect(() => {
    axios.get("../../dummy/clublist.json").then((res) => {
      setClubList(res.data);
    });
  }, []);
  */

  // const onClickCategory = (e) => {
  //   if (e.target.innerText === "전체보기") window.location.replace("/mainclub");
  //   else if (e.target.innerText === "봉사분과")
  //     window.location.replace("/mainclub/service");
  //   else if (e.target.innerText === "사회교양분과")
  //     window.location.replace("/mainclub/social");
  //   else if (e.target.innerText === "언행예술분과")
  //     window.location.replace("/mainclub/art");
  //   else if (e.target.innerText === "체육분과")
  //     window.location.replace("/mainclub/pe");
  //   else if (e.target.innerText === "학술분과")
  //     window.location.replace("/mainclub/academic");
  //   else if (e.target.innerText === "종교분과")
  //     window.location.replace("/mainclub/religion");
  // };

  // const onClickList = (item, url) => {
  //   // console.log(item);
  //   window.location.replace("/mainclub/" + url + "/" + item.item.label);
  // };
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b

  return (
    <div>
      <Container>
        <SubContainer>
          <Category>
            <CategoryTitle>
<<<<<<< HEAD
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
=======
              <CategoryLink to="/mainClub">
                <CategoryItem onClick={props.close}>전체보기</CategoryItem>
              </CategoryLink>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryLink to="/mainClub/service">
                <CategoryItem onClick={props.close}>봉사분과</CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter((data) => data.category === "봉사분과").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <CategoryLink to={{pathname: `/mainClub/service/${item.label}`}} onClick={props.close}>
                      <ListItem>
                        {item.name}
                      </ListItem>
                      </CategoryLink>
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
                    </ListTitle>
                  )
                )}
              </List>
<<<<<<< HEAD
            </CategoryTitle>
            <CategoryTitle>
              <CategoryItem>사회교양분과</CategoryItem>
=======
              <Empty />
              <CategoryTitle>
                <CategoryLink to="/mainClub/religion">
                  <CategoryItem onClick={props.close}>종교분과</CategoryItem>
                </CategoryLink>
                <List>
                  {ClubList.filter((data) => data.category === "종교분과").map(
                    (item, index) => (
                      <ListTitle key={index}>
                        <CategoryLink to={{pathname: `/mainClub/religion/${item.label}`}} onClick={props.close}>
                        <ListItem>
                          {item.name}
                        </ListItem>
                        </CategoryLink>
                      </ListTitle>
                    )
                  )}
                </List>
              </CategoryTitle>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryLink to="/mainClub/social">
                <CategoryItem onClick={props.close}>
                  사회교양분과
                </CategoryItem>
              </CategoryLink>
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
              <List>
                {ClubList.filter(
                  (data) => data.category === "사회교양분과"
                ).map((item, index) => (
<<<<<<< HEAD
                  <ListTitle>
                    <ListItem>{item.name}</ListItem>
=======
                  <ListTitle key={index}>
                    <CategoryLink to={{pathname: `/mainClub/social/${item.label}`}} onClick={props.close}>
                    <ListItem>
                      {item.name}
                    </ListItem>
                    </CategoryLink>
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
                  </ListTitle>
                ))}
              </List>
            </CategoryTitle>
            <CategoryTitle>
<<<<<<< HEAD
              <CategoryItem>언행예술분과</CategoryItem>
=======
              <CategoryLink to="/mainClub/art">
                <CategoryItem onClick={props.close}>
                  언행예술분과
                </CategoryItem>
              </CategoryLink>
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
              <List>
                {ClubList.filter(
                  (data) => data.category === "언행예술분과"
                ).map((item, index) => (
<<<<<<< HEAD
                  <ListTitle>
                    <ListItem>{item.name}</ListItem>
=======
                  <ListTitle key={index}>
                    <CategoryLink to={{pathname: `/mainClub/art/${item.label}`}} onClick={props.close}>
                    <ListItem>
                      {item.name}
                    </ListItem>
                    </CategoryLink>
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
                  </ListTitle>
                ))}
              </List>
            </CategoryTitle>
<<<<<<< HEAD
            <CategoryTitle>
              <CategoryItem>종교분과</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "종교분과").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
=======

            <CategoryTitle>
              <CategoryLink to="/mainClub/pe">
                <CategoryItem onClick={props.close}>체육분과</CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter((data) => data.category === "체육분과").map(
                  (item, index) => {
                    if (index < 12) {
                      return (
                        <ListTitle key={index}>
                          <CategoryLink to={{pathname: `/mainClub/pe/${item.label}`}} onClick={props.close}>
                          <ListItem>
                            {item.name}
                          </ListItem>
                          </CategoryLink>
                        </ListTitle>
                      );
                    } else return "";
                  }
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
<<<<<<< HEAD
              <CategoryItem>체육분과</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "체육분과").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
                    </ListTitle>
                  )
=======
              <CategoryItem>&nbsp;</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "체육분과").map(
                  (item, index) => {
                    if (index > 12) {
                      return (
                        <ListTitle key={index}>
                          <CategoryLink to={{pathname: `/mainClub/pe/${item.label}`}} onClick={props.close}>
                          <ListItem>
                            {item.name}
                          </ListItem>
                          </CategoryLink>
                        </ListTitle>
                      );
                    } else return "";
                  }
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
<<<<<<< HEAD
              <CategoryItem>학술분과</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "학술분과").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
=======
              <CategoryLink to="/mainClub/academic">
                <CategoryItem onClick={props.close}>학술분과</CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter((data) => data.category === "학술분과").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <CategoryLink to={{pathname: `/mainClub/academic/${item.label}`}} onClick={props.close}>
                      <ListItem>
                        {item.name}
                      </ListItem>
                      </CategoryLink>
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
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
export default CategoryMain;

const Container = styled.div`
  width: 100%;
  height: auto;
<<<<<<< HEAD
  position: absolute;
  top: 80px;
=======
  position: fixed;
  top: 70px;
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
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

<<<<<<< HEAD
const Category = styled.ul`
  width: 100%;
  list-style: none;
  margin: 10px auto;
`;

const CategoryTitle = styled.li`
=======
const Category = styled.div`
  margin: 10px auto;
`;

const CategoryLink = styled(Link)`
  all: unset;
`

const CategoryTitle = styled.div`
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
  float: left;
  width: 170px;
  font-size: 16px;
  margin: 0;
<<<<<<< HEAD
=======
  cursor: pointer;
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
`;

const CategoryItem = styled.div`
  padding: 20px 0 17px;
<<<<<<< HEAD
`;

const List = styled.ul`
=======
  font-weight: 700;
`;

const List = styled.div`
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
  list-style: none;
  width: 150px;
`;

<<<<<<< HEAD
const ListTitle = styled.li`
=======
const ListTitle = styled.div`
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
  width: 150px;
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;

const ListItem = styled.div`
  padding: 8px 0;
  font-weight: normal;
<<<<<<< HEAD
=======
  cursor: pointer;
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
  &:hover {
    color: #009bd9;
  }
`;

const CloseButton = styled.span`
<<<<<<< HEAD
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 25px;
=======
  cursor: pointer;
  position: relative;
  top: 18px;
`;

const Empty = styled.div`
  margin: 10px 0;
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
`;
