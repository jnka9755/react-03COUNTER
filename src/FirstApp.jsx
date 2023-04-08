const name = 'Juan Camilo';

const getName = ( name ) => {
    return `Hola, soy ${name}`;
}

export const FirstApp = () => {

  return (
    <>
        <span> { getName('Juan') } </span>
        <p>Primera aplicación en React</p>
    </>
  )
}