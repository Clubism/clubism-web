import React from 'react';
import IndexTemplate from '../Components/IndexTemplate';
import MainClubPage from '../Components/MainClubPage';

const MainClub = ({ match }) => {
  return (
    <IndexTemplate><MainClubPage /></IndexTemplate>
  )
}

export default MainClub;