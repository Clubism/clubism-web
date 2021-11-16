import React, { useEffect, useState } from "react";
import "../style/ElseClubList.scss";
import { Link } from "react-router-dom";
import Paging from "./Paging";

const ClubList = (props) => {
  const [Post, setPost] = useState([]);
  const [Filter, setFilter] = useState(Post);
  const [Check, setCheck] = useState(false);
  const [Page, setPage] = useState(1);
  const PageNum = 15;

  useEffect(() => {
    fetch("dummy/elseclublist.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setPost(result);
          setFilter(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(
    (data) => {
      console.log(props.category);
      if (props.category === "전체보기") {
        setFilter(Post);
        setPage(1);
      } else {
        setFilter(Post.filter((data) => data.category === props.category));
        setPage(1);
      }
    },
    [props]
  );

  useEffect(() => {
    if (Check) {
      if (props.category === "전체보기")
        setFilter(Post.filter((data) => data.state === true));
      else
        setFilter(
          Post.filter((data) => data.category === props.category).filter(
            (data) => data.state === true
          )
        );
    } else {
      if (props.category === "전체보기") setFilter(Post);
      else setFilter(Post.filter((data) => data.category === props.category));
    }
  }, [Check]);

  return (
    <div className="ElseClubList">
      <div className="ElseClubListTop">
        <Link to="/elseClub/posting" className="Posting">
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
              to="/elseClub/post"
              className="link"
              onClick={() => {
                props.setPost(post);
              }}
              key={post._id}
            >
              <div className="Posts" key={post._id}>
                <div className="State">{post.state ? "진행중" : "마감"}</div>
                <div className="Title">{post.title}</div>
                <div>{post.date}</div>
                <div>{post.writer}</div>
              </div>
            </Link>
          );
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

export default ClubList;
