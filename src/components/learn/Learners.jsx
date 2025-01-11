import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components'
import { Container } from 'reactstrap';
import ManImage from "../../images/man.png"
import GirlImage from "../../images/g1.jpg"

const Learners = () => {
    return (
        <Section>
            <Container>
                <InnerTitle className='text-center'>
                    Testimonials
                </InnerTitle>
                <Title className='text-center'>
                    What our learners are saying
                </Title>
                <Desc className='text-center'>
                    <Grey>
                        12+ million people are already learning on Geeks
                    </Grey>
                </Desc>
                <div className="row">
                    <div className="col-6">
                        <LearnerCard
                            icon={
                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: "3.3rem", height: "3.3rem" }} > <path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" style={{ fill: "#312B4D" }}></path></svg>
                            } desc={"The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable."}
                            img={ManImage}
                            name={"Barry Watson"}
                            work={"Web Developer,UK"}
                            color={"#754FFE"} />
                    </div>
                    <div className="col-6">
                        <LearnerCard
                            icon={
                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: "3.3rem", height: "3.3rem" }} > <path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" style={{ fill: "#184457" }}></path></svg>
                            } desc={
                                "Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed vel felis imperdiet, lacinia metus malesuada diamamus rutrum turpis leo, id tincidunt magna sodales."
                            } img={GirlImage}
                            name={"Linda Shenoy"}
                            work={"Developer and Bootcamp Instructor"}
                            color={"#0EA5E9"} />
                    </div>
                </div>
            </Container>
        </Section >
    )
}

const LearnerCard = (
    {
        icon,
        desc,
        img,
        name,
        work,
        color
    }
) => {
    return < >
        <Card className='mt-5'>
            <div className='text-center mb-4'>
                {icon}
            </div>
            <CardDesc className='text-center text-white mb-5'>
                {desc}
            </CardDesc>
        </Card>
        <CardFooter color={color}>
            <Image bg={color} src={img} alt="img" />
            <div className='m-auto'>
                <Name>{name}</Name>
                <Grey>{work}</Grey>
            </div>
        </CardFooter>
    </>
};

const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    color:#0B1324;
    margin: 0;
    margin-top: 20px;
`

const Image = styled.img`
    border-radius: 100px;
    width: 90px;
    height: 90px;
    position: absolute;
    border: 5px solid ${props => props.bg};
    left: 44%;
    top: -45px;
`

const CardDesc = styled.p`
    font-size: 20px;
    color: #fff;
`

const CardFooter = styled.footer`
    position: relative;
    display: flex;
    background-color: ${props => props.color};
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    text-align: center;
    padding: 30px 0;
`

const Card = styled.div`
    background-color: #1E293B;
    border-radius: 10px;
    padding: 30px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`

const Grey = styled.span`
    color: #64748B;
`

const Desc = styled.p` 
    font-size: 20px;
`

const Title = styled.h1`
    font-weight: 600;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 10px;
`

const InnerTitle = styled.h3`
    color: #754FFE;
    font-weight: 400;
    padding: 0;
    margin: 0;
`

const Section = styled.section`
    background-color: #0B1324;
    padding-bottom: 100px;
`

export default Learners