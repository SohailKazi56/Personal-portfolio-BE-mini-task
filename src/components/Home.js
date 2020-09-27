import React from 'react';
import '../App.css'
import { Grid,Cell } from 'react-mdl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn,  faTwitter, faHackerrank, faInstagram } from '@fortawesome/free-brands-svg-icons'




function Home(){
    return(
        <div className="home-main-div" style={{width:'100%',margin:'auto'}}>
            
                <Grid className="demo-grid-1" style={{margin:'auto',padding:'20px'}}>
                    <Cell col={12}>
                        <img src="avtar.png" alt="" className="landing-img "  />
                    </Cell>
                    <Cell col={12} >
                        
                        <p style={{fontSize:'3em',fontWeight:'800',letterSpacing:'10px',padding:'10px',textAlign:'center'}}>I'm <span style={{color:'crimson'}}>Sohail Kazi</span></p>
                        
                    </Cell>
                    <Cell col={12}>
                        <div className="box">
                            <h1>Student</h1>
                            <hr/>
                            <p>Web Development | Artificial Intelligence | Python | Flutter</p>

                            <div className="home-icons">
                                <span className="icon"> <a href="https://github.com/SohailKazi56" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faGithub} style={{color:'crimson'}} /> </a> </span>
                                <span className="icon"> <a href="https://www.hackerrank.com/sohell356899" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faHackerrank} style={{color:'crimson'}} /> </a> </span>
                                <span className="icon"> <a href="https://www.instagram.com/s_o_h_a_i_l__k_a_z_i" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faInstagram} style={{color:'crimson'}}/> </a> </span>
                                <span className="icon"> <a href="https://twitter.com/SohailK36568234?s=08" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faTwitter} style={{color:'crimson'}}/> </a></span>
                                <span className="icon"> <a href="https://www.linkedin.com/in/sohail-kazi-60010b198" target="_blank" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faLinkedinIn} style={{color:'crimson'}} />  </a> </span>
                            </div>
                        </div>
                    </Cell>
                </Grid>
               
        </div>
    )
}

export default Home;
