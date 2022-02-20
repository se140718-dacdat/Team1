import React from "react";
import "../Wrapper/wrapper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="col-9">
                <div className="right-content clear" id={"common-function"}>

                <div className="right-content-tool">

                    <Container className="tool-container">

                        <div className="app-name">

                            {this.props.tool.toolList.toolListName}

                            <span> Tools</span>

                            <p>{this.props.tool.toolList.toolDescription}</p>

                        </div>
                        <Row className="row-tool">

                            {this.props.tool.toolList.toolList.map((toolItem) => {

                                return (

                                    <Col className="col-item">

                                        <NavLink

                                            href={toolItem.toolLink}

                                            target="_blank"

                                            style={{ color: "#000" }}

                                        >

                                            <div className="tool-item">

                                                <div className="relative">

                                                    <img

                                                        src={toolItem.toolIcon}

                                                        className="tool-icon"

                                                        alt={toolItem.toolName}

                                                    />
                                                    <div className="tool-description">

                                                        <div className="tool-name">{toolItem.toolName}</div>

                                                        <div className="tool-code">{toolItem.toolCode}</div>

                                                        <div className="tool-dropdown">

                                                            <span>...</span>

                                                            <div className="tool-dropdown-list">

                                                                <div className="tool-dropdown-item">

                                                                    Information

                                                                </div>

                                                                <div className="tool-dropdown-item">

                                                                    Copy link

                                                                </div>

                                                                <div className="tool-dropdown-item">

                                                                    Guideline

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="star-for-tool">

                                                        <button className="btn-star">

                                                            <FontAwesomeIcon

                                                                className="icon-star"

                                                                icon={faStar}

                                                            />

                                                        </button>

                                                    </div>

                                                </div>

                                            </div>

                                        </NavLink>

                                    </Col>

                                );

                            })}

                        </Row>

                    </Container>

                    <footer className="footer">

                        <a href="#">

                            <img

                                style={{ height: "50px", paddingRight: "5px" }}

                                src="./images/fpt.png"

                            />
                        </a>

                        <span className="footer-cmt">

                            Copyright ©2019 FPT Software | All rights reserved | Powered by

                            XOne

                        </span>

                    </footer>

                </div>

            </div>
            </div>
        )
    }


    
};

export default Home;
