import React, { useEffect, useState } from 'react'

const Example1 = () => {

    let [count, setCount] = useState(10)
    let [dark,setDark] = useState(true)

    useEffect(()=>{
        console.log("hi iam ues effect-1")
    })

    useEffect(()=>{
        console.log("hi iam use effect-2")
    },[])   

    useEffect(()=>{
        console.log("hi iam use effect-3")
    },[dark])   

    useEffect(()=>{
        console.log("hi iam use effect-4")
    },[count])   

    useEffect(()=>{
        let num = 0
        let timer = setInterval(() => {
            console.log(num++)
        }, 1000);

        return ()=>{
            clearInterval(timer)
            console("its done bro please move on")
        }
    })
  return (
    <div>
      <h1>use effect Example</h1>
      <h2>count is {count}</h2>
      <button onClick={()=>setCount(count+1)}>increase</button>

      <button onClick={()=>setDark(!dark)}>{dark? "light":"dark"}</button>
    </div>
  )
}

export default Example1
