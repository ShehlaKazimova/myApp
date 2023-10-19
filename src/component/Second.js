import Form from './Form'
import Button from './Button'
import Footer from './Footer'
import Sign from './Sign'
import Layer1 from './Layer1.png'

function Second() {
    return (
        <div className='firstPage'>
            <div className='signUpCont'>
                <Sign></Sign>
                <Button></Button>
                <p className='text-or'>or</p>
                <Form></Form>
                <Footer></Footer>
            </div>
            <img className='layer' src={Layer1} />
        </div>

    )
}
export default Second