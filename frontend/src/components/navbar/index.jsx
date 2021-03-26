import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import profileData from "../../store/actions/profileData";
import friendsAction from "../../store/actions/friendsAction";
import { apiProfile } from "../../api/apiProfile";
import { getPostsApi } from "../../api/apiPosts";
import styled from "styled-components";
import motionLogo from "../LeftLogin/assets/images/logo.png";
import postsLogo from "../LeftLogin/assets/images/posts_logo.png";
import IconFriends from "../../layout/svgs/IconFriends";
import Bell from "../../layout/svgs/Bell";
import Menu from "../../layout/svgs/Menu";
import history from "../../history";
import { ReactComponent as MenuIcon } from "../LeftLogin/assets/svgs/menu.svg";
import jennifer from "../LeftLogin/assets/images/users/jennifer.png";

const Wrapper = styled.div`
  width: 100vw;
`;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  /* box-shadow: 0 4px 40px 4px #dedede; */
`;

const LeftItems = styled.section`
  display: flex;
`;

const MotionLogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 80px 0 20px;
  & h3 {
    cursor: pointer;
  }
`;

const MotionLogo = styled.img`
  width: 30px;
  height: 30px;
  padding: 30px 10px;
  cursor: pointer;
`;

const PostsLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #b192fe;
  }
`;

const PostsLogo = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
`;

const FriendsLogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & p {
    padding: 10px;
  }

  :hover {
    border-bottom: 2px solid #b192fe;
  }
`;

const RightItems = styled.section`
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;
  justify-content: space-around;
  margin-right: 40px;
`;

const Avatar = styled.img`
  padding: 0 30px;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const ListStyle = styled.li`
  list-style: none;
  padding: 15px 30px;
  width: 80px;
  font-size: 14px;
  margin: 5px 0;
  cursor: pointer;

  :hover {
    background-color: white;
  }
`;

const Icons = styled.i`
  padding-right: 20px;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const DropdownMenu = () => {
  const history = useHistory();

  const routeChangeToProfile = () => {
    let path = `/profile`;
    history.push(path);
  };

  const routeChangeLogout = () => {
    let path = `/`;
    localStorage.clear();
    history.push(path);
  };

  return (
    <DropdownList className="dropdown">
      <ListContainer>
        <ListStyle onClick={routeChangeToProfile}>
          <Icons className="fas fa-user-alt"></Icons>Profile
        </ListStyle>
        <ListStyle onClick={routeChangeLogout}>
          <Icons className="fas fa-sign-out-alt"></Icons>Logout
        </ListStyle>
      </ListContainer>
    </DropdownList>
  );
};

const NavIcon = styled.div`
  position: relative;
`;

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <NavIcon className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </NavIcon>
  );
};

const NavBar = () => {
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (localStorage.getItem("token")) {
      const response = await apiProfile();
      console.log(response, "res from navbar");
      dispatch(profileData(response));
    } else {
      history.push("/");
    }
  }, []);

  // api call working
  const handleClick = () => {
    console.log("inside");
    const asyncCall = async () => {
      const res = await getPostsApi("friends/");
      dispatch(friendsAction(res));
    };

    asyncCall();
    // history.push('/friends')             redirect to the future friends cards
  };
  const goProfile = () => {
    history.push("/profile");
  };

  const history = useHistory();
  const routeChange = () => {
    let path = `/feed`;
    history.push(path);
  };

  return (
    <Wrapper>
      <NavContainer>
        <LeftItems>
          <MotionLogoContainer onClick={routeChange}>
            <MotionLogo src={motionLogo} alt="motionlogo" />
            <h3>Motion</h3>
          </MotionLogoContainer>

          <PostsLogoContainer>
            <PostsLogo src={postsLogo} alt="postsLogo" />
            <p>Posts</p>
          </PostsLogoContainer>

          <FriendsLogoContainer>
            <IconFriends />
            <p onClick={handleClick}>Find Friends</p>
          </FriendsLogoContainer>
        </LeftItems>

        <RightItems>
          <Bell style={{ cursor: "pointer" }} />
          <Avatar
            style={{ cursor: "pointer" }}
            onClick={goProfile}
            src={jennifer}
            alt="jennifer"
          />
          <NavItem icon={<MenuIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </RightItems>
      </NavContainer>
    </Wrapper>
  );
};

export default NavBar;
