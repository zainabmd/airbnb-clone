import star from '/assets/star.png'
const BottomSection = (props) =>{
    let badge
    if (props.openSpots===0){badge="SOLD OUT"}
    else if(props.location==="Online"){badge="ONLINE"}
    return (
        <div className="card">
            {badge && <div className='card-badge'>{badge}</div>}
            <img src={`/assets/${props.coverImg}`} className="card-image" />
            <div className="card-stats">
                <img src={star} className='star' />
                <span >5.0</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <p className='card-price'><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
export default BottomSection;