
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  'Old Tax': number;
  'New Tax': number;
}

interface SimpleBarChartProps {
  data: ChartData[];
}

/**
 * A reusable Bar Chart component built with Recharts.
 * Used to compare old vs. new tax estimates.
 */
const Chart: React.FC<SimpleBarChartProps> = ({ data }) => {
  return (
    <div className="w-full h-64">
        <ResponsiveContainer>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: -10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Old Tax" fill="#8884d8" />
                <Bar dataKey="New Tax" fill="#046307" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default Chart;
