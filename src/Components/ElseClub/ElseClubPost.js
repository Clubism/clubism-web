import React, { useEffect, useState } from "react";
import "../style/ElseClubPost.scss";
import { BsArrowReturnRight } from "react-icons/bs";
import axios from "axios"

const ElseClubPost = (props) => {
  const [reload, setreload] = useState(0);
  const [commentList, setCommentList] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [replyComment, setReplyComment] = useState(-1);

  
  useEffect(() => {
    axios.get('http://localhost:4000/post/comment/'+props.post._id)
    .then((res)=>{
      setCommentList(res.data);
      console.log("comment", res.data);
      console.log("개수", commentList.length);
    });
    console.log("check");
  }, [reload]);

  const inputCommentHandler = (e) => {
    console.log(e.target.value);
    setInputComment(e.target.value)
  }

  const commentSubmitHandler = (param) => {
    setreload(reload+1);
      axios.post("http://localhost:4000/post/comment/"+props.post._id, 
      {
        comment: inputComment,
        postNum: props.post._id,
        class: param,
      })
    .then((res)=>{
      console.log("post submit success");
      // setInputComment('');
    });
    setInputComment('');
  }
  

  return (
    <div className="ElseClubPostContainer">
      <div className="ElseClubPost">
        <h4>{props.post.title}</h4>
        <div className="ElseClubPost-sub">
          {props.post.category} | {props.post.writer}
        </div>
        <div className="ElseClubPost-date">{props.post.date}</div>
        <hr />
        {/* <div className="ElseClubPost-data">{props.post.content}</div> */}
        <div className="ElseClubPost-data" dangerouslySetInnerHTML={{__html:props.post.content}}></div>
        <br />
        <br />
        <hr />

        <h5>댓글 {commentList.length} 개</h5>

        {commentList.map((cmt, index) => {
          let com = "first";
          if (cmt.class === 1) com = "second";

          return (
            <div className="ElseClubComment" key={cmt.id}>
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
                {cmt.comment}
              </div>
              {replyComment === index ? 

                <div className="InputComment">
                  <textarea
                    placeholder={"댓글을 입력하세요."}
                    value={inputComment}
                    onChange={inputCommentHandler}
                  />
                  <button onClick={()=>{
                    commentSubmitHandler(1);
                  }}>입력</button>
                </div>  

               : <div />}
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
          <button onClick={()=>{commentSubmitHandler(0)}}>입력</button>
        </div>

      </div>
    </div>
  );
};
export default ElseClubPost;