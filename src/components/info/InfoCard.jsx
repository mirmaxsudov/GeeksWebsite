import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InfoCard = ({ img, title, desc, course, lesson, time, isFree, link }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <ImgWrapper>
                        <img src={img} alt="img" />
                    </ImgWrapper>
                    <CardHeaderLeft >
                        <CardHeaderLeftTop className='d-flex align-items-center gap-3'>
                            <Title>{title}</Title> {isFree && <div><FreeSpan>Free</FreeSpan></div>}
                        </CardHeaderLeftTop>
                        <CardHeaderLeftBottom className='mt-2'>
                            {course} <Grey className='mx-3'>{lesson}</Grey> <Grey>{time}</Grey>
                        </CardHeaderLeftBottom>
                    </CardHeaderLeft>
                </CardHeader>
                <CardBody>
                    <Grey>
                        <Desc>
                            {desc}
                        </Desc>
                    </Grey>
                </CardBody>
                <LinkStyle>
                    <Link to={link}>{link}</Link>
                </LinkStyle>
            </Card>
        </>
    )
}

const Desc = styled.p`
    padding-bottom: 20px;
    line-height: 30px;
    margin-top: 20px;
    font-size: 18px;
`

const Title = styled.h3`
    font-weight: 600;
`

const ImgWrapper = styled.div`
    background-color: #754FFE;
    border-radius: 100px;
    margin-bottom: 20px;
    margin-right: 20px;
    img {
        width: 70px;
        height: 70px;
        user-select: none;
    }
`

const LinkStyle = styled.div`
    text-align: start;
    a {
        color: #754FFE;
    }
`
    
const Grey = styled.span`
    color: #64748B;
`

const CardBody = styled.div`
    line-height: 20px;
`

const FreeSpan = styled.span`
    color: #fff;
    background-color: #F59E0B;
    padding: 4px 8px;
    border-radius: 10px;
`

const CardHeaderLeftBottom = styled.div`
`
const CardHeaderLeftTop = styled.div`
`

const CardHeaderLeft = styled.div`
`

const CardHeader = styled.div`
    display: flex;
    gap: 20px;
`

const Card = styled.div`
    background-color: #1E293B;
    border-radius: 15px;
    padding: 40px 50px;
`

export default InfoCard
