import spinnerGif from '../assets/Spinner.gif';
const Spinner = () => {
    return (
        // use reactfragment
        <React.Fragment>
            <img src={spinnerGif} alt='spinner' className='d-block m-auto' style={{ width: '200px' }}></img>
        </React.Fragment>
    )
}
export default Spinner