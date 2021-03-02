import React, { useState, useCallback } from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Switch, Route
} from "react-router-dom"
import NewPaint from "./paints/pages/NewPaint"
import Paint from "./paints/pages/Paint"
import UpdatePaint from "./paints/pages/UpdatePaint"
import ReceivedPaint from "./receivedpaints/pages/ReceivedPaint"
import SendPaint from "./sendpaints/pages/SendPaint"
import SentPaint from "./sendpaints/pages/SentPaint"
import Background from "./shared/components/navigation/Background"
import MainNavigation from "./shared/components/navigation/MainNavigation"
import SassNav from "./shared/components/navigation/SassNav"
import { AuthContext } from "./shared/context/auth-context"
import { useAuth } from './shared/hooks/auth-hook';
import Auth from "./user/pages/Auth"
import Signup from "./user/pages/Signup"


const App = () => {

  const { token, login, logout, userId } = useAuth();

  let routes

  if (token) {
    routes = (

      <Switch>

        <Route path="/:userId/paints">
          <SassNav />
          <Paint />
        </Route>
        <Route path="/paints/new">
          <SassNav />
          <NewPaint />
        </Route>

        <Route path="/paints/:paintId">
          <SassNav />
          <UpdatePaint />
        </Route>
        <Route path="/send/new">
          <SassNav />
          <SendPaint />
        </Route>
        <Route path="/:userId/sent">
          <SassNav />
          <SentPaint />
        </Route>
        <Route path="/:userId/received">
          <SassNav />
          <ReceivedPaint />
        </Route>
        <Redirect to="/paints/new" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, userId: userId, token: token, login: login, logout: logout }}
    >
      <Router>
        <Background>

          {routes}
        </Background>
      </Router>

    </AuthContext.Provider>
  )


}

export default App;
