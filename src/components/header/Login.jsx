import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import Bg from "../../images/bg.svg";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { Button } from 'reactstrap';

const Login = () => {
    return (
        <div className='position-relative'>
            <LoginWrapper>
                <h3>Create Free Account</h3>
                <div className="d-flex text-center gap-2">
                    <SocialWrapper color="#DC2626" icon={<FaGoogle />} title="Google" />
                    <SocialWrapper color="#0EA5E9" icon={<ImTwitter />} title="Twitter" />
                    <SocialWrapper color={"#754FFE"} icon={<FaFacebook />} title="Facebook" />
                </div>
                <div className='mt-5 mb-4'>
                    <hr />
                    <Input placeHoler={"Email"} />
                    <br />
                    <Input placeHoler={"Password"} />
                    <ButtonStyle className={"mt-3 w-100 p-2"}>Start Courses for Free</ButtonStyle>
                </div>
                <hr />
                <p>
                    <GreySpan>By continuing you accept the</GreySpan> Terms of Use, Privacy Policy, <GreySpan>and</GreySpan> Data Policy
                </p>
            </LoginWrapper>
            <ImageBg src={Bg} className="w-100" alt="" />
        </div>
    )
}

const ImageBg = styled.img`
    position: absolute;
    z-index: 100;
    width: 350px;
    height: 350px;
    opacity: .5;
    top: 230px;
    left: 130px;
    overflow: hidden;
    user-select: none;
`

const GreySpan = styled.span`
    color: #647476;
`

const ButtonStyle = styled(Button)`
    background-color: #754FFE !important;
    color: #fff !important;
    border: none !important;
    `

const Input = ({ placeHoler }) => {
    return <>
        <InputStyle className='mt-2 mb-2' placeholder={placeHoler} />
    </>
}

const InputStyle = styled.input`
    background-color: #0F172A;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    width: 100%;
    `;

const SocialWrapper = ({ icon, title, color }) => {
    return (
        <SocialWrapperStyle className='d-flex align-items-center justify-content-center gap-3 p-2 w-100'>
            <IconWrapper color={color}>{icon}</IconWrapper> {title}
        </SocialWrapperStyle>
    )
}

const SocialWrapperStyle = styled.div`
    background-color: #0F172A;
    margin-top: 30px;
    border-radius: 5px;
    text-align: center;
    padding: 12px !important;
`;

const LoginWrapper = styled.div`
    padding: 30px 40px;
    padding-top: 30px;
    border-radius: 10px;
    background-color: #1E293B;
    position: relative !important;
    z-index: 2000 !important;
`;

const IconWrapper = styled.span`
    color: ${(props) => props.color};   
`;

export default Login