import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../Assets/axios";
//import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";


const SubClubRecruitment = (props) => {
  const [mainClub, setMainClub] = useState([]);
  const [subClub, setSubClub] = useState([]);
  const [subClubCategory, setSubClubCategory] = useState([]);
  const [club, setClub] = useState("");
  const [clubName, setClubName] = useState("");
  const [type, setType] = useState("mainClub");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);

  useEffect(() => {
    axios.get("mainClub/clubs")
    .then((res) => {
      setMainClub(res.data);
    });

    axios.get("../../dummy/departments.json")
    .then((res) => {
      setSubClubCategory(res.data);
    });

    axios.get("subClub/clubs")
    .then((res)=>{
      setSubClub(res.data);
    })
  }, []);

  const onClubChange = (e)=>{
    setClub(e.target.value);
  }


  const onSubmitClick = ()=>{
    axios.post("recruitment/post", {
      type : type,
      club : club,
      description : description,
      clubName : clubName,
      deadline : date
    }).then(()=>{
      alert("제출이 완료됐습니다!");
      
    })
  }

  const mainClubs = mainClub.map((item)=>{
    return (<MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>)
  })

  const subClubCategories = subClubCategory.map((item) => {
    return <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>;
  });
  

  return (
    <Container>
      <TypeContainer>
        <Type>
          <TypeRadio
            type="radio"
            name="type"
            value="mainClub"
            onClick={(e) => setType(e.target.value)}
          />
          <TypeLabel for="mainClub">중앙 동아리</TypeLabel>
        </Type>
        <Type>
          <TypeRadio
            type="radio"
            name="type"
            value="subClub"
            onClick={(e) => setType(e.target.value)}
          />
          <TypeLabel for="subClub">단과대 동아리 / 학회</TypeLabel>
        </Type>
      </TypeContainer>

      <ClubContainer>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>동아리 선택</InputLabel>
          <Select value={club} label="club" onChange={onClubChange}>
            {type === "mainClub" ? mainClubs : subClubCategories}
          </Select>
        </FormControl>
      </ClubContainer>

      <SubClubContainer>
        {type === "subClub" ? (
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>동아리 선택</InputLabel>
            <Select
              value={clubName}
              label="clubName"
              onChange={(e) => {
                setClubName(e.target.value);
              }}
            >
              {subClub.filter((item) => item.major === club).map((item) => {
                return <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        ) : (
          <div />
        )}
      </SubClubContainer>

      <InputContainer>
        <label for="description" style={{ display: "block" }}>
          description
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          cols="33"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </InputContainer>

      <DeadlineContainer>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="deadline"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </DeadlineContainer>

      <Submit type="submit" onClick={onSubmitClick} />
    </Container>
  );
};

const Container = styled.div`
  width: 900px;
  height: 600px;
  margin: auto;
`;

const TypeContainer = styled.div`
  display: absolute;
  margin: auto;
`;

const Type = styled.div`
  margin: 20px;
  display: inline-block;
`;

const TypeRadio = styled.input`
  margin: 5px;
  border-color: black;
  &:checked {
    border-color: red;
  }
`;

const InputContainer = styled.div`
  
`;

const TypeLabel = styled.label``;

const ClubContainer = styled.div``;

const SubClubContainer = styled.div`

`;

const SubClubInput = styled.input``;

const DeadlineContainer = styled.div``;

const Submit = styled.input``;


export default SubClubRecruitment;
