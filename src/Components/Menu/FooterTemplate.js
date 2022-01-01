import React from "react";
import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
const FooterTemplate = (props) => {
  return (
    <div>
      <Container>
        <Title>CLUBISM</Title>
        <Contact>Contact Us : About Team / <InstagramIcon style={{fontSize : "16px"}}/>&nbsp;clubismm / &nbsp;
        <MailOutlineOutlinedIcon style={{fontSize : "16px"}}/>&nbsp;mail@mail.com / ...</Contact>
      </Container>
    </div>
  );
};
export default FooterTemplate;

const Container = styled.div`
  position: absolute;
  bottom: -350px;
  width: 100%;
  height: 200px;
  color: white;
  margin-top: 100px;
  padding: 50px 30px;
  background-color: #042847;
  font-size : 14px;
`;

const Title = styled.div`
  font-family: "BebasNeue-Regular";
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Contact = styled.div``;
