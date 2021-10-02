import React, {useEffect, useState} from 'react';
import '../style/ElseClubPost.scss'

const ElseClubPost = (props)=>{

    console.log(props);
  return(
      <div class="ElseClubPostContainer">
          <div class="ElseClubPost">
              <h4>{props.post.title}</h4>
            <div class="ElseClubPost-sub">{props.post.category} | {props.post.writer}</div>
            <div class="ElseClubPost-date">{props.post.date}</div>
            <hr />
            <div class="ElseClubPost-data">{props.post.desc}</div>
          </div>
       </div>
  );
};
export default ElseClubPost;