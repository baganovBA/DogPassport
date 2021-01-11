import React from 'react'
import './PetCard.css'
import { Link } from 'react-router-dom'

class PetCard extends React.Component{
    state=[]
    
    componentDidMount(){
        this.getVaccination()
    }

    getVaccination(){
        console.log(this.props)
        fetch(`http://localhost:5000/pet/${this.props.match.params.id}`)
        .then(promise => promise.json())
        .then(data => this.setState({...data}, ()=>{console.log(this.state)} ))

    }
    render(){
        return(
            <div className='container'>
                <header className='header'>
                    <h2>{this.state.name}</h2>
                    <Link to={`/PetSettings/${this.props.match.params.id}`}>
                        <img className='settings' 
                             src='https://e7.pngegg.com/pngimages/257/93/png-clipart-settings-gear-icon-gear-configuration.png'
                             alt='Settings' />
                    </Link>
                </header>
                {this.state.vaccination && 
                this.state.vaccination.map((vaccination)=>{
                    return <div className='vaccination'>
                        <p>{vaccination.disease}</p>
                        <p>{vaccination.date}</p>
                        <p>{vaccination.newDate}</p>
                    </div>
                } )}
                
            </div>
        )
    }
}

export default PetCard