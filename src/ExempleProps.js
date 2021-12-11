import React from "react";
import PropTypes from "prop-types";

class ExempleProps extends React.Component {
    render(){
        return (
            <div>
                Actif : {this.props.actif? 'OUI' : 'NON'}<br/>
                Taille : {this.props.taille}<br/>
                Nom : {this.props.nom}<br/>
                Wilayas : {this.props.wilayas.map(w=> w+", ")}
            </div>
        )
    }
}
ExempleProps.defaultProps = { 
    actif : "ETM", taille : 10, nom : "Ibn Rochd", 
    wilayas : ['Adrar', 'Chlef', 'Laghouat']
}
ExempleProps.propTypes = {
    actif : PropTypes.bool,
    taille : PropTypes.number,
    nom : PropTypes.string,
    wilayas : PropTypes.array    
}
export default ExempleProps