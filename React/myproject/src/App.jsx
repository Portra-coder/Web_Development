let App = ()=>{
  return(
    <div>
        <nav>
          <h2>my react app</h2>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
        <main>
          <div className="left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDfsdAZXSMbowQETI4TkF63lBGpwA52I-uLUn6VxGZA&s=10" alt="" />
            <h1>welcome to my react app</h1>
            <p>here you will learn how to create single page application and how to make interactive webpage by react</p>
            <button>get started</button>
          </div>
          
          <div className="right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CwUVXfu4bcR5Q9oP96Q-f_aVzDa9LmxGTcXy2RsQaQ&s=10" alt="" />
          </div>
        </main>
    </div>

  )
}

export default App