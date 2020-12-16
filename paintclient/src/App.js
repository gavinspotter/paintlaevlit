import React, { useCallback, useState } from "react"
import { BrowserRouter as Router,
Switch, Route } from "react-router-dom"
import MainNavigation from "./shared/components/navigation/MainNavigation"
import { AuthContext } from "./shared/context/auth-context"
import Auth from "./user/pages/Auth"


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(()=> {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(()=> {
    setIsLoggedIn(false)
  },[])

  let routes 
  
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route>

        </Route>
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/auth">
          <Auth/>
        </Route>
      </Switch>
    )
  }

return (
  <AuthContext.Provider
  value={{ isLoggedIn: isLoggedIn, login: login, logout: logout}}
  >
    <Router>
      <MainNavigation/>
      
    </Router>

  </AuthContext.Provider>
)


}

export default App;
