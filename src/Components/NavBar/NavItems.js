import React from 'react'
import { Link } from 'react-router-dom'

function NavItems(props) {
    return (
        <Link to={props.item.path}>
            <div className={props.isActive ? 'navbar-item active' : 'navbar-item'} onClick={ () => props.onSelect(props.item.title)}>
            
                <div>
                    {props.item.icon}
                </div>

                <span className='nav-title'>
                    {props.item.title}
                </span> 
                
            </div>
        </Link>
            
    )
}

export default NavItems
