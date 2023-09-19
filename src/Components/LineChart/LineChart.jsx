import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const gymMember = [
        { id: 1, name: 'John', pushUp: 85, pullUp: 10, runRecord: 78 },
        { id: 2, name: 'Sarah', pushUp: 48, pullUp: 18, runRecord: 92 },
        { id: 3, name: 'Michael', pushUp: 28, pullUp: 11, runRecord: 59 },
        { id: 4, name: 'Emily', pushUp: 88, pullUp: 4, runRecord: 76 },
        { id: 5, name: 'David', pushUp: 66, pullUp: 9, runRecord: 73 },
        { id: 6, name: 'Sophia', pushUp: 44, pullUp: 15, runRecord: 90 },
        { id: 7, name: 'William', pushUp: 21, pullUp: 16, runRecord: 87 },
        { id: 8, name: 'Olivia', pushUp: 59, pullUp: 12, runRecord: 38 },
        { id: 9, name: 'James', pushUp: 33, pullUp: 15, runRecord: 70 },
        { id: 10, name: 'Emma', pushUp: 25, pullUp: 8, runRecord: 44 }
    ];


    return (
        <div className=" mx-10 mb-10">
            <h2 className="text-5xl font-semibold my-16">Some Members Record</h2>
            <LChart width={800} height={400} data={gymMember} className='mx-auto'>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="pushUp"></Line>
                <Line dataKey="pullUp" stroke='green'></Line>
                <Line dataKey="runRecord" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;