import React, { useState } from "react";
import { MainWrapper, Rightwrapper, FormWrapper } from "../../layout/signIn";
import {
  FormInnerWrapper,
  FormFieldContainer,
  FormFieldWrapper,
  FormFieldLongInput,
  ButtonWrapper,
  Button,
  Form,
} from "../../layout/verificationStyle";
import { PurpleStyle } from "../LeftLogin";
import history from "../../history";
import { verification } from "../../api/verification";

const VerificationForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [password_repeat, setPassordRepeat] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const handleVerification = async (e) => {
    e.preventDefault();
    const data = await verification({
      email,
      username,
      code,
      password,
      password_repeat,
      first_name,
      last_name,
    });
    return data.status >= 200 || data.status <= 300
      ? history.push("/")
      : "FAILED TO VERIFY";
  };

  return (
    <>
      <MainWrapper>
        <PurpleStyle />
        <Rightwrapper>
          <FormWrapper>
            <FormInnerWrapper>
              <h2>Verification</h2>
              <Form onSubmit={handleVerification}>
                <div>
                  <FormFieldLongInput>
                    <input
                      onChange={(e) => setCode(e.target.value)}
                      value={code}
                      type="text"
                      placeholder="Validation code"
                    />
                  </FormFieldLongInput>
                </div>
                <FormFieldContainer>
                  <FormFieldWrapper>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="text"
                      placeholder="E-Mail"
                    />
                  </FormFieldWrapper>
                  <FormFieldWrapper>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      type="text"
                      placeholder="Username"
                    />
                  </FormFieldWrapper>
                </FormFieldContainer>
                <FormFieldContainer>
                  <FormFieldWrapper>
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      value={first_name}
                      type="text"
                      placeholder="First Name"
                    />
                  </FormFieldWrapper>
                  <FormFieldWrapper>
                    <input
                      onChange={(e) => setLastName(e.target.value)}
                      value={last_name}
                      type="text"
                      placeholder="Last Name"
                    />
                  </FormFieldWrapper>
                </FormFieldContainer>
                <FormFieldContainer>
                  <FormFieldWrapper>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      placeholder="Password"
                    />
                  </FormFieldWrapper>
                  <FormFieldWrapper>
                    <input
                      onChange={(e) => setPassordRepeat(e.target.value)}
                      value={password_repeat}
                      type="password"
                      placeholder="Password Repeat"
                    />
                  </FormFieldWrapper>
                </FormFieldContainer>
                <ButtonWrapper>
                  <Button>COMPLETE</Button>
                </ButtonWrapper>
              </Form>
            </FormInnerWrapper>
          </FormWrapper>
        </Rightwrapper>
      </MainWrapper>
    </>
  );
};

export default VerificationForm;
