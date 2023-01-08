import { Avatar, Divider, Flex, Heading, HStack, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Image } from '@chakra-ui/react'
import DataCard from '../components/molecules/DataCard'
import ReviewChart from '../components/organisms/ReviewChart'
import {AiFillStar} from 'react-icons/ai'
import LineChartItem from '../components/organisms/LineChartItem'

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
  return (
    <Flex direction="column" pt="56px">
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
              suppressHydrationWarning
              fontSize="20px"
              fontWeight="bold"
              color="blue.800"
              mb="16px"
            >
              推移
            </Heading>
            <Tabs variant="soft-rounded">
              <TabList>
                <Tab>ランキング</Tab>
                <Tab>ポイント</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Flex zIndex={100}>
                    <LineChartItem data={rankingData} gradientId="ranking_gradationColor" />
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex zIndex={100}>
                  <LineChartItem data={pointData} gradientId="point_gradationColor" />
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
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
              suppressHydrationWarning
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
            // h="00px"
            bg="white"
            p="32px 32px 0"
            direction="column"
            color="#000"
          >
            <Heading
              suppressHydrationWarning
              fontSize="20px"
              fontWeight="bold"
              color="blue.800"
              mb="16px"
            >
              レビューコメント一覧
            </Heading>
            <Flex w="100%" direction="column">
              <Flex w="100%">
                <Image
                  bg="gray.500"
                  w="120px"
                  h="80px"
                  alt=""
                  mr="16px"
                />
                <Flex direction="column">
                  <Text fontSize="12px" color="gray.500" mb="10px">
                    2022/12/12. Tue
                  </Text>
                  <Flex alignItems="center" mb="4px">
                    <Flex alignItems="center" mr="18px">
                      <Text fontSize="12px" color="gray.500" mr="8px">
                        発想
                      </Text>
                      <HStack spacing="4px">
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                      </HStack>
                    </Flex>
                    <Flex alignItems="center" mr="18px">
                      <Text fontSize="12px" color="gray.500" mr="8px">
                        ビジネス
                      </Text>
                      <HStack spacing="4px">
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                      </HStack>
                    </Flex>
                    <Flex alignItems="center" mr="18px">
                      <Text fontSize="12px" color="gray.500" mr="8px">
                        技術
                      </Text>
                      <HStack spacing="4px">
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                      </HStack>
                    </Flex>
                    <Flex alignItems="center">
                      <Text fontSize="12px" color="gray.500" mr="8px">
                        デザイン
                      </Text>
                      <HStack spacing="4px">
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                      </HStack>
                    </Flex>
                  </Flex>
                  <Text fontWeight="bold">
                    デザインも綺麗でとっても好きです！頑張ってください！
                  </Text>
                  <Flex alignItems="center">
                    <Avatar size="xs" mr="4px" />
                    <Text fontSize="12px">松本省吾</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Divider orientation="horizontal" my="18px" size="xl" />
            </Flex>
            <Flex w="100%" direction="column">
              <Flex w="100%">
                <Image
                  bg="gray.500"
                  w="120px"
                  h="80px"
                  alt=""
                  mr="16px"
                />
                <Flex direction="column">
                  <Text fontSize="12px" color="gray.500" mb="10px">
                    2022/12/12. Tue
                  </Text>
                  <Flex alignItems="center" mb="4px">
                    <Flex alignItems="center" mr="18px">
                      <Text fontSize="12px" color="gray.500" mr="8px">
                        発想
                      </Text>
                      <HStack spacing="4px">
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="gray.300" />
                      </HStack>
                    </Flex>
                    <Flex alignItems="center" mr="18px">
                      <Text fontSize="12px" color="gray.500" mr="8px">
                        ビジネス
                      </Text>
                      <HStack spacing="4px">
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="gray.300" />
                        <Icon as={AiFillStar} color="gray.300" />
                      </HStack>
                    </Flex>
                    <Flex alignItems="center" mr="18px">
                      <Text fontSize="12px" color="gray.500" mr="8px">
                        技術
                      </Text>
                      <HStack spacing="4px">
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="gray.300" />
                      </HStack>
                    </Flex>
                    <Flex alignItems="center">
                      <Text fontSize="12px" color="gray.500" mr="8px">
                        デザイン
                      </Text>
                      <HStack spacing="4px">
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="yellow.300" />
                        <Icon as={AiFillStar} color="gray.300" />
                        <Icon as={AiFillStar} color="gray.300" />
                        <Icon as={AiFillStar} color="gray.300" />
                      </HStack>
                    </Flex>
                  </Flex>
                  <Text fontWeight="bold">
                    デザインも綺麗でとっても好きです！頑張ってください！
                  </Text>
                  <Flex alignItems="center">
                    <Avatar size="xs" mr="4px" />
                    <Text fontSize="12px">松本省吾</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Divider orientation="horizontal" my="18px" size="xl" />
            </Flex>
          </Flex>
        </HStack>
    </Flex>
  )
}
