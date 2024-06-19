import {useState} from "react";

function StartButton(){
    const[isrunning,setisrunning]=useState(true);
    const HandleClick = ()=>{setisrunning(!isrunning);}
    return (<button onClick={HandleClick}>START GAME</button>)

}


