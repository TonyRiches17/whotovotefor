import { useNavigate } from 'react-router-dom';
import "./Navigation.css";

function Navigation() {

  const navigate = useNavigate();

  return(
    <div className="nav">
      <button onClick={() => navigate("/search")} className="nav__link">Search</button>
      <button onClick={() => navigate("/about")} className="nav__link">About</button>
    </div>
  )
}

export default Navigation;