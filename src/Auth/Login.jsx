import React from 'react'
import { loginEndpoint } from '../SpotifyApi'
import './login.css'

export default function Login() {
    return (
        <div className="login-page">
            <img src="" alt="" className='logo' />
            <a href={loginEndpoint}>
                <div className="login-btn">
                    Log in
                </div>
            </a>
        </div>
    )
}
