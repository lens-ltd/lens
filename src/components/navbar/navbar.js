import { Link } from 'react-router-dom';
import './navbar.css';
import '../../index.css';
import { useState } from 'react';


const Navbar = () => {
  /* TOGGLE RESPONSIVE MENU */
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('responsive_nav hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('responsive_nav');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('responsive_nav hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const toggleDropdown = (number) => {
    /* TOGGLE ABOUT ICON */
    const about_icon = document.querySelectorAll('.svg_about');
    about_icon[number].classList.toggle('svg_about_active');

    if (number === 0) {
      /* TOGGLE MAIN DROPDOWN */
      const dropdown = document.querySelector('.main_nav_dropdown');
      dropdown.classList.toggle('main_nav_dropdown_active');
    }
    if (number === 1) {
      /* TOGGLE RESPONSIVE DROPDOWN */
      const dropdown = document.querySelector('.responsive_nav_dropdown');
      dropdown.classList.toggle('responsive_nav_dropdown_active');
    }
  };

  return (
    <>
      {/* MAIN NAVIGATION BAR */}
      <nav className="main_nav">
        <Link to="/">
          <img
            src="https://lens-website170952-staging.s3.amazonaws.com/branding/lens-logo-white-background.png"
            alt="Lens Logo"
            className="nav_logo"
          />
        </Link>
        <NavLinks
          listClassName={'nav_list'}
          linksClassName={'nav_links'}
          handleDropDown={toggleDropdown}
          number={0}
        />
        <li className="burger-menu" onClick={updateMenu}>
          <span className={burger_class}></span>
          <span className={burger_class}></span>
          <span className={burger_class}></span>
        </li>
      </nav>
      {/* DROPDOWN ON MAIN NAVIGATION */}
      <NavDropdown
        className={'main_nav_dropdown main_nav_dropdown_active'}
        listId={'main_dropdown_about'}
        dropdownClass={'dropdown_links'}
      />
      {/* RESPONSIVE NAVIGATION BAR */}
      <nav className={menu_class}>
        <NavLinks
          listClassName={'nav_list_responsive'}
          linksClassName={'nav_links'}
          handleDropDown={toggleDropdown}
          number={1}
          responsive={true}
        />
      </nav>
    </>
  );
};

/* DROPDOWN ON NAVIGATION */
const NavDropdown = ({ className, listId, dropdownClass }) => {
  return (
    <div className={className}>
      <ul id={listId}>
        <li>
          <Link to="/about/discover" className={dropdownClass}>
            Discover Lens
          </Link>
        </li>
        <li>
          <Link to="/about/story" className={dropdownClass}>
            Our Story
          </Link>
        </li>
        <li>
          <Link to="/about/team" className={dropdownClass}>
            Our Team
          </Link>
        </li>
      </ul>
    </div>
  );
};

/* NAV LINK */
const NavLinks = ({
  listClassName,
  linksClassName,
  handleDropDown,
  number,
  responsive = false,
}) => {
  return (
    <ul className={listClassName}>
      <li className={linksClassName}>
        <Link to="/products">Products</Link>
      </li>
      <li className={linksClassName} onClick={() => handleDropDown(number)}>
        <p>About</p>
        {/* SVG ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 svg_about"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </li>
      {responsive && ( // render NavDropdown only if responsive is true
        <span className='responsive_dropdown'>
          <NavDropdown
          className={'responsive_nav_dropdown responsive_nav_dropdown_active'}
          listId={'responsive_dropdown_about'}
          dropdownClass={'dropdown_links'}
          />
        </span>
      )}
      <li className={linksClassName}>
        <Link to="/contact">Contact</Link>
      </li>
      <li className={linksClassName} id="nav_cta">
        <Link to="/join">Join Us</Link>
      </li>
    </ul>
  );
};

export default Navbar;
