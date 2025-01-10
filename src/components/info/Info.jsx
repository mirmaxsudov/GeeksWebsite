import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import { Container } from 'reactstrap';
import InfoCard from './InfoCard';
import InfoCardImg1 from "../../images/i1.svg"
import InfoCardImg2 from "../../images/i2.svg"
import InfoCardImg3 from "../../images/i3.svg"
import InfoCardImg4 from "../../images/i4.svg"

const Info = () => {
    const cardInfo = [
        {
            id: 1,
            img: InfoCardImg1,
            title: "Introduction to JavaScript",
            desc: "In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare",
            course: "Courses - 1 ",
            lesson: "6 Lessons ",
            time: "1 HOUR 12 MIN",
            link: "View Chapter Details +",
            isFree: true
        },
        {
            id: 2,
            img: InfoCardImg2,
            title: "JavaScript Beginning",
            desc: "Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada.",
            course: "Courses - 2",
            lesson: "4 Lessons ",
            time: "32 MIN",
            link: "View Chapter Details +",
            isFree: false
        },
        {
            id: 3,
            img: InfoCardImg3,
            title: "Variables and Constants",
            desc: "Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs.",
            course: "Courses - 3",
            lesson: "8 Lessons",
            time: "10 MIN",
            link: "View Chapter Details +",
            isFree: false
        },
        {
            id: 4,
            img: InfoCardImg4,
            title: "Types and Operators",
            desc: "In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl.",
            course: "Courses - 4",
            lesson: "10 Lessons",
            time: "32 MIN",
            link: "View Chapter Details +",
            isFree: false
        },
    ]

    return (
        <Section>
            <Container>
                <InnerTitle className='text-center'>Course Description</InnerTitle>
                <Title className='text-center'>What will you learn?</Title>
                <Desc className='text-center'>
                    Vanilla JS is a fast, lightweight, cross-platformframework for building incredible, powerful <br /> JavaScript applications.
                </Desc>
                <div className="row justify-content-center g-4">
                    {
                        cardInfo.map(card => <div className='col-6'><InfoCard key={card.id} {...card} /></div>)
                    }
                </div>
            </Container>
        </Section>
    )
}

const Desc = styled.p`
    color: #64748B;
    font-size: 20px;
    padding-bottom: 80px;
`

const Title = styled.h1`
    font-weight: 600;
`

const InnerTitle = styled.h3`
    color: #754FFE;
    font-weight: 400;
    margin-bottom: 20px;
`

const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 150px;
    background-color: #0F172A;
    color: #fff;
`

export default Info
