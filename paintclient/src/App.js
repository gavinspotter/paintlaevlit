import React, { useCallback, useState } from "react"


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(()=> {
    setIsLoggedIn(true)
  }, [])



}

export default App;
