import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'reactstrap';
import { TiTick } from 'react-icons/ti';
import styled from 'styled-components';

const Feature = () => {
    return (
        <Section>
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    background-color: #0B1324;
    color: #fff;
    font-size: 20px;
    padding: 20px 0;
`

const Content = () => {
    return <>
        <div>
            <IconStyle><TiTick /></IconStyle>
            Shareable Certificate
        </div>
    </>
}

const IconStyle = styled.span`
    color: #C28135;
    font-size: 25px;
    margin-right: 10px;
`

export default Feature
