import React, { useState, useEffect } from "react";
import MainClubCategory from "./MainClubCategory";
import MainClubs from "./MainClubs";
import DetailClubPage from "../DetailClub/DetailClubPage";
import "../style/ClubPage.scss";

const MainClubPage = (props) => {
    // const {params}=props.match;
  console.log(props.category, props.name);
  const [category, setCategory] = useState("전체보기");
  const [detailPage, setDetailPage] = useState(false);
  const [selectedClub, setSelectedClub] = useState({});
  const [mainCategory, setMainCategory] = useState({});

  // useEffect(() => {
  //   fetch("dummy/maincategorylist.json")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setMainCategory(result);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }, []);

  useEffect(()=>{
    if(props.name!==undefined){
      setDetailPage(true);
      setSelectedClub(props.name);
    }
  }, [props.name, detailPage])

  return (
    <div className="ClubPage">
      {detailPage ? (
        <DetailClubPage selectedClub={selectedClub} />
      ) : (
        <MainClubs
          category={category}
          setDetailPage={setDetailPage}
          setSelectedClub={setSelectedClub}
          categoryvalue = {props.category}
        />
      )}
    </div>
  );
};

export default MainClubPage;
