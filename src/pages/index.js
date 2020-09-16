import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact"
import '../styles/main.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MDBContainer className="py-5 my-5">
      <MDBRow className="align-items-center">
        <MDBCol md="6" lg="6">
          <h1 className="h1-responsive">
            MDBootstrap + GatsbyJS
          </h1>
          <p className="lead">
            Here you can use rows and columns here to organize your footer
            content. Here you can use rows and columns here to organize your footer
            content. Here you can use rows and columns here. Here you can use rows 
            and columns here. Here you can use rows and columns here.
          </p>
          <MDBBtn color="dark" className="text-capitalize m-0">Get Started</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default IndexPage
