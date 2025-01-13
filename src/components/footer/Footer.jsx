import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Logo from "../../images/logo.svg";
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import GooglePlay from "../../images/play-store.svg"
import AppStore from "../../images/app-store.svg"

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <FooterTop>
                    <div className="row">
                        <div className="col-5">
                            <img src={Logo} alt="" />
                            <p className='mt-4 mb-3'>
                                <Grey>
                                    Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap responsive framework.
                                </Grey>
                                <Links>
                                    <Grey>
                                        <FaFacebook />
                                    </Grey>
                                    <Grey>
                                        <FaTwitter />
                                    </Grey>
                                    <Grey>
                                        <AiOutlineInstagram />
                                    </Grey>
                                </Links>
                            </p>
                        </div>
                        <div className="col-7">
                            <div className="row">
                                <div className="col-3">
                                    <FooterList>
                                        <FooterListItem>
                                            <ListHeaderColor>
                                                Company
                                            </ListHeaderColor>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                About
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Blog
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Careers
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Contact
                                            </Grey>
                                        </FooterListItem>
                                    </FooterList>
                                </div>
                                <div className="col-3">
                                    <FooterList>
                                        <FooterListItem>
                                            <ListHeaderColor>
                                                Support
                                            </ListHeaderColor>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Help and Support
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Become Instructor
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Get the app
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                FAQ's
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Tutorial
                                            </Grey>
                                        </FooterListItem>
                                    </FooterList>
                                </div>
                                <div className="col-6">
                                    <FooterList>
                                        <FooterListItem>
                                            <ListHeaderColor>
                                                Get in touch
                                            </ListHeaderColor>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                339 McDermott Points Hettingerhaven, NV 15283
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Email: <a href="mailto:support@geeksui.com">support@geeksui.com</a>
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Phone: <a href="tel:(000) 123 456 789">(000) 123 456 789</a>
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                FAQ's
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem>
                                            <Grey>
                                                Tutorial
                                            </Grey>
                                        </FooterListItem>
                                        <FooterListItem className='d-flex gap-2 mt-2'>
                                            <img src={GooglePlay} alt="Google play" />
                                            <img src={AppStore} alt="Google play" />
                                        </FooterListItem>
                                    </FooterList>
                                </div>
                            </div>
                        </div>
                    </div>
                </FooterTop>
                <hr className='bg-white text-white' />
                <FooterBottom>
                    <div className="d-flex justify-content-between align-items-center">
                        <Grey>
                            © 2024 Geeks-UI, Inc. All Rights Reserved
                        </Grey>
                        <FooterList className='d-flex gap-4 align-items-center'>
                            <FooterListItem className='m-auto'>
                                <Grey >
                                    Privacy Policy
                                </Grey>
                            </FooterListItem>
                            <FooterListItem className='m-auto'>
                                <Grey>
                                    Cookie Notice
                                </Grey>
                            </FooterListItem>
                            <FooterListItem className='m-auto'>
                                <Grey>
                                    Do Not Sell My Personal Information
                                </Grey>
                            </FooterListItem>
                            <FooterListItem className='m-auto'>
                                <Grey>
                                    Terms of Use
                                </Grey>
                            </FooterListItem>
                        </FooterList>
                    </div>
                </FooterBottom>
            </Container>
        </FooterSection>
    )
}

const FooterListItem = styled.li`
    margin-top: 13px;
    &:hover {
        cursor: pointer;
    }
`

const FooterList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    transition: all 0.3s ease-in-out;
`

const ListHeaderColor = styled.span`
    color: #fff;
    font-size : 20px;
`

const FooterTop = styled.div`
    margin-bottom: 70px;
`

const FooterBottom = styled.div`
    padding: 0 0 10px 0;
`

const Links = styled.span`  
    margin-top: 15px;
    display: flex;
    gap: 10px;
`

const Grey = styled.span`
    color: #64748B;
`

const FooterSection = styled.footer`
    background-color: #0B1324;
    padding: 100px 30px 0 30px;
`

export default Footer