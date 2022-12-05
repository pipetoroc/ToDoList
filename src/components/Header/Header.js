import React from 'react';
import "./Header.css";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

function Header() {
  return (
    <header>
      <img className='logo'></img>
    <div>
      <a target='blank' href='https://github.com/pipetoroc'>
        <AiFillGithub className='icon'></AiFillGithub>
      </a>
      <a target='blank' href='https://www.linkedin.com/in/felipe-toro-castilla/'>
        <AiFillLinkedin className='icon'></AiFillLinkedin>
      </a>
    </div>
     </header>
  )
}

export default Header