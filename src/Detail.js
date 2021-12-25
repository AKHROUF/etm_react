import React from "react";
import { TableContext } from "./Context";

class Detail extends React.Component {
    static contextType = TableContext;  
    render(){
        return(
            <>Ca Marche<br/>
            {this.props.info}<br/>
            {this.context}<br/>
            <TableContext.Consumer >
                {value => value}
            </TableContext.Consumer>
            </>
        )
    }
}
export default Detail;