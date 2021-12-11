import React from 'react';  

class CycleVie extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {nom: "IBN ROCHD"};  
      this.maj = this.maj2.bind(this)  
   }    
   render() {  
      return (<div><h1>Cycle de vie d’un composant REACT</h1>  
                   <h3>Bienvenue à {this.state.nom}</h3>  
                   <button onClick = {this.maj}>OK</button></div>);  
   }  
   maj2(){ 
       console.log("click sur bouton");
   }
   UNSAFE_componentWillMount() {  console.log('Composant démarrer !')        }  
   UNSAFE_componentDidMount() {   console.log('Composant va démarrer !')     }  
   changeState(){          this.setState({nom:"ETM IBN ROCHD"});      }  
   UNSAFE_componentWillReceiveProps(newProps) {      
                     console.log('Composant va avoir des propriétés') }  
   shouldComponentUpdate(newProps, newState) {  return true;          }  
   UNSAFE_componentWillUpdate(nextProps, nextState) {  
                     console.log('Composant va être mis à jour');     }  
   UNSAFE_componentDidUpdate(prevProps, prevState) {  
                     console.log('Composant mis à jour !')            }  
   componentWillUnmount() {  console.log('Composant va être retire !')}  
}  
export default CycleVie;
