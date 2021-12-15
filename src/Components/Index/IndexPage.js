import React, { useEffect, useState } from "react";
import "../style/IndexPage.scss";
import { Link } from "react-router-dom";
import ClubList from "./ClubList";
import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import Carousel from "react-material-ui-carousel";

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (slideIndex < 5) setSlideIndex(slideIndex + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [slideIndex]);

  const onClickItem = (index) => {
    setSlideIndex(index.i);
  };

  const slideChange = (event) => {
    if (event.target.childNodes[0].data === ">") setSlideIndex(slideIndex + 1);
    else if (event.target.childNodes[0].data === "<")
      setSlideIndex(slideIndex - 1);
  };

  return (
    <Container>
      <SlideShow>
        <StyledCarousel
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(31,45,61,.4)",
              borderRadius: 0,
              color: "white"
            }
          }}
          navButtonsAlwaysVisible={true}
          animation="fade"
          duration="500"
          autoPlay={false}
          cycleNavigation={false}
          indicators={false}
          index={slideIndex}
          NavButton={({ onClick, className, style, next, prev }) => {
            return (
              <ButtonPN
                onClick={slideChange}
                className={className}
                style={{
                  font: "20px Pretendard",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(31,45,61,.4)",
                  textAlign: "center",
                  margin: "0",
                  lineHeight: "40px"
                }}
              >
                {next && ">"}
                {prev && "<"}
              </ButtonPN>
            );
          }}
        >
          {showList.map((item, i) => (
            <Card key={i}>
              <Poster>{i}</Poster>
              <Text>
                <Title>{item.name}</Title>
                <Desc>{item.description}</Desc>
                <Deadline>~ {item.deadline}</Deadline>
              </Text>
              <SlideButton>
                <Detail>자세히 보기</Detail>
                <Apply>지원하기</Apply>
              </SlideButton>
            </Card>
          ))}
        </StyledCarousel>
      </SlideShow>
      <Indicator>
        {showList.map((item, i) => (
          <Item
            key={i}
            selected={slideIndex}
            value={i}
            onClick={() => onClickItem({ i })}
          >
            [{item.category}]
            <br />
            {item.name}
          </Item>
        ))}
      </Indicator>
    </Container>
  );
};

export default IndexPage;

const Container = styled.div`
  height: 560px;
  width: 100%;
  position: relative;
`;

const SlideShow = styled.div`
  height: 560px;
  background-color: #023b6d;
`;

const StyledCarousel = styled(Carousel)``;

const Card = styled.div`
  position: relative;
  background-color: black;
  height: 560px;
  color: white;
`;

const Text = styled.div`
  position: absolute;
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

const SlideButton = styled.div`
  position: absolute;
  top: 300px;
  left: 180px;
`;

const ButtonPN = styled.div``;

const Poster = styled.div`
  width: 100%;
  height: 560px;
  background-image: url("https://movie-phinf.pstatic.net/20211207_98/1638866898541o5n3F_JPEG/movie_image.jpg");
  background-position: center;
  background-size: cover;
  background-color: black;
  opacity: 0.5;
`;
const Indicator = styled.div`
  position: absolute;
  z-index: 5003;
  bottom: 30px;
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
  color: rgba(31, 45, 61, 0.9);
  border-bottom: 4px solid rgba(31, 45, 61, 0.9);
  &:hover {
    color: white;
    border-bottom: 4px solid white;
  }
  ${(props) => {
    if (props.selected === props.value) {
      return `
      color: white;
      border-bottom: 4px solid white;
      `;
    }
  }}
`;
