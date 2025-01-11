import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import ManImage from "../../images/man.png";

const Instructor = () => {
    return (
        <InstructorSection>
            <MinContainer>
                <div className="row">
                    <div className="col-6">
                        <InnerTitle>
                            <PurpleTag>
                                YOUR INSTRUCTOR
                            </PurpleTag>
                        </InnerTitle>
                        <Title>
                            Hi, I'm <PurpleTag>James Davies</PurpleTag>, <br />
                            I will be taking you through lessons.
                        </Title>
                        <Desc>
                            <Grey>
                                Create beautiful website with this Geeks UI <br /> template. Get started building a site today.
                            </Grey>
                        </Desc>
                        <hr />
                        <ul className='mt-4 list-unstyled d-flex justify-content-between'>
                            <li>
                                <ListItemContent t="45" d="Lessons" />
                            </li>
                            <li>
                                <ListItemContent t="10.500+" d="Students" />
                            </li>
                            <li>
                                <ListItemContent t="12+" d="Learning Hours" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <img className='user-select-none' src={ManImage} alt="man" />
                    </div>
                </div>
            </MinContainer>
        </InstructorSection>
    )
}

function ListItemContent({ t, d }) {
    return (
        <>
            <h1>{t}</h1>
            <p>{d}</p>
        </>
    )
}

const Grey = styled.span`
    color: #64748B;
`

const Desc = styled.p`
    font-size: 22px;
    line-height: 40px;
    margin-bottom: 30px;
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 50px;
    margin-bottom: 20px;
`

const PurpleTag = styled.span`
    color: #754FFE;
`

const InnerTitle = styled.p`
    font-size: 18px;
`

const InstructorSection = styled.section`
    background-color: #0B1324;
    padding: 150px 0;
    color: #fff;
`

const MinContainer = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1200px;
`

export default Instructor