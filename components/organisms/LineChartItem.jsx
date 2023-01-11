import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

const LineChartItem = (props) => {
  const { data, gradientId, isReversed } = props
  return (
    <LineChart
      width={580}
      height={230}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      style={{ overflow: 'hidden' }}
    >
      <CartesianGrid strokeDasharray="10 10" vertical={false} />
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        style={{ fontSize: '10px', fill: '#B4C0C6' }}
        height={20}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        style={{ fontSize: '10px', fill: '#B4C0C6' }}
        height={20}
        reversed={isReversed}
      />
      {/* <Tooltip /> */}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4299E1" />
          <stop offset="100%" stopColor="#9F7AEA" />
        </linearGradient>
      </defs>
      <Line
        type="monotone"
        dataKey="Rank"
        stroke={`url(#${gradientId})`}
        strokeWidth={5}
        dot={false}
      />
    </LineChart>
  )
}

export default LineChartItem
