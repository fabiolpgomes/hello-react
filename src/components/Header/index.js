import './header.css';
import Logo from "../../images/Logo React.png";
import Menu from "../../images/menu-top-xs.png";

// Component from Header Top
function Header() {
    return (
    <header className="nav-container">
      <img src={Logo} alt="React Logo" />
      <img src={Menu} alt="Menu Logo" />
    </header>
  );
}

export default Header;


