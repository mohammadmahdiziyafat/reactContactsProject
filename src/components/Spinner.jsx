import spinnerGif from '../assets/Spinner.gif';
const Spinner = () => {
    return (
        // use reactfragment
        <>
            <img src={spinnerGif} alt='spinner' className='d-block m-auto' style={{ width: '200px' }}></img>
        </>
    )
}
export default Spinner