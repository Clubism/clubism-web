import React from 'react';
import IndexTemplate from '../Components/IndexTemplate';
import MainClubPage from '../Components/MainClub/MainClubPage';

const MainClub = (props) => {
  const {params}=props.match;
  // console.log(params.category, params.name);

  return (
    <IndexTemplate><MainClubPage category={params.category} name={params.name} /></IndexTemplate>
  )
}

export default MainClub;