import React, {useEffect, useState} from 'react';
import '../style/ElseClubPost.scss'

const ElseClubPost = (props)=>{

  return(
      <div className="ElseClubPostContainer">
          <div className="ElseClubPost">
              <h4>{props.post.title}</h4>
            <div className="ElseClubPost-sub">{props.post.category} | {props.post.writer}</div>
            <div className="ElseClubPost-date">{props.post.date}</div>
            <hr />
            <div className="ElseClubPost-data">{props.post.desc}</div>
          </div>
       </div>
  );
};
export default ElseClubPost;