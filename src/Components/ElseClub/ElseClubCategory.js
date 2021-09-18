import React from 'react';
import '../style/ElseClubCategory.scss'

const ElseClubCategory = (props)=>{
  var categoryList = [];
  for(var i=0;i<props.category.length;i++){
    const value = props.category[i];
    console.log(value);
    categoryList.push(
      <li key={value.id}>
        <a onClick={function(e){
          e.preventDefault();
          props.setCategory(value.value);
        }}>{value.value}</a>
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