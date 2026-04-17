'use client'
import { useEffect, useState } from "react";
import PieChartStats from "../../../components/ui/othersUi/piechartstats/PieChartStats";

function Stats() {
  const [timelineData, setTimelineData] = useState([]);
  useEffect(()=> {
    const timelineDatas = JSON.parse(localStorage.getItem('timelineData')) || [];
    setTimelineData(timelineDatas)
  }, [])

  const filterCall = timelineData.filter(item => item[1] === 'Call');
    const filterMessage = timelineData.filter(item => item[1] === 'Message');
    const filterVideo = timelineData.filter(item => item[1] === 'Video');
  return (
    <PieChartStats {...{timelineData, filterCall, filterMessage, filterVideo}} />
  );
}

export default Stats