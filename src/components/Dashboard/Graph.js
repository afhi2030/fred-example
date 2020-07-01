import React from 'react'
import {
  ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line
} from 'recharts';

export default function Graph({ data, XAxisMax }) {
  return (
    <ResponsiveContainer>
      <LineChart
        width={1000}
        height={400}
        data={data}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <YAxis dataKey="value" type="number" domain={[0, XAxisMax]}/>
        <XAxis dataKey="date" />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
