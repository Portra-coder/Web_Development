import React, { useState } from 'react'

const Navbar = () => {

    let [isloggedin, setIsLoggedin] = useState(false)
    return (
    <nav>
      <h1>conditional rendering</h1>
      <button onClick={()=>setIsLoggedin(!isloggedin)}>
         {isloggedin ? "logout" : "login"}
      </button>
    </nav>
  )
}

export default Navbar
