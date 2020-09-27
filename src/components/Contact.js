import React from 'react';
import '../App.css'
import { Grid, Cell } from 'react-mdl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope ,faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Contact(){
    return(
        <div className="Contact-div" >
            <Grid>
                <Cell col={6}> 
                    <h2>SOHAIL KAZI</h2>
                    <img src="avtar.png" alt="" className="Contact-avtar" />
                    <p>Hi, I am Sohail Kazi.I am a beginner in React JS , I am a learner and still intend to learn many more things and shape my career.<br/>Contact Us :- Related to web development,Graphics Design.</p>
                </Cell>
                <Cell col={6}>
                    <h2>CONTACT US...!!</h2>
                    <hr className="dotted-line" />

                    {/*
                    <table>
                        <tr>
                            <td>
                                <FontAwesomeIcon className="Contact-icon" icon={faPhoneAlt} />
                            </td>
                            <td>
                                <h3>+918796719959</h3>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <FontAwesomeIcon className="Contact-icon" icon={faEnvelope} />
                            </td>
                            <td>
                                <h3>sohailmk24@gmail.com</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FontAwesomeIcon className="Contact-icon" icon={faMapMarkerAlt} />
                            </td>
                            <td>
                                <h3>Pune</h3>
                            </td>
                        </tr>
                    </table>
                    */}

                    
                    <div className="contact-us-cell">     
                        <Grid>
                            <Cell col={2}><FontAwesomeIcon className="Contact-icon" icon={faPhoneAlt} /></Cell>
                            <Cell col={10}><h3>+918796719959</h3></Cell>
                        </Grid>

                        <Grid>
                            <Cell col={2}><FontAwesomeIcon className="Contact-icon" icon={faEnvelope} /></Cell>
                            <Cell col={10}><h3>sohailmk24@gmail.com</h3></Cell>
                        </Grid>

                        <Grid>
                            <Cell col={2}><FontAwesomeIcon className="Contact-icon" icon={faMapMarkerAlt} /></Cell>
                            <Cell col={10}><h3>Pune</h3></Cell>
                        </Grid>    
                    </div>
                    
                </Cell>
            </Grid>
        </div>
    )
}

export default Contact;