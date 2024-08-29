import React from "react"
import small_logo from "../images/small_logo.png"
import { FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return(
        <footer>
        <div>
            <img src={small_logo} />
        </div>
        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Reservations</a></li>
          <li><a href='#'>Order Online</a></li>
          <li><a href='#'>Login</a></li>      
          <li><a href='#'>Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href=""><FaLinkedin /></a>
          <a href=""><FaGithub /></a>
          <a href=""><FaTwitter /></a>        
        </div>
        <div className="footer_copyright">
          <small>&copy; All rights reserved.</small>
        </div>
      </footer>
    )
}

export default Footer;
