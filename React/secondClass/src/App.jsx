let App = () => {
  let ename = "miller";
  let eid = "abc2025";
  let sal = 5000;
  return (
    <div>
      <h1> This is app component</h1>
      <p>Lorem ipsum dolor sit amet <br />consectetur, adipisicing elit. Corporis, earum?</p>
      <br />
      <hr />
      <label htmlFor=""></label>
      <div className=""></div>
      <hr />
                    {/* jsx experssion accesing variable by using curly braces */}
      <h1>emp name is : {ename.toUpperCase()}</h1>
      <h2>emp id is : {eid}</h2>
      <h3>emp salary is : {sal + 1}</h3>

    </div>
  );
};

export default App;
