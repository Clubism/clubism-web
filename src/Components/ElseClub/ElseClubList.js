import React, {useEffect, useState} from 'react';
import '../style/ElseClubList.scss';

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
    if(props.category===0) setFilter(Post);
    else setFilter(Post.filter(data=>data.category_id===props.category))
  }, [props])

  return(
    <div className='ClubList'>
      <div className='Posts'>
          <div>모집</div><div className='Title'>제목</div><div>작성일</div><div>작성자</div>
      </div>
      {Filter.map(post=>(
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
        </div>))}
    </div>
  )
};

export default ClubList;