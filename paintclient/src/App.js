import React, { useCallback, useState } from "react"
import { Switch, Route } from "react-router-dom"


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
        <Route path="/" exact>

        </Route>
      </Switch>
    )
  }


}

export default App;
