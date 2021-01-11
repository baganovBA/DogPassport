import React from 'react'

class PetLink extends React.Component{
    render(){
        return(
            <div className='card'>
                <p>{this.props.name} {this.props.id}</p>
            </div>
        )
    }
}

export default PetLink