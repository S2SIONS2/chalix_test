import './Topbutton.css';

const Topbutton = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }
    return (
        <button type='button' onClick={scrollTop} className='Topbutton'>↑</button>
    )
}

export default Topbutton;