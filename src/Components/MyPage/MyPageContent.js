import React from 'react';
import PrivateInfo from './PrivateInfo';
import FavClubs from './FavClubs';
import FavKeywords from './FavKeywords';
import FavStudies from './FavStudies';
import SignOut from './SignOut';

const MyPageContent = ({category})=> {
  if(category==='privateInfo'){
    return <PrivateInfo />;
  } else if(category==='favKeywords'){
    return <FavKeywords />;
  } else if(category === 'favClubs'){
    return <FavClubs />
  } else if(category === 'favStudies'){
   return <FavStudies />
  } else{
    return <SignOut />
  }
};

export default MyPageContent;