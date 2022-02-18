import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Home from '../Body/home';
import Tools from '../Body/Tools';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, ListGroup, NavLink } from "react-bootstrap";
import "./wrapper.css";


class Navbar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            toolApp: [],
            firstList: {
                id: '',
                toolListName: '',
                toolDescriptor: '',
                toolList: [{
                    id: '',
                    toolImg: '',
                    toolIcon: '',
                    toolName: '',
                    toolCode: '',
                    toolDescriptor: '',
                    toolLink: ''
                }]
            },
            restList: []
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/courses');
        const data = await response.json();
        var [common, ...rest] = data;

        this.setState({
            toolApp: data,
            restList: rest,
            firstList: common
        });

    }
    

    // useEffect(() => {
    //     fetch("http://localhost:3001/courses").then((res) => {
    //         if(res.ok) {
    //             return res.json()
    //         }
    //     }).then(jsonRes => setToolApp(jsonRes));
    // })
    render() {
        return (
            <div id="Wrapper">
                <Router>
                <div className='row'>
                    <div className="col-3">
                        <div className="left-menu clear">
                            <ListGroup className="menu" >
                                <ListGroup.Item className="menu-item" style={{ border: "none" }}>
                                    <Link to="/all" className="menu-item-link" > Alls app </Link>
                                </ListGroup.Item>
                                {
                                    this.state.toolApp.map((toolLists, i) => {
                                        return (
                                            <ListGroup.Item className="menu-item" key={i} style={{ border: "none" }}>
                                                <Link to={"/" + toolLists.id} className="menu-item-link" > {toolLists.toolListName + " (" + toolLists.toolList.length + ")"} </Link>
                                            </ListGroup.Item>
                                        );
                                    })
    
                                }
                            </ListGroup>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="right-content clear" id={"all-apps"}>
                            <Switch>
                                <Route path="/all">
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
                                            
                                                        <div className="app-title">
                                                            {" "}
                                                            {this.state.firstList.toolListName}{" "}
                                                        </div>
                                                        <Row className="row-common">
                                                            {this.state.firstList.toolList.map((toolItem) => {
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
                                                        </Row>
                                                        {this.state.restList.map((appItem) => {
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
                                </Route>
                                {
                                    this.state.toolApp.map((toolList) => {
                                        return (
                                            <Route path={"/" + toolList.id}><Tools tool={
                                                {toolList: this.state.toolApp.find((element) => {
                                                    return element.id === toolList.id;
                                                    }),
                                                 toolId: toolList.id
                                                }}  /></Route>
                                        )
                                    })
                                }
                            </Switch>
                        </div>
                    </div>
                </div>
    
                </Router>
    
            </div>
        )
    }
}

export default Navbar;