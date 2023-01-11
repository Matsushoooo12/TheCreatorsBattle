import {
  Avatar,
  Center,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { AiFillGithub, AiFillStar, AiFillTwitterCircle } from 'react-icons/ai'
import { useGetUrl } from '../../hooks/useGetUrl'
import ProjectCard from '../molecules/ProjectCard'
import RankingList from '../organisms/RankingList'
import { MdFacebook } from 'react-icons/md'
import { useGetStatus } from '../../hooks/useGetStatus'
import UserWorksCard from '../molecules/UserWorksCard'
import EditButton from '../atoms/EditButton'
import { AuthContext } from '../../pages/_app'
import ModalCard from '../molecules/ModalCard'
import GithubButtonIcon from '../atoms/GithubButtonIcon'
import FacebookButtonIcon from '../atoms/FacebookButtonIcon'
import TwitterButtonIcon from '../atoms/TwitterButtonIcon'
import NewCreateCard from '../molecules/NewCreateCard'

const inProgressProjects = [
  {
    id: 1,
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'production',
  },
]

const doneProjects = [
  {
    id: 1,
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done',
  },
  {
    id: 2,
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done',
  },
  {
    id: 3,
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    joinNumber: 25,
    acquisitionPoints: 3000,
    untilTheDeadline: 3,
    status: 'done',
  },
]

const rankingList = [
  {
    id: 1,
    rank: 1,
    user: {
      id: 1,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 2,
    rank: 2,
    user: {
      id: 2,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 3,
    rank: 3,
    user: {
      id: 3,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 4,
    rank: 4,
    user: {
      id: 4,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 5,
    rank: 5,
    user: {
      id: 5,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 6,
    rank: 6,
    user: {
      id: 6,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 7,
    rank: 7,
    user: {
      id: 7,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 8,
    rank: 8,
    user: {
      id: 8,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 9,
    rank: 9,
    user: {
      id: 9,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
  {
    id: 10,
    rank: 10,
    user: {
      id: 10,
      photoURL: '',
      displayName: 'まつもと',
      userId: '@matsushoooo12',
    },
    point: 300,
  },
]

const myWorks1 = {
  id: 1,
  thumbnail: '',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  createdAt: '2022/01/01',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
}

const projectItem1 = {
  id: 1,
  status: 'recruitment',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  format: [
    '作品URL',
    '作品概要',
    '作品タイトル',
    '作品が分かるスクショ動画',
    '使用技術',
    'Githubリンク',
  ],
}

const projectItem2 = {
  id: 2,
  status: 'production',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  format: [
    '作品URL',
    '作品概要',
    '作品タイトル',
    '作品が分かるスクショ動画',
    '使用技術',
    'Githubリンク',
  ],
  isSubmit: true,
}

const projectItem3 = {
  id: 3,
  status: 'vote',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  format: [
    '作品URL',
    '作品概要',
    '作品タイトル',
    '作品が分かるスクショ動画',
    '使用技術',
    'Githubリンク',
  ],
  isVoted: true,
}

const projectItem4 = {
  id: 4,
  status: 'done',
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  format: [
    '作品URL',
    '作品概要',
    '作品タイトル',
    '作品が分かるスクショ動画',
    '使用技術',
    'Githubリンク',
  ],
}

const RightSidebar = () => {
  const router = useRouter()
  const { id } = router.query
  const { URL } = useGetUrl()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isLogin } = useContext(AuthContext)
  const { projectButtonText, gradientColor } = useGetStatus(
    projectItem2.status,
    projectItem2.isVoted,
    projectItem2.isSubmit,
  )
  return (
    <>
      <Flex h="100vh" direction="column" position="relative" minW="400px">
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
                <Text
                  color="blue.800"
                  fontWeight="bold"
                  fontSize="22px"
                  mb="16px"
                >
                  参加中のプロジェクト
                </Text>
                <Flex direction="column" mb="48px">
                  {inProgressProjects?.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      categories={project.categories}
                      joinNumber={project.joinNumber}
                      acquisitionPoints={project.acquisitionPoints}
                      untilTheDeadline={project.untilTheDeadline}
                      status={project.status}
                      onClick={() => router.push(`/projects/${project.id}`)}
                    />
                  ))}
                </Flex>
              </Flex>
              <Flex direction="column">
                <Text
                  color="blue.800"
                  fontWeight="bold"
                  fontSize="22px"
                  mb="16px"
                >
                  過去に参加したプロジェクト
                </Text>
                <Flex direction="column" mb="48px">
                  <VStack spacing="16px">
                    {doneProjects?.map((project) => (
                      <ProjectCard
                        key={project.id}
                        title={project.title}
                        categories={project.categories}
                        joinNumber={project.joinNumber}
                        acquisitionPoints={project.acquisitionPoints}
                        untilTheDeadline={project.untilTheDeadline}
                        status={project.status}
                        onClick={() => router.push(`/projects/${project.id}`)}
                      />
                    ))}
                  </VStack>
                </Flex>
              </Flex>
            </Flex>
          )}
          {URL === 'http://localhost:3000/projects' && (
            <Flex direction="column">
              <Flex w="328px" direction="column">
                <Text
                  color="blue.800"
                  fontWeight="bold"
                  fontSize="22px"
                  mb="16px"
                >
                  🏆 ランキング
                </Text>
                <Flex
                  bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
                  alignItems="center"
                  justifyContent="space-between"
                  p="8px 16px"
                  borderRadius="lg"
                  color="white"
                  mb="32px"
                >
                  <Flex alignItems="center">
                    <Text mr="6px" fontWeight="bold">
                      250
                    </Text>
                    <Avatar w="40px" h="40px" mr="8px" />
                    <Flex direction="column">
                      <Text fontWeight="bold" fontSize="14px">
                        まつもと
                      </Text>
                      <Text fontSize="12px" fontWeight="bold">
                        @matsushoooo12
                      </Text>
                    </Flex>
                  </Flex>
                  <Text fontWeight="bold">10💰</Text>
                </Flex>
                <RankingList rankingList={rankingList} />
              </Flex>
            </Flex>
          )}
          {(URL === `http://localhost:3000/users/${id}` ||
            URL === `http://localhost:3000/users/${id}/skils/edit`) && (
            <Flex direction="column">
              <Flex w="328px" direction="column">
                <Flex alignSelf="flex-end" mb="12px">
                  <EditButton />
                </Flex>
                <Flex
                  w="100%"
                  bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
                  borderRadius="2xl"
                  direction="column"
                  p="12px 16px"
                  mb="16px"
                >
                  <Flex alignItems="center" mb="10px">
                    <Avatar w="64px" h="64px" mr="12px" />
                    <Flex direction="column" color="white">
                      <Text fontSize="22px" fontWeight="bold">
                        やまもとみずき
                      </Text>
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
                  bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
                  borderRadius="10px"
                  p="24px 16px"
                  alignItems="center"
                  justifyContent="space-between"
                  mb="32px"
                >
                  <Flex direction="column">
                    <Text
                      fontSize="32px"
                      fontWeight="bold"
                      color="white"
                      mb="2px"
                    >
                      Lv.32
                    </Text>
                    <Flex h="5px" mb="6px">
                      <Flex
                        w="82px"
                        h="100%"
                        bg="white"
                        borderRadius="2px"
                      ></Flex>
                      <Flex
                        w="90px"
                        h="100%"
                        bg="gray.400"
                        borderRadius="2px"
                      ></Flex>
                    </Flex>
                    <Flex alignItems="center" color="white">
                      <Text fontWeight="bold" fontSize="22px">
                        259<span style={{ fontSize: '15px' }}>位</span>
                      </Text>
                      <Text mx="8px" fontSize="14px">
                        /
                      </Text>
                      <Text fontWeight="bold" fontSize="14px">
                        3000
                        <span style={{ fontSize: '15px' }}>人</span>
                      </Text>
                    </Flex>
                  </Flex>
                  <Icon as={AiFillStar} fontSize="80px" color="yellow.300" />
                </Flex>
                {/* テキストがある場合 */}
                {/* <Flex direction="column" mb="24px">
                  <Text fontSize="14px">
                    はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。
                    next.jsだいすき！！
                  </Text>
                  <Text fontSize="14px">
                    将来は、個人開発で一発当てたい。野菜社主催
                    きゅうりハッカソン優勝。
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text fontWeight="bold" color="blue.700" mb="10px">
                    SNS
                  </Text>
                  <HStack spacing="14px">
                    <GithubButtonIcon />
                    <FacebookButtonIcon />
                    <TwitterButtonIcon />
                  </HStack>
                </Flex> */}
                {/* テキストがない場合 */}
                <NewCreateCard
                  title="あなたについて書いてみよう！"
                  buttonText="プロフィールを書く"
                  onClick={() => router.push(`/users/${id}`)}
                >
                  <Text>プロフィールを書くと、ポイントがもらえるかも...🤭</Text>
                </NewCreateCard>
                {/* ここまで */}
              </Flex>
            </Flex>
          )}
          {URL === `http://localhost:3000/projects/${id}` && (
            <Flex direction="column">
              <Flex w="328px" direction="column" mb="56px">
                {isLogin && (
                  <Flex direction="column" mb="56px">
                    {projectItem4?.status !== 'done' ? (
                      <>
                        <Text
                          mb="8px"
                          cursor="pointer"
                          color="white"
                          borderRadius="md"
                          boxShadow="lg"
                          fontWeight="bold"
                          w="100%"
                          py="14px"
                          textAlign="center"
                          bgGradient={gradientColor()}
                          opacity={projectItem4.isVoted && '50%'}
                          onClick={onOpen}
                        >
                          {projectButtonText()}
                        </Text>
                        {projectItem4.status === 'recruitment' && (
                          <Text fontWeight="bold">
                            💸 参加するのに、80pt必要です
                          </Text>
                        )}
                        {projectItem4.status === 'production' && (
                          <>
                            <Text fontWeight="bold" mb="8px">
                              📌 提出済みのあなたの作品
                            </Text>
                            <Flex w="100%">
                              <UserWorksCard
                                thumbnail={myWorks1.thumbnail}
                                title={myWorks1.title}
                                categories={myWorks1.categories}
                                createdAt={myWorks1.createdAt}
                                onClick={() =>
                                  router.push(`/works/${myWorks1.id}`)
                                }
                              />
                            </Flex>
                          </>
                        )}
                        {projectItem4.status === 'vote' && (
                          <>
                            <Text fontWeight="bold" mb="8px">
                              📌 提出済みのあなたの作品
                            </Text>
                            <Flex w="100%">
                              <UserWorksCard
                                thumbnail={myWorks1.thumbnail}
                                title={myWorks1.title}
                                categories={myWorks1.categories}
                                createdAt={myWorks1.createdAt}
                                onClick={() =>
                                  router.push(`/works/${myWorks1.id}`)
                                }
                              />
                            </Flex>
                            <Flex direction="column" mb="16px">
                              <Text fontWeight="bold">💣 募集終了まで残り</Text>
                              <Flex
                                alignItems="flex-end"
                                bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
                                bgClip="text"
                              >
                                <Text
                                  fontSize="56px"
                                  fontWeight="bold"
                                  mr="4px"
                                >
                                  32
                                </Text>
                                <Text
                                  fontSize="22px"
                                  fontWeight="bold"
                                  mb="14px"
                                >
                                  時間（あと2日）
                                </Text>
                              </Flex>
                            </Flex>
                            <Flex direction="column" mb="16px">
                              <Text fontWeight="bold">
                                💰集まっているポイント
                              </Text>
                              <Flex
                                alignItems="flex-end"
                                bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
                                bgClip="text"
                              >
                                <Text
                                  fontSize="56px"
                                  fontWeight="bold"
                                  mr="4px"
                                >
                                  3,000
                                </Text>
                                <Text
                                  fontSize="22px"
                                  fontWeight="bold"
                                  mb="14px"
                                >
                                  Pt
                                </Text>
                              </Flex>
                            </Flex>
                            <Flex direction="column" mb="16px">
                              <Text fontWeight="bold">🙋🏻‍♀️ 参加者</Text>
                              <Flex
                                alignItems="flex-end"
                                bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
                                bgClip="text"
                              >
                                <Text
                                  fontSize="56px"
                                  fontWeight="bold"
                                  mr="4px"
                                >
                                  30
                                </Text>
                                <Text
                                  fontSize="22px"
                                  fontWeight="bold"
                                  mb="14px"
                                >
                                  人
                                </Text>
                              </Flex>
                            </Flex>
                            <HStack spacing="4px" mb="4px">
                              <Center
                                w="32px"
                                h="32px"
                                bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
                                borderRadius="full"
                              >
                                <Avatar w="28px" h="28px" />
                              </Center>
                              <Center
                                w="32px"
                                h="32px"
                                bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
                                borderRadius="full"
                              >
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
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <Text
                          color="blue.800"
                          fontWeight="bold"
                          fontSize="22px"
                          mb="16px"
                        >
                          🏆️ ランキング結果 (32名)
                        </Text>
                        <RankingList rankingList={rankingList} />
                      </>
                    )}
                  </Flex>
                )}
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
      {projectItem4.status === 'recruitment' && (
        <ModalCard
          cancelButtonText="閉じる"
          isOpen={isOpen}
          onClose={onClose}
          title="エントリーが完了しました"
          titleEmoji="🎉"
        ></ModalCard>
      )}
      {projectItem4.status === 'production' && (
        <ModalCard
          cancelButtonText="閉じる"
          isOpen={isOpen}
          onClose={onClose}
          title="提出が完了しました"
          titleEmoji="🎉"
        >
          <Text mb="24px" color="black" fontWeight="bold">
            お疲れさまです！『{'{タイトル}'}』の作品を提出しました！{' '}
            {'{YYYY / MM / DD}'} から始まる作品投票でまたお会いしましょう☺️
          </Text>
        </ModalCard>
      )}
      {projectItem4.status === 'vote' && (
        <ModalCard
          cancelButtonText="閉じる"
          isOpen={isOpen}
          onClose={onClose}
          title="投票が完了しました"
          titleEmoji="🎉"
        >
          <Text mb="24px" color="black" fontWeight="bold">
            『{'{タイトル}'}』の投票が完了しました。 {'{YYYY / MM / DD}'}
            に結果が発表されます。この大会での賞金は{'{金額}'}
            は誰が獲得するのでしょうか？！
          </Text>
        </ModalCard>
      )}
    </>
  )
}

export default RightSidebar
