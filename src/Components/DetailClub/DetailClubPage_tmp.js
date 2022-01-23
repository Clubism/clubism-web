import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import FormData from "form-data";
// import {BrowserRouter, useHistory} from 'react-router-dom';

const DetailClubPage = () => {
  const [clubData, setClubData] = useState({});
  const [clubYear, setClubYear] = useState(0);
  const [clubRecruit, setClubRecruit] = useState({});
  const [img, setImg] = useState(undefined);
  var tmp = window.location.pathname.split("/")[3];

  const calcYear = (yearstring) => {
    var today = new Date();
    var birthDate = new Date(yearstring);
    var age = today.getFullYear() - birthDate.getFullYear() + 1;
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setClubYear(age);
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/mainClub/clubinfo/${tmp}`).then((res) => {
      setClubData(res.data[0]);
    });
    axios.get(`http://localhost:4000/mainClub/recruitment/`).then((res) => {
      setClubRecruit(res.data.find((dta) => dta.clubId.label === tmp));
    });
  }, [tmp]);
  useEffect(() => {
    calcYear(clubData.birth);
  }, [clubData]);

  const onFileChange = async () => {
    console.log("filechange!");
    var frm = new FormData();
    var photoFile = document.getElementById("poster");
    // frm.append("poster", photoFile.files[0]);
    frm.poster = photoFile.files[0];
    console.log(photoFile.files[0]);
    console.log(frm);

    axios.post(`http://localhost:4000/mainClub/clubinfo/${tmp}`, frm)
      // axios({
      //   method: "post",
      //   url: `http://localhost:4000/mainClub/clubinfo/${tmp}`,
      //   data: frm
      // })
      .then((response) => {
        // 응답 처리
        console.log(response);
      })
      .catch((error) => {
        // 예외 처리
        console.log(error);
      });
  };

  return (
    <div>
      <DetailPageContainer>
        <ClubNameContainer>{clubData.name}</ClubNameContainer>
        <>
          <input type="file" name="poster" id="poster" />
          <button
            onClick={() => {
              onFileChange();
            }}
          >
            submit
          </button>
        </>
        <ClubInfoContainer>
          <ClubInfo>현재인원 {clubData.memberNumber}</ClubInfo>
          <ClubInfo>전체인원 {clubData.memberTotal}</ClubInfo>
          <ClubInfo>동아리방 {clubData.room}</ClubInfo>
          <ClubInfo>햇수 {clubYear}</ClubInfo>
        </ClubInfoContainer>
      </DetailPageContainer>
    </div>
  );
};

const DetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ClubNameContainer = styled.div`
  width: 400px;
  background-color: blue;
  font-size: 30px;
`;

const ClubInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ClubInfo = styled.span`
  display: flex;
  justify-content: center;
  width: calc(100% / 4);
  font-size: 20px;
  background-color: pink;
`;

export default DetailClubPage;
