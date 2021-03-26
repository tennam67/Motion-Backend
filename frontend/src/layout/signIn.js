import styled from "styled-components";
export const Button = styled.button`
  font-family: sans-serif;
  font-size: 12px;
  border: none;
  height: 60px;
  width: 260px;
  border: none;
  color: #ffffff;
  border-radius: 50px;
  background: linear-gradient(102deg, #c468ff, #6e91f6);
`;

export const Rightwrapper = styled.div`
  width: 70vw;
`;

export const FormWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    font-size: 48px;
    font-weight: 400;
    padding-bottom: 30px;
  }
`;

export const TopRightButton = styled.button`
  margin: 0 0 0 20px;
  border-radius: 50px;
  border: solid 1px #e6d8d8;
  background-color: white;

  height: 40px;
  width: 120px;
`;
export const SignUpWrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const MainWrapper = styled.section`
  min-height: 100vh;
  display: flex;
`;
export const FormFieldWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  & input {
    font-size: 16px;
    border: none;
    padding: 10px 10px 10px 0;
  }
  & input:focus {
    outline: none;
  }
  & .fas {
    margin-right: 10px;
    color: #6e91f6;
  }
`;
