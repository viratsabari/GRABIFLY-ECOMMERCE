import "../Styles/Forgetpassword.css"

let ForgetPassword=()=>{
    function message(){
        alert("CHECK YOUR MAIL INBOX")
    }
    return(
        <div className="Forget">
            <form>
            <label>ENTER YOUR USERNAME OR EMAIL ID</label><br />
            <input type="text" placeholder="ENTER YOUR USERNAME OR EMAIL ID" required/><br />
            <button onClick={message}><span>SUBMIT</span></button>
            </form>
        </div>
    )
}
export default ForgetPassword;