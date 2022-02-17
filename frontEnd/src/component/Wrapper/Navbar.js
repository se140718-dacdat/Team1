import { ListGroup } from 'react-bootstrap';
import './wrapper.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
function Navbar() {
    const [toolApp, setToolApp] = useState([]);

    axios.get('http://localhost:3000/courses').then((res) => {
        setToolApp(res.data);
    })

    // useEffect(() => {
    //     fetch("http://localhost:3001/courses").then((res) => {
    //         if(res.ok) {
    //             return res.json()
    //         }
    //     }).then(jsonRes => setToolApp(jsonRes));
    // })
    return ( 
        <div id="Wrapper">
            <div className = "left-menu clear" style={{maxWidth:"15%"}}>
                <ListGroup className = "menu" >
                    <ListGroup.Item className = "menu-item" style={{border:"none"}}>
                        <Link to="/" className = "menu-item-link" > Alls app </Link>
                    </ListGroup.Item> 
                    {
                        toolApp.map((toolLists, i) => {
                           return ( 
                           <ListGroup.Item className = "menu-item" key={i} style={{border:"none"}}>
                               <Link to={"/" + toolLists.id} className = "menu-item-link" > {toolLists.toolListName + " ("+ toolLists.toolList.length + ")"} </Link> 
                           </ListGroup.Item>
                           );
                        })
                        
                    }
                </ListGroup> 
            </div>
        </div>
    )
}

export default Navbar;