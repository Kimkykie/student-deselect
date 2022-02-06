import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/home">Home</Link> | <Link to="new">Add New Student</Link>
    </nav>
  );
}

export default Navigation;
