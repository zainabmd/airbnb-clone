import TopSection from './Components/TopSection'
import BottomSection from './Components/BottomSection'
import data from './data'
const App = () => {
  const card=data.map(x=>{
    return <BottomSection
                key={x.id}
                {...x} //before: x={x} but had to add ".x" to all places props was used in BottomSection.jsx like so {props.x.coverImg}
                // img={x.coverImg}
                // rating={x.stats.rating}
                // reviewCount={x.stats.reviewCount}
                // location={x.location}
                // title={x.title}
                // price={x.price}
                // openSpots={x.openSpots}
            />
})

    return (
        <div>
            <TopSection />
            <section className='cards-list'>{card}</section>
        </div>
  )
}

export default App
