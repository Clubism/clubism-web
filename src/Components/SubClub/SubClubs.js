import React, { useState, useEffect } from "react";
import "../style/SubClubs.scss";
import { Link } from "react-router-dom";

const SubClubs = (props) => {
  const [Club, setClub] = useState([]);
  const [Filter, setFilter] = useState(Club);

  useEffect(() => {
    fetch("../dummy/subclubrecruitlist.json")
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

  useEffect(() => {
    if (props.category === undefined) setFilter(Club);
    else setFilter(Club.filter((data) => data.value === props.category));
  }, [props.category, Club]);

  console.log(Filter);
  return (
    <div className="clubContainer">
      {Filter.map((subClub, index) => (
        <div className="club" key={index}>
          <Link
            to={{ pathname: `/subClub/${subClub.value}/${subClub.label}` }}
            className="LinkTp"
          >
            <div className="clubText">
              <div className="category">{subClub.category}</div>
              <div className="name">{subClub.name}</div>
              <div className="description">{subClub.description}</div>
              <div className="deadline">
                {new Date() < new Date(subClub.deadline)
                  ? "D - " +
                    (
                      new Date(subClub.deadline).getDate() -
                      new Date().getDate()
                    ).toString()
                  : "마감"}
              </div>
            </div>
            <div className="clubImage">
              <img src="" alt="poster" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubClubs;
