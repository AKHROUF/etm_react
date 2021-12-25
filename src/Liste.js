import React from "react";
import Detail from "./Detail";
class Liste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [{id:1, nom:'Mohamedi',age:20}, {id:2, nom:'Ali',age:33}, ], }
    }
    render(){
        return (
            <div><h1>Liste des {this.props.table} ({this.props.page})</h1>
                <table>
                    <thead><tr><th>ID</th><th>Nom</th><th>AGE</th></tr></thead>
                    <tbody>{this.state.data.map(x=>(
                            <tr key={x.id}><td>{x.id}</td><td>{x.name}</td><td>{x.age}</td></tr>
                        ))}</tbody>
                </table>
                <Detail info={this.props.table} />
            </div>
        )
    }
}
export default Liste