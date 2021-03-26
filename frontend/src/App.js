import React from "react";
import LoginForm from "./components/logIn";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import SignUp from "./components/signUp";
import { MainWrapper } from "./layout/signIn";
import VerificationForm from "./components/verification";
import Congratulations from "./components/congratulations";
import Feed from "./layout/Body-Feed/Feed";
import Profile from "./layout/Profile/profile";
import FriendsCard from "./components/friends_card/index.jsx";
import EditProfile from "./components/edit_profile/index.jsx";

export const App = () => {
  return (
    <div>
      <Router history={history}>
        <MainWrapper>
          <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/friends-card" exact component={FriendsCard} /> */}
            <Route path="/edit-profile" exact component={EditProfile} />
            <Route path="/feed" exact component={Feed} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/congratulations" exact component={Congratulations} />
            <Route path="/verification" exact component={VerificationForm} />
            <Route path="/profile" exact component={Profile} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </MainWrapper>
      </Router>
    </div>
  );
};
