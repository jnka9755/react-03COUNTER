import PropTypes from 'prop-types'

const name = 'Juan Camilo';

const getName = ( name ) => {
    return `Hola, soy ${ name }`;
}

export const FirstApp = ({ title, subtitle }) => {

  return (
    <>
        {/* <span> { getName('Juan') } </span> */}
        <span>{ title }</span>
        <p>{ subtitle + 25 }</p>
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