import React from 'react'
import './PetCard.css'
import dog_avatar from '../image/dog_avatar.png'
import button from '../image/add_button.svg'
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

        this.setState({visible:false , sendData:''})
    }

    getVaccination(){
        console.log(this.props)
        fetch(`http://localhost:5000/pet/${this.props.match.params.id}`)
        .then(promise => promise.json())
        .then(data => this.setState({...data}, ()=>{console.log(this.state)} ))
    }
    render(){
        console.log(this.props)
        console.log(this.state)
        return(
            <div className='PetCard_container'>
                <header className='PetCard_header'>
                <img className='PetCard_img_header' src={dog_avatar} alt='dog_avatar'/>
                    <h2 className='PetCard_name'>{this.state.name}</h2>
                   
                </header>
                {this.state.vaccination && this.state.vaccination.length > 0 ? 
                this.state.vaccination.map((vaccination)=>{
                    return <div className='PetCard_vaccination'>
                        <p className="PetCard_disease">{vaccination.disease}</p>
                        <p className="PetCard_newDate">{vaccination.newDate}</p>
                        {/* <input className='vaccination_name' value = {vaccination.disease} ></input>
                        <input className='vaccination_date' value = {vaccination.date} ></input>
                        <input className='vaccination_newDate' value={vaccination.newDate}></input>
                        <button className='vaccination_change'>Редактировать</button>
                        <button className='vaccination_save'>Сохранить</button>
                        <button className='vaccination_delete'>Delete</button> */}

                    </div>
                }) : <p>Добавьте пункты ухода</p>}

                <div className = {(this.state.visible ? "show " : 'no-show ' ) + 'PetCard_addForm'} >
                    <form>
                    <p className="PetCard_addForm_title">Название</p>
                    <input className="PetCard_addForm_input" value={this.state.sendData.disease} onChange={this.onChangeHandler}  name = 'disease'></input>
                    <p className="PetCard_addForm_text">Дата обработки</p>
                    <input className="PetCard_addForm_input" type='date' value={this.state.sendData.date} onChange={this.onChangeHandler} name = 'date'></input>
                    <p className="PetCard_addForm_text">Дата следующей обработки</p>
                    <input className="PetCard_addForm_input" type='date' value={this.state.sendData.newDate} onChange={this.onChangeHandler} name = 'newDate'></input>
                    <br/><button className="PetCard_addForm_save_button" onClick={this.addVaccination}>Сохранить</button>
                    </form>
                </div>
                <button className="PetCard_add_vaccination_button" onClick = {()=>{this.setState({visible:true})}}> <img className='PetCard_add_vaccination_img' src={button} alt="add_button"/></button>

                
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