import { Link } from "gatsby";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react"
import Layout from "../components/layout"
import missing from '../images/missing.png';

const MissingPage = () => {
  return (
    <Layout title="Page Not Found">
      <MDBContainer className="py-5 my-5">
        <MDBRow className="align-items-center">
          <MDBCol md="6" lg="6">
            <div className="content text-center">
              <h1 className="h1-responsive">Ooooopsiee</h1>
              <p className="lead">Page not found. Sorry for the inconvenience we weren't able to find what you were looking for.</p>
              <Link to="/">
                <MDBBtn color="dark" className="text-capitalize">
                  Go Home
                </MDBBtn>
              </Link>
            </div>
          </MDBCol>
          <MDBCol md="6" lg="6">
            <img src={missing} alt="missing vector" className="w-100"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default MissingPage
