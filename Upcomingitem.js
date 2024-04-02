import React from 'react'

function Upcomingitem(props) {
    let { eventName, weather, imgUrl, distanceKm } = props;
    let newimgurl = "https://drive.google.com/thumbnail?id=" + imgUrl.substring(32, 65);
    return (
        <>
            <div className="card" style={{ width: '15rem', height: '18rem', color: 'white', margin: 'auto', }}>
                <div className="card-body" style={{ color: 'white', fontSize: '40px', backgroundSize: 'cover', margin: '-5px', backgroundImage: `url(${newimgurl})` }}>
                    <div style={{ marginTop: '85%', marginLeft: '5%' }}>
                        <h5 className="card-title">{eventName}</h5>
                        <p className="card-text" style={{ fontSize: '15px', color: 'white' }}>
                            <small>{weather ? weather : 'unknown'} | {Math.round(distanceKm)}Km</small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upcomingitem