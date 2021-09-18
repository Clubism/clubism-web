import React from 'react';
import {Link} from 'react-router-dom';
import '../style/ElseClubCategory.scss'

const ElseClubCategory = (props)=>{
  var categoryList = [];
  for(var i=0;i<props.category.length;i++){
    const value = props.category[i];
    console.log(value);
    categoryList.push(
      <li key={value.id}>
        <Link to="#" className='link' onClick={(e)=>{
          e.preventDefault();
          props.setCategory(value.id);
        }}>{value.value}</Link>  

      </li>
    )
  }
  return(
    <div className='ElseClubCategory'>
        <ul>
          {categoryList}
        </ul>
      </div>
  );
};
export default ElseClubCategory;