import React from 'react';
import '../style/ClubCategory.scss'

const SubClubCategory = (props)=>{
  let categoryList = [];
  for(var i=0;i<props.category.length;i++){
    const value = props.category[i];
    categoryList.push(
      <li key={value.id}>
        <a onClick={function(e){
          e.preventDefault();
          props.setCategory(value.value);
          console.log(value.value);
        }}>{value.value}</a>
      </li>
    )
  }
  return(
    <div className='ClubCategory'>
        <ul>
          {categoryList}
        </ul>
      </div>
  );
};
export default SubClubCategory;