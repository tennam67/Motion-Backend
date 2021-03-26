import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/index";
import Profile from "../../layout/Profile/profile";

const MainContent = styled.div`
  min-height: 100vh;
`;
const Nav = styled.div`
  box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.36);
`;

const CardSection = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  display: column;
  columns: 3;
  gap: 1em;
  & > * {
    break-inside: avoid;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* margin: 15px; */
  margin-bottom: 35px;
  border-radius: 5px;
  width: 300px;
  height: 600px;
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.36);
  background-color: #ffffff;
  & h3 {
    color: #000000;
    font-size: 25px;
    padding: 10px;
  }
  & p {
    text-align: center;
    max-height: 220px;
    overflow: auto;
    color: #000000;
    padding: 15px;
  }
  & img {
    margin-top: 5px;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100px;
    height: 100px;
    border: 2px solid #fffbfb;
    border-radius: 60px;
  }
`;
const CardContent = styled.div`
  margin: 5px;
`;

const AddTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & span {
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
    padding: 2px 12px 3px 12px;
    text-decoration: none;
    margin: 5px;
  }
`;

const CardButton = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  & button {
    margin: 5px;
    background: #e3e6e8;
    padding: 13px;
    border-radius: 29px;
    color: #000000;
    border: 1px solid lightgray;
    :hover {
      border-top-color: #bcc8d1;
      background: #bcc8d1;
      color: #ffffff;
    }
  }
`;

function FriendsCard() {
  return (
    <>
      <MainContent>
        <Nav>
          <Navbar />
        </Nav>
        <Profile />
        <CardSection>
          <Card>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="bugra.work"
            />
            <h3>Alber Lawrance</h3>
            <h6>Zurich, Switzerland</h6>
            <CardButton>
              <button>FOLLOW</button>
              <button>ADD FRIEND</button>
            </CardButton>
            <CardContent>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque, voluptate!
              </p>
            </CardContent>
            <AddTag>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
            </AddTag>
          </Card>
          <Card>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="bugra.work"
            />
            <h3>Alber Lawrance</h3>
            <h6>Zurich, Switzerland</h6>
            <CardButton>
              <button>FOLLOW</button>
              <button>ADD FRIEND</button>
            </CardButton>
            <CardContent>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque, voluptate!
              </p>
            </CardContent>
            <AddTag>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
            </AddTag>
          </Card>
          <Card>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="bugra.work"
            />
            <h3>Alber Lawrance</h3>
            <h6>Zurich, Switzerland</h6>
            <CardButton>
              <button>FOLLOW</button>
              <button>ADD FRIEND</button>
            </CardButton>
            <CardContent>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque, voluptate!
              </p>
            </CardContent>
            <AddTag>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
            </AddTag>
          </Card>
          <Card>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="bugra.work"
            />
            <h3>Alber Lawrance</h3>
            <h6>Zurich, Switzerland</h6>
            <CardButton>
              <button>FOLLOW</button>
              <button>ADD FRIEND</button>
            </CardButton>
            <CardContent>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque, voluptate!
              </p>
            </CardContent>
            <AddTag>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
            </AddTag>
          </Card>
          <Card>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="bugra.work"
            />
            <h3>Alber Lawrance</h3>
            <h6>Zurich, Switzerland</h6>
            <CardButton>
              <button>FOLLOW</button>
              <button>ADD FRIEND</button>
            </CardButton>
            <CardContent>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque, voluptate!
              </p>
            </CardContent>
            <AddTag>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
              <span>Cooking</span>
            </AddTag>
          </Card>
        </CardSection>
      </MainContent>
    </>
  );
}
export default FriendsCard;
