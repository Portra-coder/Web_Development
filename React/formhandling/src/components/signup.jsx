import React from 'react'

const Signup = () => {
  let [usernmae, setusername] = useState(" ");
  let [email, setemail] = useState(" ");
  let [pass, setpass] = useState(" ");
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup">
      <h1>Sign up Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text"
               placeholder="Your Name" 
               value={usernmae} 
               onChange={(e)=>setusername(e.target.value)}/>

        <label htmlFor="">Email</label>
        <input type="email"
               placeholder="Your Email" 
               value={email} 
               onChange={(e) =>setemail(e.target.value)} />

        <label htmlFor=""> Password</label>
        <input type="password" 
               placeholder="Your Password" 
               value={pass} 
               onChange={(e)=>setpass(e.target.value)}/>

        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup
