import { Link } from 'react-router-dom'
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <section id='error-page'>
        <h1>ERROR</h1>
        <h2>No puedes entrar ahí</h2>
        <Link to="/">Ir al home</Link>
    </section>
  )
}

export default ErrorPage