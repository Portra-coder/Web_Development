import Card from "./Card";

let Home = () => {
  return (
    <>
      <header>
        <h1>This is home component</h1>
      </header>
      <main>
        <Card product={"laptop"} price={850000} rating={4.5}/>
        <Card product={"Mobile"} price={40000} rating={4.6}/>
        <Card product={"Watch"} price={850} rating={4.7}/>
      </main>
    </>
  );
};
export default Home;
