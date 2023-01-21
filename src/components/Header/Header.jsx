import "../../assets/styles/header.css"
import Form from "./Form"
import Poster from "./Poster"

const Header =()=>{

    return(
        <div className="header-container" >
           <div><Form /></div> 
           <div> <Poster /> </div> 


        </div>
    )
}

export default Header