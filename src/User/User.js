import React from 'react'
import { Link } from 'react-router-dom'
import PetLink from '../PetLink/PetLink'

class User extends React.Component{
    state ={
        pets:[]} 
    componentDidMount(){
        this.getPets()
    }
    getPets(){
        fetch('http://localhost:5000/user')
        .then(promise => promise.json())
        .then(data => this.setState({pets:[...data]}))
    }

    render(){
        return(
            <div className='block'>  
                <h1>User</h1>
                <div>
                
                   {this.state.pets && 
                   this.state.pets.map((pet)=>{
                        return<Link to={`/PetCard/${pet.id}`}>
                         <PetLink name={pet.name} />
                         </Link>
                    })}
                    
                    <Link to='/NewPet'>
                    <button>Добавить Питомца</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default User