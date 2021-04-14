import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/house">Congress/House</Link>
      </div>
    </nav>
  );
};
export default Navbar;