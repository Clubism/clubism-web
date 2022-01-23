<<<<<<< HEAD
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
  
=======
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import axios from 'axios';

// import {AiOutlinePlusSquare} from "react-icons/ai";
// import axios from "axios";

const CategorySub = (props) => {
  const [ClubList, setClubList] = useState([]);
  
  //세부 category 불러오기
  useEffect(() => {
    axios.get("../../dummy/departments.json").then((res) => {
      setClubList(res.data);
    });
  }, []);

  
  // const props.close = (e) => {
  //   if (e.target.innerText === "전체보기") window.location.replace("/subClub");
  //   else if (e.target.innerText === "국제인문학부")
  //     window.location.replace("/subClub/liberalarts");
  //   else if (e.target.innerText === "사회과학부")
  //     window.location.replace("/subClub/sdoss");
  //   else if (e.target.innerText === "경제학부")
  //     window.location.replace("/subClub/econ");
  //   else if (e.target.innerText === "공학부")
  //     window.location.replace("/subClub/eng");
  //   else if (e.target.innerText === "자연과학부")
  //     window.location.replace("/subClub/science");
  //   else if (e.target.innerText === "지식융합미디어학부")
  //     window.location.replace("/subClub/smas");
  //   else if (e.target.innerText === "경영학부")
  //     window.location.replace("/subClub/sbs");
  // };

  // return (
  //   <div>
  //     <Container>
  //       <SubContainer>
  //         <Category>
  //           <CategoryTitle>
  //             <CategoryLink to="/subClub">
  //               <CategoryItem onClick={props.close}>전체보기</CategoryItem>
  //             </CategoryLink>
  //             <Empty />
  //             <CategoryTitle>
  //               <CategoryLink to="/subClub/sbs">
  //                 <CategoryItem onClick={props.close}>경영학부</CategoryItem>
  //               </CategoryLink>
  //               <List>
  //                 <ListTitle>
  //                   <ListItem>경영학전공</ListItem>
  //                 </ListTitle>
  //                 {/* {ClubList.filter((data) => data.category === "경영학부").map(
  //                 (item, index) => (
  //                   <ListTitle key={index}>
  //                     <ListItem>{item.name}</ListItem>
  //                   </ListTitle>
  //                 )
  //               )} */}
  //               </List>
  //             </CategoryTitle>
  //           </CategoryTitle>
  //           <CategoryTitle>
  //             <CategoryLink to="/subClub/liberalarts">
  //               <CategoryItem onClick={props.close}>국제인문학부</CategoryItem>
  //             </CategoryLink>
  //             <List>
  //               <ListTitle>
  //                 <CategoryLink to={{pathname: `/subClub/liberalarts/klkl`}} onClick={props.close}>
  //                   <ListItem>국어국문학전공</ListItem>
  //                  </CategoryLink>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>사학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>철학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>종교학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>영미어문전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>미국문화전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>유럽문화전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>중국문화전공</ListItem>
  //               </ListTitle>
  //               {/* {ClubList.filter(
  //                   (data) => data.category === "국제인문학부"
  //                 ).map((item, index) => (
  //                   <ListTitle key={index}>
  //                     <ListItem>{item.name}</ListItem>
  //                   </ListTitle>
  //                 ))} */}
  //             </List>
  //           </CategoryTitle>
  //           <CategoryTitle>
  //             <CategoryLink to="subClub/sdoss">
  //               <CategoryItem onClick={props.close}>사회과학부</CategoryItem>
  //             </CategoryLink>
  //             <List>
  //               <ListTitle>
  //                 <ListItem>사회학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>정치외교학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>심리학전공</ListItem>
  //               </ListTitle>
  //               {/* {ClubList.filter((data) => data.category === "사회과학부").map(
  //                 (item, index) => (
  //                   <ListTitle key={index}>
  //                     <ListItem>{item.name}</ListItem>
  //                   </ListTitle>
  //                 )
  //               )} */}
  //             </List>
  //           </CategoryTitle>
  //           <CategoryTitle>
  //             <CategoryLink to="/subClub/econ">
  //               <CategoryItem onClick={props.close}>경제학부</CategoryItem>
  //             </CategoryLink>
  //             <List>
  //               <ListTitle>
  //                 <ListItem>경제학전공</ListItem>
  //               </ListTitle>
  //               {/* {ClubList.filter((data) => data.category === "경제학부").map(
  //                 (item, index) => (
  //                   <ListTitle key={index}>
  //                     <ListItem>{item.name}</ListItem>
  //                   </ListTitle>
  //                 )
  //               )} */}
  //             </List>
  //           </CategoryTitle>
  //           <CategoryTitle>
  //             <CategoryLink to="/subClub/eng">
  //               <CategoryItem onClick={props.close}>공학부</CategoryItem>
  //             </CategoryLink>
  //             <List>
  //               <ListTitle>
  //                 <ListItem>컴퓨터공학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>전자공학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>화공생명공학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>기계공학전공</ListItem>
  //               </ListTitle>
  //               {/* {ClubList.filter((data) => data.category === "공학부").map(
  //                 (item, index) => (
  //                   <ListTitle key={index}>
  //                     <ListItem>{item.name}</ListItem>
  //                   </ListTitle>
  //                 )
  //               )} */}
  //             </List>
  //           </CategoryTitle>
  //           <CategoryTitle>
  //             <CategoryLink to="/subClub/science">
  //               <CategoryItem onClick={props.close}>자연과학부</CategoryItem>
  //             </CategoryLink>
  //             <List>
  //               <ListTitle>
  //                 <ListItem>수학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>물리학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>화학전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>생명과학전공</ListItem>
  //               </ListTitle>
  //               {/* {ClubList.filter((data) => data.category === "자연과학부").map(
  //                 (item, index) => (
  //                   <ListTitle key={index}>
  //                     <ListItem>{item.name}</ListItem>
  //                   </ListTitle>
  //                 )
  //               )} */}
  //             </List>
  //           </CategoryTitle>
  //           <CategoryTitle>
  //             <CategoryLink to="/subClub/science">
  //               <CategoryItem onClick={props.close}>
  //                 지식융합미디어학부
  //               </CategoryItem>
  //             </CategoryLink>
  //             <List>
  //               <ListTitle>
  //                 <ListItem>지식융합미디어학부</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>신문방송학 전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>미디어&엔터테인먼트 전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>아트&테크놀로지 전공</ListItem>
  //               </ListTitle>
  //               <ListTitle>
  //                 <ListItem>글로벌 한국학 전공</ListItem>
  //               </ListTitle>
  //               {/* {ClubList.filter((data) => data.category === "지융미학부").map(
  //                 (item, index) => (
  //                   <ListTitle key={index}>
  //                     <ListItem>{item.name}</ListItem>
  //                   </ListTitle>
  //                 )
  //               )} */}
  //             </List>
  //           </CategoryTitle>
  //         </Category>
  //       </SubContainer>
  //       <CloseButton onClick={props.close}>
  //         <MdClose size="25" color="black" />
  //       </CloseButton>
  //     </Container>
  //   </div>
  // );

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
              <CategoryItem>국제인문학부</CategoryItem>
              <List>
                {ClubList.filter((data) => data.category === "국제인문학부").map(
                  (item, index) => (
                    <ListTitle>
                      <ListItem>{item.name}</ListItem>
=======
              <CategoryLink to="/subClub">
                <CategoryItem onClick={props.close}>전체보기</CategoryItem>
              </CategoryLink>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryLink to="/subClub/management">
                <CategoryItem onClick={props.close}>경영학부</CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter((data) => data.category === "경영학부").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <CategoryLink to={{pathname: `/subClub/management/${item.label}`}} onClick={props.close}>
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
              <CategoryItem>사회과학부</CategoryItem>
              <List>
                {ClubList.filter(
                  (data) => data.category === "사회과학부"
                ).map((item, index) => (
                  <ListTitle>
                    <ListItem>{item.name}</ListItem>
=======
              <Empty />
              <CategoryTitle>
              <CategoryLink to="/subClub/economics">
                <CategoryItem onClick={props.close}>
                  경제학부
                </CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter(
                  (data) => data.category === "경제학부"
                ).map((item, index) => (
                  <ListTitle key={index}>
                    <CategoryLink to={{pathname: `/subClub/economics/${item.label}`}} onClick={props.close}>
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
              <CategoryItem>경제학부</CategoryItem>
              <List>
                {ClubList.filter(
                  (data) => data.category === "경제학부"
                ).map((item, index) => (
                  <ListTitle>
                    <ListItem>{item.name}</ListItem>
=======
            </CategoryTitle>
            <CategoryTitle>
              <CategoryLink to="/subClub/social">
                <CategoryItem onClick={props.close}>
                  사회과학부
                </CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter(
                  (data) => data.category === "사회과학부"
                ).map((item, index) => (
                  <ListTitle key={index}>
                    <CategoryLink to={{pathname: `/subClub/social/${item.label}`}} onClick={props.close}>
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
=======

            <CategoryTitle>
                <CategoryLink to="/subClub/liberalarts">
                  <CategoryItem onClick={props.close}>국제인문학부</CategoryItem>
                </CategoryLink>
                <List>
                  {ClubList.filter((data) => data.category === "국제인문학부").map(
                    (item, index) => (
                      <ListTitle key={index}>
                        <CategoryLink to={{pathname: `/subClub/liberalarts/${item.label}`}} onClick={props.close}>
                        <ListItem>
                          {item.name}
                        </ListItem>
                        </CategoryLink>
                      </ListTitle>
                    )
                  )}
                </List>
              </CategoryTitle>

            <CategoryTitle>
              <CategoryLink to="/subClub/engineering">
                <CategoryItem onClick={props.close}>공학부</CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter((data) => data.category === "공학부").map(
                  (item, index) => {

                      return (
                        <ListTitle key={index}>
                          <CategoryLink to={{pathname: `/subClub/engineering/${item.label}`}} onClick={props.close}>
                          <ListItem>
                            {item.name}
                          </ListItem>
                          </CategoryLink>
                        </ListTitle>
                      );
                    
                  }
                )}
              </List>
            </CategoryTitle>

            <CategoryTitle>
              <CategoryLink to="/subClub/science">
                <CategoryItem onClick={props.close}>자연과학부</CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter((data) => data.category === "자연과학부").map(
                  (item, index) => {
                      return (
                        <ListTitle key={index}>
                          <CategoryLink to={{pathname: `/subClub/science/${item.label}`}} onClick={props.close}>
                          <ListItem>
                            {item.name}
                          </ListItem>
                          </CategoryLink>
                        </ListTitle>
                      );
                  }
                )}
              </List>
            </CategoryTitle>

            <CategoryTitle>
              <CategoryLink to="/subClub/smas">
                <CategoryItem onClick={props.close}>지식융합미디어학부</CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter((data) => data.category === "지식융합미디어학부").map(
                  (item, index) => (
                    <ListTitle key={index}>
                      <CategoryLink to={{pathname: `/subClub/smas/${item.label}`}} onClick={props.close}>
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
export default CategorySub;

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
`;
=======
  cursor: pointer;
  position: relative;
  top: 18px;
`;

const Empty = styled.div`
  margin: 10px 0;
`;

// const Container = styled.div`
//   width: 100%;
//   height: auto;
//   position: fixed;
//   top: 70px;
//   left: 0px;
//   right: 0;
//   background-color: white;
//   z-index: 100003;
//   box-shadow: 0 2px 5px -2px gray;
//   padding-bottom: 15px;
// `;

// const SubContainer = styled.div`
//   width: 100%;
//   position: relative;
//   max-width: 1190px;
//   margin: 0 auto;
// `;

// const Category = styled.div`
//   margin: 10px auto;
// `;

// const CategoryTitle = styled.div`
//   float: left;
//   width: 170px;
//   font-size: 16px;
//   margin: 0;
// `;

// const CategoryItem = styled.div`
//   padding: 20px 0 17px;
//   font-weight: 700;
//   cursor: pointer;
// `;

// const CategoryLink = styled(Link)`
//   all: unset;
// `;

// const List = styled.div`
//   list-style: none;
//   width: 150px;
// `;

// const ListTitle = styled.div`
//   width: 150px;
//   font-size: 14px;
//   line-height: 1;
//   margin: 0;
// `;

// const ListItem = styled.div`
//   padding: 8px 0;
//   font-weight: normal;
//   cursor: pointer;
//   &:hover {
//     color: #009bd9;
//   }
// `;

// const CloseButton = styled.span`
//   cursor: pointer;
//   position: relative;
//   top: 18px;
// `;

// const Empty = styled.div`
//   margin: 10px 0;
// `;
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
