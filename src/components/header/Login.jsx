import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import Bg from "../../images/bg.svg";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';

const Login = () => {
    return (
        <LoginWrapper>
            <h3>Create Free Account</h3>
            <div className="d-flex text-center gap-2">
                <SocialWrapper color="#DC2626" icon={<FaGoogle />} title="Google" />
                <SocialWrapper color="#0EA5E9" icon={<ImTwitter />} title="Twitter" />
                <SocialWrapper color={"#754FFE"} icon={<FaFacebook />} title="Facebook" />
            </div>
            <div className='mt-5 mb-4'>
                <hr />
            </div>
        </LoginWrapper>
    )
}

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
`;

const IconWrapper = styled.span`
    color: ${(props) => props.color};   
`;

export default Login