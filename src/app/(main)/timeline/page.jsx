'use client'
import { useEffect, useState } from "react";
import NoData from "../../../components/ui/othersUi/timeline/NoData.jsx";
import TmCard from "../../../components/ui/othersUi/timeline/TmCard.jsx"
import CallTmCard from "../../../components/ui/othersUi/timeline/CallTmCard.jsx";
import MessageTmCard from "../../../components/ui/othersUi/timeline/MessageTmCard.jsx";
import VideoTmCard from "../../../components/ui/othersUi/timeline/VideoTmCard.jsx";

function TimeLine() {
    const [timelineData, setTimelineData] = useState([]);
    useEffect(()=> {
        const timelineDatas = JSON.parse(localStorage.getItem('timelineData')) || [];
        setTimelineData(timelineDatas)
    }, [])

    const [filter, setFilter] = useState('all')
    
    const filterCall = timelineData.filter(item => item[1] === 'Call');
    const filterMessage = timelineData.filter(item => item[1] === 'Message');
    const filterVideo = timelineData.filter(item => item[1] === 'Video');
    console.log(filterCall)
 
    return (
      <div>
          <div className="mx-24 mt-24">
              <h2 className="text-2xl">Timeline</h2>
              <br />
              <div className="flex justify-between items-center">
                <fieldset className="fieldset border border-gray-300 w-40 rounded-md bg-gray-200">
                  <select defaultValue="Pick a browser" className="select bg-gray-200">
                      <option onClick={()=> setFilter('all')}>All</option>
                      <option onClick={()=> setFilter('call')}>Call</option>
                      <option onClick={()=> setFilter('message')}>Message</option>
                      <option onClick={()=> setFilter('video')}>Video</option>
                  </select>
                </fieldset>
                <button onClick={()=> {localStorage.removeItem('timelineData'); setTimelineData([])}} className="btn border-1 border-gray-200 bg-gray-100">Clear All</button>
              </div>
          </div>
          {filter === 'all' ? <div className={`mx-24 mt-14 mb-24 p-4 max-h-[500px] ${timelineData.length !== 0 && 'overflow-y-scroll'}`}>
              {timelineData.length === 0 ? <NoData /> : timelineData.map((tmData, index) => {
                  return (
                    <TmCard key={index} tmData={tmData}/>
                  )
              })}
          </div> : filter === 'call' ? <div className={`mx-24 mt-14 mb-24 p-4 max-h-[500px] ${timelineData.length !== 0 && 'overflow-y-scroll'}`}>
              {filterCall.length === 0 ? <NoData /> : filterCall.map((tmDataCall, index) => {
                  return (
                    <CallTmCard key={index} tmDataCall={tmDataCall}/>
                  )
              })}
          </div> : filter === 'message' ? <div className={`mx-24 mt-14 mb-24 p-4 max-h-[500px] ${timelineData.length !== 0 && 'overflow-y-scroll'}`}>
              {filterMessage.length === 0 ? <NoData /> : filterMessage.map((tmDataMessage, index) => {
                  return (
                    <MessageTmCard key={index} tmDataMessage={tmDataMessage}/>
                  )
              })}
          </div> : <div className={`mx-24 mt-14 mb-24 p-4 max-h-[500px] ${timelineData.length !== 0 && 'overflow-y-scroll'}`}>
              {filterVideo.length === 0 ? <NoData /> : filterVideo.map((tmDataVideo, index) => {
                  return (
                    <VideoTmCard key={index} tmDataVideo={tmDataVideo}/>
                  )
              })}
          </div>}
          
      </div>
    )
}

export default TimeLine