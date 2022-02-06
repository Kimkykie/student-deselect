import { Link } from "react-router-dom";
import "../styles/navigation.css";

function Navigation() {
  return (
    <nav className="student-nav">
      <Link to="/home">Home</Link> | <Link to="new">Add New Student</Link>
    </nav>
  );
}

export default Navigation;
