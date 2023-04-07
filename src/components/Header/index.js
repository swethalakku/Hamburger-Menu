// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            data-testid="hamburgerIconButton"
            className="hamburger-icon"
          >
            <GiHamburgerMenu className="ham-burger-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={close}
            >
              <IoMdClose className="nav-icon" />
            </button>
            <ul className="popup-items">
              <Link to="/" className="nav-link" onClick={close}>
                <li className="popup-item">
                  <AiFillHome className="fill-icon" />
                  <h1 className="content-text">Home</h1>
                </li>
              </Link>
              <Link to="/about" className="nav-link" onClick={close}>
                <li className="popup-item">
                  <BsInfoCircleFill className="fill-icon" />
                  <h1 className="content">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
    <hr />
  </>
)

export default Header
