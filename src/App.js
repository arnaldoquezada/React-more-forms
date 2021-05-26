import React,{ useState } from 'react';
import './App.scss';
import UserForm from './components/UserForm'

function App() {
  const [state, setState] = useState(
    {
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:""
    });
  return (
    <div className="App">
      <UserForm inputs = {state}/>
      {/* < DataForm/> */}
    </div>
  );
}

export default App;
