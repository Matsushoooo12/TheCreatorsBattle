import { Flex, Heading, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import TabItem from '../atoms/TabItem'
import DataCard from '../molecules/DataCard'
import ReviewCommentItem from '../molecules/ReviewCommentItem'
import TabItems from '../molecules/TabItems'
import ChartCard from '../organisms/ChartCard'
import LineChartItem from '../organisms/LineChartItem'
import ReviewChart from '../organisms/ReviewChart'

const pointData = [
  {
    name: '1月',
    Rank: 2400,
  },
  {
    name: '2月',
    Rank: 1398,
  },
  {
    name: '4月',
    Rank: 9800,
  },
  {
    name: '5月',
    Rank: 3908,
  },
  {
    name: '6月',
    Rank: 4800,
  },
  {
    name: '7月',
    Rank: 3800,
  },
  {
    name: '8月',
    Rank: 4300,
  },
]

const rankingData = [
  {
    name: '1月',
    Rank: 102,
  },
  {
    name: '2月',
    Rank: 83,
  },
  {
    name: '4月',
    Rank: 93,
  },
  {
    name: '5月',
    Rank: 63,
  },
  {
    name: '6月',
    Rank: 4,
  },
  {
    name: '7月',
    Rank: 21,
  },
  {
    name: '8月',
    Rank: 10,
  },
]

const reviewComments = [
  {
    id: 1,
    date: '2022/12/12. Tue',
    text: '素晴らしい作品をお見せいただきありがとうございました！あなたのクリエイティブな才能に感銘を受けました。',
    user: {
      displayName: '宮崎駿',
      photoURL:
        'https://user-images.githubusercontent.com/66903388/213908443-9610dc14-3644-4e61-b428-3334e7b44c85.jpeg',
    },
    works: {
      id: 1,
      title: 'aaaa',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/213907367-903e9206-530e-4d5e-8601-6ad8267bbd32.jpg',
    },
  },
  {
    id: 2,
    date: '2022/12/12. Tue',
    text: 'あなたの作品にはとても感動しました。あなたの才能に敬意を表します。',
    user: {
      displayName: '庵野秀明',
      photoURL:
        'https://user-images.githubusercontent.com/66903388/213908444-69d90727-82a7-4b82-bb71-7c25bfe2d3b0.jpeg',
    },
    works: {
      id: 1,
      title: 'aaaa',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/213907369-5f5897ab-a673-4e1e-9cfd-0cefe879eb59.jpg',
    },
  },
  {
    id: 3,
    date: '2022/12/12. Tue',
    text: 'クリエイティブな発想が光る作品をお見せいただき感謝します。あなたの作品を見ることが大変楽しかったです。',
    user: {
      displayName: '宮本茂',
      photoURL:
        'https://user-images.githubusercontent.com/66903388/213908445-cd0a59f8-876b-441c-a18c-381f3b2e5362.jpeg',
    },
    works: {
      id: 1,
      title: 'aaaa',
      thumbnail:
        'https://user-images.githubusercontent.com/66903388/213907354-f4555c40-f60f-42db-b322-e9e27df68b06.jpg',
    },
  },
]

const data = [
  {
    subject: `ビジネス 3.2`,
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

const DashboardContainer = () => {
  const [lineChartIndex, setLineChartIndex] = useState(0)
  const toggleLineChart = (index) => {
    setLineChartIndex(index)
  }
  return (
    <Flex direction='column' py='56px' position='relative'>
      <HStack spacing='12px'>
        <DataCard
          title='ランキング'
          myNumber='196'
          unitText='位'
          totalNumber='2000'
          emoji='🏆'
        />
        <DataCard
          title='レベル'
          myNumber='32'
          unitText='Lv.'
          totalNumber='300'
          emoji='🔥'
        />
        <DataCard
          title='ポイント'
          myNumber='320'
          unitText='pt'
          totalNumber=''
          emoji='💰'
        />
      </HStack>
      <HStack w='100%' alignSelf='flex-start' spacing='12px' mt='24px'>
        <ChartCard title='推移（last six months）'>
          <HStack spacing='16px' color='blue.800' fontWeight='bold'>
            <TabItems mb='24px'>
              <TabItem
                title='ランキング'
                onClick={() => toggleLineChart(0)}
                tabState={lineChartIndex}
                tabIndex={0}
              />
              <TabItem
                title='ポイント'
                onClick={() => toggleLineChart(1)}
                tabState={lineChartIndex}
                tabIndex={1}
              />
            </TabItems>
          </HStack>
          <Flex index='100' w='100%' h='100%' justifyContent='center'>
            {lineChartIndex === 0 && (
              <LineChartItem
                data={rankingData}
                gradientId='ranking'
                isReversed={true}
              />
            )}
            {lineChartIndex === 1 && (
              <LineChartItem
                data={pointData}
                gradientId='point'
                isReversed={false}
              />
            )}
          </Flex>
        </ChartCard>
        <ChartCard title='総合評価'>
          <Flex w='100%' h='100%' justifyContent='center'>
            <ReviewChart
              cx={200}
              cy={155}
              width={400}
              height={300}
              data={data}
              outerRadius={130}
            />
          </Flex>
        </ChartCard>
      </HStack>
      <HStack spacing='12px' mt='24px'>
        <Flex
          borderRadius='2xl'
          boxShadow='xl'
          w='100%'
          bg='white'
          p='32px 32px 0'
          direction='column'
          color='#000'
        >
          <Heading fontSize='20px' fontWeight='bold' color='blue.800' mb='16px'>
            レビューコメント一覧
          </Heading>
          {reviewComments?.map((comment) => (
            <ReviewCommentItem
              key={comment.id}
              date={comment.date}
              text={comment.text}
              displayName={comment.user.displayName}
              photoURL={comment.user.photoURL}
              worksThumbnail={comment.works.thumbnail}
            />
          ))}
        </Flex>
      </HStack>
    </Flex>
  )
}

export default DashboardContainer
