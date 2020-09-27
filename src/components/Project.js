import React,{useState} from 'react';
import '../App.css'
import { Tabs, Tab, Grid,Cell,Card,CardActions,CardText,CardTitle,Button } from 'react-mdl';


const Project = () => {

    const[state,setState] = useState({
        activeTab:0
    })

    const dataChange = () =>{
        if (state.activeTab === 0){
            return(
                <div style={{padding:'20px',margin:'auto',marginTop:'-5%'}}>
                    <Grid style={{margin:'auto'}}>
                        <Cell col={4}>
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(stud-sys.png) center no-repeat '}}></CardTitle>
                            <CardText>
                                student management system
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/SohailKazi56/Student-Management-System" target="_blank"><Button colored>goto project</Button></a>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(web-blocker.jpg) center no-repeat '}}></CardTitle>
                            <CardText>
                                Website-Blocker
                            </CardText>
                            <CardActions border>
                            <a href="https://github.com/SohailKazi56/website-blocker" target="_blank"><Button colored>goto project</Button></a>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle className="web-image" expand style={{color: '#fff', background: 'url(dict.jpg) center no-repeat '}}></CardTitle>
                            <CardText>
                                Dictionery
                            </CardText>
                            <CardActions border>
                            <a href="https://github.com/SohailKazi56/dictionery" target="_blank"><Button colored >goto project</Button></a>
                            </CardActions>
                            </Card>

                        </Cell>
                    </Grid>
                </div>
            )
        }

        else if(state.activeTab === 1){
            return(
                <div style={{display:'flex',marginTop:'-5',margin:'auto'}}>
                    <Grid>
                        <Cell col={12}>
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(website.jpg) center no-repeat  '}}></CardTitle>
                            <CardText>
                                Dental Website Using Django
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/SohailKazi56/DentalDjango" target="_blank"><Button colored>Goto Project</Button></a>
                            </CardActions>
                        </Card>

                        </Cell>
                    </Grid>
                    

                </div>

                 )
         }

         else{
             return{

             }
         }

        

    }

    
    return(
        <div>
            <Tabs activeTab={state.activeTab} onChange={(tabId)=>{setState({...state,activeTab:tabId})}} ripple>
                <Tab style={{fontSize:'2em',fontWeight:'bolder'}}>Python</Tab>
                <Tab style={{fontSize:'2em',fontWeight:'bolder'}}>Web Development</Tab>
            </Tabs>
            <div style={{margin:'auto',marginTop:'9%'}}>
                <Grid>
                    <Cell col={12} > 
                        {dataChange()}
                    </Cell>
                </Grid>
            </div>

        </div>

        
            
        


    )
}


export default Project;