import { ReactElement } from "react"
import { Link } from "react-router-dom"

const Navbar = (): ReactElement => {
  return (
    <ul className="navbar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Search</Link></li>
      <li><Link to="/">Login</Link></li>
    </ul>
  )
}

export default Navbar
