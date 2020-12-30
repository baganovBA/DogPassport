import React from 'react'

class User extends React.Component{ 
    render(){
        return(
            <div className='block'>  
                <h1>User</h1>
                <div>
                    <p>Питомцы</p>
                    <button>Добавить Питомца</button>
                </div>
            </div>
        )
    }
}

export default User