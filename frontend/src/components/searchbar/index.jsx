import React, { useState } from "react";
import styled from "styled-components";
import search from "../LeftLogin/assets/svgs/search_icon.svg";
import { searchApi } from "../../api/apiPosts";

const Wrapper = styled.div`
  width: 100vw;
`;
const SearchContainer = styled.div`
  margin: 0 auto;
  /* width: 100%; */
  max-width: 1200px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;
const InputField = styled.input`
  border: none;
  padding: 20px;
  background: transparent;
  margin-left: 20px;
  width: 40vw;

  :focus {
    outline: none !important;
    /* box-shadow: 0 0 10px #b192fe; */
    //border:1px solid #b192fe;
    border-bottom: 1px solid #b192fe;
  }
`;

const Magnifyer = styled.img`
  padding: 2px;
`;

const RightButtonContainer = styled.div`
  display: flex;
`;

const RightButton = styled.p`
  margin: 0 20px;
  color: grey;
  padding: 30px 0;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid black;
    color: black;
  }
`;
function Searchbar() {
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    console.log(term);
    setTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
    const asyncCall = async () => {
      const res = await searchApi(term);
      console.log(res);
    };
    asyncCall();
  };
  return (
    <Wrapper>
      <SearchContainer>
        <SearchBar>
          <Magnifyer src={search} />
          <form onSubmit={handleSubmit}>
            <InputField
              value={term}
              onChange={handleChange}
              type="text"
              placeholder="Search posts..."
            ></InputField>
          </form>
        </SearchBar>

        <RightButtonContainer>
          <RightButton>Liked</RightButton>
          <RightButton>Friends</RightButton>
          <RightButton>Follow</RightButton>
        </RightButtonContainer>
      </SearchContainer>
    </Wrapper>
  );
}

export default Searchbar;
