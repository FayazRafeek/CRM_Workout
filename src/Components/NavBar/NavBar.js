import React from 'react'
import NavItems from './NavItems'
import styles  from './NavBar.css'
import NavBarItems from './NavBarItems'
import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'

import { Link } from 'react-router-dom'

function NavBar(props) {

    const [navState,setNavState] = useState(true)

    const toggleSidebar = () => setNavState(!navState)

    return (
        <div className={navState ? 'nav-container expanded' : 'nav-container collapsed'}>
            <div className='logo-parent'>
                {navState ? 'LOGO' : 'ð'}
            </div>

            <div className='nav-menu-parent'>
                {
                    NavBarItems.map((item, index) => {
                        return (
                            <NavItems key={index} item={item} onSelect={props.itemSelect} navState={navState} isActive={props.activeItem === item.title}/>
                        )
                    })
                }
            </div>

            <div className='menu-bars'  onClick={toggleSidebar}>
                {
                    navState ? <BsIcons.BsArrowLeft/> : <BsIcons.BsArrowRight/>
                }
            </div>
            
        </div>
    )
}

export default NavBar
