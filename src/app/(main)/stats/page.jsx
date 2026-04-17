'use client'
import PieChartStats from "../../../components/ui/othersUi/piechartstats/PieChartStats";

function Stats() {
  const timelineData = JSON.parse(localStorage.getItem('timelineData')) || [];

  const filterCall = timelineData.filter(item => item[1] === 'Call');
    const filterMessage = timelineData.filter(item => item[1] === 'Message');
    const filterVideo = timelineData.filter(item => item[1] === 'Video');
  return (
    <PieChartStats {...{timelineData, filterCall, filterMessage, filterVideo}} />
  );
}

export default Stats