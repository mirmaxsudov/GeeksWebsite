import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { CiVideoOn } from 'react-icons/ci';
import { IoTimeOutline } from 'react-icons/io5';
import { GoPeople } from 'react-icons/go';

const Header = () => {
    return (
        <HeaderTag>
            <Container>
                <Row className="row">
                    <div className="col-7">
                        <HeaderH1>
                            Become a Vanilla JavaScript Developer
                        </HeaderH1>
                        <P>
                            In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications
                        </P>
                        <List>
                            <Item>
                                <StyledIcon>
                                    <IoTimeOutline />
                                </StyledIcon> 4 Hours
                            </Item>
                            <Item>
                                <StyledIcon>
                                    <CiVideoOn />
                                </StyledIcon> 12 Videos
                            </Item>
                            <Item>
                                <StyledIcon>
                                    <GoPeople />
                                </StyledIcon> 10,234+ Enrolled
                            </Item>
                        </List>
                        <Button>
                            Watch Preview
                        </Button>
                    </div>
                    <div className="col-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum a veritatis natus maxime sapiente? Voluptas animi, harum obcaecati ducimus dolore exercitationem eum dolorem quod, et sapiente, autem modi nihil velit voluptatem ullam minus voluptates vero iste id! Unde voluptatibus mollitia totam fugit aliquid neque, accusantium iste magnam minus! Quisquam quam illo excepturi nostrum debitis voluptatibus nihil. Consequatur veniam vero officia ut, officiis sunt nihil aliquam nostrum nemo, iste expedita assumenda, illum voluptate tempora repellat. Placeat rem natus fugiat corrupti, eius, tenetur vero voluptate tempora, magni cupiditate perspiciatis neque! Commodi similique aspernatur consectetur reprehenderit voluptas nisi ab modi impedit delectus tenetur!
                    </div>
                </Row>
            </Container>
        </HeaderTag>
    )
}

export default Header

const StyledIcon = styled.span`
  color: gold; 
  margin-right: 8px;
  font-size: 20px;
`;

const Button = styled.button`
    background-color: #38A169;
    color: #fff;
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    margin-top: 30px;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #64748B;
`

const P = styled.p`
    font-size: 18px;
    color: #64748B;
    font-weight: 400;
    margin-top: 20px;
    line-height: 30px;
`

const HeaderH1 = styled.h1`
    font-size: 60px;
    font-weight: 700;
`

const Row = styled.div`
    padding-top: 120px;
`

const HeaderTag = styled.header`
    background-color: #0B1324;
    height: 100vh;
    color: #fff;
`