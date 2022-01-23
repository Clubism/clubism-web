import React, { useEffect, useState } from "react";
import "../style/ElseClubPost.scss";
import { BsArrowReturnRight } from "react-icons/bs";
import axios from "../../Assets/axios";
import moment from 'moment';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//test
import jwt from 'jsonwebtoken';


const ElseClubPost = (props) => {
  const [reload, setreload] = useState(0);
  const [commentList, setCommentList] = useState([]);
  const [inputRecomment, setInputRecomment] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [replyComment, setReplyComment] = useState(-1);

  // const { currentUser: storeCurrentUser } = useSelector((state)=>state.currentUser);
  const currentUser = useSelector((state)=>state.currentUser);


  useEffect(() => {
    axios
      .get("post/comment/" + props.post._id)
      .then((res) => {
        setCommentList(res.data);
        console.log("comment", res.data);
      });
  }, [reload]);

  const inputCommentHandler = (e) => {
    setInputComment(e.target.value);
  };

    const inputRecommentHandler = (e) => {
    setInputRecomment(e.target.value);
  };

  const commentSubmitHandler = () => {
    // setreload(reload + 1);
    axios
      .post("post/comment/" + props.post._id, {
        comment: inputComment,
        postNum: props.post._id,
        writer: currentUser.user.id,
        _class : 0,
        // parentComment: "",
      })
      .then((res) => {
        console.log("post submit success");
        setreload(reload + 1);
      });
    setInputComment("");
  };

    const recommentSubmitHandler = (parent) => {
    // setreload(reload + 1);
    axios
      .post("post/comment/" + props.post._id, {
        comment: inputRecomment,
        postNum: props.post._id,
        writer: currentUser.user.id,
        _class : 1,
        parentComment: parent,
      })
      .then((res) => {
        console.log("post submit success");
        setreload(reload + 1);
      });
    setInputRecomment("");
  };

  
  return (
    <div className="ElseClubPostContainer">
      <div className="ElseClubPost">
        <h4>{props.post.title}</h4>
        <div className="ElseClubPost-sub">
          {props.post.category} | {props.post.writer}
        </div>
        <div>{props.post.writer===currentUser.user.id ? 
              <Link to={"/elseClub/updatePost/"+props.post.id} className="Posting"> 수정 </Link> 
              : <div></div>}
        </div>
        <div className="ElseClubPost-date">{moment(props.post.date).format('YYYY-MM-DD HH:mm:ss')}</div>
        <hr />
        {/* <div className="ElseClubPost-data">{props.post.content}</div> */}
        <div
          className="ElseClubPost-data"
          dangerouslySetInnerHTML={{ __html: props.post.content }}
        />
        <br />
        <br />
        <hr />

        <h5>댓글 {commentList.length} 개</h5>

        {commentList.map((cmt, index) => {
          let com = "first";
          if (cmt._class === 1) com = "second";

          return (
            <div className="ElseClubComment" key={cmt.id}>
              <hr />
              <div className={com}>
                <div className="cmtSmall">
                  <div className="cmtUser">
                    {/* user */}
                    {cmt.writer}
                    </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="cmtDate">{moment(cmt.date).format('YYYY-MM-DD HH:mm:ss')}</div>
                  &nbsp;&nbsp;&nbsp;

                  {com === "first" ? (
                    <div>
                      <BsArrowReturnRight
                        onClick={() => {
                          // console.log("click");
                          if (replyComment === index) setReplyComment(-1);
                          else setReplyComment(index);
                        }}
                      />
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
                {cmt.comment}

              </div>
              {replyComment === index ? (
                <div className="InputComment">
                  <textarea
                    placeholder={"댓글을 입력하세요."}
                    value={inputRecomment}
                    onChange={inputRecommentHandler}
                  />
                  <button
                    onClick={() => {
                      recommentSubmitHandler(cmt._id);
                    }}
                  >
                    입력
                  </button>
                </div>
              ) : (
                <div />
              )}
            </div>
          );
        })}

        <br />

        <div className="InputComment">
          <textarea
            placeholder={"댓글을 입력하세요."}
            value={inputComment}
            onChange={inputCommentHandler}
          />
          <button
            onClick={() => {
              commentSubmitHandler();
            }}
          >
            입력
          </button>
        </div>
      </div>
    </div>
  );
};
export default ElseClubPost;
