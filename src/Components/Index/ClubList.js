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
    });
  }, []);

  return (
    <Container>
      <Title>Title(쓸 문구 추천좀)</Title>
      {posts.map((post, index) => (
        <CardWrap
          key={index}
          to={"elseClub/post/" + post._id}
          className="link"
          onClick={() => {
            dispatch(actions.setPost(post._id));
          }}
        >
          <Card className="Posts" key={post._id}>
            <div className="PostTitle">{post.title}</div>
            <div className="PostDate">
              <Moment format="YYYY/MM/DD">{post.date}</Moment>
            </div>
          </Card>
        </CardWrap>
      ))}
    </Container>
  );
};

export default ClubList;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 200px;
  line-height: 200px;
  background-color: #deedff;
  margin: 20px 0px;
  text-align: center;
  vertical-align: middle;
  font-size: 40px;
  font-weight: 600;
`;

const CardWrap = styled(Link)``;

const Card = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eee;
  border-radius: 20px;
  padding: 20px 30px;
  &:hover {
    box-shadow: 0 30px 30px 2px #ccc;
  }
`;
