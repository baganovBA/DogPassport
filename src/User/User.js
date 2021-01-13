import React from 'react'
import { Link } from 'react-router-dom'
import button from '../image/add_button.svg'
import PetLink from '../PetLink/PetLink'
import './User.css'

class User extends React.Component{
    state ={
        pets:[]} 
    componentDidMount(){
        this.getPets()
    }

    componentWillUpdate(){
        this.getPets()
    }
    // componentWillMount(){
    //     this.getPets()
    // }
    getPets(){
        fetch('http://localhost:5000/user')
        .then(promise => promise.json())
        .then(data => this.setState({pets:[...data]}))
    }

    render(){
        return(
            <div className='User_block'>  
                <h1 className='User_title'>Питомцы</h1>
                <div>
                
                   {this.state.pets && this.state.pets.length > 0?
                   this.state.pets.map((pet)=>{
                        return<Link to={`/PetCard/${pet.id}`} className='User_link_petcard'>
                         <PetLink name={pet.name} breed={pet.breed} />
                         </Link>
                    }) : <p>У вас пока нет питомцев</p>}
                    
                    <Link to='/NewPet' className='User_link_add_button'>
                    <button className='User_add_button'><img className='User_add_button_img' src={button} alt="add_button"/></button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default User