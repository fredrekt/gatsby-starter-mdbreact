import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBJumbotron, MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdbreact'
import React from 'react'
import Layout from '../components/layout'
import { MDBInput } from "mdbreact";

const ElementsPage = () => {
    return (
        <Layout title="Elements">
            <MDBContainer className="py-5 my-5">
                <MDBRow>
                    <MDBCol md="4" lg="4">
                        <h1 className="display-4 mb-5">Typography</h1>
                        <h1 className="h1-responsive">Heading 1</h1>
                        <h2 className="h2-responsive">Heading 2</h2>
                        <h3 className="h3-responsive">Heading 3</h3>
                        <h4 className="h4-responsive">Heading 4</h4>
                        <h5 className="h5-responsive">Heading 5</h5>
                        <h6 className="h6-responsive">Heading 6</h6>
                    </MDBCol>
                    <MDBCol md="8" lg="8" className="text-right">
                        <h1 className="display-1">Display 1</h1>
                        <h2 className="display-2">Display 2</h2>
                        <h3 className="display-3">Display 3</h3>
                        <h4 className="display-4">Display 4</h4>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-4">
                    <MDBCol>
                        <p className="lead">
                            Paragraph <strong>strong</strong>, <i>italic</i> <b>bold</b>. <span className="text-uppercase">Uppercase class</span>, <span className="text-capitalize">capitalize class</span>, <span className="text-lowercase">LOWERCASE</span>. Text colors <span className="black-text">black-text</span> <span className="red-text">red text</span> <span className="bg-dark white-text">white text</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida vestibulum dui a suscipit. Donec iaculis gravida semper. Nullam venenatis diam a orci commodo mollis. Ut viverra neque sed tortor scelerisque hendrerit. Ut vel est quis dui tincidunt commodo sed non lectus. Vestibulum a enim massa. Fusce pharetra massa vitae diam rutrum rhoncus.
                        </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-4">
                    <MDBCol md="12" lg="12">
                        <h1 className="display-4 mb-5">Buttons</h1>
                    </MDBCol>
                    <MDBCol md="3" lg="3">
                        <p className="lead">Colors</p>
                        <MDBBtn>Default</MDBBtn>
                        <MDBBtn color="primary">Primary</MDBBtn>
                        <MDBBtn color="info">Info</MDBBtn>
                        <MDBBtn color="danger">Danger</MDBBtn>
                        <MDBBtn color="secondary">Secondary</MDBBtn>
                        <MDBBtn color="warning">Warning</MDBBtn>
                        <MDBBtn color="success">Success</MDBBtn>
                        <MDBBtn color="dark">Dark</MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="3">
                        <p className="lead">Sizes</p>
                        <MDBBtn size="sm" color="dark">Small</MDBBtn>
                        <MDBBtn color="primary">Default</MDBBtn>
                        <MDBBtn color="warning" size="md">Medium</MDBBtn>
                        <MDBBtn color="info" size="lg">Large</MDBBtn>
                        <p className="lead">Gradients</p>
                        <MDBBtn gradient="peach">Peach</MDBBtn>
                        <MDBBtn gradient="purple">Purple</MDBBtn>
                        <MDBBtn gradient="blue">Blue</MDBBtn>
                        <MDBBtn gradient="aqua">Aqua</MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="3">
                        <p className="lead">Outline</p>
                        <MDBBtn outline color="primary">Primary</MDBBtn>
                        <MDBBtn outline>Default</MDBBtn>
                        <MDBBtn outline color="secondary">Secondary</MDBBtn>
                        <MDBBtn outline color="success">Success</MDBBtn>
                        <MDBBtn outline color="info">Info</MDBBtn>
                        <MDBBtn outline color="warning">Warning</MDBBtn>
                        <MDBBtn outline color="danger">Danger</MDBBtn>
                    </MDBCol>
                    <MDBCol className="py-4" md="12" lg="12">
                        <p className="lead">Additional Styles</p>
                        <MDBBtn color="elegant">Elegant</MDBBtn>
                        <MDBBtn color="unique">Unique</MDBBtn>
                        <MDBBtn color="pink">Pink</MDBBtn>
                        <MDBBtn color="purple">Purple</MDBBtn>
                        <MDBBtn color="deep-purple">Deep-purple</MDBBtn>
                        <MDBBtn color="indigo">Indigo</MDBBtn>
                        <MDBBtn color="light-blue">Light blue</MDBBtn>
                        <MDBBtn color="cyan">Cyan</MDBBtn>
                        <MDBBtn color="dark-green">Dark-green</MDBBtn>
                        <MDBBtn color="light-green">Light-green</MDBBtn>
                        <MDBBtn color="yellow">Yellow</MDBBtn>
                        <MDBBtn color="amber">Amber</MDBBtn>
                        <MDBBtn color="deep-orange">Deep-orange</MDBBtn>
                        <MDBBtn color="brown">Brown</MDBBtn>
                        <MDBBtn color="blue-grey">Blue-grey</MDBBtn>
                        <MDBBtn color="mdb-color">MDB</MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-4">
                    <MDBCol md="12" lg="12">
                        <h1 className="display-4 mb-5">Inputs</h1>
                    </MDBCol>
                    <MDBCol md="5" lg="5">
                        <p className="lead">Types</p>
                        <MDBInput label="Material input" />
                        <MDBInput label="With Icon" icon="user" />
                        <MDBInput label="Disabled input" hint="Disabled input" disabled type="email" />
                        <MDBInput label="Outline" outline />
                        <MDBInput type="textarea" label="Textarea label" outline />
                    </MDBCol>
                    <MDBCol md="5" lg="5">
                        <p className="lead">Sizes</p>
                        <MDBInput label="Large input" size="lg" />
                        <MDBInput label="Medium input" />
                        <MDBInput label="Small input" size="sm" />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="12" lg="12">
                        <h1 className="display-4 mb-5">Buttons</h1>
                    </MDBCol>
                    <MDBCol md="4" lg="4">
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                            <MDBCardTitle>With Image</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" lg="4">
                        <MDBCard>
                            <MDBCardBody>
                            <MDBCardTitle>Without Image</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-4">
                    <MDBCol md="12" lg="12">
                        <h1 className="display-4 mb-5">Jumbotron</h1>
                    </MDBCol>
                    <MDBCol md="12" lg="12">
                        <MDBJumbotron className="text-center">
                            <h2 className="h1 display-3">Hello, world!</h2>
                            <p className="lead">
                            This is a simple hero unit, a simple Jumbotron-style component for
                            calling extra attention to featured content or information.
                            </p>
                            <hr className="my-2" />
                            <p>
                            It uses utility classes for typgraphy and spacing to space content out
                            within the larger container.
                            </p>
                            <p className="lead">
                            <MDBBtn color="primary">Learn More</MDBBtn>
                            </p>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-4">
                    <MDBCol md="12" lg="12">
                        <h1 className="display-4 mb-5">Lists</h1>
                    </MDBCol>
                    <MDBCol md="3" lg="3">
                        <p className="lead">Default</p>
                        <MDBListGroup>
                            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                            <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                    <MDBCol md="3" lg="3">
                        <p className="lead">Labels</p>
                        <MDBListGroup>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center">Cras justo odio<MDBBadge color="primary"
                                pill>14</MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center">Dapibus ac facilisis in<MDBBadge
                                color="primary" pill>2</MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center">Morbi leo risus<MDBBadge color="primary"
                                pill>1</MDBBadge>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                    <MDBCol md="3" lg="3">
                        <p className="lead">Linked</p>
                        <MDBListGroup>
                            <MDBListGroupItem href="#" active>Cras justo odio</MDBListGroupItem>
                            <MDBListGroupItem href="#">Dapibus ac facilisis in</MDBListGroupItem>
                            <MDBListGroupItem href="#">Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem href="#">Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem href="#">Vestibulum at eros</MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                    <MDBCol md="3" lg="3">
                        <p className="lead">Contextual</p>
                        <MDBListGroup className="my-4 mx-4">
                            <MDBListGroupItem color="primary">Cras justo odio</MDBListGroupItem>
                            <MDBListGroupItem color="secondary">Dapibus ac facilisis in</MDBListGroupItem>
                            <MDBListGroupItem color="danger">Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem color="warning">Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem color="info">Vestibulum at eros</MDBListGroupItem>
                            <MDBListGroupItem color="light">Vestibulum at eros</MDBListGroupItem>
                            <MDBListGroupItem color="dark">Vestibulum at eros</MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-4">
                    <MDBCol md="4" lg="4">
                        <a href="https://mdbootstrap.com/docs/react">
                            Read more here about MDBootstrap React.
                        </a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default ElementsPage
