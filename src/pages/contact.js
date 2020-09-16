import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact'
import React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout title="Contact">
            <MDBContainer className="py-5 my-5">
                <MDBRow>
                    <MDBCol md="12" lg="12">
                        <h1 className="display-4 mb-3">Get in Touch</h1>
                    </MDBCol>
                    <MDBCol md="6" lg="6">
                        <MDBInput label="Your Name" outline />
                        <MDBInput label="Your Email" outline />
                        <MDBInput label="Your Subject" outline />
                        <MDBInput type="textarea" label="Your Message" outline />
                        <MDBBtn size="md" color="dark" className="mx-0">Send Message</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default ContactPage
