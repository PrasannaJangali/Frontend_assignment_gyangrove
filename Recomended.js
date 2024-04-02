import React from 'react'
import { useState, useRef, useEffect } from 'react'
import '../App.css'
import Upcomingitem from './Upcomingitem';
function Recomended() {
  const [recomended, setrecomended] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalEvents, settotalEvents] = useState(0);
  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollLeft = newScrollPosition;
  };
  const updatenews = async () => {
    let url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming`;
    setloading(true);;
    let data = await fetch(url);
    let parsedata = await data.json();
    setrecomended(parsedata.events);
    settotalEvents(parsedata.totalEvents);
    setloading(false);
  }
  const fetchMoreData = async () => {
    setpage(page + 1);
    let url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page + 1}&type=upcoming`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setrecomended(recomended.concat(parsedata.events));
    settotalEvents(parsedata.totalEvents);
    setloading(false);
  };
  useEffect(() => {
    updatenews();
  }, [])

  return (
    <div>
      <h3 style={{ marginLeft: '60px' }}>Recomended Shows -</h3>
      <div className="container" >
        <div
          ref={containerRef}
          style={{
            width: "100%",
            overflowX: "scroll",
            height: '430px',
            scrollBehavior: "smooth",
          }}
        >
          <div className="content-box" style={{ marginTop: '50px' }}>
            {recomended && recomended.map((e) => {
              return <div className='col-md-2' key={e.imgUrl}>
                <Upcomingitem eventName={e.eventName} cityName={e.cityName} date={e.date} weather={e.weather} imgUrl={e.imgUrl} distanceKm={e.distanceKm} />
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Recomended






