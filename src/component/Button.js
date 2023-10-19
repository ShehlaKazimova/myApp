
import image2 from '../img/image2.png';
import image3 from './image3.png';
function Button() {
    return (
        <div className='socialMedia'>
            <button type='button' className='button'>
                <img className='socialLogo' src={image2} />
                <span className='button-text'>Continue with Google</span> </button>
            <button type='button' className='button'>
                <img className='socialLogo' src={image3} />
                <span className='button-text'>Continue with Facebook</span> </button>
        </div>
    )
}
export default Button