import React from "react";
import styled from "styled-components";
// import NavBar from "../../components/navbar/index";
import jennifer from "../../components/LeftLogin/assets/images/users/jennifer.png";

import { updateProfile } from "../../api/apiProfile";

//import headerpicture from "../../components/LeftLogin/assets/images/header.jpg";

/* const HeaderImage = styled.img`
height: 20%;

`; */


//****** Tenzin changes/ 
const BgHeroImg = styled.header `
    height: 200px;
    background-image: url("https://source.unsplash.com/user/erondu");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end; 
    align-items: center; 
    & > .fa-camera {
      color: white;
     margin-right: 250px;
     margin-bottom: 50px;
  }
 .upload {
     padding: 10px;
 }
`;

//****** */
const ProfileHeader = styled.header`
  max-width: 70rem;
  margin: -55px auto 50px;
  height: 350px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 4px 40px 4px #dedede;
  z-index: 1;
  background-color:white;
`;

const PersonContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #f5f5f5;
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  height: 90px;
  width: 90px;
`;

const EditProfileButton = styled.button`
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;

  :focus {
    outline: none;
    box-shadow: 0 0 10px #dedede; 
    border:1px solid #dedede;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InterestsContainer = styled.div`
  display: flex;
  height: 35%;
  width: 100%;
`;

const ThingsILike = styled.div`
  width: 50%;
  font-size: 12px;
  padding-top: 10px;
`;

const EmailPhoneContainer = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
  width: 50%;
`;

const PersonalData = styled.div`
  padding: 10px 10px 0 60px;
  font-size: 12px;
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DataContainer = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #f5f5f5;
`;

const Data = styled.div`
    padding: 15px;
    cursor: pointer;

  :hover {
    border-bottom: 2px solid #b192fe;
    color: black;
  }
`;

const Number = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 14px;
  color: grey;

  :hover {
    color: black;
  }
`;

const Profile = () => {
  // updating correctly! we need to use onChange and useState for each field
  const handleClick = (e) => {
    const asyncCall = async () => {
      if (localStorage.getItem("token")) {
        const response = await updateProfile({
          email: "agus.gonzalez@gmail.com",
        });
        console.log(response, "from edit profile");
      }
    };
    asyncCall();
  };

  return (
    <div>
      {/* <NavBar /> */}
      {/* <HeaderImage src={headerpicture}>
      </HeaderImage> */}
      <BgHeroImg>
       <i class="fas fa-camera"><span class="upload">Upload Image</span></i>
      </BgHeroImg>
      <ProfileHeader>
        <PersonContainer>
          <Person>
            <Avatar src={jennifer} alt="jennifer" />
            <h2>Name</h2>
            <p>Place</p>
            <EditProfileButton onClick={handleClick}>
              Edit Profile
            </EditProfileButton>
          </Person>
        </PersonContainer>
        <RightWrapper>
          <InterestsContainer>
            <PersonalData>
              <p>About</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </PersonalData>
            <ThingsILike>
              <p>Things I Like</p>
            </ThingsILike>
          </InterestsContainer>
          <EmailPhoneContainer>
            <PersonalData>
              <p>E-Mail</p>
              <p>test.test@test.ccom</p>
            </PersonalData>
            <PersonalData>
              <p>Phone</p>
              <p>078 099 99 09</p>
            </PersonalData>
          </EmailPhoneContainer>

          <DataContainer>
            <Data>
              <Number>120</Number>
              <Text>Posts</Text>
            </Data>
            <Data>
              <Number>500</Number>
              <Text>Likes</Text>
            </Data>
            <Data>
              <Number>70</Number>
              <Text>Friends</Text>
            </Data>
            <Data>
              <Number>300</Number>
              <Text>Followers</Text>
            </Data>
            <Data>
              <Number>45</Number>
              <Text>Following</Text>
            </Data>
          </DataContainer>
        </RightWrapper>
      </ProfileHeader>
    </div>
  );
};

export default Profile;
