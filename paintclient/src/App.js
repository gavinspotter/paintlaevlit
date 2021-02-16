import React, { useState, useCallback } from "react"
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import NewPaint from "./paints/pages/NewPaint"
import Paint from "./paints/pages/Paint"
import UpdatePaint from "./paints/pages/UpdatePaint"
import ReceivedPaint from "./receivedpaints/pages/ReceivedPaint"
import SendPaint from "./sendpaints/pages/SendPaint"
import SentPaint from "./sendpaints/pages/SentPaint"
import MainNavigation from "./shared/components/navigation/MainNavigation"
import { AuthContext } from "./shared/context/auth-context"
import Auth from "./user/pages/Auth"
import Signup from "./user/pages/Signup"


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState(false)

  const login = useCallback((uid) => {
    setIsLoggedIn(true)
    setUserId(uid)
  }, [])


  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setUserId(null)
  }, [])

  let routes

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/:userId/paints">
          <Paint />
        </Route>
        <Route path="/paints/new">
          <NewPaint />
        </Route>
        <Route path="/paints/:paintId">
          <UpdatePaint />
        </Route>
        <Route path="/send/new">
          <SendPaint />
        </Route>
        <Route path="/:userId/sent">
          <SentPaint />
        </Route>
        <Route path="/:userId/received">
          <ReceivedPaint />
        </Route>
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
      </Switch>
    )
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, userId: userId, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main> {routes}</main>
      </Router>

    </AuthContext.Provider>
  )


}

export default App;
