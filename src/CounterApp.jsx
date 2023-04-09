// export function App() {

//     return <h1>Hola Mundo</h1>;
// }

import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

  const sum = () => {
    // setCounter( counter + 1 );
    setCounter ( (c) => c + 1);
  }

  const subtract = () => {

    setCounter ( (c) => c - 1);
  }

  const reset = () => {
    
    setCounter ((c) => c = value);
  }

  return (
    <>
      <h1> CounterApp </h1>
      <h2> { counter } </h2>

      <button onClick={ sum }> +1 </button>
      <button onClick={ subtract }> -1 </button>
      <button onClick={ reset }> Reset </button>
    </>
  )
}

CounterApp.protoTypes ={
  value: PropTypes.number.isRequired
}