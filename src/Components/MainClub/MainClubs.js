import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const MainClubs = (props) => {
  const [Club, setClub] = useState([]);
  const [Filter, setFilter] = useState(Club);
  const [Url, setUrl] = useState("");

  useEffect(() => {
    axios.get("../../dummy/mainclubrecruitlist.json").then((res) => {
      setClub(res.data);
      setFilter(res.data);
    });
  }, []);

  useEffect(() => {
    if (props.category === undefined) {
      setFilter(Club);
      setUrl("전체보기");
    } else {
      setFilter(Club.filter((data) => data.value === props.category));
    }
  }, [props.category, Club]);

  useEffect(() => {
    if (Filter.length !== 0) setUrl(Filter[0].category);
  }, [Filter]);

  return (
    <div>
      <TitleWrap>
        <URL>홈 &gt; 중앙동아리 &gt; {Url}</URL>
        <Title>{Url}</Title>
      </TitleWrap>
      <Container>
        {Filter.map((mainClub, index) => (
          <div className="club" key={index}>
            <Link
              to={{
                pathname: `/mainClub/${mainClub.value}/${mainClub.label}`
              }}
              className="LinkTp"
            >
              <div className="clubText">
                <div className="category">{mainClub.category}</div>
                <div className="name">{mainClub.name}</div>
                <div className="description">{mainClub.description}</div>
                <div className="deadline">
                  {new Date() < new Date(mainClub.deadline)
                    ? "D - " +
                      (
                        new Date(mainClub.deadline).getDate() -
                        new Date().getDate()
                      ).toString()
                    : "마감"}
                </div>
              </div>
              <div className="clubImage">
                <img src="" alt="poster" />
              </div>
            </Link>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default MainClubs;

const TitleWrap = styled.div`
  width: 100%;
  height: 360px;
  background-color: #333333;
  margin-bottom: 50px;
`;

const URL = styled.div`
  color: white;
  position: relative;
  top: 50px;
  left: 170px;
  font-size: 15px;
  font-weight: 400;
`;

const Title = styled.div`
  position: relative;
  top: 110px;
  color: white;
  font-size: 56px;
  font-weight: 700;
  text-align: center;
`;

const Container = styled.div`
  width: 90%;
  margin 0 auto;
`;
