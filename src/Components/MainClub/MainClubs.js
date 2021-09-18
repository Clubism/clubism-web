import React, { useState, useEffect } from 'react';
import '../style/MainClubs.scss';

const Clubs = (props) => {
  const [Club, setClub] = useState([]);
  const [Filter, setFilter] = useState(Club);
  useEffect(() => {
    fetch('dummy/mainclublist.json')
      .then(res => res.json())
      .then(
        (result) => {
          setClub(result);
          setFilter(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  useEffect((data) => {
    if (props.category === '전체보기') setFilter(Club);
    else setFilter(Club.filter(data => data.category === props.category))
  }, [props.category, Club])

  return (
    <div className='clubContainer'>
      {Filter.map((mainClub, index) => (
        <div className='club' key={index} onClick={()=>{
          props.setDetailPage(true);
          props.setSelectedClub(mainClub)
        }}>
          <div className='clubText'>
            <div className='category'>
              {mainClub.category}
            </div>
            <div className='name'>
              {mainClub.name}
            </div>
            <div className='description'>
              {mainClub.description}
            </div>
            <div className='deadline'>
              {new Date() < new Date(mainClub.deadline) ? 'D - ' + (new Date(mainClub.deadline).getDate() - new Date().getDate()).toString() : "마감"}
            </div>
          </div>
          <div className='clubImage'>
            <img src="" alt="poster" />
          </div>
        </div>
      ))}
    </div>
  )
};

export default Clubs;