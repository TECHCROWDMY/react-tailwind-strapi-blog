import React from 'react';
import { Navbar, Footer, BlogContent } from "../components"

const BlogContentPage = ({blogs}) => {
  console.log(blogs)
  
  return (
    <div>
      <Navbar />
      <BlogContent blogs={blogs}/>       
      <Footer />
    </div>
  )
}

export default BlogContentPage