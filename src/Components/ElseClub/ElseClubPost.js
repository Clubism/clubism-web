import React, {useEffect, useState} from 'react';
import '../style/ElseClubPost.scss'

const ElseClubPost = (props)=>{
  const [comment, setComment] = useState([]);

  useEffect(()=>{
    fetch('../dummy/elseclubcomment.json')
      .then(res=>res.json())
      .then(
        (result) =>{
          // console.log(props.post._id);
          // console.log(result);
          setComment(result.filter(data => data.postNum === props.post._id));
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  return(
      <div className="ElseClubPostContainer">
          <div className="ElseClubPost">
              <h4>{props.post.title}</h4>
            <div className="ElseClubPost-sub">{props.post.category} | {props.post.writer}</div>
            <div className="ElseClubPost-date">{props.post.date}</div>
            <hr />
            <div className="ElseClubPost-data">{props.post.desc}</div>
            <br /><br />
            <hr />

            <h5>댓글 {comment.length}개</h5>

            {comment.map((cmt, index) => {
              let com = "first";
              if(cmt.class===1) com = "second";

              return <div className="ElseClubComment" key = {cmt.id}>
                <hr />
                <div className={com}>
                  <div className="cmtSmall">
                    <div className="cmtUser">{cmt.user}</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="cmtDate">{cmt.date}</div>
                  </div>
                {cmt.comment}</div>
              </div>
            })}

            <br />
            <div className="InputComment">
              <input></input>
              <button>입력</button>
            </div>

        </div>
       </div>
  );
};
export default ElseClubPost;