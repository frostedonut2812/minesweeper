import "./tile.scss"
import {useState} from "react";
function Tile({ismine}) {
    const [isclicked,setisclicked] = useState(false)
    const HandleClick = ()=>{

        setisclicked((isclicked)=>!isclicked)
    }

    return (<div onClick={HandleClick} className={isclicked?'click':'notclick'}>T</div>)


}
export default Tile;