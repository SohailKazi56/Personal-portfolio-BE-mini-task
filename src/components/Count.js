import React,{useState} from 'react';
import '../App.css'


const Project = () => {

    const[count,setCount] = useState(20)
    const[score,setScore] = useState(
        {
            india:100,
            pakistan:70
        }
    )

    
    
    const indiaPlus = () =>{
        setScore({...score,india: score.india+1})    
    }

    const pakistanPlus = () =>{
        setScore({...score,pakistan: score.pakistan+1})    
    }

    const indiaMinus = () =>{
        setScore({...score,india: score.india-1})    
    }

    const pakistanMinus = () =>{
        setScore({...score,pakistan: score.pakistan-1})    
    }

    const minus = () => {
        setCount(
            (latestValue) => {
                return (latestValue - 1)
            }
        )

        setCount(
            (latestValue) => {
                return (latestValue - 1)
            }
        )
        
    }

    const plus = () => {
        setCount(count + 1)
    }

    

    

    return(
        <div>
            <button onClick={minus}> - </button>
            <h1>count = {count}</h1>
            <button onClick={plus}> + </button>

            <br/>

            <h1>India = {score.india}</h1>
            <h1>Pakistan = {score.pakistan}</h1>
            <br/>
            <button onClick={indiaPlus}>India +</button>
            <button onClick={pakistanPlus}>Pakistan +</button>
            <br/>
            <button onClick={indiaMinus}>India -</button>
            <button onClick={pakistanMinus}>Pakistan -</button>

        </div>

        
            
        


    )
}


export default Project;