import React, { useState } from "react";
import MainClubCategory from "./MainClubCategory";
import MainClubs from "./MainClubs";
import DetailClubPage from "../DetailClub/DetailClubPage";
import "../style/ClubPage.scss";

const MainClubCategories = [
  { id: 0, value: "all", title: "전체보기", itemId: "/mainClub", subNav: [] },
  { id: 1, value: "service", title: "봉사분과", itemId: "/mainClub/service", subNav: []},
  {
    id: 2,
    value: "social",
    title: "사회교양분과",
    itemId: "/mainClub/social",
    subNav: []
  },
  {
    id: 3,
    value: "art",
    title: "언행예술분과",
    itemId: "/mainClub/art",
    subNav: []
  },
  {
    id: 4,
    value: "religion",
    title: "종교분과",
    itemId: "/mainClub/religion",
    subNav: []
  },
  { id: 5, value: "pe", title: "체육분과", itemId: "/mainClub/pe", subNav: [] },
  {
    id: 6,
    value: "academic",
    title: "학술분과",
    itemId: "/mainClub/academic",
    subNav: []
  }
];

const MainClubPage = (props) => {
    // const {params}=props.match;
    console.log(props);
  const [category, setCategory] = useState("전체보기");
  const [detailPage, setDetailPage] = useState(false);
  const [selectedClub, setSelectedClub] = useState({});

  return (
    <div className="ClubPage">
      <MainClubCategory
        categoryList={MainClubCategories}
        setCategory={setCategory}
        category={category}
      />
      {detailPage ? (
        <DetailClubPage selectedClub={selectedClub} />
      ) : (
        <MainClubs
          category={category}
          setDetailPage={setDetailPage}
          setSelectedClub={setSelectedClub}
        />
      )}
    </div>
  );
};

export default MainClubPage;
