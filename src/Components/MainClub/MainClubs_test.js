import React, { useState, useEffect } from "react";
import "../style/MainClubs.scss";
import { Link } from "react-router-dom";

const ClubsTest = (props) => {
  const [Club, setClub] = useState([]);
  const [Filter, setFilter] = useState(Club);

  var fetchURL;
  if (props.category === undefined) fetchURL = "";
  else if (props.category !== undefined && props.name === undefined)
    fetchURL = "../";

  useEffect(() => {
    fetch(fetchURL + "dummy/mainclublist.json")
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
  }, [fetchURL]);

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

export default ClubsTest;
