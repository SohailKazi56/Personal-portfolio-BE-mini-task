import React from 'react';
import '../App.css'
import { Grid,Cell } from 'react-mdl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope ,faPhoneAlt, faGraduationCap,faProjectDiagram,faCogs, faUser,faLaughBeam } from '@fortawesome/free-solid-svg-icons'

function Resume(){
    return(
        
        <div className="Resume-div">
            <Grid>
                <Cell col={4} style={{backgroundColor:'rgb(204, 214, 255)'}}>
                    <img src="avtar.png" style={{height:'200px',width:'350px'}} />
                    <h2 style={{color:'darkblue'}}>SOHAIL KAZI</h2>
                    
                    <table>
                        <tr>
                            <td>
                                <h3 style={{fontSize:'20px',color:'black'}}><FontAwesomeIcon className="Contact-icon" icon={faEnvelope} /> sohailmk24@gmail.com</h3>
                                
                            </td>
                            <td>
                                <h3 style={{fontSize:'20px',color:'black'}}><FontAwesomeIcon className="Contact-icon" icon={faPhoneAlt} /> +918796719959</h3>  
                            </td>
                        </tr>    
                    </table>

                    <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px",color:'black'}}> D.O.B :- 5th June 1999</p>
                    <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px",color:'black'}}> Marital status :- Single</p>
                    <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px",color:'black'}}> Nationality :- INDIAN</p>
                    <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px",color:'black'}}> Permanent Address :- Laxminagar Sr no.12, Yerwada, Pune-411006.</p>
                    <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px",color:'black'}}>Github link :- <a href="https://github.com/SohailKazi56" target="_blank">https://github.com/SohailKazi56.</a></p>
                </Cell>

                <Cell col={8}>  
                <h5 style={{color:"blue"}}>CAREER OBJECTIVE <FontAwesomeIcon className="Contact-icon" icon={faUser} /> </h5><br/>
                
                <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px"}}> Seeking a career that is more innovative and interesting and a job that gives me 
                opportunities to learn and enhance my skill and strengths in conjunction with company 
                and objectives.</p><br/>

                <h5 style={{color:"blue"}}>EDUCATION <FontAwesomeIcon className="Contact-icon" icon={faGraduationCap} /></h5><br/>
                
                <table>
                    <tr>
                        <td>
                            <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px"}}> S.S.C, S.N.B.P School, JUNE 2015<br/>
                             First Class With Distinction ( 85% )</p>
                        </td>
                        <td>
                            <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px"}}>Diploma, MSBTE, AISSMS Polytechnic, May 2018 <br/>
                            First Class With Aggregate ( 69% )</p>
                        </td>
                    </tr>
                </table>
                
                
                <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px"}}>B. E, SPPU, G.H.Raisoni Institiute of Engineering And Technology,Pune. <br/>
                Computer Engineering.Final Year (Pursuing).</p><br/>

                <h5 style={{color:"blue"}}>TECHNICAL SKILLS <FontAwesomeIcon className="Contact-icon" icon={faCogs} /></h5><br/>
                
                <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px"}}>Programming Languages :- JAVA, PYTHON, C, C++.<br/>Frameworks :- Django, Spring, Android Studio. <br/>Database :- MySQL, Postgres, Oracle.</p><br/>

                <h5 style={{color:"blue"}}>PROJECTS <FontAwesomeIcon className="Contact-icon" icon={faProjectDiagram} /></h5><br/>
                
                <p style={{textAlign:"left",paddingLeft:"20px",fontSize:"20px"}}>Student Management System using Python.<br/>Website Blocker.
                <br/></p><br/>

                

                </Cell>
            </Grid>
        </div>
        

        
            
            
       
    )
}

export default Resume;