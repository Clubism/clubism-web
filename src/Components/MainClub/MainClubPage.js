// import React, { useState, useEffect } from "react";
// import MainClubCategory from "./MainClubCategory";
// import MainClubs from "./MainClubs";
// import DetailClubPage from "../DetailClub/DetailClubPage";
// import "../style/ClubPage.scss";

<<<<<<< HEAD
<<<<<<< HEAD
const MainClubPage = (props) => {
  // const {params}=props.match;
  console.log(props.category, props.name);
  const [category, setCategory] = useState("전체보기");
  const [detailPage, setDetailPage] = useState(false);
  const [selectedClub, setSelectedClub] = useState({});
  const [mainCategory, setMainCategory] = useState({});
=======
// const MainClubPage = (props) => {
//     // const {params}=props.match;
>>>>>>> 8a9ae42796060ab3199105bc1adecc981035bd7b
=======
// const MainClubPage = (props) => {
//     // const {params}=props.match;
>>>>>>> 2ab081a13079669e4a6df75fa728f10cb0480a2c

//   const [category, setCategory] = useState("전체보기");
//   const [detailPage, setDetailPage] = useState(false);
//   const [selectedClub, setSelectedClub] = useState({});
//   const [mainCategory, setMainCategory] = useState({});

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    if (props.name !== undefined) {
      setDetailPage(true);
      setSelectedClub(props.name);
    }
  }, [props.name, detailPage]);

  // useEffect(()=>{
  //   clubOnClick();
  // },[selectedClub])
=======
=======
>>>>>>> 2ab081a13079669e4a6df75fa728f10cb0480a2c
//   // useEffect(() => {
//   //   fetch("dummy/maincategorylist.json")
//   //     .then((res) => res.json())
//   //     .then(
//   //       (result) => {
//   //         setMainCategory(result);
//   //       },
//   //       (error) => {
//   //         console.log(error);
//   //       }
//   //     );
//   // }, []);
<<<<<<< HEAD
>>>>>>> 8a9ae42796060ab3199105bc1adecc981035bd7b
=======
>>>>>>> 2ab081a13079669e4a6df75fa728f10cb0480a2c

//   useEffect(()=>{
//     if(props.name!==undefined){
//       setDetailPage(true);
//       setSelectedClub(props.name);
//     }
//   }, [props.name, detailPage])

//   return (
//     <div className="ClubPage">
//       {detailPage ? (
//         <DetailClubPage selectedClub={selectedClub} />
//       ) : (
//         <MainClubs
//           category={category}
//           setDetailPage={setDetailPage}
//           setSelectedClub={setSelectedClub}
//           categoryvalue = {props.category}
//         />
//       )}
//     </div>
//   );
// };

// export default MainClubPage;
