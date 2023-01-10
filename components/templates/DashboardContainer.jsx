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
    text: 'デザインも綺麗でとっても好きです！頑張ってください！',
    user: {
      displayName: '松本省吾',
      photoURL: '',
    },
  },
  {
    id: 2,
    date: '2022/12/12. Tue',
    text: 'デザインも綺麗でとっても好きです！頑張ってください！',
    user: {
      displayName: '松本省吾',
      photoURL: '',
    },
  },
  {
    id: 3,
    date: '2022/12/12. Tue',
    text: 'デザインも綺麗でとっても好きです！頑張ってください！',
    user: {
      displayName: '松本省吾',
      photoURL: '',
    },
  },
]

const DashboardContainer = () => {
  const [lineChartIndex, setLineChartIndex] = useState(0)
  const toggleLineChart = (index) => {
    setLineChartIndex(index)
  }
  return (
    <Flex direction="column" py="56px">
      <HStack spacing="12px">
        <DataCard
          title="ランキング"
          myNumber="196"
          unitText="位"
          totalNumber="2000"
          emoji="🏆"
        />
        <DataCard
          title="レベル"
          myNumber="32"
          unitText="Lv."
          totalNumber="300"
          emoji="🔥"
        />
        <DataCard
          title="ポイント"
          myNumber="320"
          unitText="pt"
          totalNumber=""
          emoji="💰"
        />
      </HStack>
      <HStack w="100%" alignSelf="flex-start" spacing="12px" mt="24px">
        <ChartCard>
          <HStack spacing="16px" color="blue.800" fontWeight="bold">
            <TabItems mb="24px">
              <TabItem
                title="ランキング"
                onClick={() => toggleLineChart(0)}
                tabState={lineChartIndex}
                tabIndex={0}
              />
              <TabItem
                title="ポイント"
                onClick={() => toggleLineChart(1)}
                tabState={lineChartIndex}
                tabIndex={1}
              />
            </TabItems>
          </HStack>
          <Flex index="100" w="100%" h="100%" justifyContent="center">
            {lineChartIndex === 0 && (
              <LineChartItem
                data={rankingData}
                gradientId="ranking"
                isReversed={true}
              />
            )}
            {lineChartIndex === 1 && (
              <LineChartItem
                data={pointData}
                gradientId="point"
                isReversed={false}
              />
            )}
          </Flex>
        </ChartCard>
        <ChartCard>
          <Flex w="100%" h="100%" justifyContent="center">
            <ReviewChart />
          </Flex>
        </ChartCard>
      </HStack>
      <HStack spacing="12px" mt="24px">
        <Flex
          borderRadius="2xl"
          boxShadow="xl"
          w="100%"
          bg="white"
          p="32px 32px 0"
          direction="column"
          color="#000"
        >
          <Heading fontSize="20px" fontWeight="bold" color="blue.800" mb="16px">
            レビューコメント一覧
          </Heading>
          {reviewComments?.map((comment) => (
            <ReviewCommentItem
              key={comment.id}
              date={comment.date}
              text={comment.text}
              displayName={comment.user.displayName}
              photoURL={comment.user.photoURL}
            />
          ))}
        </Flex>
      </HStack>
    </Flex>
  )
}

export default DashboardContainer
