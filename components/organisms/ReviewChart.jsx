import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

const ReviewChart = (props) => {
  const { cx, cy, width, height, data, outerRadius } = props
  return (
    <RadarChart
      cx={cx}
      cy={cy}
      outerRadius={outerRadius}
      width={width}
      height={height}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis
        dataKey='subject'
        style={{ fontSize: '14px' }}
        tick={{ fill: '#B4C0C6' }}
      />
      <PolarRadiusAxis domain={[0, 5]} tickCount={6} tick={false} />
      <defs>
        <linearGradient id='review' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#4299E1' />
          <stop offset='100%' stopColor='#9F7AEA' />
        </linearGradient>
      </defs>
      <Radar
        name='Mike'
        dataKey='A'
        stroke='#8884d8'
        fill='url(#review)'
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}

export default ReviewChart
