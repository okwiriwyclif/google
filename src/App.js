import React,{useState} from 'react'

import { Navbar } from './compnents/Navbar'
import { Footer } from './compnents/Footer'
import { Routes } from './compnents/Routes'

const App=()=>{

    const [darkTheme,setDarkTheme]=useState(true)

    return (

        <div>
            <h1 className={darkTheme ? 'dark' :''}>
               <div className="min-h-screen justify-between dark:bg-gray-900 dark:text-gray-200">
                   <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>

                   <div className="maxwidthwrapper p-5 h-full">
                   <Routes />
                   </div>
                   
                   <div className="maxwidthwrapper p-5">
                   <Footer />
                   </div>
                   
                </div>
            </h1>
        </div>

    )
}


export  default App