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
    if (Filter.length !== 0 && props.category !== undefined)
      setUrl(Filter[0].category);
  }, [Filter, props.category]);

  return (
    <div>
      <TitleWrap>
        <URL>홈 &gt; 중앙동아리 &gt; {Url}</URL>
        <Title>{Url}</Title>
      </TitleWrap>
      <Container>
        {Filter.map((mainClub, index) => (
          <Card
            key={index}
            to={{
              pathname: `/mainClub/${mainClub.value}/${mainClub.label}`
            }}
          >
            <SubContainer>
              <Category>{mainClub.category}</Category>
              <Name>{mainClub.name}</Name>
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
            </SubContainer>
            <Poster
              src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
              alt="poster"
            />
          </Card>
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
  text-align: center;
`;

const Card = styled(Link)`
  all: unset;
  width: 25%;
  height: 500px;
  display: inline-block;
  margin: 20px 15px;
  padding: 20px 0px;
  border-bottom: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 20%);
  }
`;

const Poster = styled.img`
  height: 300px;
`;

const SubContainer = styled.div`
  position: relative;
`;

const Category = styled.div`
  display: block;
  width: auto;
  height: 40px;
  line-height: 40px;
  background-color: #eeeeee;
  border-radius: 30px;
  padding: 0 20px;
  margin: 0 20px;
`;

const Name = styled.div`
  background-color: yellow;
  display: block;
`;
