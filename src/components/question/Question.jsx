import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from 'reactstrap';
import styled from 'styled-components';

const Question = () => {
    return (
        <QuestionSection>
            <Container>
                <InnerTitle>Need to Know</InnerTitle>
                <h1 className='text-center mb-3'>
                    Frequently Asked Questions.
                </h1>
                <p>
                    <Desc>
                        <Grey>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.
                        </Grey>
                    </Desc>
                </p>
                <div className="row">
                    <div className="col-6 offset-3">
                        <QuestionAccordion />
                    </div>
                </div>
            </Container>
        </QuestionSection>
    )
}

const Desc = styled.p`
    font-size: 20px;
    text-align: center;
    padding-bottom: 80px;
`

const Grey = styled.span`
    color: #64748B;
`

const InnerTitle = styled.h2`
    color: #754FFE;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 2px;
`

const QuestionSection = styled.section`
    background-color: #0B1324;
    color: #fff;
    padding: 150px 0;
`


function QuestionAccordion(props) {
    const [open, setOpen] = useState("");

    const toggle = (id) => {
        setOpen(open === id ? "" : id);
    };

    return (
        <Accordion flush open={open} toggle={toggle}>
            <AccordionItem style={{ backgroundColor: "transparent" }}>
                <AccordionHeader targetId="1">What is the cost of an online course</AccordionHeader>
                <AccordionBody accordionId="1">
                    <Grey>
                        Create a beautiful website with this Geeks UI template. Get started building a site today.
                    </Grey>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem style={{ backgroundColor: "transparent" }}>
                <AccordionHeader targetId="2">What do I need to take a course?</AccordionHeader>
                <AccordionBody accordionId="2">
                    <Grey>
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </Grey>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem style={{ backgroundColor: "transparent" }}>
                <AccordionHeader targetId="3">What do I receive for taking this course?</AccordionHeader>
                <AccordionBody accordionId="3">
                    <Grey>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    </Grey>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem style={{ backgroundColor: "transparent" }}>
                <AccordionHeader targetId="4">What will I get if I subscribe to this Certificate?</AccordionHeader>
                <AccordionBody accordionId="4">
                    <Grey>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    </Grey>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
};

export default Question