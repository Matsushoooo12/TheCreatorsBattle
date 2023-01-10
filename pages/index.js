import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import DataCard from '../components/molecules/DataCard'
import ReviewChart from '../components/organisms/ReviewChart'
import ReviewCommentItem from '../components/molecules/ReviewCommentItem'
import { useContext, useState } from 'react'
import TabItems from '../components/molecules/TabItems'
import TabItem from '../components/atoms/TabItem'
import LineChartItem from '../components/organisms/LineChartItem'
import { AuthContext } from './_app'
import { useGetUrl } from '../hooks/useGetUrl'

const pointData = [
  {
    name: "1月",
    Rank: 2400,
  },
  {
    name: "2月",
    Rank: 1398,
  },
  {
    name: "4月",
    Rank: 9800,
  },
  {
    name: "5月",
    Rank: 3908,
  },
  {
    name: "6月",
    Rank: 4800,
  },
  {
    name: "7月",
    Rank: 3800,
  },
  {
    name: "8月",
    Rank: 4300,
  },
];

const rankingData = [
  {
    name: "1月",
    Rank: 102,
  },
  {
    name: "2月",
    Rank: 83,
  },
  {
    name: "4月",
    Rank: 93,
  },
  {
    name: "5月",
    Rank: 63,
  },
  {
    name: "6月",
    Rank: 4,
  },
  {
    name: "7月",
    Rank: 21,
  },
  {
    name: "8月",
    Rank: 10,
  },
];

export default function Home() {
  const {isLogin} = useContext(AuthContext)
  const {URL} = useGetUrl()
  const [lineChartIndex, setLineChartIndex] = useState(0)
  const toggleLineChart = (index) => {
    setLineChartIndex(index)
  }
  return (
    <>
    {isLogin ? (
      <Flex direction="column" py="56px">
      <HStack spacing="12px">
        <DataCard title="ランキング" myNumber="196" unitText="位" totalNumber="2000" emoji="🏆" />
        <DataCard title="レベル" myNumber="32" unitText="Lv." totalNumber="300" emoji="🔥" />
        <DataCard title="ポイント" myNumber="320" unitText="pt" totalNumber="" emoji="💰" />
      </HStack>
      <HStack
          w="100%"
          alignSelf="flex-start"
          spacing="12px"
          mt="24px"
        >
          <Flex
            w="50%"
            bg="white"
            borderRadius="2xl"
            p="32px"
            fontWeight="bold"
            boxShadow="xl"
            direction="column"
            h="390px"
          >
            <Heading
              
              fontSize="20px"
              fontWeight="bold"
              color="blue.800"
              mb="16px"
            >
              推移
            </Heading>
            <HStack spacing="16px" color="blue.800" fontWeight="bold">
              <TabItems mb="24px">
                <TabItem title="ランキング" onClick={() => toggleLineChart(0)} tabState={lineChartIndex} tabIndex={0} />
                <TabItem title="ポイント" onClick={() => toggleLineChart(1)} tabState={lineChartIndex} tabIndex={1} />
              </TabItems>
            </HStack>
            <Flex index="100" w="100%" h="100%" justifyContent="center">
              {lineChartIndex === 0 && (
                <LineChartItem data={rankingData} gradientId="ranking" isReversed={true} />
              )}
              {lineChartIndex === 1 && (
                <LineChartItem data={pointData} gradientId="point" isReversed={false} />
              )}
            </Flex>
          </Flex>
          <Flex
            w="50%"
            bg="white"
            borderRadius="2xl"
            p="32px"
            fontWeight="bold"
            boxShadow="xl"
            // h="320px"
            direction="column"
            h="390px"
          >
            <Heading
              
              fontSize="20px"
              fontWeight="bold"
              color="blue.800"
              mb="16px"
            >
              総合評価
            </Heading>
            <Flex w="100%" h="100%" justifyContent="center">
              <ReviewChart />
            </Flex>
          </Flex>
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
            <Heading
              
              fontSize="20px"
              fontWeight="bold"
              color="blue.800"
              mb="16px"
            >
              レビューコメント一覧
            </Heading>
            <ReviewCommentItem />
            <ReviewCommentItem />
            <ReviewCommentItem />
          </Flex>
        </HStack>
    </Flex>
    ):(
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center" direction="column">
        <Image mb="56px" objectFit="cover" w="418px" h="45px" src="https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png" alt="" />
        <Text mb="16px" fontSize="42px" fontWeight="bold" bgGradient="linear(to-b, #7CAAFF, #8D85F4)" bgClip="text">クリエイターの頂きへの挑戦状</Text>
        <Flex direction="column" fontSize="18px" fontWeight="bold">
          <Text bgGradient="linear(to-b, #7CAAFF, #8D85F4)" bgClip="text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
          <Text bgGradient="linear(to-b, #7CAAFF, #8D85F4)" bgClip="text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
          <Text bgGradient="linear(to-b, #7CAAFF, #8D85F4)" bgClip="text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
          <Text bgGradient="linear(to-b, #7CAAFF, #8D85F4)" bgClip="text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
        </Flex>
      </Flex>
    )}
    </>
  )
}
