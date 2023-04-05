import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'

//import About from './components/About'
//import Contact from './components/Contact'
//2.6 MB resources finished loading in 376ms
const About = React.lazy(() => import('./components/About'))
const Contact = React.lazy(() => import('./components/Contact'))
//2.2 MB resources finished loading in 311ms
function App() {
 
  return (
    <div className="App">
      <Routes>
      
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={ <React.Suspense fallback={<p>Loading..</p>}><About/> </React.Suspense>} />
          <Route path="/contact" element={ <React.Suspense fallback={<p>Loading..</p>}><Contact/></React.Suspense>} />
       
      </Routes>
    </div>
  )
}

export default App
