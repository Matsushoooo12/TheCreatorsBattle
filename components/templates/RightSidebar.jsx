import { Avatar, Center, Flex, Heading, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import { AiFillGithub, AiFillStar, AiFillTwitterCircle } from 'react-icons/ai';
import { useGetUrl } from '../../hooks/useGetUrl';
import ProjectCard from '../molecules/ProjectCard';
import RankingList from '../organisms/RankingList';
import {MdFacebook} from 'react-icons/md'

const categories = [
  "UI/UXデザイン",
  "ウェブアプリ"
]

const inProgressProjects = [
  {
    id: 1,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'production'
  }
]

const doneProjects = [
  {
    id: 1,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done'
  },
  {
    id: 2,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done'
  },
  {
    id: 3,
    title: "筋トレが楽しくなってもりもり筋肉がつくアプリケーション",
    categories: [
      "UI/UXデザイン",
      "ウェブアプリ"
    ],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done'
  }
]

const rankingList = [
  {
    id: 1,
    rank: 1,
    user: {
      id: 1,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
  {
    id: 2,
    rank: 2,
    user: {
      id: 2,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
  {
    id: 3,
    rank: 3,
    user: {
      id: 3,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
  {
    id: 4,
    rank: 4,
    user: {
      id: 4,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
  {
    id: 5,
    rank: 5,
    user: {
      id: 5,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
  {
    id: 6,
    rank: 6,
    user: {
      id: 6,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
  {
    id: 7,
    rank: 7,
    user: {
      id: 7,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
  {
    id: 8,
    rank: 8,
    user: {
      id: 8,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
  {
    id: 9,
    rank: 9,
    user: {
      id: 9,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
  {
    id: 10,
    rank: 10,
    user: {
      id: 10,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12'
    },
    point: 300
  },
]

const RightSidebar = () => {
  const router = useRouter();
  const {id} = router.query
  const {URL} = useGetUrl()
  return (
    <Flex
      h="100vh"
      direction="column"
      position="relative"
      minW="400px"
    >
    <Flex
        h="100%"
        bg="white"
        justifyContent="flex-start"
        boxShadow="xl"
        p="40px 48px 40px 24px"
        color="black"
        overflowY="scroll"
    >
      {URL === 'http://localhost:3000/' && (
        <Flex direction="column">
          <Flex w="328px" direction="column">
            <Text color="blue.800" fontWeight="bold" fontSize="22px" mb="16px">参加中のプロジェクト</Text>
            <Flex direction="column" mb="48px">
              {inProgressProjects?.map((project) => (
                <ProjectCard key={project.id} title={project.title} categories={project.categories} joinNumber={project.joinNumber} acquisitionPoints={project.acquisitionPoints}  untilTheDeadline={project.untilTheDeadline} status={project.status} onClick={() => router.push(`/projects/${project.id}`)} />
              ))}
            </Flex>
          </Flex>
          <Flex direction="column">
            <Text color="blue.800" fontWeight="bold" fontSize="22px" mb="16px">過去に参加したプロジェクト</Text>
            <Flex direction="column" mb="48px">
              <VStack spacing="16px">
                {doneProjects?.map((project) => (
                  <ProjectCard key={project.id} title={project.title} categories={project.categories} joinNumber={project.joinNumber} acquisitionPoints={project.acquisitionPoints}  untilTheDeadline={project.untilTheDeadline} status={project.status} onClick={() => router.push(`/projects/${project.id}`)} />
                ))}
              </VStack>
            </Flex>
          </Flex>
        </Flex>
      )}
      {URL === 'http://localhost:3000/projects' && (
        <Flex direction="column">
          <Flex w="328px" direction="column">
            <Text color="blue.800" fontWeight="bold" fontSize="22px" mb="16px">🏆 ランキング</Text>
            <Flex bgGradient="linear(to-b, blue.400, purple.400)" alignItems="center" justifyContent="space-between" p="8px 16px" borderRadius="lg" color="white" mb="32px">
              <Flex alignItems="center">
                <Text mr="6px" fontWeight="bold">250</Text>
                <Avatar w="40px" h="40px" mr="8px" />
                <Flex direction="column">
                  <Text fontWeight="bold" fontSize="14px">まつもと</Text>
                  <Text fontSize="12px" fontWeight="bold">@matsushoooo12</Text>
                </Flex>
              </Flex>
              <Text fontWeight="bold">10💰</Text>
            </Flex>
            <RankingList rankingList={rankingList} />
          </Flex>
        </Flex>
      )}
      {URL === `http://localhost:3000/users/${id}` && (
        <Flex direction="column">
          <Flex w="328px" direction="column">
            <Flex w="100%" bgGradient="linear(to-b, blue.400, purple.400)" borderRadius="2xl" direction="column" p="12px 16px" mb="16px">
                <Flex alignItems="center" mb="10px">
                  <Avatar w="64px" h="64px" mr="12px" />
                  <Flex direction="column" color="white">
                    <Text fontSize="22px" fontWeight="bold">やまもとみずき</Text>
                    <Text>@zukki</Text>
                  </Flex>
                </Flex>
                <HStack w="100%" spacing="8px">
                <Flex
                  w="33%"
                  h="56px"
                  bg="rgba(255, 255, 255, 0.1)"
                  borderRadius="4px"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                >
                  <Text fontSize="12px">ポイント</Text>
                  <Text fontSize="18px">3,000</Text>
                </Flex>
                <Flex
                  w="33%"
                  h="56px"
                  bg="rgba(255, 255, 255, 0.1)"
                  borderRadius="4px"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                >
                  <Text fontSize="12px">フォロワー</Text>
                  <Text fontSize="18px">15</Text>
                </Flex>
                <Flex
                  w="33%"
                  h="56px"
                  bg="rgba(255, 255, 255, 0.1)"
                  borderRadius="4px"
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                >
                  <Text fontSize="12px">フォロー</Text>
                  <Text fontSize="18px">99</Text>
                </Flex>
              </HStack>
            </Flex>
            <Flex
              w="100%"
              bgGradient="linear(to-b, blue.400, purple.400)"
              borderRadius="10px"
              p="24px 16px"
              alignItems="center"
              justifyContent="space-between"
              mb="32px"
            >
              <Flex direction="column">
                <Text fontSize="32px" fontWeight="bold" color="white" mb="2px">
                  Lv.32
                </Text>
                <Flex h="5px" mb="6px">
                  <Flex w="82px" h="100%" bg="white" borderRadiu="2px"></Flex>
                  <Flex
                    w="90px"
                    h="100%"
                    bg="gray.400"
                    borderRadiu="2px"
                  ></Flex>
                </Flex>
                <Flex alignItems="center" color="white">
                  <Text fontWeight="bold" fontSize="22px">
                    259<span style={{ fontSize: "15px" }}>位</span>
                  </Text>
                  <Text mx="8px" fontSize="14px">
                    /
                  </Text>
                  <Text fontWeight="bold" fontSize="14px">
                    3000
                    <span style={{ fontSize: "15px" }}>人</span>
                  </Text>
                </Flex>
              </Flex>
              <Icon as={AiFillStar} fontSize="80px" color="yellow.300" />
            </Flex>
            <Text fontSize="14px">
              はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。
              next.jsだいすき！！
            </Text>
            <Text fontSize="14px" mb="24px">
              将来は、個人開発で一発当てたい。野菜社主催
              きゅうりハッカソン優勝。
            </Text>
            <Flex direction="column">
              <Text fontWeight="bold" color="blue.700" mb="10px">
                SNS
              </Text>
              <HStack spacing="14px">
                <Icon w="34px" h="34px" as={AiFillGithub} color="blue.400" />
                <Icon w="34px" h="34px" as={MdFacebook} color="blue.400" />
                <Icon
                  w="34px"
                  h="34px"
                  as={AiFillTwitterCircle}
                  color="blue.400"
                />
              </HStack>
            </Flex>
          </Flex>
        </Flex>
      )}
      {URL === `http://localhost:3000/projects/${id}` && (
        <Flex direction="column">
          <Flex w="328px" direction="column" mb="56px">
            <Text mb="8px" cursor="pointer" color="white" borderRadius="md" boxShadow="lg" fontWeight="bold" w="100%" py="14px" textAlign="center" bgGradient="linear(to-b, blue.400, purple.400)">{"参加する >"}</Text>
            <Text fontSize="12px" fontWeight="bold">💸 ️参加するのに、80pt必要です</Text>
          </Flex>
          <Flex direction="column" mb="16px">
            <Text fontWeight="bold">💣 募集終了まで残り</Text>
            <Flex alignItems="flex-end" bgGradient="linear(to-b, blue.400, purple.400)" bgClip="text">
              <Text fontSize="56px" fontWeight="bold" mr="4px">32</Text>
              <Text fontSize="22px" fontWeight="bold" mb="14px">時間（あと2日）</Text>
            </Flex>
          </Flex>
          <Flex direction="column" mb="16px">
            <Text fontWeight="bold">💰集まっているポイント</Text>
            <Flex alignItems="flex-end" bgGradient="linear(to-b, blue.400, purple.400)" bgClip="text">
              <Text fontSize="56px" fontWeight="bold" mr="4px">3,000</Text>
              <Text fontSize="22px" fontWeight="bold" mb="14px">Pt</Text>
            </Flex>
          </Flex>
          <Flex direction="column" mb="16px">
            <Text fontWeight="bold">🙋🏻‍♀️ 参加者</Text>
            <Flex alignItems="flex-end" bgGradient="linear(to-b, blue.400, purple.400)" bgClip="text">
              <Text fontSize="56px" fontWeight="bold" mr="4px">30</Text>
              <Text fontSize="22px" fontWeight="bold" mb="14px">人</Text>
            </Flex>
          </Flex>
          <HStack spacing="4px" mb="4px">
              <Center w="32px" h="32px" bgGradient="linear(to-b, blue.400, purple.400)" borderRadius="full" >
                <Avatar w="28px" h="28px" />
              </Center>
              <Center w="32px" h="32px" bgGradient="linear(to-b, blue.400, purple.400)" borderRadius="full" >
                <Avatar w="28px" h="28px" />
              </Center>
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
          </HStack>
          <HStack spacing="4px">
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
              <Avatar w="32px" h="32px" />
          </HStack>
        </Flex>
      )}
    </Flex>
    </Flex>
  )
}

export default RightSidebar