import { useState } from "react"
function Register(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email,setEmail] = useState("")
    async function handleSubmit(){
    const response = await fetch("http://localhost:5050/auth/register", {
        method: "POST",
        credentials:"include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password,email })
    })
    const data = await response.json()
     if(data.success){
        window.location.href = "/login" 
    } else {
        alert(data.message) 
    }
    }
    return <div>
        <input type="email" value = {email} placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="text" value = {username} placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
        <input type="password" value = {password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
        <button onClick={handleSubmit}>Register</button>

    </div>
}
export default Register