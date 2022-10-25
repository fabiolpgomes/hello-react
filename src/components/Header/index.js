import Logo from "../../images/Logo React.png";
import Menu from "../../images/hamburger.png";

// Component from Header Top
function Header() {
  console.log();

  return (
    <header className="header">
      <img src={Logo} alt="React Logo" />
      <img src={Menu} alt="Menu Logo" />
    </header>
  );
}

export default Header;
