import styled from "styled-components";
import Navbar from "../navbar/index";

const MainContent = styled.div`
  min-height: 100vh;
`;

const NavProfile = styled.div`
  box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.36);
`;

const BgHeroImg = styled.header`
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
const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  margin-top: -100px;
  width: 70vw;
  height: auto;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.36);
`;

const ProfileDetail = styled.div`
  width: 25vw;
  border-right: 2px solid rgba(0, 0, 0, 0.16);
  padding: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 15px;
  & img {
    margin-top: 5px;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100px;
    height: 100px;
    border: 2px solid #fffbfb;
    border-radius: 60px;
  }
  & .updateImageButton {
    margin-top: 20px;
    margin-bottom: 40px;
    width: 10rem;
    background: #e3e6e8;
    padding: 13px;
    border-radius: 29px;
    color: #000000;
    border: 1px solid lightgray;
  }
  & .uploadImageButton {
    margin-bottom: 5px;
    width: 10rem;
    background: #e3e6e8;
    padding: 13px;
    border-radius: 5px;
    color: #000000;
    border: 1px solid lightgray;
  }
`;

const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 200px;
  & button {
    margin: 5px;
    width: 10rem;
    background: #e3e6e8;
    padding: 13px;
    border-radius: 29px;
    color: #000000;
    border: 1px solid lightgray;
    :nth-child(2) {
      background-color: #b170fd;
      color: #ffffff;
    }
    :hover {
      border-top-color: #bcc8d1;
      background: #bcc8d1;
      color: #ffffff;
    }
    :active {
      border-top-color: #1b435e;
      background: #1b435e;
    }
  }
`;

const FormDetails = styled.div`
  padding: 20px;
  width: 50vw;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  & .inputField {
    border: none;
    margin-bottom: 20px;
    width: 250px;
    height: 50px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  }
`;

const ThingLikeTag = styled.div`
  margin-left: 30px;
`;

const AddTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: auto;
    height: 30px;
    background-color: rgb(193, 194, 196);
    color: white;
    border: none;
    cursor: pointer;
    padding: 2px 12px 2px 12px;
    text-decoration: none;
    margin: 5px;
    i {
      margin-left: 10px;
    }
  }
`;

const TagInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .tagInputField {
    border: none;
    margin-bottom: 20px;
    width: 400px;
    height: 50px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  }
  & .addButton {
    width: 60px;
    margin-top: 30px;
    padding: 5px;
    border-radius: 29px;
    border: 1px solid lightgray;
    margin-bottom: 20px;
    margin-right: 30px;
  }
`;

function EditProfile() {
  return (
    <>
      <MainContent>
        <NavProfile>
          <Navbar />
        </NavProfile>
        <BgHeroImg>
          <i class="fas fa-camera">
            <span class="upload">Upload Image</span>
          </i>
        </BgHeroImg>
        <MainWrapper>
          <ProfileWrapper>
            <ProfileDetail>
              <CardWrapper>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                  alt="bugra.work"
                />
                <button class="updateImageButton">UPDATE IMAGE</button>
                <button class="uploadImageButton">
                  {" "}
                  <i class="fas fa-upload"></i> Upload
                </button>
                <button class="uploadImageButton">
                  <i class="fas fa-trash-alt"></i> Remove
                </button>

                <CardButton>
                  <button>DELETE ACCOUNT</button>
                  <button class="savebutton">SAVE</button>
                </CardButton>
              </CardWrapper>
            </ProfileDetail>
            <FormDetails>
              <FormContainer>
                <InputContent>
                  <label for="">First name</label>
                  <input class="inputField" type="text" name="" id="" />
                  <label for="">Email</label>
                  <input class="inputField" type="text" name="" id="" />
                  <label for="">Location</label>
                  <input class="inputField" type="text" name="" id="" />
                  <label for="">About</label>
                  <textarea class="inputField"></textarea>
                </InputContent>
                <InputContent>
                  <label for="">Last name</label>
                  <input class="inputField" type="text" name="" id="" />
                  <label for="">User name</label>
                  <input class="inputField" type="text" name="" id="" />
                  <label for="">Phone</label>
                  <input class="inputField" type="text" name="" id="" />
                  <label for="">Password</label>
                  <input class="inputField" type="text" name="" id="" />
                </InputContent>
              </FormContainer>
              <ThingLikeTag>
                <p>Things i like</p>
                <AddTag>
                  <span>
                    Cooking <i class="fas fa-times"></i>
                  </span>
                  <span>
                    Cooking <i class="fas fa-times"></i>
                  </span>
                  <span>
                    Cooking <i class="fas fa-times"></i>
                  </span>
                  <span>
                    Cooking <i class="fas fa-times"></i>
                  </span>
                </AddTag>
                <TagInput>
                  <input
                    class="tagInputField"
                    type="text"
                    name=""
                    placeholder="Type something....."
                  />
                  <button class="addButton">ADD</button>
                </TagInput>
              </ThingLikeTag>
            </FormDetails>
          </ProfileWrapper>
        </MainWrapper>
      </MainContent>
    </>
  );
}

export default EditProfile;
