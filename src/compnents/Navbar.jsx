import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

export const Navbar = ({darkTheme,setDarkTheme}) => {

    return (
        <div className="maxwidthwrapper flex items-center justify-between p-5">

            <Link to="/">
                <div className="logo font-bold">
                GOOGLE
                </div>
            </Link>

            <button className="darkmodeicon" onClick={()=>setDarkTheme(!darkTheme)}>
               {darkTheme? 'Dark theme':'Light theme'}
            </button>
            
        </div>
    )
}
