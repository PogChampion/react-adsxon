import React, { Component } from 'react';

function NumberTile({number, zero, add}){
  const isZero = zero ? "zero" : ""
  const classes = `tile numberTile ${isZero}`
  return (
    <a className={classes} onClick={(e) => {add(number)}}>
      <div>
       {number}
      </div>
    </a>
  )
}

export default NumberTile
