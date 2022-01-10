import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../style/ElseClubList.scss";
import { Link } from "react-router-dom";
import Paging from "./Paging";
import axios from "axios";
import moment from 'moment';
import styled from 'styled-components';

// import Moment from  'react-moment'

const ClubList = (props) => {
  const [Post, setPost] = useState([]);
  const [Filter, setFilter] = useState(Post);
  const [Check, setCheck] = useState(false);
  const [Page, setPage] = useState(1);
  const PageNum = 15;

  const { category: storeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    axios.get("http://localhost:4000/post").then((res) => {
      setPost(res.data);
      setFilter(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(
    (data) => {
      if (storeCategory === "전체보기") {
        setFilter(Post);
        setPage(1);
      } else {
        setFilter(Post.filter((data) => data.category === storeCategory));
        setPage(1);
      }
    },
    [storeCategory, Post]
  );

  useEffect(() => {
    if (Check) {
      if (storeCategory === "전체보기")
        setFilter(Post.filter((data) => data.state === true));
      else
        setFilter(
          Post.filter((data) => data.category === storeCategory).filter(
            (data) => data.state === true
          )
        );
    } else {
      if (storeCategory === "전체보기") setFilter(Post);
      else setFilter(Post.filter((data) => data.category === storeCategory));
    }
  }, [Check, Post, storeCategory]);

  return (
    <div className="ElseClubList">
      {/* <div>{storeCategory}</div> */}
      <div className="ElseClubListTop">
        <Link to="/elseClub/posting"
        className="Posting">
          글작성
        </Link>
        <input
          type="checkbox"
          id="postcheck"
          onClick={() => {
            if (!Check) setCheck(true);
            else setCheck(false);
          }}
        />
        진행중 공고만 보기
      </div>
      <div className="Posts">
        <div>모집</div>
        <div className="Title">제목</div>
        <div>작성일</div>
        <div>작성자</div>
      </div>
      {Filter.map((post, index) => {
        if (index >= (Page - 1) * PageNum && index < Page * PageNum)
          return (
            <Link
              to={"/elseClub/post/" + post.id}
              className="link"
              onClick={() => {
                console.log(post);
                props.setPost(post);
              }}
              key={post._id}
            >
              <div className="Posts" key={post._id}>
                <div className="State">{post.state ? "진행중" : "마감"}</div>
                <div className="Title">
                  [{post.category}] {post.title}
                </div>
                <div>{moment(post.date).format('YYYY-MM-DD')}</div>
                <div>{post.writer}</div>
              </div>
              <Line />
            </Link>
          );
        else return "";
      })}
      <Paging
        page={Page}
        count={Filter.length}
        setPage={setPage}
        PageNum={PageNum}
      />
    </div>
  );
};

const Line = styled.hr`
margin : 2px;
color : #999999;
`;

export default ClubList;
