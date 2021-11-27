import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import '../style/ElseClubCategory.scss'

import * as actions from '../../redux/actions/category';

const ElseClubCategory = ()=>{
  const ElseClubCategories = ["전체보기", "스터디", "프로젝트", "구독"];
  const dispatch = useDispatch();
  const [localCategory, localSetCategory] = useState("전체보기");

  const setCategory = useCallback((data)=>{
    localSetCategory(data);
    dispatch(actions.setCatetory(data));
  }, [localCategory, dispatch]);

  return(
    <div className='ElseClubCategory'>
        {ElseClubCategories.map((category, index)=>{
            return (
              <li key={index}>
                <Link to="#" className='link' onClick={(e)=>{
                  e.preventDefault();
                  setCategory(category);
                }}>{category}</Link>
              </li>
            )
        })}
      </div>
  );
};
export default ElseClubCategory;