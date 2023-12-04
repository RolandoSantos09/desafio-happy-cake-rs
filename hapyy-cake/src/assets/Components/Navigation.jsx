import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="BoxNav">
        <Link to="/">Inicio 🏠</Link>
        <Link to="/Contact">Contáctanos 📱</Link>
      </div>
    </>
  );
}

export default Navigation;
