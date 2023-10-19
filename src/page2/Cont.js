import Group32 from './Group32.png'
import Group35 from './Group35.png'

function Cont() {
    return (
        <>
            <div className="first">
                <div className="miniCont">
                    <p className="sign-title">Sign up to</p>
                    <p className="sign-com">abc.com</p>
                    <p className="sign-text">Are you looking for a remote job or hireing remote talent?  </p>
                    <button className='button1'>
                        <img className='img-human' src={Group32} />
                        <div className='cont-text'>
                            <p className='button-text'>I’m a remote worker</p>
                            <p className='button-text text2'>I’m an employee looking for a remote job </p>
                        </div>
                        <input className='button-checkbox' type='checkbox'></input>
                    </button>
                    <button className='button1 button2'>
                        <img className='img-human' src={Group35} />
                        <div className='cont-text'>
                            <p className='button-text'>I want to hire employees</p>
                            <p className='button-text text2'>I’m on employer hiring remote talent   </p>
                        </div>
                        <input className='button-checkbox' type='checkbox'></input>
                    </button>
                    <p className='footer-text3'>Already have an account ?   <span className='footer-text4'> Sign in</span></p>
                </div >

            </div >
        </>
    )
}
export default Cont