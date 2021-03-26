import styled from "styled-components";

export const Grid = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: masonry;
  grid-auto-flow: dense;
  grid-gap: 1em; */
  /* align-tracks: end; */
  display: column;
  columns: 2;
  gap: 2em;
  & > * {
    break-inside: avoid;
  }
`;
export const Content = styled.div`
  box-shadow: -1px 5px 13px -5px rgba(0, 0, 0, 0.3);
  padding: 15px;
  margin-bottom: 30px;
`;
export const Main = styled.div`
  height: 100vh;
`;
export const Nav = styled.nav`
  /* margin-bottom: 50px; */
  /* padding: 20px; */
  box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.36);
`;
export const SearchNav = styled.div`
  margin-bottom: 50px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  /* height: 120px;
      width: 560px; */
  & .far {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    background-color: #6e91f6;
    color: white;
  }
  & img {
    width: 70px;
    height: 70px;
    border-radius: 50px;
  }
  & input {
    margin-left: 28.8px;
    margin-right: 10px;
    width: 20vw;
    background: none;
    border: none;
    font-size: 16px;
    color: black;
    opacity: 0.5;
    :focus {
      outline: none;
    }
  }
  
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  & .social-media-buttons {
    display: flex;
  }
  & .share {
    display: flex;
  }
  & .share {
    color: #d8d8d8;
    margin-right: 10px;
    align-items: center;
  }
  & .fa-share {
    color: #d8d8d8;
    margin-right: 10px;
  }
  & .like {
    display: flex;
    margin-right: 10px;
    align-items: center;
  }
  & .like {
    color: #d8d8d8;
    margin-right: 10px;
  }
  & .fa-heart {
    color: #d8d8d8;
    margin-right: 10px;
  }
`;
// export const Image = styled.div`
// display: grid;
//   grid-template-columns: repeat(1fr); /* see notes below */
//   grid-gap: 1em;

// `

export const Post = styled.div`
  background-color: white;
  /* background-color: white;
      box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.36);  */
  & .posts-details  {
    display: flex;
    justify-content: space-between;
  }
  & .moredetails {
    color: #d8d8d8;
  }
  & .user-detials {
    display: flex;
    align-items: center;
  }
  & .user-detials > img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }
  & .fa-ellipsis-v {
    color: #d8d8d8;
  }

  & .pictures {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  & .postImage{
    width: 200px;
    height: 200px;
  }
  & .pictures > img {
    margin: 10px;
    display: block;
    border-radius: 5px;
  }
  & .userpost-time {
    margin-left: 10px;
     p:nth-child(2) {
      font-size: 14px;
      color: #d8d8d8;
    }
  }
`;

export const FormStyle = styled.form`
  display: flex;
`;

export const PostButton = styled.i`
  cursor: pointer;

  :hover {
    background-color: #ac73fc;
  }
`;
