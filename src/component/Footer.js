function Footer() {
    return (
        <>
            <button onClick={() => window.location.href = "/about"} type='button' className='button-end'><span className='button-arrow'>&#8594;</span></button>
            <p className='footer-text'>Already have an account ?   <span className='footer-text2'> Sign in</span></p>
        </>
    )
}
export default Footer 