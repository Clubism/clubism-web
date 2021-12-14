import React, { useEffect, useState } from "react";
import "../style/IndexPage.scss";
import { Link } from "react-router-dom";
import ClubRolling from "./ClubRolling";
import ClubList from "./ClubList";
import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
// import { Button } from "@mui/material";

const IndexPage = () => {
  const [mainClubList, setmainClubList] = useState([]);
  const [subClubList, setSubClubList] = useState([]);
  const [recentList, setRecentList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    axios.get("../dummy/mainclubrecruitlist.json").then((res) => {
      setmainClubList(res.data);
    });
    axios.get("../dummy/subclubrecruitlist.json").then((res) => {
      setSubClubList(res.data);
    });
  }, []);

  useEffect(() => {
    setRecentList(mainClubList.concat(subClubList));
  }, [mainClubList, subClubList]);

  useEffect(() => {
    setShowList(
      recentList
        .sort(function(a, b) {
          if (a.deadline >= b.deadline) return -1;
          else return 1;
        })
        .slice(0, 6)
    );
  }, [recentList]);

  console.log(showList);

  const onClickItem = (index) => {
    setSlideIndex(index.i);
  };

  return (
    <Container>
      <SlideShow>
        <Carousel
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(31,45,61,.4)",
              borderRadius: 0,
              color: "white"
            }
          }}
          navButtonsAlwaysVisible={true}
          animation="slide"
          duration="500"
          autoPlay={false}
          cycleNavigation={false}
          indicators={false}
          index={slideIndex}
        >
          {showList.map((item, i) => (
            <Card key={i}>
              <Text>
                <Title>{item.name}</Title>
                <Desc>{item.description}</Desc>
                <Deadline>~ {item.deadline}</Deadline>
              </Text>
              <Button>
                <Detail>자세히 보기</Detail>
                <Apply>지원하기</Apply>
              </Button>
            </Card>
          ))}
        </Carousel>
        <Indicator>
          {showList.map((item, i) => (
            <Item key={i} onClick={() => onClickItem({ i })}>
              [{item.category}]
              <br />
              {item.name}
            </Item>
          ))}
        </Indicator>
      </SlideShow>
      {/* <div className="indexBar">
        <div className="indexBarTitle">모집중인 동아리</div>
        <Link to="/#">
          <div className="viewMore">
            <IoIosAdd />
            더보기
          </div>
        </Link>
      </div>
      <div className="indexContainer">
        <ClubRolling />
        <ClubList posts={posts} />
      </div> */}
    </Container>
  );
};

export default IndexPage;

const Container = styled.div``;

const SlideShow = styled.div`
  height: 560px;
  background-color: #023b6d;
`;

const Card = styled.div`
  background-color: white;
  height: 560px;
  color: white;
  background-color: black;
  /* background-image: url("https://cdn.pixabay.com/photo/2015/02/25/07/39/church-648430_960_720.jpg"); */
  background-size: cover;
`;

const Text = styled.div`
  position: relative;
  top: 100px;
  left: 200px;
`;

const Title = styled.div`
  font-family: "BebasNeue-Regular";
  font-size: 40px;
  font-weight: 600;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Deadline = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const Detail = styled.button`
  all: unset;
  width: 120px;
  height: 40px;
  font-size: 15px;
  background-color: #002c5e;
  color: white;
  text-align: center;
  margin: 10px;
  float: left;
`;

const Apply = styled.button`
  all: unset;
  width: 120px;
  height: 40px;
  font-size: 15px;
  background-color: #002c5e;
  color: white;
  text-align: center;
  margin: 10px;
  float: left;
`;

const Button = styled.div`
  position: relative;
  top: 200px;
  left: 180px;
`;

const Indicator = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 80px;
  text-align: center;
`;

const Item = styled.div`
  text-align: left;
  width: 13%;
  height: 65px;
  display: inline-block;
  cursor: pointer;
  color: grey;
  border-bottom: 4px solid grey;
  &:hover {
    color: white;
    border-bottom: 4px solid white;
  }
`;
