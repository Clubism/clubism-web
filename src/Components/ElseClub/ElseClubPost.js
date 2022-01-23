import React, { useEffect, useState } from "react";
import "../style/ElseClubPost.scss";
import { BsArrowReturnRight } from "react-icons/bs";
<<<<<<< HEAD
import axios from "axios";
=======
import axios from "../../Assets/axios";
import moment from 'moment';
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b

const ElseClubPost = (props) => {
  const [reload, setreload] = useState(0);
  const [commentList, setCommentList] = useState([]);
  const [inputRecomment, setInputRecomment] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [replyComment, setReplyComment] = useState(-1);

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get("http://localhost:4000/post/comment/" + props.post._id)
      .then((res) => {
        setCommentList(res.data);
        console.log("comment", res.data);
        console.log("개수", commentList.length);
      });
    console.log("check");
  }, [reload, commentList.length, props.post._id]);

  const inputCommentHandler = (e) => {
    console.log(e.target.value);
    setInputComment(e.target.value);
  };

  const commentSubmitHandler = (param) => {
    setreload(reload + 1);
    axios
      .post("http://localhost:4000/post/comment/" + props.post._id, {
        comment: inputComment,
        postNum: props.post._id,
        class: param
      })
      .then((res) => {
        console.log("post submit success");
        // setInputComment('');
      });
    setInputComment("");
  };
=======
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
        _class : 1,
        parentComment: parent,
      })
      .then((res) => {
        console.log("post submit success");
        setreload(reload + 1);
      });
    setInputRecomment("");
  };
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b

  
  return (
    <div className="ElseClubPostContainer">
      <div className="ElseClubPost">
        <h4>{props.post.title}</h4>
        <div className="ElseClubPost-sub">
          {props.post.category} | {props.post.writer}
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
                    user
                    {/* {cmt.user} */}
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
<<<<<<< HEAD
=======

>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
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
<<<<<<< HEAD
                      commentSubmitHandler(1);
=======
                      recommentSubmitHandler(cmt._id);
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
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
<<<<<<< HEAD
              commentSubmitHandler(0);
=======
              commentSubmitHandler();
>>>>>>> 309377e6fd503e78f3542c12371cdcb013501c4b
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
