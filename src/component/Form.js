function Form() {
    return (
        <form className="forminput" action="#">
            <div className="inputtype">
                <div className="inputtext">
                    <label for="text" className="label">Name</label>
                    <input type="text" id="text" className="text-email" placeholder="abc"></input>
                </div>
                <div className="inputemail">
                    <label for="email" className="label">Email</label>
                    <input type="email" id="email" className="text-email" placeholder="abc@abc.com"></input>
                </div>
            </div>
            <div className="input-password">
                <label for="password" className="label">Password</label>
                <input type="password" id="password" className="text-email password" placeholder="**********"></input>
            </div>
            <div className="agreecheck">
                <input className="checkbox" type="checkbox" id="checkbox"></input>
                <label for="checkbox" className="label-checkbox">I’ve read and agree with terms of service and our privecy policy</label>
            </div>
        </form >

    )
}
export default Form