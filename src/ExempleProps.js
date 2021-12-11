import React from "react";
import PropTypes from "prop-types";

class ExempleProps extends React.Component {
    render(){   
        //PropTypes.checkPropTypes() 
        return (
            <div>
                Actif : {this.props.actif ? 'OUI' : 'NON'}<br/>
                Taille : {this.props.taille}<br/>
                Taille : {(this.props.taille>5) && <div>OK</div>}<br/>
                Nom : {this.props.nom}<br/>
                Wilayas : {this.props.wilayas.map(w=> w+", ")}
            </div>
        )
    }
}
ExempleProps.propTypes = {
    actif : PropTypes.bool,
    taille : PropTypes.number.isRequired,
    nom : PropTypes.string,
    wilayas : PropTypes.array    
}
ExempleProps.defaultProps = { 
    actif : true, taille : 10, nom : "Ibn Rochd", 
    wilayas : ['Adrar', 'Chlef', 'Laghouat']
}
export default ExempleProps