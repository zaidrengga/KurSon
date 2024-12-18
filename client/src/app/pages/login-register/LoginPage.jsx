import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/logiRegisterStyle.css'
import Axios from 'axios'

export default function LoginPage() {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigate = useNavigate()

    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('message')


    const loginUser = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:3001/login', {
            LoginEmail: loginEmail,
            LoginPassword: loginPassword
        }).then((response) => {
            console.log()

            if(response.data.message || loginEmail === '' || loginPassword === '') {
                navigate('/login')
                setLoginStatus(`credentials dont exist`);
            }
            else {
                navigate('/dashboard')
            }
        })
    }

    useEffect(() => {
        if(loginStatus !== '') {
            setStatusHolder('showMessage')
            setTimeout(() => {
                setStatusHolder('message')
            }, 4000)
        }
    }, [loginStatus])

    const onSubmit = () => {
        setLoginEmail('')
        setLoginPassword('')
    }

    return (
        <section className="loginPage">
            <div className="loginContent">
                <h1>Login</h1>
                <form action="" method="post" onSubmit={onSubmit}>
                    <span className={statusHolder}>{loginStatus}</span>

                    <div className="formInput">
                        <label htmlFor="Email">Email</label>
                        <input type="email" id="email" 
                        onChange={(event) => {setLoginEmail(event.target.value)}}/>
                    </div>
                    <div className="formInput">
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="password" 
                        onChange={(event) => {setLoginPassword(event.target.value)}}/>
                    </div>
                    <button type="submit" onClick={loginUser}>Login</button>
                    <p>Belum punya akun? <Link to="/register">Register</Link></p>

                    <Link to='/' className='back'>Back to Home</Link>
                </form>
            </div>
        </section>
    )
}