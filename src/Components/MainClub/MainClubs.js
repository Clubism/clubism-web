import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const MainClubs = (props) => {
  const [ClubList, setClubList] = useState([]); //메인 동아리 리스트
  const [Url, setUrl] = useState(""); //상단 url 나타내는 변수
  const [SearchFilter, setSearchFilter] = useState([]);
  const [favorites, setFavorites] = useState([]);


  //상단 카테고리 URL
  useEffect(() => {
    if (props.category === undefined) setUrl("전체보기")
    else if (props.category === "service")
      setUrl("봉사분과")
    else if (props.category === "social")
      setUrl("사회교양분과")
    else if (props.category === "art")
      setUrl("언행예술분과")
    else if (props.category === "pe")
      setUrl("체육분과")
    else if (props.category === "academic")
      setUrl("학술분과")
    else if (props.category === "religion")
      setUrl("종교분과")
  }, [props.category]);

  //메인동아리 리스트 불러와서 카테고리 필터걸기
  useEffect(() => {
    var tempClub;
    axios.get("http://localhost:4000/mainClub/clubs").then((res) => {
      if(props.category ===undefined)
        tempClub = res.data;
      else
        tempClub=res.data.filter((data)=> data.value === props.category);
      addRecruitment();
    });

    //각 동아리 공고 불러와서 각각 추가
    const addRecruitment= async()=>{
      try {
        for (let x of tempClub) {
          await axios.get("http://localhost:4000/recruitment/" + x._id).then((res) => {
            x.recruitment = res.data;
            console.log("2");
          });
        }
        console.log("1");
        setClubList(tempClub);
        setSearchFilter(tempClub);
        console.log("공고 추가된 클럽 리스트 : ", tempClub);
      } catch (err) {
        console.log(err);
      }
    };
  }, [props.category]);

  //}, []);

  // 2021/12/23 강진실
  // 사용자 즐겿자기 동아리 불러옴
  // redux와 연동해서 로그인 했을 때만 요청할 수 있도록 해야 함.(아직 구현 X)
  /*
  useEffect(() => {
    const dbId = localStorage.getItem("user_db_id");
    axios.get(`http://localhost:4000/auth/favorites/${dbId}`).then((res) => {
      setFavorites(res.data);
    });
  }, []);
*/
  //동아리 검색 기능
  const searchClub = (e) => {
    if (e.key === "Enter") {
      setSearchFilter(
        ClubList.filter((data) => {
          return data.clubId.name.includes(e.target.value);
        })
      );
    }
  };

  //즐겨찾기 별
  const saveFavorite = (clubName) => {
    alert("star click!!");
    // const dbId = localStorage.getItem("user_db_id");
    // axios
    //   .post(`http://localhost:4000/auth/favorites/${dbId}`, {
    //     clubName: clubName
    //   })
    //   .then((res) => {
    //     setFavorites(res.data);
    //   });
  };

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
        {/* {console.log("SearchFilter : ",SearchFilter)} */}
        {SearchFilter.map((mainClub, index) => (
          <CardWrap key={index}>
            {/* {console.log(mainClub.recruitment)} */}
            <Card
              to={{
                pathname: `/mainClub/${mainClub.value}/${
                  mainClub.label
                }`
              }}
            >
              <SubContainer>
                <Category>{mainClub.category}</Category>
                <br />
                <Name>{mainClub.name}</Name>
                <Desc>{mainClub.recruitment===undefined? "" : (mainClub.recruitment.length===0 ? "현재 모집중인 공고가 없습니다" : mainClub.recruitment[0].description)}</Desc>
                <Deadline>
                  {mainClub.recruitment===undefined? "" : (mainClub.recruitment.length===0 ? "" : new Date() < new Date(mainClub.recruitment[0].deadline)
                    ? "D - " +
                      Math.floor(
                        (new Date(mainClub.recruitment[0].deadline).getTime() -
                          new Date().getTime()) /
                          (24 * 3600 * 1000)
                      ).toString()
                    : "마감")}
                </Deadline>
              </SubContainer>
              <Poster
                src={require("../../Assets/Image/sgaem/sgaem_2019.png").default}
                alt="poster"
              />
            </Card>
            <StarWrap
              onClick={() => {
                saveFavorite(mainClub.name);
              }}
            >
              {favorites.includes(mainClub.name) ? (
                <Star color="#fcca11" size="25" />
              ) : (
                <EmptyStar color="#fcca11" size="25" />
              )}
            </StarWrap>
          </CardWrap>
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

const CardWrap = styled.div`
  display: inline-block;
  position: relative;
  width: 25%;
  min-height: 100px;
  height: auto;
  overflow: hidden;
  margin: 20px 15px;
  padding: 20px 0px 0px 0px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  &:hover {
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 20%);
    color: black;
    transform: translate(0, -5px);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Card = styled(Link)`
  all: unset;
  text-align: center;
  position: relative;
  &:hover {
    color: black;
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
  display: block;
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
  text-align: left;
  font-size: 22px;
  font-weight: 700;
  margin: 20px 0px 0px 20px;
  padding-left: 30px;
`;

const Desc = styled.div`
  display: block;
  width: 100%;
  padding: 0px 20px;
  margin: 3px auto;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

const StarWrap = styled.div`
  display: block;
  position: absolute;
  top: 68px;
  left: 18px;
`;
