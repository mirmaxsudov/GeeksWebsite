import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import BgImage from "../../images/ps.svg"
import { Container } from 'reactstrap';

const LearnInfo = () => {
    return (
        <LearnInfoSection>
            <Container>
                <Title className='text-center'>Join more than 1 million learners worldwide</Title>
                <Desc>
                    <Grey>
                        Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier.
                    </Grey>
                </Desc>
                <div className="d-flex gap-3 text-center justify-content-center mt-5">
                    <Button color="#754FFE">Start Learning for Free</Button>
                    <Button color="#0EA5E9">Geeks for Business</Button>
                </div>
            </Container>
        </LearnInfoSection>
    )
}

const Button = styled.button`  
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: ${props => props.color};
`

const Grey = styled.span`
    color: #64748B;
`

const Desc = styled.p`
    text-align: center;
    color: #fff;
    font-size: 1.25rem;
    margin-bottom: 20px;
`

const Title = styled.h1`
    color: #fff;
`

const LearnInfoSection = styled.section`
    background-image: url('${BgImage}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 130px 0;
    background-color: #0F172A;
`

export default LearnInfo