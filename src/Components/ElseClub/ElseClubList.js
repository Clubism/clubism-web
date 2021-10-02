import React, {useEffect, useState} from 'react';
// import { Route } from 'react-router-dom';
import '../style/ElseClubList.scss';
import {Link} from 'react-router-dom';

const ClubList = (props)=>{
  const [Post, setPost] = useState([]);
  const [Filter, setFilter] = useState(Post);
  useEffect(()=>{
    fetch('dummy/elseclublist.json')
      .then(res=>res.json())
      .then(
        (result) =>{
          setPost(result);
          setFilter(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  useEffect((data)=>{
    console.log(props.category);
    if(props.category==="전체보기") setFilter(Post);
    else setFilter(Post.filter(data=>data.category===props.category))
  }, [props])

  return(
    <div className='ElseClubList'>
      {/* <div className='Posting' onClick={()=>{
        props.setViewList(0);
      }}>
        글작성
      </div> */}
      <Link to= "/elseClub/posting" className='Posting'>글작성</Link>
      <div className='Posts'>
          <div>모집</div><div className='Title'>제목</div><div>작성일</div><div>작성자</div>
      </div>
      {Filter.map(post=>(
        <Link to="/elseClub/post" className='link' onClick={()=>{
          props.setPost(post);
        }}>
          <div className='Posts' key={post._id}>
          <div className='State'>
            {post.state ? "진행중" : "마감"}
          </div>
          <div className='Title'>
            {post.title}
          </div>
          <div>
            {post.date}
          </div>
          <div>
            {post.writer}
          </div>
        </div>
        </Link>  

        ))}
    </div>
  )
};

export default ClubList;