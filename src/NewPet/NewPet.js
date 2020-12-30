import React from 'react'

class NewPet extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <h3>Новый питомец</h3>
                    <p>Кличка</p>
                    <input name='name' />
                    <p>Порода</p>
                    <input name='breed' />
                    <p>Дата Рождения</p>
                    <input name='birthday date' />
                    <p>Масса</p>
                    <input name='weight' />
                    <p>Номер Чипа</p>
                    <input name='chip' />
                    <p>Номер Татуировки</p>
                    <input name='tatoo' />
                    <button>Добавить питомца</button>
                </form>
            </div>
        )
    }
}

export default NewPet