import React from 'react'
import './PetCard.css'
import dog_avatar from '../image/dog_avatar.png'
import { Link } from 'react-router-dom'

class PetCard extends React.Component{
    state={
        visible:false,
        sendData:''

    }
    
    componentDidMount(){
        this.getVaccination()
    }

    componentDidUpdate(){
        this.getVaccination()
    }

    onChangeHandler = (event)=>{
        console.log(this.state)
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({sendData : {...this.state.sendData, [inputName]:inputValue}})
        // this.setState({vaccination:[{[inputName]:inputValue}]})
    }

    addVaccination = (event) =>{

        event.preventDefault()

        fetch(`http://localhost:5000/vaccination/${this.props.match.params.id}`,{
            method: "POST",
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state.sendData)
        })

        this.setState({visible:false})
    }

    getVaccination(){
        console.log(this.props)
        fetch(`http://localhost:5000/pet/${this.props.match.params.id}`)
        .then(promise => promise.json())
        .then(data => this.setState({...data}, ()=>{console.log(this.state)} ))
    }
    render(){
        console.log(this.props)
        return(
            <div className='PetCard_container'>
                <header className='PetCard_header'>
                <img className='PetCard_img_header' src={dog_avatar} alt='dog_avatar'/>
                    <h2>{this.state.name}</h2>
                   
                </header>
                {this.state.vaccination && 
                this.state.vaccination.map((vaccination)=>{
                    return <div className='PetCard_vaccination'>
                        <p>{vaccination.disease}</p>
                        <p>{vaccination.newDate}</p>
                        {/* <input className='vaccination_name' value = {vaccination.disease} ></input>
                        <input className='vaccination_date' value = {vaccination.date} ></input>
                        <input className='vaccination_newDate' value={vaccination.newDate}></input>
                        <button className='vaccination_change'>Редактировать</button>
                        <button className='vaccination_save'>Сохранить</button>
                        <button className='vaccination_delete'>Delete</button> */}

                    </div>
                } )}

                <div className = {(this.state.visible ? "show " : 'no-show ' ) + 'addForm'} >
                    <form>
                    <p>Название</p>
                    <input value={this.state.sendData.disease} onChange={this.onChangeHandler}  name = 'disease'></input>
                    <p>Дата обработки</p>
                    <input value={this.state.sendData.date} onChange={this.onChangeHandler} name = 'date'></input>
                    <p>Дата следующей обработки</p>
                    <input value={this.state.sendData.newDate} onChange={this.onChangeHandler} name = 'newDate'></input>
                    <button onClick={this.addVaccination}>Сохранить</button>
                    </form>
                </div>
                <button onClick = {()=>{this.setState({visible:true})}}> Добавить </button>

                
            </div>
        )
    }
}

export default PetCard


 {/* <Link to={`/PetSettings/${this.props.match.params.id}`}>
                        <img className='settings' 
                             src='https://e7.pngegg.com/pngimages/257/93/png-clipart-settings-gear-icon-gear-configuration.png'
                             alt='Settings' />
                    </Link> */}