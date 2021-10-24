import React from "react";
import { Link } from "react-router-dom";
import "../style/ClubCategory.scss";

const SubClubCategory = (props) => {
  let categoryList = [];
  for (var i = 0; i < props.category.length; i++) {
    const value = props.category[i];
    categoryList.push(
      <li key={value.id}>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            props.setCategory(value.value);
            console.log(value.value);
          }}
        >
          {value.value}
        </Link>
      </li>
    );
  }
  return (
    <div className="ClubCategory">
      <ul>{categoryList}</ul>
    </div>
  );
};
export default SubClubCategory;
