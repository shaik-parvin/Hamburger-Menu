// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          className="trigger-button"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="menu-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="popup-content">
          <ul className="container1">
            <li className="home-container">
              <AiFillHome className="home-icon" />
              <Link to="/">
                <p className="description">Home</p>
              </Link>
            </li>
            <li className="about-container">
              <BsInfoCircleFill className="about-icon" />
              <Link to="/about">
                <p className="description">About</p>
              </Link>
            </li>
          </ul>
          <div>
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
