import React from "react";
import './Somme2.css';
import { Fragment } from "react";
class Somme2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x:0,y:0, z:0}
        this.calculer = this.calculer.bind(this)
        this.changer = this.changer.bind(this)
    }
    changer(e){
        this.setState({[e.target.name]:e.target.value})
    }
    calculer(e) {
        var somme = Number(this.state.x) + Number(this.state.y)
        this.setState({ z: somme })
        e.preventDefault()
    }
    render(){
        // ssssss
        return (
            <><form onSubmit={this.calculer} >
                X = <input type="number" name="x" value={this.state.x}
                onChange={this.changer} /><br/>
                Y = <input type="number" name="y" value={this.state.y}
                onChange={this.changer} /><br/>
                <input type="submit" value="SOMME" />
                SOMME = <span className="test"> {this.state.z}</span>
                </form></>
        )
    }
}
export default Somme2