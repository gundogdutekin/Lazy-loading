import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <h1>Home</h1>
     <div>
        <ul>
         <li><Link to="/" >Anasayfa</Link></li>
         <li><Link to="/about">Hakkımızda</Link></li>
         <li><Link to="/contact">İletişim</Link></li>
        </ul>
     </div>
    </>
    
  )
}

export default Home