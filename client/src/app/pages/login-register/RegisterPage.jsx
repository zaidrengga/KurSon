import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/logiRegisterStyle.css'
import Axios from 'axios'

export default function LoginPage() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const createUser = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:3001/register', {
            Username: username,
            Email: email,
            Password: password
        }).then(() => {
            navigate('/login')

            setUsername('')
            setEmail('')
            setPassword('')
        })
    }

    return (
        <section className="loginPage">
            <div className="loginContent">
                <h1>Register</h1>
                <form action="" method="post">
                    <div className="formInput">
                        <label htmlFor="username">User Name</label>
                        <input type="text" id="username" 
                        onChange={(event) => {setUsername(event.target.value)}} />
                    </div>
                    <div className="formInput">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" 
                        onChange={(event) => {setEmail(event.target.value)}}/>
                    </div>
                    <div className="formInput">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" 
                        onChange={(event) => {setPassword(event.target.value)}}/>
                    </div>
                    <button type="submit" onClick={createUser}>Login</button>
                    <p>Sudah punya akun? <Link to="/login">Login</Link></p>

                    <Link to='/' className='back'>Back to Home</Link>
                </form>
            </div>
        </section>
    )
}