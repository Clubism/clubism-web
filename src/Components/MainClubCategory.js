import React, { useState, useEffect } from 'react';
import './style/ClubCategory.scss'

const MainClubCategory = (props) => {
  const [ClubList, setClubList] = useState([]);
  const [ClubListFilter, setClubListFilter] = useState([]);

  useEffect(() => {
    fetch('dummy/clublist.json')
      .then(res => res.json())
      .then(
        (result) => {
          setClubList(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  useEffect((data) => {
    setClubListFilter(ClubList.filter(data => data.category === props.category))
  }, [props.category])

  return (
    <div className='ClubCategory'>
      <ul>
        {props.categoryList.map(data =>
          <li key={data.id}>
            <a onClick={function (e) {
              e.preventDefault();
              props.setCategory(data.value);
              console.log(data.title);
            }}>{data.value}</a>
            <ul className={(data.value === props.category) && props.category !== '전체보기' ? 'show-menu' : 'hide-menu'}>
              {ClubListFilter.map(data =>
                <li key={data.id}>{data.name}</li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};
export default MainClubCategory;