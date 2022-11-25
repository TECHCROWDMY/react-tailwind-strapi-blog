import React from 'react';
import { Navbar, Blogs, Footer } from "../components"

const Homepage = ({blogs}) => {



  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs} />       
      <Footer />
    </div>
  )
}

export default Homepage