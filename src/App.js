import './App.css';
import React from 'react';
import {Route, Routes,Link, BrowserRouter as Router} from 'react-router-dom';
import Liste from './Liste';
import ExempleProps from './ExempleProps';
import Somme1 from './Somme1';
import Somme2 from './Somme2';
import Patients from './Patients';
import Erreur404 from './Erreur404';
import Patient from './Patient';
import { TableContext } from './Context';

function App() {
  var x = 500;
  return (    
    <Router>
    <div className="App">   
      <ul><li><Link to="/">ACCUEIL</Link></li>
          <li><Link to="/patients">PATIENTS</Link></li>
          <li><Link to="/calc">CALCULATRICE</Link></li>
          <li><Link to="/liste">LISTE</Link></li>
          <li><Link to="/props">PROPRIETES REACT</Link></li></ul>
      <Routes>
        <Route path="/" element={<Somme1/>} />
        <Route path="/patients" element={<Patients/>} />
        <Route path="/patient/:id" element={<Patient />} />
        <Route path="/calc" element={<Somme2/>} />
        <Route path="/liste" element={ 
          <TableContext.Provider value={['Mohamedi']}>
            <Liste table="patients" page={x}  />
          </TableContext.Provider> } />
        <Route path="/props" element={<ExempleProps/>} />      
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
