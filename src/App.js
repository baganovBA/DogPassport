import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import Registration from './Registration/registration';
import User from './User/User';
import NewPet from './NewPet/NewPet';
import PetCard from './PetCard/PetCard';
import PetSettings from './PetSettings/PetSettings';

function App() {
  return (
    <div className="App">
      <header><p>DogPassport</p></header>
      <div className='route'> 
     <Route path='/registration'> 
        <Registration />
     </Route>
     <Route path='/'exact> 
        <LogIn />
     </Route>
     <Route path='/User'> 
        <User />
     </Route>
     <Route path='/NewPet' component={NewPet} exact> 
     </Route>
     <Route path='/PetCard/:id' component={PetCard} exact> 
     </Route>
     <Route path='/PetSettings/:id' component={PetSettings} exact> 
     </Route>
     </div>
    </div>
  );
}

export default App;
