import React from 'react'
import './PetCard.css'
import { Link } from 'react-router-dom'

class PetCard extends React.Component{
    render(){
        return(
            <div className='container'>
                <header className='header'>
                    <h2>"Кличка питомца"</h2>
                    <Link to='/PetSettings'><img className='settings' src='https://e7.pngegg.com/pngimages/257/93/png-clipart-settings-gear-icon-gear-configuration.png' alt='Settings' /></Link>
                </header>
            </div>
        )
    }
}

export default PetCard