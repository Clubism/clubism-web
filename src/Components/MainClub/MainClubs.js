import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const MainClubs = (props) => {
  const [Club, setClub] = useState([]);
  const [Filter, setFilter] = useState(Club);
  const [Url, setUrl] = useState("");
  const [SearchKeyword, setSearchKeyword] = useState("");
  const [SearchFilter, setSearchFilter] = useState(Filter);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //axios.get("../../dummy/mainclubrecruitlist.json")
    axios.get("http://localhost:4000/mainClub/recruitment").then((res) => {
      console.log("recruitment load success");
      setClub(res.data);
      setFilter(res.data);
    });
  }, []);

  useEffect(() => {
    setSearchKeyword("");
    if (props.category === undefined) {
      setFilter(Club);
      setUrl("전체보기");
    } else {
      setFilter(Club.filter((data) => data.clubId.value === props.category));
    }
  }, [props.category, Club]);

  useEffect(() => {
    if (Filter.length !== 0 && props.category !== undefined)
      setUrl(Filter[0].clubId.category);
  }, [Filter, props.category]);
  //}, []);

  useEffect(() => {
    if (SearchKeyword === "") {
      console.log("called");
      setSearchFilter(Filter);
    } else
      setSearchFilter(
        Filter.filter((data) => {
          return data.clubId.name.includes(SearchKeyword);
        })
      );
  }, [SearchKeyword, Filter]);
  //}, []);

  // 2021/12/23 강진실
  // 사용자 즐겿자기 동아리 불러옴
  // redux와 연동해서 로그인 했을 때만 요청할 수 있도록 해야 함.(아직 구현 X)
  useEffect(() => {
    const dbId = localStorage.getItem("user_db_id");
    axios.get(`http://localhost:4000/auth/favorites/${dbId}`).then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const searchClub = (e) => {
    if (e.key === "Enter") {
      setSearchKeyword(e.target.value);
    }
  };

  const saveFavorite = (clubName) => {
    const dbId = localStorage.getItem("user_db_id");
    axios
      .post(`http://localhost:4000/auth/favorites/${dbId}`, {
        clubName: clubName
      })
      .then((res) => {
        setFavorites(res.data);
      });
  };

  console.log(SearchFilter);
  // 김채연에게
  // recruitment list를 db에 연결하는 과정에서 name, value, label은 clubId.name 이런 식으로 접근해야 합니다!
  // 당장 보이는 것들은 수정해놓긴 했는데 나중에 버그 생기면 clubId.을 붙여서 함 해보세용
  return (
    <div>
      <TitleWrap>
        <URL>홈 &gt; 중앙동아리 &gt; {Url}</URL>
        <Title>{Url}</Title>
      </TitleWrap>
      <Container>
        <Search>
          <SearchIcon color="black" size="30px" />
          <SearchInput
            type="text"
            placeholder="동아리 이름을 입력하세요"
            onKeyDown={searchClub}
          />
        </Search>
        {SearchFilter.map((mainClub, index) => (
          <Card
            key={index}
            to={{
              pathname: `/mainClub/${mainClub.clubId.value}/${
                mainClub.clubId.label
              }`
            }}
          >
            <SubContainer>
              <Category>{mainClub.clubId.category}</Category>
              <Name>
                {mainClub.clubId.name}
                {favorites.includes(mainClub.clubId.name) ? (
                  <Star
                    color="#fcca11"
                    onClick={() => {
                      saveFavorite(mainClub.clubId.name);
                    }}
                  />
                ) : (
                  <EmptyStar color="#fcca11" />
                )}
              </Name>
              <Desc>" {mainClub.description} "</Desc>
              <Deadline>
                {new Date() < new Date(mainClub.deadline)
                  ? "D - " +
                    Math.floor(
                      (new Date(mainClub.deadline).getTime() -
                        new Date().getTime()) /
                        (24 * 3600 * 1000)
                    ).toString()
                  : "마감"}
              </Deadline>
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
  display: inline-block;
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

const Search = styled.div`
  background-color: #eeeeee;
  margin: 0 auto;
  width: 70%;
  height: 70px;
  text-align: left;
  padding: 0 25px;
  border-radius: 25px;
  margin-bottom: 50px;
`;

const SearchIcon = styled(AiOutlineSearch)`
  margin-bottom: 10px;
`;
const SearchInput = styled.input`
  all: unset;
  width: 90%;
  height: 40px;
  color: black;
  font-size: 20px;
  margin: 15px 0px 0px 15px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: black;
  }
  :-ms-input-placeholder {
    color: black;
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const Card = styled(Link)`
  all: unset;
  width: 25%;
  overflow: hidden;
  min-height: 100px;
  height: auto;
  display: inline-block;
  margin: 20px 15px;
  padding: 20px 0px 0px 0px;
  border-bottom: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  text-align: center;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 20%);
    color: black;
    transform: translate(0, -5px);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  left: 0;
`;

const SubContainer = styled.div`
  position: relative;
  width: 100%;
  height: 110px;
`;

const Category = styled.div`
  display: inline-block;
  float: left;
  width: auto;
  height: 30px;
  line-height: 30px;
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 0 15px;
  margin: 0 20px;
`;

const Name = styled.div`
  display: block;
  position: absolute;
  top: 40px;
  left: 30px;
  text-align: left;
  font-size: 22px;
  font-weight: 700;
`;

const Desc = styled.div`
  display: block;
  position: absolute;
  top: 75px;
  left: 25px;
`;

const Deadline = styled.div`
  display: block;
  position: absolute;
  top: 5px;
  right: 30px;
`;

const EmptyStar = styled(AiOutlineStar)`
  margin-bottom: 4px;
`;

const Star = styled(AiFillStar)`
  margin-bottom: 4px;
`;
