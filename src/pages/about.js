import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout title="About">
            <MDBContainer className="py-5 my-5">
                <MDBRow>
                    <MDBCol>
                        <h1 className="display-3 mb-3">About Starter</h1>
                        <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque eros a sem pulvinar, a eleifend urna sodales. Vivamus vel nisi risus. Nullam non orci pharetra, tempor justo quis, vulputate mi. Cras turpis nunc, tincidunt et finibus eget, maximus vel leo. Vestibulum vitae sapien lacinia tellus facilisis efficitur vel et elit. Aliquam sit amet justo quis turpis pulvinar sagittis. Vestibulum et varius ligula. Nunc mollis nisl purus, id aliquet sapien varius id. Fusce sed mattis neque. Ut nec ipsum at massa rutrum fringilla a vel odio.

Mauris lacinia at diam vel eleifend. Nullam a ipsum vitae turpis efficitur viverra sed sed eros. Quisque lacinia ante eros. Nunc at justo semper, vulputate erat nec, tincidunt mauris. Quisque mollis lacinia enim sit amet rhoncus. Cras eu facilisis neque, vitae elementum metus. Maecenas pellentesque eget augue a vehicula. Maecenas volutpat dictum ex, sodales blandit neque pulvinar aliquet. Pellentesque faucibus volutpat commodo. Vivamus elementum feugiat cursus.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default AboutPage
