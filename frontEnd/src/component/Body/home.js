import "../Wrapper/wrapper.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Container, Row, Col, ListGroup, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            firstList: [],
            restList: []
        }
    }

    // const [toolApp, setToolApp] = useState([]);

    componentDidMount() {
        var [common, ...rest] = this.props.toolApp;
        this.setState({
            restList: rest,
            firstList: common
        });
    }

    

    // axios.get('http://localhost:3000/courses').then((res) => {
    //     this.state.toolApp = res.data;
    //     console.log(this.state.toolApp);
    // })

    // const [firstList, setFirstList] = useState({
        
    // });

    // var restList = [];
    
    render() {
        return (
            <div className="col-9">
                <div className="right-content clear" id={"all-apps"}>
                    <div className="right-content-tool">
                    <div className="content-logo">
                        <span className="logo-uni">uni</span>
                        <span className="logo-g">Gate</span>
                    </div>
                    <div className="content-description">
                        Centralized applications access point within ONE digital platform |
                        Integrate SSO | AI Bot assistant | Search engine | Collect and
                        centralized notification for approval | Create ticket support,…
                    </div>
                    <Container className="app-function">
                        <h1>List tools</h1>
                                {/* <div className="app-title">
                                    {" "}
                                    {toolApp[0].toolListName} ({toolApp[0].toolList.length}){" "}
                                </div>
                                <Row className="row-common">
                                    {toolApp[0].toolList.map((toolItem) => {
                                        return (
                                            <Col className="col-common">
                                                <div className="relative">
                                                    <a href={toolItem.toolLink} target="_blank">
                                                        <img src={toolItem.toolImg} alt={toolItem.toolCode} />
                                                        <div className="star-for-img">
                                                            <button className="btn-star">
                                                                <FontAwesomeIcon
                                                                    className="icon-star"
                                                                    icon={faStar}
                                                                />
                                                                );
                                                            </button>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="tool-item">
                                                    <img src={toolItem.toolIcon} className="tool-icon" />
                                                    <div className="tool-description">
                                                        <div className="tool-name">{toolItem.toolName}</div>
                                                        <div className="tool-code">{toolItem.toolCode}</div>
                                                        <div className="tool-description-content">
                                                            {toolItem.toolDescription}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row> */}
                                {this.state.restList.map((appItem) => {
                                    console.log(this.state.restList);
                                    if (appItem.toolList.length > 4) {
                                        return (
                                            <Row className="row-tool">
                                                <div className="tool-title">
                                                    {" "}
                                                    {appItem.toolListName} ({appItem.toolList.length}){" "}
                                                </div>
                                                {appItem.toolList.slice(0, 4).map((toolItem) => {
                                                    return (
                                                        <Col>
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
                                                                            <div className="tool-name">
                                                                                {toolItem.toolName}
                                                                            </div>
                                                                            <div className="tool-code">
                                                                                {toolItem.toolCode}
                                                                            </div>
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
                                                <NavLink
                                                    href="#"
                                                    className={appItem.id + "-viewmore viewmore"}>
                                                    View more
                                                </NavLink>
                                            </Row>
                                        );
                                    } else {
                                        return (
                                            <Row className="row-tool">
                                                <div className="tool-title">
                                                    {" "}
                                                    {appItem.toolListName} ({appItem.toolList.length}){" "}
                                                </div>
                                                {appItem.toolList.slice(0, 4).map((toolItem) => {
                                                    return (
                                                        <Col>
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
                                                                            <div className="tool-name">
                                                                                {toolItem.toolName}
                                                                            </div>
                                                                            <div className="tool-code">
                                                                                {toolItem.toolCode}
                                                                            </div>
                                                                            <div className={"tool-dropdown"}>
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
    
                                        );
    
                                    }
    
                                })}
    
                    </Container>
                    </div>
                </div>
            </div>
        )
    }
    
};

export default Home;
