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
      <Title>Title</Title>
      {posts.map((post, index) => (
        <Link
          key={index}
          to={"elseClub/post/" + post._id}
          className="link"
          onClick={() => {
            dispatch(actions.setPost(post._id));
          }}
        >
          <div className="Posts" key={post._id}>
            <div className="PostTitle">{post.title}</div>
            <div className="PostDate">
              <Moment format="YYYY/MM/DD">{post.date}</Moment>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default ClubList;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  height: 200px;
  background-color: pink;
  margin: 20px 0px;
`;
