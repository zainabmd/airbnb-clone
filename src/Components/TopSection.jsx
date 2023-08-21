import logo from '/assets/airbnb-logo.png'
import grid from '/assets/hero-grid.png'
const TopSection=()=>{
    return (
        <>
        <nav>
            <img src={logo} className='logo'/>
        </nav>
        <section className='hero'>
            <img src={grid} className='grid' />
            <h1 className='hero-h1'>Online Experiences</h1>
            <p className='hero-p'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
        </>
    )
}
export default TopSection;