import react, { useState } from "react";
import { Container, Row, Col, ListGroup, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./wrapper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { toolApp } from "./data";

const Wrapper = () => {
    const [currentTool, setCurrentTool] = useState(toolApp[2]);
    const [isAllTool, setAllTool] = useState(true);
    var restList = [];
    function getRestList([common, ...rest]) {
        restList.push(...rest);
    }
    getRestList(toolApp);
    return (
        <div id="wrapper">
            <div className="left-menu clear">
                <ListGroup className="menu">
                    <ListGroup.Item className="menu-item">
                        <span
                            onClick={() => {
                                setCurrentTool(toolApp[0]);
                                setAllTool(true);
                            }}
                            className="menu-item-link"
                        >
                            <FontAwesomeIcon
                                className="icon-chevronright"
                                icon={faChevronRight}
                            />
                            Alls app
                        </span>
                    </ListGroup.Item>
                    {toolApp.map((toolLists) => {
                        return (
                            <ListGroup.Item className="menu-item">
                                <span
                                    onClick={() => {
                                        setCurrentTool(toolLists);
                                        setAllTool(false);
                                    }}
                                    className="menu-item-link"
                                >
                                    <FontAwesomeIcon
                                        className="icon-chevronright"
                                        icon={faChevronRight}
                                    />
                                    {toolLists.toolListName + " (" + toolLists.toolList.length + ")"}
                                </span>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </div>
            <div
                className="right-content clear"
                id={"all-apps" + (isAllTool ? "" : "-hide")}
            >
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
                        </Row>
                        {restList.map((appItem) => {
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
                                            className={appItem.id + "-viewmore viewmore"}
                                            onClick={() => {
                                                setCurrentTool(appItem);
                                                setAllTool(false);
                                            }}
                                        >
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
            <div
                className="right-content clear"

                id={"common-function" + (isAllTool ? "-hide" : "")}

            >

                <div className="right-content-tool">

                    <Container className="tool-container">

                        <div className="app-name">

                            {currentTool.toolListName}

                            <span> Tools</span>

                            <p>{currentTool.toolDescription}</p>

                        </div>
                        <Row className="row-tool">

                            {currentTool.toolList.map((toolItem) => {

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

    );

};



export default Wrapper;