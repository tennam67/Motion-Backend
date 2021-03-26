import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  MainWrapper,
  Rightwrapper,
  FormWrapper,
  FormInnerWrapper,
  Button,
} from "../../layout/signIn";
import { PurpleStyle } from "../LeftLogin";
import checkmark from "./checkmark.png";
import { findRenderedComponentWithType } from "react-dom/test-utils";

/* const CongratsHeadline = styled.h2`
    font-size: 48px;
    font-weight: 300;
    padding-bottom: 30px;
    font-weight: 400;
  `; */

const TextStyle = styled.p`
  text-align: center;
  color: grey;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const Checkmark = styled.img`
  width: 100px;
  height: 100px;
`;

const Congratulations = (props) => {
  return (
    <MainWrapper>
      <PurpleStyle />
      <Rightwrapper>
        <FormWrapper>
          <FormInnerWrapper>
            <h2>Congratulations!</h2>
            <Checkmark src={checkmark} />
            <TextStyle>
              We've sent a confirmation code to your email <br></br>
              {props.signupData.email}
            </TextStyle>
            <Link to="/verification">
              <Button>CONTINUE</Button>
            </Link>
          </FormInnerWrapper>
        </FormWrapper>
      </Rightwrapper>
    </MainWrapper>
  );
};
const mapStateToProps = (state) => {
  return { signupData: state.email };
};

export default connect(mapStateToProps)(Congratulations);
