import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

const data = [
  {
    subject: 'ビジネス 3.2',
    A: 3.2,
    fullMark: 5,
  },
  {
    subject: '技術 2.3',
    A: 2.3,
    fullMark: 5,
  },
  {
    subject: 'デザイン 4.5',
    A: 4.5,
    fullMark: 5,
  },
  {
    subject: '発想 2.8',
    A: 2.8,
    fullMark: 5,
  },
]

const ReviewChart = () => {
  return (
    <RadarChart
      cx={200}
      cy={155}
      outerRadius={130}
      width={400}
      height={300}
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
