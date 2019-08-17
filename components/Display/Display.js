import React, { Component } from 'react';


 function Display(props) {
  return (
    <div id="display">
      <div id="displayTop">
        {props.oldNumber} 0
      </div>
      <div id="displayBot">
        {props.newNumber}
      </div>
    </div>
  )
}

export default Display
