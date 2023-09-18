
// import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const SuLineChart = () => {

    const subjectMarksData = [
        { id: 1, name: 'Alice', physics: 85, chemistry: 41, math: 78 },
        { id: 2, name: 'Bob', physics: 78, chemistry: 85, math: 80 },
        { id: 3, name: 'Charlie', physics: 61, chemistry: 88, math: 95 },
        { id: 4, name: 'David', physics: 35, chemistry: 44, math: 25 },
        { id: 5, name: 'Emma', physics: 70, chemistry: 75, math: 68 },
        { id: 6, name: 'Frank', physics: 49, chemistry: 91, math: 50 },
        { id: 7, name: 'Grace', physics: 55, chemistry: 75, math: 20 },
        { id: 8, name: 'Hannah', physics: 79, chemistry: 83, math: 77 },
        { id: 9, name: 'Ian', physics: 47, chemistry: 89, math: 33 },
        { id: 10, name: 'Jack', physics: 33, chemistry: 88, math: 92 }
    ];

    return (
        <div >
            <div className="w-11/12 mx-auto " >

            <LineChart width={1200} height={500} data={subjectMarksData}>
                <XAxis dataKey = 'name' ></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            <Line type="math" dataKey="math" stroke="red" />
            <Line type="chemistry" dataKey="chemistry" stroke="orange" />
            <Line type="physics" dataKey="physics" stroke="#8884d8" />
            </LineChart>
            </div>
        </div>
    );
};

// LineChart.propTypes = {
    
// };

export default SuLineChart;