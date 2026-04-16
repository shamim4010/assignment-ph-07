'use client'
import NoData from "../../../components/ui/othersUi/timeline/NoData.jsx";
import TmCard from "../../../components/ui/othersUi/timeline/TmCard.jsx"

function TimeLine() {
    const timelineData = JSON.parse(localStorage.getItem('timelineData')) || [];
    return (
      <div>
          <div className="mx-24">
              <h2 className="text-2xl">Timeline</h2>
          </div>
          <div className="mx-24 mt-14 mb-24 p-4 max-h-[500px] overflow-y-scroll">
              {timelineData.length === 0 ? <NoData /> : timelineData.map(tmData => {
                  return (
                    <TmCard tmData={tmData}/>
                  )
              })}
          </div>
      </div>
    )
}

export default TimeLine