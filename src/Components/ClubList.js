import React from 'react';
import './style/ClubList.scss';

const Posts = [
  {
    _id : 1,
    title : '[스겜 99기 모집] E-SPORTS 동아리 스겜에서 신입 부원을 모집합니다',
    descriptions : '내용내용내용내용내용내용내용내용',
    date : '2021.08.25'
  },
  {
    _id : 2,
    title : '[어비스 14기 모집] 중앙 흑인 음악 동아리 어비스에서 신입 부원을 모집합니다',
    descriptions : '내용내용내용내용내용내용내용내용',
    date : '2021.08.25'
  },
  {
    _id : 3,
    title : '컴퓨터공학과 학회 RELEASE에서 신입 부원을 모집합니다',
    descriptions : '내용내용내용내용내용내용내용내용',
    date : '2021.08.24'
  },
  {
    _id : 4,
    title : '[CNU 신입 부원 모집] CNU NOW RECRUITING',
    descriptions : '내용내용내용내용내용내용내용내용',
    date : '2021.08.24'
  },
  {
    _id : 5,
    title : '[기상 인증] 기상 인증 1분 더 모집합니다',
    descriptions : '내용내용내용내용내용내용내용내용',
    date : '2021.08.24'
  }
];

const ClubList = ()=>{
  return(
    <div className='ClubList'>
      {Posts.map(post=>(
        <div className='Posts' key={post._id}>
          <div className='PostTitle'>
            {post.title}
          </div>
          <div className='PostDate'>
            {post.date}
          </div>
        </div>))}
    </div>
  )
};

export default ClubList;