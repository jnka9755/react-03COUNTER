import PropTypes from 'prop-types'

const name = 'Juan Camilo';

const getName = ( name ) => {
    return `Hola, soy ${ name }`;
}

export const FirstApp = ({ title, subtitle }) => {

  return (
    <>
        {/* <span> { getName('Juan') } </span> */}
        <h1 data-testid="test-title" >{ title }</h1>
        {/* <p>{ subtitle + 25 }</p> */}
        <p>{ subtitle  }</p>
        <p>{ subtitle  }</p>
        <p>{ subtitle  }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number
}

FirstApp.defaultProps = {
  title: 'Titulo por defecto',
  subtitle: 0
}