import { Route, useParams } from "react-router-dom";
import React from "react";

function Patient () {
    let { id } = useParams();
    return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}

export default Patient