import React from 'react'
import './PetSettings.css'

class PetSettings extends React.Component{
    state={
        visible:false,
        sendData:''

    }

    componentDidMount(){
        this.getVaccination()
    }

    getVaccination(){
        console.log(this.props)
        fetch(`http://localhost:5000/pet/${this.props.match.params.id}`)
        .then(promise => promise.json())
        .then(data => this.setState({...data}, ()=>{console.log(this.state)} ))
    }

    // changeVaccin(id){

    //     fetch(`http://localhost:5000/pet/${this.props.match.params.id}`,{
    //         method: 'PUT',
    //         headers:{
    //             'Content-type': "application/json"
    //         },
    //         body: JSON.stringify(this.state.vaccination)
    //         })
    // }
    onChangeHandler = (event)=>{
        console.log(this.state)
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({sendData : {[inputName]:inputValue}})
        // this.setState({vaccination:[{[inputName]:inputValue}]})
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <p>Настройки</p>
                <p>{this.state.name}</p>
                {this.state.vaccination && this.state.vaccination.map((vaccination)=>{
                    return <div key = {vaccination.id} className='vaccination'>
                                <form>
                                <p>{vaccination.disease}</p>
                                <p>Дата обработки<input 
                                onChange={this.onChangeHandler} 
                                name='date' 
                                value={vaccination.date? vaccination.date: "Введите дату"}>
                                </input></p>
                                <p>Следующая Обработка
                                    <input onChange={this.onChangeHandler} 
                                    name ='newDate' 
                                    value={vaccination.newDate? vaccination.newDate: "Введите дату"}>
                                    </input></p>
                                
                                <button onClick={()=>this.changeVaccin(vaccination.id)}>Сохранить</button>
                                </form>
                            </div>
                    
                })}
            

                <div className = {(this.state.visible ? "show " : 'no-show ' ) + 'addForm'} >
                    <form>
                    <p>Название</p>
                    <input value={this.state.sendData.disease} onChange={this.onChangeHandler}  name = 'disease'></input>
                    <p>Дата обработки</p>
                    <input value={this.state.sendData.date} onChange={this.onChangeHandler} name = 'date'></input>
                    <p>Дата следующей обработки</p>
                    <input value={this.state.sendData.newDate} onChange={this.onChangeHandler} name = 'newDate'></input>
                    <button>Сохранить</button>
                    </form>
                </div>
                <button onClick = {()=>{this.setState({visible:true})}}> Добавить </button>

            </div>
        )
    }
}

export default PetSettings