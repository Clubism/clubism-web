import React from "react";
import { useLocation } from "react-router-dom";
import "../style/ClubCategory.scss";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
const SubClubCategory = (props) => {
  let categoryList = [];
  const location = useLocation();
  categoryList = props.category;
  
  /*
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
  */
  return (
    <div className="ClubCategory">
      <Navigation
        activeItemId={location.pathname}
        items={categoryList}
      />
    </div>
  );
};
export default SubClubCategory;
