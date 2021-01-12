import React from 'react'
import './PetSettings.css'

class PetSettings extends React.Component{
    state={}

    componentDidMount(){
        this.getVaccination()
    }

    getVaccination(){
        console.log(this.props)
        fetch(`http://localhost:5000/pet/${this.props.match.params.id}`)
        .then(promise => promise.json())
        .then(data => this.setState({...data}, ()=>{console.log(this.state)} ))
    }

    changeVaccin(id){

        fetch(`http://localhost:5000/pet/${this.props.match.params.id}`,{
            method: 'PUT',
            headers:{
                'Content-type': "application/json"
            },
            body: JSON.stringify(this.state.vaccination)
            })

    }
    onChangeHandaler = (event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({vaccination:{[inputName]:inputValue}})
        // this.setState({vaccination:[{[inputName]:inputValue}]})
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <p>Настройки</p>
                <p>{this.state.name}</p>
                {this.state.vaccination && this.state.vaccination.map((vaccination)=>{
                    return <div key = {vaccination.id} className='vaccination'>
                                <form>
                                <p>{vaccination.disease}</p>
                                <p>Дата обработки<input onChange={()=>this.onChangeHandaler()} name='date' value={vaccination.date? vaccination.date: "Введите дату"}></input></p>
                                <p>Следующая Обработка<input onChange={()=>this.onChangeHandaler()} name ='newDate' value={vaccination.newDate? vaccination.newDate: "Введите дату"}></input></p>
                                
                                <button onClick={()=>this.changeVaccin(vaccination.id)}>Сохранить</button>
                                </form>
                            </div>
                    
                })}
                <form>

                <button> Добавить </button>
                </form>
            </div>
        )
    }
}

export default PetSettings