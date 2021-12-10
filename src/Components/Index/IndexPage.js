import React, { useEffect, useState } from "react";
import "../style/IndexPage.scss";
import { Link } from "react-router-dom";
import ClubRolling from "./ClubRolling";
import ClubList from "./ClubList";
import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const [mainClubList, setmainClubList] = useState([]);
  const [subClubList, setSubClubList] = useState([]);
  const [recentList, setRecentList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/post/indexPost").then((res) => {
      setPosts(res.data);
    });
  }, []);

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
    setRecentList(
      recentList.sort(function(a, b) {
        if (a.deadline >= b.deadline) return -1;
        else return 1;
      })
    );
    console.log(recentList);
  }, [recentList]);
  return (
    <Container>
      <SlideShow>
        <Carousel
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              backgroundColor: "cornflowerblue",
              borderRadius: 0
            }
          }}
          navButtonsAlwaysVisible={true}
          animation="slide"
          duration="500"
          autoPlay={false}
        >
          {recentList.map((item, i) => (
            <Card>
              <Text>djksj</Text>
              <Poster src="Posters/poster1.jpg" alt="poster" />
            </Card>
          ))}
        </Carousel>
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
`;

const Text = styled.div`
  height: inherit;
  width: 70%;
  float: left;
`;

const Poster = styled.img`
  height: inherit;

  float: left;
`;
