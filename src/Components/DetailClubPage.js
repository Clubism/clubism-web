import React, {useState, useEffect} from 'react';
import './style/DetailClubPage.scss'

const DetailCulbPage = (props)=>{
  console.log(props);
  return (
      <div className="clubContainer">
        <div className="category">{props.selectedClub.category}</div>
        <div className="clubName">{props.selectedClub.name}</div>
        <div>{props.selectedClub.description}</div>
        <div>{props.selectedClub.deadline}</div>
      </div>
  )
};

export default DetailCulbPage;