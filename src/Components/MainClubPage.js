import React, { useState, useEffect } from 'react';
import MainClubCategory from './MainClubCategory';
import MainClubs from './MainClubs';
import DetailClubPage from './DetailClubPage';
import './style/ClubPage.scss';

const MainClubCategories = [
  { id: 0, title: 'all', value: '전체보기' },
  { id: 1, title: 'service', value: '봉사분과' },
  { id: 2, title: 'social', value: '사회교양분과' },
  { id: 3, title: 'art', value: '언행예술분과' },
  { id: 4, title: 'religion', value: '종교분과' },
  { id: 5, title: 'pe', value: '체육분과' },
  { id: 6, title: 'academic', value: '학술분과' }
];

const MainClubPage = () => {
  const [category, setCategory] = useState('전체보기');
  const [detailPage, setDetailPage] = useState(false);
  const [selectedClub, setSelectedClub] = useState({});


  return (
    <div className='ClubPage'>
      <MainClubCategory categoryList={MainClubCategories} setCategory={setCategory} category={category} />
      {detailPage ? <DetailClubPage selectedClub={selectedClub} /> : <MainClubs category={category} setDetailPage={setDetailPage} setSelectedClub={setSelectedClub} />}
    </div>
  )
};

export default MainClubPage;

