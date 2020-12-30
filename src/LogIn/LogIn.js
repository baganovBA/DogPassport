import React from 'react'
import './LogIn.css'

class LogIn extends React.Component{
    render(){
        return(
            <div className='logIn'>  
                <form className='form'>
                    <p>Вход</p>
                    <p>Login</p>
                    <input name='login' type='text'></input>
                    <p>Пароль</p>
                    <input name='password' type="password"></input>
                    <button>Вход</button>
                </form>
            </div>
        )
    }
}

export default LogIn