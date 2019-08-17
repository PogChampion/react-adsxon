import React, { Component } from 'react';

function NumberTile({number, zero, add, dot}){
  const isZero = zero ? "zero" : ""; {/*CSS STUFF */}
  const classes = `tile numberTile ${isZero}`;
  return (
    <a className={classes} onClick={(e) => {add(number)}}>
      <div>
       {number}
       {console.log(dot)}
      </div>
    </a>
  )

}


export default NumberTile
