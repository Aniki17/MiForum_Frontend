import { useState } from "react"
function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    async function handleSubmit(){
    const response = await fetch("http://localhost:5050/auth/login", {
        method: "POST",
        credentials:"include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })

    const data = await response.json()

    if(data.success){
        localStorage.setItem("accessToken", data.data.accessToken)
        window.location.href = "/"  
    } else {
        alert(data.message)  
    }
}
    return <div>
        <h2>Please Enter your username or password</h2>
        <input type ="text" id="uname" value ={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username" ></input>
        <input type ="password" id="pass" placeholder="password" value = {password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button onClick={handleSubmit}>Login</button>
 </div>
}
export default Login