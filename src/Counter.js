import React, { useState, useEffect } from "react";
import ReactDOM from 'react';

function Counter() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(Counter, 1000);
  

export default Counter;
