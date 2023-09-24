import React from 'react'
const Navbar = () => {
    return (
    <div className='links'>
        <nav>
            <a href="#about">About me | </a>
            <a href="#projects">Recent Coding Projects | </a>
            <a href="https://github.com/gvc222" target="_blank">Github | </a>
            <a href="https://www.playtimediary.com/" target="_blank">Personal blog | </a>
            {/* <a href="https://boinkie.itch.io/">Itch page | </a> */}
            <a href="#contact">Contact me</a>
        </nav>
    </div>
    )
      }

export default Navbar