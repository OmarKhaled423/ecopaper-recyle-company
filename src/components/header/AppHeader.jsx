import "./AppHeader.css";
import { NavLink, Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaBars } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

// import { FiInstagram } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCaretDown } from "react-icons/ai";
import Logo from "../logo/Logo";
import { useEffect, useState } from "react";

const AppHeader = () => {
  const [openNav, setOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };



  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth <= 768) {
        if (openNav) {
          setOpenNav(false);
        }
      }
      // console.log(windowWidth,openNav,'small')
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);


  return (
    <>
      <div className="sub-header__top">
        <div className="sub-header__left">
          Working Hour : <span className="highlight"> Saturday </span> To{" "}
          <span className="highlight">Thursday </span> | Customer Support :{" "}
          <span className="highlight">7</span> Days{" "}
          <span className="highlight">24</span> Hours
        </div>
        <div className="sub-header__right">
          <a
            className="contact-whatsapp"
            title="Call Whatsapp"
            href="tel:+8801811417787"
          >
            <div className="icon-box">
              <FaPhoneVolume />
            </div>
            <span className="contact-number">+8801811417787</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61560667595048"
            target="_blank"
            title="Follow on Facebook"
            className="icon-box"
            style={{ backgroundColor: "#ffffff" }}
          >
            <FaFacebookF color="#1877F2" />
          </a>
          <a
            href="https://sa.linkedin.com/in/refat-hussain"
            target="_blank"
            className="icon-box"
            title="Follow on Linkedin"
            style={{ backgroundColor: "#ffffff" }}
          >
            <FaLinkedinIn color="#1877F2" />
          </a>
          <a
            href="https://www.youtube.com/@mdrifathafezuddin4918"
            target="_blank"
            className="icon-box"
            title="Follow on Instagram"
            style={{ backgroundColor: "#ffffff" }}
          >
            <IoLogoYoutube color="#ff0000" />
          </a>
        </div>
      </div>

      {/* Main header Element */}
      <header className="header">
        {/* logo image section */}
        <Link to="/">
          <Logo />
        </Link>

        <div className="menu__bar" title="Menu Bar" onClick={toggleNav}>
          {openNav ? <RiCloseLargeFill /> : <FaBars />}
        </div>

        {/* search section */}
        {/* <form className="search__form" onSubmit={(e) => e.preventDefault()}>
          <div className="search__box" title="Search Here what do you want">
            <input
              type="text"
              className="search__input-field"
              placeholder="Search here..."
              required
            />
            <div title="Search" className="search__btn-box">
              <button className="search__btn" type="submit">
                <ImSearch size={18} />
              </button>
            </div>
          </div>
        </form> */}

        {/* navigation menu */}
        <nav className={`${openNav ? "show" : ""} header__nav`}>
          <NavLink
            onClick={() => setOpenNav(!openNav)}
            className={({ isActive }) =>
              isActive
                ? "active-item header__nav-item"
                : "none-color header__nav-item"
            }
            to="/"
          >
            <span className="nav-text">Home </span>
          </NavLink>

          <NavLink
            onClick={() => setOpenNav(!openNav)}
            className={({ isActive }) =>
              isActive
                ? "active-item header__nav-item"
                : "none-color header__nav-item"
            }
            to="/products"
          >
            <span className="nav-text">
              Products
              <span className="caret-icon">
                <AiOutlineCaretDown color="#000000" />
              </span>
            </span>
            <nav className="dropdown-manu">
              <NavLink
                onClick={() => setOpenNav(!openNav)}
                className={({ isActive }) =>
                  isActive
                    ? "isActiveDropdown dropdown-manu__item"
                    : "inActiveDropdown dropdown-manu__item"
                }
                to="/writing-printing"
              >
                Writing & Printing papers
              </NavLink>
              <NavLink
                onClick={() => setOpenNav(!openNav)}
                className={({ isActive }) =>
                  isActive
                    ? "isActiveDropdown dropdown-manu__item"
                    : "inActiveDropdown dropdown-manu__item"
                }
                to="/packaging-boards"
              >
                Packaging Boards papers
              </NavLink>
              <NavLink
                onClick={() => setOpenNav(!openNav)}
                className={({ isActive }) =>
                  isActive
                    ? "isActiveDropdown dropdown-manu__item"
                    : "inActiveDropdown dropdown-manu__item"
                }
                to="/speciality-papers"
              >
                Speciality Papers
              </NavLink>
              <NavLink
                onClick={() => setOpenNav(!openNav)}
                className={({ isActive }) =>
                  isActive
                    ? "isActive dropdown-manu__item"
                    : "inActiveDropdown dropdown-manu__item"
                }
                to="/tissues-papers"
              >
                Tissues Papers
              </NavLink>
            </nav>
          </NavLink>

          <NavLink
            onClick={() => setOpenNav(!openNav)}
            className={({ isActive }) =>
              isActive
                ? "active-item header__nav-item"
                : "none-color header__nav-item"
            }
            to="/contact-us"
          >
            <span className="nav-text">Contact Us</span>
          </NavLink>

          <NavLink
            onClick={() => setOpenNav(!openNav)}
            className={({ isActive }) =>
              isActive
                ? "active-item header__nav-item"
                : "none-color header__nav-item"
            }
            to="/about-us"
          >
            <span className="nav-text">About Us</span>
          </NavLink>

          {/*
          <NavLink onClick={()=>(setOpenNav(!openNav))}
            className={({ isActive }) =>
              isActive
            ? "active-item header__nav-item"
            : "none-color header__nav-item"
            }
            to="/events"
            >
            <span className="nav-text">Events</span>
            </NavLink> 
           
            */}
        </nav>
      </header>
    </>
  );
};

export default AppHeader;

// const useWindowWidth = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return windowWidth;
// };

// const ExampleComponent = () => {
//   const windowWidth = useWindowWidth();

//   return (
//     <div>
//       <p>Current window width: {windowWidth}px</p>
//     </div>
//   );
// };

// export default ExampleComponent;
