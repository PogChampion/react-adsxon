import React, { Component } from 'react';
import {useState} from 'react'

import Display from '../Display/Display'
import FunctionTile from '../FunctionTile/FunctionTile'
import OperationTile from '../OperationTile/OperationTile'
import NumberTile from '../NumberTile/NumberTile'

const Calculator = () => {

  const [oldNum, setOldNum] = useState(undefined);
  const [newNum, setNewNum] = useState("0");
  const [operator, setOperator] = useState(undefined);

  const addNumber = (number) => {
    if (newNum == "0" && number != ".") {
      setNewNum(number);
    }
    else {
      setNewNum(newNum + number);
    }
  }

  return (
    <div id="wrapper">
      <Display newNumber={newNum} oldNumber={oldNum} />
      <FunctionTile function="AC"/>
      <FunctionTile function="+/-"/>
      <OperationTile/>
      <OperationTile/>
      <NumberTile number="1" add={addNumber}/>
      <NumberTile number="2" add={addNumber}/>
      <NumberTile number="3" add={addNumber}/>
      <OperationTile/>
      <NumberTile number="4" add={addNumber}/>
      <NumberTile number="5" add={addNumber}/>
      <NumberTile number="6" add={addNumber}/>
      <OperationTile/>
      <NumberTile number="7" add={addNumber}/>
      <NumberTile number="8" add={addNumber}/>
      <NumberTile number="9" add={addNumber}/>
      <OperationTile/>
      {/* the zero prop is used by css */}
      <NumberTile number="0" zero={true} add={addNumber}/>
      <NumberTile number="." add={addNumber}/>
      <OperationTile/>
    </div>
  )
}

export default Calculator
