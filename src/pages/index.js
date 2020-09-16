import React from "react"
import Layout from "../components/layout"
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact"
import '../styles/main.css'

const IndexPage = () => (
  <Layout title="Home">
    <MDBContainer className="py-5 my-5">
      <MDBRow className="align-items-center">
        <MDBCol md="6" lg="6">
          <h1 className="h1-responsive">
            MDBootstrap + GatsbyJS
          </h1>
          <p className="lead">
            A starter for Gatsby bootstraped with MDBReact - Material Design Bootstrap ReactJS.
          </p>
          <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque eros a sem pulvinar, 
          a eleifend urna sodales. Vivamus vel nisi risus. Nullam non orci pharetra, tempor justo quis, vulputate 
          mi. Cras turpis nunc, tincidunt et finibus eget, maximus vel leo. Vestibulum vitae sapien lacinia tellus 
          facilisis efficitur vel et elit.
          </p>
          <MDBBtn href="/elements" color="dark" className="text-capitalize m-0">Get Started</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default IndexPage
