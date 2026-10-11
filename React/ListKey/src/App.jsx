function App() {
  let subjects = ["html", "css", "js", "java", "python"];

  let emp = [
    {
      ename: "miller",
      eid: 101,
      sal: 20000,
    },
    {
      ename: "john",
      eid: 101,
      sal: 15000,
    },
    {
      ename: "scott",
      eid: 101,
      sal: 25000,
    },
    {
      ename: "blake",
      eid: 101,
      sal: 30000,
    },
  ];
  return (
    <>
      <h1>List and Key</h1>
      {subjects.map((sub, index) => {
        return <li key={index}> {sub}</li>;
      })}

      <main>
        {emp.map((ele) => {
          return (
            <div key={ele.eid}>
              <h3> ename is : {ele.ename}</h3>
              <h4> eid is : {ele.eid}</h4>
              <h4> sal is : {ele.sal}</h4>
            </div>
          );
        })}
      </main>

      <hr />

      <section>
        {emp.map((ele) => {
          return (
            <card ename={ele.ename} sal={ele.sal} eid={ele.eid} key={ele.eid} />
          );
        })}
      </section>
    </>
  );
}
export default App;
