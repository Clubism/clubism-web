import React from 'react';
import PrivateInfo from './PrivateInfo';
import FavClubs from './FavClubs';
import FavKeywords from './FavKeywords';
import FavStudies from './FavStudies';
import SignOut from './SignOut';
const MyPageContent = ({index})=> {
  if(index===0){
    return <PrivateInfo />;
  } else if(index===1){
    return <FavKeywords />;
  } else if(index === 2){
    return <FavClubs />
  } else if(index===3){
   return <FavStudies />
  } else{
    return <SignOut />
  }
};

export default MyPageContent;