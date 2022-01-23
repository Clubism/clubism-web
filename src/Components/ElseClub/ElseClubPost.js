import React, { useEffect, useState } from "react";
import "../style/ElseClubPost.scss";
import { BsArrowReturnRight } from "react-icons/bs";
import axios from "../../Assets/axios";
import moment from 'moment';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import Button from "react-bootstrap/Button";
import styled from 'styled-components';

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

  // useEffect(()=>{
  //   console.log("currentUser test", currentUser);
  // }, [])

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

   const deletePost = () => {
     if(window.confirm("게시글을 삭제하시겠습니까?")){
        //게시글 삭제 정보 전송
        axios
        .post("post/deletePost/"+props.post.id, {
        })
        .then((res) => {
            console.log("post submit success");
        });

        window.location.replace("/elseClub/all");
    }

  };
  
  return (
    <ElseClubWrapper>
      <ElseClubPostContainer>
        <h4>{props.post.title}</h4>
        <ElseClubPostSub>
          <Container1>
            {props.post.category} | {props.post.writer}
          </Container1>
          <Container2>
            {props.post.writer === currentUser.user.id ?
              <EditContainer>
                <Link to={"/elseClub/updatePost/" + props.post.id}><Button style={{'margin-right' : '10px'}}>수정</Button></Link>
                <Button onClick={deletePost}> 삭제 </Button>
              </EditContainer>
              : <div></div>}
          </Container2>

          
        </ElseClubPostSub>
          
          <ElseClubPostDate>
            {moment(props.post.date).format('YYYY-MM-DD HH:mm:ss')}
          </ElseClubPostDate>
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

          {commentList.map((cmt, index)=>{
            let com = "first";
            if (cmt._class === 1) com = "second";

            return (
              <ElseClubComment key={cmt.id}>
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
                  <InputComment>
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
                  </InputComment>
                ) : (
                  <div />
                )}
              </ElseClubComment>
            )
          })}
        <br />
        <InputComment>
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
        </InputComment>
      </ElseClubPostContainer>
    </ElseClubWrapper>
  );
};
export default ElseClubPost;

const Container1 = styled.div`
  font-size : small;
  display: inline-block;
  vertical-align: center;
`;

const Container2 = styled.div`
  display : inline-block;
  font-size : small;
`;

const EditContainer = styled.div`
  display : inline-block;
`;

const Button = styled.div`
  //width : 100px;
  //height : 30px;
  display : inline-block;
  text-align: center;
  padding : 4px 12px;
  border-radius : 8px;
  background-color : black;
  color : white;
`;

const ElseClubWrapper = styled.div`
  width: 70%;
  vertical-align: middle;
  margin: 30px auto;
  overflow-y: scroll;
`;

const ElseClubPostContainer = styled.div`
  margin: auto 20px;
  border: 0;
`;

const ElseClubPostSub = styled.div`
  display : flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom : 10px;
`;

const ElseClubPostDate = styled.div`
  font-size: small;
  text-align: end;
`;


const ElseClubComment = styled.div`
 border: 1px solid #ffffff;
  border: 0;
  .second {
    padding: 0px 20px;
  }
  .cmtSmall {
    font-size: small;
    display: flex;
    align-items: center;
    .cmtDate {
      color: #777777;
    }
  }
`;

const InputComment = styled.div`
  textarea {
      width: 85%;
      border: 1px solid #999999;
      margin: 5px;
      float: left;
    }
    button {
      width: 50px;
      height: 50px;
      background-color: #999999;
      color: #ffffff;
      border: 1px solid #999999;
      margin: 5px;
      display: inline-block;
    }
`;