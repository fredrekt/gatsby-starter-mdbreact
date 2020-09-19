import React from "react"
import PropTypes from "prop-types"
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "../styles/main.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./seo";

const Layout = ({ children, title }) => {
  return (
    <>
    <SEO title={title}/>
    <Navbar/>
      <main>{children}</main>
    <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout
