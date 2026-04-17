"use client"
import { Pie, PieChart } from 'recharts';
import NoData from '../timeline/NoData';

function PieChartStats({timelineData, filterCall, filterMessage, filterVideo}) {
    const data = [
        { name: 'Group A', value: filterCall.length, fill: '#244d3f' },
        { name: 'Group B', value: filterMessage.length, fill: '#7f37f5' },
        { name: 'Group C', value: filterVideo.length, fill: '#37a163' },
    ];
    return (
        <div className='flex flex-col gap-4 m-24'>
            <h2 className='text-4xl'>Friendship Analytics</h2>
            <p className='text-[12px] ml-4'>By Interaction Type</p>
            <div className='flex flex-col justify-center items-center gap-8 p-12'>
                {timelineData.length === 0 ? <NoData /> : <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1}} className='pointer-events-none' responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                    />
                </PieChart>}
                <div className='flex flex-col sm:flex-row justify-center items-center gap-2'>
                    <div className='flex gap-2 justify-center items-center'>
                        <div aria-label="status" className="status bg-[#7f37f5] rounded-full"></div> 
                        <span>
                            Message
                        </span>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <div aria-label="status" className="status bg-[#244d3f] rounded-full"></div> 
                        <span>
                            Call
                        </span>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <div aria-label="status" className="status bg-[#37a163] rounded-full"></div> 
                        <span>
                            Video
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieChartStats