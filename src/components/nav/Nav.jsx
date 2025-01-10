import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupText } from 'reactstrap';
import Logo from "../../images/logo.svg";
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { CgDarkMode } from 'react-icons/cg';
import { CiDark } from 'react-icons/ci';
import { IoSunnyOutline } from 'react-icons/io5';

const LoginButton = styled(Button)`
    color: #fff;
    border: none !important;
    background-color: #0B1324 !important;
`

const SignupButton = styled(Button)`
    color: #fff;
    border: none !important;
    background-color: #754FFE !important;
`

const NavContainer = styled(Container)`
    padding: 0 20px;
`

const NavWrapper = styled.div`
    background-color: #1E293B;
    padding: 20px 30px;
`

const SearchInput = () => {
    const [searchText, setSearchText] = useState("");

    const handleClear = () => {
        setSearchText("");
    };

    return (
        <div>
            <InputGroup style={{ maxWidth: "300px", margin: "auto" }}>
                <InputGroupText
                    style={{
                        backgroundColor: "#1a1a2e",
                        border: "none",
                        color: "#6c63ff",
                    }}
                >
                    <FaSearch />
                </InputGroupText>
                <Input
                    style={{
                        backgroundColor: "#1a1a2e",
                        color: "#fff",
                        border: "none",
                        borderRadius: "0",
                    }}
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search"
                />
                <InputGroupText
                    onClick={handleClear}
                    style={{
                        backgroundColor: "#1a1a2e",
                        border: "none",
                        color: searchText ? "#6c63ff" : "#fff",
                        cursor: searchText ? "pointer" : "not-allowed",
                    }}
                >
                    <FaTimes />
                </InputGroupText>
            </InputGroup>
        </div>
    );
};

const Nav = () => {
    return (
        <NavWrapper>
            <NavContainer fluid>
                <nav>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="nav-left d-flex align-items-center gap-2">
                            <div className="logo-wrapper">
                                <img src={Logo} alt="logo" />
                            </div>
                            <BrowseDropDown />
                            <Landings />
                            <Pages />
                            <Accounts />
                            <LastDropDown />
                            <SearchInput />
                        </div>
                        <div className="nav-right d-flex align-items-center gap-2">
                            <Theme />
                            <LoginButton>Sign In</LoginButton>
                            <SignupButton>Sign Up</SignupButton>
                        </div>
                    </div>
                </nav>
            </NavContainer>
        </NavWrapper>
    )
}

const Theme = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
                style={{
                    color: "#fff",
                    border: "none",
                }}
            >
                <CgDarkMode />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>
                    <CiDark /> Dark
                </DropdownItem>
                <DropdownItem>
                    <IoSunnyOutline /> Light
                </DropdownItem>
                <DropdownItem>
                    <CgDarkMode /> Auto
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
const LastDropDown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
                style={{
                    color: "#fff",
                    backgroundColor: "transparent",
                    border: "none",
                }}
            >
                ...
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem><img src={Logo} alt="img" /></DropdownItem>
                <DropdownItem>Dark</DropdownItem>
                <DropdownItem>System Default</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}


const Accounts = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [innerDropdownOpen, setInnerDropdownOpen] = useState({
        webDev: false,
        design: false,
    });

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const toggleInnerDropdown = (name) => {
        setInnerDropdownOpen((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    return (
        <div>
            <Dropdown
                style={{ transition: "all 0.3s ease-in-out" }}
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                direction="down">
                <DropdownToggle
                    caret
                    style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "none",
                    }}
                >
                    Accounts
                </DropdownToggle>
                <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                    <DropdownItem header style={{ color: "#fff" }}>
                        Categories
                    </DropdownItem>
                    <Dropdown
                        isOpen={innerDropdownOpen.webDev}
                        toggle={() => toggleInnerDropdown("webDev")}
                        direction="right"
                    >
                        <DropdownToggle
                            tag="div"
                            className="dropdown-item"
                            style={{ cursor: "pointer", color: "#fff" }}
                        >
                            Web Development
                        </DropdownToggle>
                        <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                            <DropdownItem style={{ color: "#fff" }}>Frontend</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Backend</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Full Stack</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                        isOpen={innerDropdownOpen.design}
                        toggle={() => toggleInnerDropdown("design")}
                        direction="right"
                    >
                        <DropdownToggle
                            tag="div"
                            className="dropdown-item"
                            style={{ cursor: "pointer", color: "#fff" }}
                        >
                            Design
                        </DropdownToggle>
                        <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                            <DropdownItem style={{ color: "#fff" }}>UI/UX</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Graphic Design</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownItem style={{ color: "#fff" }}>Mobile App</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>IT Software</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Marketing</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Music</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Life Style</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Business</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Photography</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

const Pages = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [innerDropdownOpen, setInnerDropdownOpen] = useState({
        webDev: false,
        design: false,
    });

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const toggleInnerDropdown = (name) => {
        setInnerDropdownOpen((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    return (
        <div>
            <Dropdown
                style={{ transition: "all 0.3s ease-in-out" }}
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                direction="down">
                <DropdownToggle
                    caret
                    style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "none",
                    }}
                >
                    Pages
                </DropdownToggle>
                <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                    <DropdownItem header style={{ color: "#fff" }}>
                        Categories
                    </DropdownItem>
                    <Dropdown
                        isOpen={innerDropdownOpen.webDev}
                        toggle={() => toggleInnerDropdown("webDev")}
                        direction="right"
                    >
                        <DropdownToggle
                            tag="div"
                            className="dropdown-item"
                            style={{ cursor: "pointer", color: "#fff" }}
                        >
                            Web Development
                        </DropdownToggle>
                        <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                            <DropdownItem style={{ color: "#fff" }}>Frontend</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Backend</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Full Stack</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                        isOpen={innerDropdownOpen.design}
                        toggle={() => toggleInnerDropdown("design")}
                        direction="right"
                    >
                        <DropdownToggle
                            tag="div"
                            className="dropdown-item"
                            style={{ cursor: "pointer", color: "#fff" }}
                        >
                            Design
                        </DropdownToggle>
                        <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                            <DropdownItem style={{ color: "#fff" }}>UI/UX</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Graphic Design</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownItem style={{ color: "#fff" }}>Mobile App</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>IT Software</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Marketing</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Music</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Life Style</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Business</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Photography</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

const Landings = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [innerDropdownOpen, setInnerDropdownOpen] = useState({
        webDev: false,
        design: false,
    });

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const toggleInnerDropdown = (name) => {
        setInnerDropdownOpen((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    return (
        <div>
            <Dropdown
                style={{ transition: "all 0.3s ease-in-out" }}
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                direction="down">
                <DropdownToggle
                    caret
                    style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "none",
                    }}
                >
                    Landings
                </DropdownToggle>
                <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                    <DropdownItem header style={{ color: "#fff" }}>
                        Categories
                    </DropdownItem>
                    <Dropdown
                        isOpen={innerDropdownOpen.webDev}
                        toggle={() => toggleInnerDropdown("webDev")}
                        direction="right"
                    >
                        <DropdownToggle
                            tag="div"
                            className="dropdown-item"
                            style={{ cursor: "pointer", color: "#fff" }}
                        >
                            Web Development
                        </DropdownToggle>
                        <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                            <DropdownItem style={{ color: "#fff" }}>Frontend</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Backend</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Full Stack</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                        isOpen={innerDropdownOpen.design}
                        toggle={() => toggleInnerDropdown("design")}
                        direction="right"
                    >
                        <DropdownToggle
                            tag="div"
                            className="dropdown-item"
                            style={{ cursor: "pointer", color: "#fff" }}
                        >
                            Design
                        </DropdownToggle>
                        <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                            <DropdownItem style={{ color: "#fff" }}>UI/UX</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Graphic Design</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownItem style={{ color: "#fff" }}>Mobile App</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>IT Software</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Marketing</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Music</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Life Style</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Business</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Photography</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

const BrowseDropDown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [innerDropdownOpen, setInnerDropdownOpen] = useState({
        webDev: false,
        design: false,
    });

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const toggleInnerDropdown = (name) => {
        setInnerDropdownOpen((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    return (
        <div>
            <Dropdown
                style={{ transition: "all 0.3s ease-in-out" }}
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                direction="down">
                <DropdownToggle
                    caret
                    style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "none",
                    }}
                >
                    Browse
                </DropdownToggle>
                <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                    <DropdownItem header style={{ color: "#fff" }}>
                        Categories
                    </DropdownItem>
                    <Dropdown
                        isOpen={innerDropdownOpen.webDev}
                        toggle={() => toggleInnerDropdown("webDev")}
                        direction="right"
                    >
                        <DropdownToggle
                            tag="div"
                            className="dropdown-item"
                            style={{ cursor: "pointer", color: "#fff" }}
                        >
                            Web Development
                        </DropdownToggle>
                        <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                            <DropdownItem style={{ color: "#fff" }}>Frontend</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Backend</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Full Stack</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                        isOpen={innerDropdownOpen.design}
                        toggle={() => toggleInnerDropdown("design")}
                        direction="right"
                    >
                        <DropdownToggle
                            tag="div"
                            className="dropdown-item"
                            style={{ cursor: "pointer", color: "#fff" }}
                        >
                            Design
                        </DropdownToggle>
                        <DropdownMenu style={{ backgroundColor: "#333", color: "#fff" }}>
                            <DropdownItem style={{ color: "#fff" }}>UI/UX</DropdownItem>
                            <DropdownItem style={{ color: "#fff" }}>Graphic Design</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownItem style={{ color: "#fff" }}>Mobile App</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>IT Software</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Marketing</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Music</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Life Style</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Business</DropdownItem>
                    <DropdownItem style={{ color: "#fff" }}>Photography</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default Nav