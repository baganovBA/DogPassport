import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import LogIn from './LogIn/LogIn';
import Registration from './Registration/registration';
import User from './User/User';
import NewPet from './NewPet/NewPet';
import PetCard from './PetCard/PetCard';

function App() {
  return (
    <div className="App">
      <header><p>DogPassport</p></header>
      <div className='route'> 
     <Route path='/registration'> 
        <Registration />
     </Route>
     <Route path='/'> 
        <LogIn />
     </Route>
     <Route path='/User/:id'> 
        <User />
     </Route>
     <Route path='/newPet'> 
        <NewPet />
     </Route>
     <Route path='/PetCard'> 
        <PetCard />
     </Route>
     </div>
    </div>
  );
}

export default App;
