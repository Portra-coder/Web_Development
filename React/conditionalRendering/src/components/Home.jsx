import React, { useState } from "react";

const Home = () => {
  let age = 5;
  let [isDark, setIsDark] = useState(true);
  let users = ["walter", "jessy", "gustavo", "mike"];
  console.log(users.length)

  let subjects = ["html" ,"css", "react", "springboot"]

  return (
    <div className={isDark ? "dark" : "light"}>
      <h1>this is home component</h1>

      {age >= 21 ? <h2>you can marry</h2> : <h2>you cant marry</h2>}
      {/* or */}
      <h2> {age >= 21 ? "you can marry" : "you cant marry"}</h2>

      <button onClick={() => setIsDark(!isDark)}>
        dark
      </button>

      <ol>   
                 {/* //conditional statement by ternary operator */}
        {users.length > 0 ? (
          users.map((users, index) => {
            return <li key={index}> {users} </li>;
          })
        ) : (
          <h2> No User Found</h2>
        )}
      </ol>

      <ul>
        {        // (if we use && , no need write else statement)
            subjects.length > 0 &&
            subjects.map((sub,ind)=>{
                return <li key={ind}>{sub}</li>
            })
        }
      </ul>
    </div>
  );
};

export default Home;
