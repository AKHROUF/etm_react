import React, { Suspense } from "react";
import './App.css';
const Liste = React.lazy(()=> import('./Liste'));
const ExempleProps = React.lazy(()=> import('./ExempleProps'));
const Somme1 = React.lazy(()=> import('./Somme1'));
const Somme2 = React.lazy(()=> import('./Somme2'));
const Patients = React.lazy(()=> import('./Patients'));

function App() {
  var x = 500;
  return (    
    <div className="App">  
      <Suspense fallback={<div>Chargement encours ...</div>}>
        <Patients /> 
        <Somme1 />  
        <Somme2 /> 
        <Liste table="patients" page={x}  />
        <ExempleProps />
      </Suspense> 
    </div>
  );
}

export default App;
