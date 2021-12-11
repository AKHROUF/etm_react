import './App.css';
import Liste from './Liste';
import ExempleProps from './ExempleProps';
import Somme1 from './Somme1';
import Somme2 from './Somme2';
import Patients from './Patients';

function App() {
  var x = 500;
  return (    
    <div className="App">   
      <Patients /> 
      <Somme1 />  
      <Somme2 /> 
      <Liste table="patients" page={x}  />
      <ExempleProps />
    </div>
  );
}

export default App;
