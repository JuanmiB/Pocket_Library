import { Link } from 'react-router-dom'
import { Example } from '../components/Menu'
import "./Header.css"
export function Header () {
  return (
 <header>
  <Link to="/">
    <h1 className="title">My library App</h1>
  </Link>
 </header>
  )
}
