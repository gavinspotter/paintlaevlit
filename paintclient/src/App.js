import React, { useCallback, useState } from "react"
import { Switch, Route } from "react-router-dom"
import { AuthContext } from "./shared/context/auth-context"


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(()=> {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(()=> {
    setIsLoggedIn(false)
  },[])

  // let routes 
  
  // if (isLoggedIn) {
  //   routes = (
  //     <Switch>
  //       <Route path="/" exact>

  //       </Route>
  //     </Switch>
  //   )
  // }

return (
  <AuthContext.Provider>
    
  </AuthContext.Provider>
)


}

export default App;
