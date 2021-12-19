import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import * as actions from "../../redux/actions/post";

const ClubList = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:4000/post/indexPost").then((res) => {
      setPosts(res.data);
      console.log(posts)
    });
  }, []);

  return (
    <Container>
      <Title>모집중인 소모임(여기 문구랑 디자인은 모르겠다^^)</Title>
      <Detail>총 {posts.length}개의 소모임이 모집중입니다. 지원해보세요^^</Detail>
      <SubContainer>
      {posts.map((post, index) => {
        if(index<5)
        return (<CardLink
          key={index}
          to={"elseClub/post/" + post._id}
          className="link"
          onClick={() => {
            dispatch(actions.setPost(post._id));
          }}
        >
          <CardWrap>
          <Card className="Posts" key={post._id} id="table">
            <CardCategory>[{post.category}]</CardCategory>
            <CardTitle>&nbsp;{post.title}</CardTitle>
            <div>{post.content.replace(/<\/?[^>]+(>|$)/g, "")}</div>
            <CardDate>
              <Moment format="YYYY/MM/DD">{post.date}</Moment>
            </CardDate>
          </Card>
          </CardWrap>
        </CardLink>)
      })}
      </SubContainer>
      <MoreClub><MoreClubLink  to="/elseClub">더보기</MoreClubLink></MoreClub>
    </Container>
  );
};

export default ClubList;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 150px;
  line-height: 150px;
  /* background-color: #FCE9C5; */
  margin: 20px 0px;
  text-align: center;
  vertical-align: middle;
  font-size: 40px;
  font-weight: 800;
`;

const Detail = styled.div`
  width: 90%;
  font-size: 18px;
  margin: 50px auto 0px auto;
  padding: 0px 30px 5px 30px;
`

const SubContainer=styled.div`
  width: 90%;
  margin: 0 auto;
`

const CardLink = styled(Link)`

`;

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: block;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eee;
  border-radius: 20px;
  padding: 20px 30px;
  &:hover {
    box-shadow: 0 30px 30px 2px #ccc;
  }
`;

const CardCategory = styled.div`
  display: block;
  float: left;
  font-size: 20px;
  font-weight: 600;

`

const CardTitle = styled.div`
  display: block;
  font-size: 20px;
  font-weight: 600;
`

const CardDate = styled.div`
  display: block;
  font-size: 15px;
`

const MoreClub = styled.div`
  width: 100px;
  text-align: center;
  margin: 20px auto;
  cursor: pointer;
  `

const MoreClubLink = styled(Link)`
  all: unset;
`