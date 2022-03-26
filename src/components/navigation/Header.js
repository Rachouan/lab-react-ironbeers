import { Link } from "react-router-dom"
import { Home } from 'react-feather';

export const Header = () => {
  return (
    <header className="p-4 text-center bg-sky-500/100">
        <Link to="/"><Home className="mx-auto text-white"/></Link>
    </header>
  )
}
