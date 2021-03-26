import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logIn from "../../store/actions/login";
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


function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    props.logIn(credentials, history);
  };

  return (
    <>
      <MainWrapper>
        <PurpleStyle />
        <Rightwrapper>
          <SignUpWrapper>
            Don't have an account?
            <Link to="/signup">
              <TopRightButton>Sign Up</TopRightButton>
            </Link>
          </SignUpWrapper>
          <FormWrapper>
            <FormInnerWrapper>
              <h2>Sign In</h2>
              <form onSubmit={handleLogin}>
                <FormFieldWrapper>
                  <i className="fas fa-user-circle">{/* <UserAvatar /> */}</i>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="E-Mail"
                  />
                </FormFieldWrapper>
                <FormFieldWrapper>
                  <i className="fas fa-lock">{/* <Password /> */}</i>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                  />
                </FormFieldWrapper>
                <div className="signin-content">
                  <Button>SIGN IN</Button>
                </div>
              </form>
            </FormInnerWrapper>
          </FormWrapper>
        </Rightwrapper>
      </MainWrapper>
    </>
  );
}

export default connect(null, { logIn })(LoginForm);
