import React from 'react'

const Home = () => {

    let handleClick = ()=>{
        alert("you are getting a call")
    }

    let add = (a,b)=>{
        alert(a+b)
    }

    let userDetails = (name,age)=>{
        alert(`user Name is ${name}  and age is ${age}` )
    }

    let hi =(e)=>{
        console.log(e)
    }
  return (
    <div className='homecontainer'>
      <header>
        <button onClick={handleClick}>call me</button>
        <button onClick={()=>add(20,40)}>add</button>
        <button onClick={()=>userDetails("miller",34)}>details</button>
        <button onClick={hi}>db1 click me</button>
      </header>
    </div>
  )
}

export default Home
