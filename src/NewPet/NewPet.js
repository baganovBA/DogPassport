import React from 'react'
import {Link} from 'react-router-dom'
import './NewPet.css'

class NewPet extends React.Component{
    state={}

    onChangeHandler = (event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue})
    }

    clickHandler = (event)=>{
        // event.preventDefault()
        console.log(this.state)
        fetch('http://localhost:5000/pet',{
                method: "POST",
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state)
        })


    }

    render(){
        return(
            <div>
                <form className='NewPet_conteiner'>
                    <h3>Новый питомец</h3>
                    <p className='NewPet_name'>Кличка</p>
                    <input className='NewPet_input' value={this.state.name} onChange={this.onChangeHandler} name='name' />
                    <p className='NewPet_text'>Порода</p>
                    <input className='NewPet_input' value={this.state.breed} onChange={this.onChangeHandler} name='breed' />
                    <p className='NewPet_text'>Дата Рождения</p>
                    <input className='NewPet_input' value={this.state.birthday} onChange={this.onChangeHandler} name='birthday' type='date' />
                    <p className='NewPet_text'>Масса</p>
                    <input className='NewPet_input' value={this.state.weight} onChange={this.onChangeHandler} name='weight' type='number' />
                    <p className='NewPet_text'>Номер Чипа</p>
                    <input className='NewPet_input' value={this.state.chip} onChange={this.onChangeHandler} name='chip' />
                    <Link to ='/User'>
                    <button className='NewPet_button' onClick = {this.clickHandler}>Добавить питомца</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default NewPet