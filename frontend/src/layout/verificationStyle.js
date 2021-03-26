import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 12px;
  border: none;
  height: 60px;
  width: 19em;
  border: none;
  color: #ffffff;
  border-radius: 50px;
  background: linear-gradient(102deg, #c468ff, #6e91f6);
`;

export const Form = styled.form`
  width: 26em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormInnerWrapper = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h2 {
    font-size: 2.5rem;
    font-weight: 400;
    padding-bottom: 30px;
  }
`;
export const FormFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FormFieldLongInput = styled.div`
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
  display: flex;
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

export const FormFieldWrapper = styled.div`
  width: 47%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
  display: flex;
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
