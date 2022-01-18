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

  return (
    <div>
      <Container>
        <SubContainer>
          <Category>
            <CategoryTitle>
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
                    </ListTitle>
                  )
                )}
              </List>
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
              <List>
                {ClubList.filter(
                  (data) => data.category === "사회교양분과"
                ).map((item, index) => (
                  <ListTitle key={index}>
                    <CategoryLink to={{pathname: `/mainClub/social/${item.label}`}} onClick={props.close}>
                    <ListItem>
                      {item.name}
                    </ListItem>
                    </CategoryLink>
                  </ListTitle>
                ))}
              </List>
            </CategoryTitle>
            <CategoryTitle>
              <CategoryLink to="/mainClub/art">
                <CategoryItem onClick={props.close}>
                  언행예술분과
                </CategoryItem>
              </CategoryLink>
              <List>
                {ClubList.filter(
                  (data) => data.category === "언행예술분과"
                ).map((item, index) => (
                  <ListTitle key={index}>
                    <CategoryLink to={{pathname: `/mainClub/art/${item.label}`}} onClick={props.close}>
                    <ListItem>
                      {item.name}
                    </ListItem>
                    </CategoryLink>
                  </ListTitle>
                ))}
              </List>
            </CategoryTitle>

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
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
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
                )}
              </List>
            </CategoryTitle>
            <CategoryTitle>
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
  position: fixed;
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

const CategoryLink = styled(Link)`
  all: unset;
`

const CategoryTitle = styled.div`
  float: left;
  width: 170px;
  font-size: 16px;
  margin: 0;
  cursor: pointer;
`;

const CategoryItem = styled.div`
  padding: 20px 0 17px;
  font-weight: 700;
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
  position: relative;
  top: 18px;
`;

const Empty = styled.div`
  margin: 10px 0;
`;
