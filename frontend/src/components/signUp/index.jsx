import React, { useState } from "react";
import { Link } from "react-router-dom";
import setSignUp from "../../store/actions/registration";
import { connect } from "react-redux";
import { PurpleStyle } from "../LeftLogin";
import {
  MainWrapper,
  Rightwrapper,
  SignUpWrapper,
  TopRightButton,
  FormWrapper,
  FormInnerWrapper,
  FormFieldWrapper,
  Button,
} from "../../layout/signIn";

const SignUp = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSignUp({ email });
  };

  return (
    <>
      <MainWrapper>
        <PurpleStyle />
        <Rightwrapper>
          <SignUpWrapper>
            Don't have an account?
            <Link to="/">
              <TopRightButton>Sign In</TopRightButton>
            </Link>
          </SignUpWrapper>
          <FormWrapper>
            <FormInnerWrapper>
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <FormFieldWrapper>
                  <i className="fas fa-envelope"></i>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="E-Mail"
                  />
                </FormFieldWrapper>
                <div className="signin-content">
                  <Button>CONTINUE</Button>
                </div>
              </form>
            </FormInnerWrapper>
          </FormWrapper>
        </Rightwrapper>
      </MainWrapper>
    </>
  );
};

export default connect(null, { setSignUp })(SignUp);
