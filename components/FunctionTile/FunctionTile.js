import React, { Component } from 'react';

 const FunctionTile = (props) => {
  return (
    <a className="functionTile tile">
      <div>
        {props.function}
      </div>
    </a>
  )
}

export default FunctionTile
