import React from 'react'
import './PetLink.css'
import dog_avatar from '../image/dog_avatar.png'

class PetLink extends React.Component{
    render(){
        return(
            <div className='PetLink_petCard'>
                <img src={dog_avatar} alt='dog_avatar'/>
                <p className="PetLink_name">{this.props.name} {this.props.id}</p>
                <p className="PetLink_breed">{this.props.breed} {this.props.id}</p>
            </div>
        )
    }
}

export default PetLink