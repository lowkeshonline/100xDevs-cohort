import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function HomePage (){
  return(
    <>
      <p>Home Page</p>
      <Link to={'/about'}><button>Go to about</button></Link>
      <Link to={'/contact'}><button>Go to Contact</button></Link>
      <Link to={'*'}><button>Error Page</button></Link>
    </>
  )
}
function AboutPage (){
  return(
    <>
      <p>About Page</p>
    </>
  )
}
function ContactPage (){
  return(
    <>
      <p>Contact Page</p>
    </>
  )
}
function PageNotFound (){
  return(
    <>
      <p>Sorry Page not found</p>
    </>
  )
}

export default App
