import React from 'react';
import Moment from 'react-moment'
import {Link} from "react-router-dom"
import '../style/ClubList.scss';

const ClubList = ({posts})=>{
  return(
    <div className='ClubList'>
      {posts.map(post=>(
        <Link 
          to={"elseClub/post/" + post._id}
          className="link"
        >
          <div className='Posts' key={post._id}>
            <div className='PostTitle'>
              {post.title}
            </div>
            <div className='PostDate'>
              <Moment format="YYYY/MM/DD">
              {post.date}
              </Moment>
            </div>
          </div>
        </Link>))}
    </div>
  )
};

export default ClubList;