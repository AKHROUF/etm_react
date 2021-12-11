import React from "react";
import { Fragment } from "react";
class Somme1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { z:0}
        this.x = React.createRef()
        this.y = React.createRef()
        this.calculer = this.calculer.bind(this)
    }
    calculer(e) {
        var somme = Number(this.x.current.value) + Number(this.y.current.value)
        this.setState({ z: somme })
        e.preventDefault() // empêcher le submit du formulaire au serveur
    }
    render(){
        return (
                <Fragment><form onSubmit={this.calculer} >
                X = <input type="number" ref={this.x} /><br/>
                Y = <input type="number" ref={this.y} /><br/>
                <input type="submit" value="SOMME" />
                SOMME = {this.state.z}
                </form></Fragment>
        )
    }
}
export default Somme1