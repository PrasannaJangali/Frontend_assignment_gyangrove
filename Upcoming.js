import React from 'react'
import { useState, useEffect } from 'react'
import Upcomingitem from './Upcomingitem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
function Upcoming() {

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalEvents, settotalEvents] = useState(0);

    const updatenews = async () => {
        let url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming`;
        setloading(true);;
        let data = await fetch(url);
        let parsedata = await data.json();
        setarticles(parsedata.events);
        settotalEvents(parsedata.totalEvents);
        setloading(false);
    }
    const fetchMoreData = async () => {
        setpage(page + 1);
        let url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page + 1}&type=upcoming`;
        setloading(true);
        let data = await fetch(url);
        let parsedata = await data.json();
        setarticles(articles.concat(parsedata.events));
        settotalEvents(parsedata.totalEvents);
        setloading(false);
    };
    useEffect(() => {
        updatenews();
    }, [])


    return (
        <div>
            <h3 style={{ marginLeft: '60px', color: 'black', marginTop: '3%' }}>Upcoming events - </h3>
            <InfiniteScroll
                dataLength={totalEvents}
                next={fetchMoreData}
                hasMore={articles && totalEvents !== articles.length}
                loader={loading && <Spinner />}
            >
                <div className='container' style={{ margin: 'auto' }}>
                    <div className='row'>
                        {articles && articles.map((e) => {
                            return <div className='col-md-4' key={e.imgUrl}>
                                <Upcomingitem eventName={e.eventName} cityName={e.cityName} date={e.date} weather={e.weather} imgUrl={e.imgUrl} distanceKm={e.distanceKm} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Upcoming