import React, { useState, useEffect } from "react";
import "../style/SubClubs.scss";

const Clubs = (props) => {
  const [Club, setClub] = useState([]);
  const [Filter, setFilter] = useState(Club);
  useEffect(() => {
    fetch("dummy/subclublist.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setClub(result);
          setFilter(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect((data)=>{
    if(props.category==='전체보기') setFilter(Club);
    else setFilter(Club.filter(data=>data.category===props.category))
  }, [props, Club])

  return (
    <div className="sub_clubContainer">
      {Filter.map((mainClub, index) => (
        <div className="sub_club">
          <div className="sub_clubText">
            <div className="sub_category">{mainClub.category}</div>
            <div className="sub_name">{mainClub.name}</div>
            <div className="sub_description">{mainClub.description}</div>
            <div className="sub_deadline">
              {new Date() < new Date(mainClub.deadline)
                ? "D - " +
                  (
                    new Date(mainClub.deadline).getDate() - new Date().getDate()
                  ).toString()
                : "마감"}
            </div>
          </div>
          <div className="sub_clubImage">
            <img src="" alt="poster" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clubs;
