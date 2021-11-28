import React, { useEffect, useState } from "react";
import Moment from 'react-moment'
import "../style/ElseClubPost.scss";
import { BsArrowReturnRight } from "react-icons/bs";
import { Form, Button } from 'react-bootstrap';
import axios from "axios"

const ElseClubPost = ({post}) => {
  const comments = []; // 백에서 가져온 댓글들

  //const [comment, setcomment] = useState('');
  
  
  const [comment, setComment] = useState({
    content : "",
    postNum : post.postNum,
    class : 0,
    writer : "",
  });
  const [replyComment, setReplyComment] = useState(-1);
/*
  {
    "id": 1,
    "comment": "댓글1",
    "postNum": 1,
    "class": 0,
    "order": 1,
    "groupNum": 0,
    "date": "2021-10-30 02:34:50",
    "user": "user1"
  },
*/

  // 처음에 게시글이 로드될 때 서버에서 댓글 가져오기
  useEffect(() => {
    axios.get(`post/comment/${post._id}.`).then((res)=>{
      comments = JSON.parse(res.data);
      //setComment(JSON.parse(res.data));
    });
  /*
    fetch("../dummy/elseclubcomment.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setComment(result.filter((data) => data.postNum === props.post._id));
        },
        (error) => {
          console.log(error);
        }
      );
  */
  }, []);

  // 댓글 submit event가 발생했을 때
  const onCommentSubmit = (e)=>{
    e.preventDefault();
    console.log('comment submit called\n');
    console.log(comment);
    /*
    comment : "",
    postNum : post.postNum,
    class : 0,
    date : "",
    writer : "",
    */
    axios.post(`http://localhost:4000/post/comment/${post._id}`, comment)
    .then((res)=>{

    })
    .catch((err)=>{
      console.log(err);
    });
  };
  
  // 댓글을 작성하는 컴포넌트
  const InputComment = () => (
    <div className="InputComment">
      <Form onSubmit={(e)=>{onCommentSubmit(e)}}>
        <Form.Group className="mb-3" >
          <Form.Control 
            as="textarea" 
            row={3} 
            value={comment.content}
            onChange = {(e)=>{setComment({...comment, content : e.target.value})}}
          />
        </Form.Group>
        <Button>입력</Button>
      </Form>
    </div>
  );

  return (
    <div className="ElseClubPostContainer">
      <div className="ElseClubPost">
        <h4>{post.title}</h4>
        <div className="ElseClubPost-sub">
          {post.category}&nbsp;|&nbsp;{post.writer}
        </div>
        <div className="ElseClubPost-date">
          <Moment format="YYYY/MM/DD">
          {post.date}
          </Moment>
        </div>
        <hr />
        <div className="ElseClubPost-data">{post.content}</div>
        <br />
        <br />
        <hr />

        <h5>댓글 {comments.length}개</h5>

        {comments.map((cmt, index) => {
          let com = "first";
          if (cmt.class === 1) com = "second";

          return (
            <div className="ElseClubComment" key={cmt._id}>
              <hr />
              <div className={com}>
                <div className="cmtSmall">
                  <div className="cmtUser">{cmt.user}</div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="cmtDate">{cmt.date}</div>
                  &nbsp;&nbsp;&nbsp;
                  {com === "first" ? (
                    <div>
                      <BsArrowReturnRight
                        onClick={() => {
                          console.log("click");
                          if (replyComment === index) setReplyComment(-1);
                          else setReplyComment(index);
                        }}
                      />
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
                {cmt.content}
              </div>
              {replyComment === index ? <InputComment /> : <div />}
            </div>
          );
        })}

        <br />
        
        <div className="InputComment">
      <Form onSubmit={(e)=>{onCommentSubmit(e)}}>
        <Form.Group className="mb-3" 
        onChange = {
          (e)=>{setComment({...comment, content : e.target.value})}}>
          <Form.Control 
            as="textarea" 
            row={3} 
            value={comment.content}
          />
        </Form.Group>
        <Button type="submit">입력</Button>
      </Form>
      </div>

      </div>
    </div>
  );
};
export default ElseClubPost;
