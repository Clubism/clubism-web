import React from 'react';
import Moment from 'react-moment'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';
import '../style/ClubList.scss';

import * as actions from '../../redux/actions/post';

const ClubList = ({posts})=>{
  const dispatch = useDispatch();
  return(
    <div className='ClubList'>
      {posts.map(post=>(
        <Link 
          to={"elseClub/post/" + post._id}
          className="link"
          onClick = {()=>{dispatch(actions.setPost(post._id))}}
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