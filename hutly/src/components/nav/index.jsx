import "./style.css";
import logo from "/img/logo/logo.svg";

function Nav() {
  return (
    <nav className="nav">
      <a className="nav__logo">
        <img src={logo} alt="Hutly logo" />
      </a>

      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link nav__link--active">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Project
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About Us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            FAQ`s
          </a>
        </li>
      </ul>

      <a href="#" className="nav__btn">
        Contact Us
      </a>
    </nav>
  );
}

export default Nav;
