import React, { useState } from "react";
import {
    Navbar,
    FormControl,
    Nav,
    Container,
    Image,
    InputGroup,
    Button,
    NavLink,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faStar,
    faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import 'antd/dist/antd.css';  
import { Switch } from "antd";
const Header = () => {
    const [on, toggle] = useState(false);
    const handleClick = () => {
        toggle(!on);
    };
    function onChange(checked) {
        console.log(`switch to ${checked}`);
      }
    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Container fluid>
                <NavLink className="brand-uni">
                    <Image className="img-brand" src="images/logo.png" thumbnail fluid />
                    <span className="uni-text">uni</span>
                    <span className="brand-gate">Gate</span>
                </NavLink>
                <Navbar.Collapse id="navbarScroll" className="header-right">
                    <Nav.Link href="#deets">
                        <InputGroup size="sm">
                            <FormControl
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                className="input-search "
                                style={{ borderRadius: "50px", border: "1px solid" }}
                                className={`Input ${on ? "show" : ""}`}
                                placeholder="Typing..."
                            />
                            <InputGroup.Text
                                onClick={handleClick}
                                className="input-icon"
                                id="inputGroup-sizing-sm"
                            >
                                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                            </InputGroup.Text>
                        </InputGroup>
                    </Nav.Link>

                    <span className="cut">|</span>

                    <Nav.Link href="#memes">
                        <Button className="btn-iscc" variant="primary">
                            ICSS
                            <FontAwesomeIcon
                                className="arrow-icon"
                                icon={faAngleDoubleRight}
                            />
                        </Button>
                    </Nav.Link>
                    <Nav.Link href="#memes">
                        <Image className="img-user" src="images/user.png" roundedCircle />
                        <span className="user-name fs-14" title="Pham Thanh Long (FHM.GHS)">
                            Pham Thanh Long (FHM.GHS)
                        </span>
                    </Nav.Link>
                    <span className="cut">|</span>
                    <Nav.Link href="#memes">
                        <FontAwesomeIcon className="star-icon" icon={faStar} />
                        <span className="favorites fs-14">Your Favourites</span>
                    </Nav.Link>

                    <span className="cut">|</span>
                    <Nav.Link href="#memes">
                        <span className="darkmode fs-14">Darkmode</span>
                        <Switch defaultChecked onChange={onChange} />
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
