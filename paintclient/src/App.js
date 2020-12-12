import React, { useCallback, useState } from "react"


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(()=> {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(()=> {
    setIsLoggedIn(false)
  },[])


}

export default App;
