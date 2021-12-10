import React, { useState, useEffect } from "react";
import "../style/MainClubs.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const MainClubs = (props) => {
  const [Club, setClub] = useState([]);
  const [Filter, setFilter] = useState(Club);

  useEffect(() => {
    axios.get("../../dummy/mainclubrecruitlist.json").then((res) => {
      setClub(res.data);
      setFilter(res.data);
    });
  }, []);

  useEffect(() => {
    if (props.category === undefined) setFilter(Club);
    else setFilter(Club.filter((data) => data.value === props.category));
  }, [props.category, Club]);

  console.log(Filter);
  return (
    <div className="clubContainer">
      {Filter.map((mainClub, index) => (
        <div className="club" key={index}>
          <Link
            to={{ pathname: `/mainClub/${mainClub.value}/${mainClub.label}` }}
            className="LinkTp"
          >
            <div className="clubText">
              <div className="category">{mainClub.category}</div>
              <div className="name">{mainClub.name}</div>
              <div className="description">{mainClub.description}</div>
              <div className="deadline">
                {new Date() < new Date(mainClub.deadline)
                  ? "D - " +
                    (
                      new Date(mainClub.deadline).getDate() -
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

export default MainClubs;
