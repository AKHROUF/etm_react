import React from "react";

class Patients extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded:false, items:[]}
    }
    componentDidMount() { this.chargerPatient();  }
    chargerPatient(){ 
        fetch('http://127.0.0.1:8080/api/patients')
            .then(reponse=>reponse.json())
            .then(json =>this.setState({isLoaded:true, items:json}))
            .catch(err=>{ alert(err); this.setState({isLoaded:false, items:[]}) })
    }
    supprimer(id){             
        fetch('http://127.0.0.1:8080/api/patients/'+id, {method: 'DELETE'})
            .then(reponse=> this.chargerPatient())
            .catch(err=>{ alert(err); })
    }
    render(){   
        return (
            <>
            <table>
                <thead><tr><th>ID</th><th>NOM</th><th>PRENOM</th><th>ACTIONS</th></tr></thead>
                <tbody>{this.state.items.map(x=>(
                            <tr key={x.idPatient}><td>{x.idPatient}</td>
                            <td>{x.nom_patient}</td><td>{x.prenom_patient}</td>
                            <td><a href="#" onClick={(e)=> { 
                                                      e.preventDefault(); 
                                                      this.supprimer(x.idPatient);}
                                                    }>SUPPRIMER</a></td></tr>
                        ))}</tbody>
            </table>
            </>
        )
    }
}

export default Patients