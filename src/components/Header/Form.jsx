import "../../assets/styles/form.css"
import "../../assets/styles/button.css"
import Button from "../Button/Button"
import '../../assets/styles/button.css'

const Form =()=>{
    return(
        <div className="form">
            <input type="text" placeholder="نام کاربری" />
            <input type="password" placeholder="رمز عبور " />
            <Button style = " formBtn" text ="ورود به بخش مدیریت وبلاگ" />
            
            <a>کلمه عبور خود را فراموش کرده ام </a>
        </div>
    )
}

export default Form