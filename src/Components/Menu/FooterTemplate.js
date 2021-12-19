import React from "react";
import styled from "styled-components";

const FooterTemplate = (props) => {

  return (
    <div>
      <Container>
        <Title>CLUBISM</Title>
        <Contact>Contact Us : About Team / Instagram / E-mail / ...</Contact>
      </Container>
    </div>
  );
};
export default FooterTemplate;

const Container = styled.div`
  width: 100%;
  height: 200px;
  color: white;
  margin-top: 100px;
  padding: 50px 30px;
  background-color: #042847;
`;

const Title = styled.div`
  font-family: "BebasNeue-Regular";
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0.5px;
`

const Contact = styled.div`

`

