import React from 'react'

class NewPet extends React.Component{
    state={}

    onChangeHandler = (event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue})
    }

    clickHandler = (event)=>{
        event.preventDefault()
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
                <form>
                    <h3>Новый питомец</h3>
                    <p>Кличка</p>
                    <input value={this.state.name} onChange={this.onChangeHandler} name='name' />
                    <p>Порода</p>
                    <input value={this.state.breed} onChange={this.onChangeHandler} name='breed' />
                    <p>Дата Рождения</p>
                    <input value={this.state.birthday} onChange={this.onChangeHandler} name='birthday' type='date' />
                    <p>Масса</p>
                    <input value={this.state.weight} onChange={this.onChangeHandler} name='weight' type='number' />
                    <p>Номер Чипа</p>
                    <input value={this.state.chip} onChange={this.onChangeHandler} name='chip' />
                    <button onClick = {this.clickHandler}>Добавить питомца</button>
                </form>
            </div>
        )
    }
}

export default NewPet