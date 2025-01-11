import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import C1 from "../../images/c1.svg";
import C2 from "../../images/c2.svg";
import C3 from "../../images/c3.svg";
import C4 from "../../images/c4.svg";
import C5 from "../../images/c5.svg";
import C6 from "../../images/c6.svg";

const Company = () => {
    return (
        <CompanySection>
            <Container>
                <Title>
                    Trusted by top-tier product companies
                </Title>
                <ul className='d-flex justify-content-between mt-5 align-items-center list-unstyled'>
                    <li>
                        <img src={C1} alt="Company icon" />
                    </li>
                    <li>
                        <img src={C2} alt="Company icon" />
                    </li>
                    <li>
                        <img src={C3} alt="Company icon" />
                    </li>
                    <li>
                        <img src={C4} alt="Company icon" />
                    </li>
                    <li>
                        <img src={C5} alt="Company icon" />
                    </li>
                    <li>
                        <img src={C6} alt="Company icon" />
                    </li>
                </ul>
            </Container>
        </CompanySection>
    )
}

const CompanySection = styled.section`
    padding: 150px 0;
    background-color: #0B1324;
    color: #fff;
`

const Title = styled.h5`    
    font-weight: 400;
    color: #564FFE;
    text-align: center;
    letter-spacing: 4px;
`

export default Company