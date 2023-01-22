import {
  Avatar,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useGetStatus } from '../../../hooks/useGetStatus'
import { IoIosArrowBack } from 'react-icons/io'
import BackArrowTitle from '../../../components/atoms/BackArrowTitle'
import TabItems from '../../../components/molecules/TabItems'
import TabItem from '../../../components/atoms/TabItem'

const projectItem1 = {
  id: 1,
  status: 'recruitment',
  title: 'ビデオを見るアプリ',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  thumbnail:
    'https://user-images.githubusercontent.com/66903388/213907363-fb223792-b1fd-4b2a-94c3-0d2aef02531c.jpg',
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'image',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'text',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'text',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'text',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'text',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'text',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text',
      text: '使用技術',
    },
  ],
}

const projectItem2 = {
  id: 2,
  status: 'production',
  title: '音楽を聴くアプリ',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  thumbnail:
    'https://user-images.githubusercontent.com/66903388/213907363-fb223792-b1fd-4b2a-94c3-0d2aef02531c.jpg',
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'image',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'text',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'text',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'text',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'text',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'text',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text',
      text: '使用技術',
    },
  ],
}

const projectItem3 = {
  id: 3,
  status: 'vote',
  title: 'スケジュールを管理するアプリ',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  thumbnail:
    'https://user-images.githubusercontent.com/66903388/213907363-fb223792-b1fd-4b2a-94c3-0d2aef02531c.jpg',
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'image',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'text',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'text',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'text',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'text',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'text',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text',
      text: '使用技術',
    },
  ],
  isVoted: true,
}

const projectItem4 = {
  id: 4,
  status: 'done',
  title: 'ファイルを共有するアプリ',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  thumbnail:
    'https://user-images.githubusercontent.com/66903388/213907363-fb223792-b1fd-4b2a-94c3-0d2aef02531c.jpg',
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。\nnext.jsだいすき！！\n将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。',
  formats: [
    {
      id: 1,
      format: 'image',
      text: '作品タイトル',
    },
    {
      id: 2,
      format: 'images',
      text: '作品が分かるスクショ画像',
    },
    {
      id: 3,
      format: 'video',
      text: '作品が分かるスクショ動画',
    },
    {
      id: 4,
      format: 'text',
      text: '作品概要',
    },
    {
      id: 5,
      format: 'text',
      text: '作った背景・理由',
    },
    {
      id: 6,
      format: 'text',
      text: '工夫した点',
    },
    {
      id: 7,
      format: 'text',
      text: '作品URL',
    },
    {
      id: 8,
      format: 'text',
      text: 'Githubリンク',
    },
    {
      id: 9,
      format: 'text',
      text: '使用技術',
    },
  ],
}

const DetailProject = () => {
  const { gradientColor, statusText } = useGetStatus(projectItem2.status)
  const router = useRouter()
  const { id } = router.query
  const [doneIndex, setDoneIndex] = useState(0)
  const toggleDone = (index) => {
    setDoneIndex(index)
  }
  return (
    <Flex direction='column' py='56px' px='80px'>
      <BackArrowTitle
        onClick={() => router.push('/projects')}
        text='プロジェクト一覧'
      />
      {projectItem2.status !== 'done' ? (
        <Flex w='100%' bg='white' p='24px' borderRadius='lg' direction='column'>
          <Flex alignItems='center' mb='8px'>
            <Text
              fontSize='12px'
              fontWeight='bold'
              borderRadius='md'
              p='4px 12px'
              bgGradient={gradientColor()}
              mr='8px'
              color='white'
            >
              {statusText()}
            </Text>
            <Text fontWeight='bold' fontSize='12px' color='gray.400'>
              {projectItem2.categories?.map((c, index) =>
                index === 0 ? c : `・${c}`,
              )}
            </Text>
          </Flex>
          <Heading color='blue.800' fontSize='22px' mb='32px'>
            {projectItem2.title}
          </Heading>
          <Image
            w='100%'
            h='385px'
            // bg='gray.400'
            alt=''
            borderRadius='lg'
            mb='32px'
            src={projectItem2.thumbnail}
            objectFit='cover'
          />
          <Flex color='black' mb='32px' direction='column'>
            <Text>{projectItem2.summary}</Text>
          </Flex>
          <Flex direction='column' mb='32px'>
            <Text fontSize='18px' fontWeight='bold' color='blue.800' mb='10px'>
              参加におすすめな人
            </Text>
            <Flex color='black' direction='column'>
              <Text>{projectItem2.recommendation}</Text>
            </Flex>
          </Flex>
          <Flex direction='column' mb='32px'>
            <Text fontSize='18px' fontWeight='bold' color='blue.800' mb='10px'>
              ルール
            </Text>
            <Flex color='black' direction='column'>
              <Text>{projectItem2.rule}</Text>
            </Flex>
          </Flex>
          <Flex direction='column'>
            <Text fontSize='18px' fontWeight='bold' color='blue.800' mb='10px'>
              提出形式
            </Text>
            <Flex color='black' direction='column'>
              {projectItem2.formats?.map((f) => (
                <Text key={f.id}>{f.text}</Text>
              ))}
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex direction='column'>
          <Flex
            w='100%'
            direction='column'
            p='24px 24px 0'
            bg='white'
            borderTopRadius='lg'
          >
            <TabItems>
              <TabItem
                title='プロジェクト概要'
                onClick={() => toggleDone(0)}
                tabState={doneIndex}
                tabIndex={0}
              />
              <TabItem
                title='作品一覧'
                onClick={() => toggleDone(1)}
                tabState={doneIndex}
                tabIndex={1}
              />
            </TabItems>
            <Flex w='100%' h='1px' bg='gray.200' />
          </Flex>
          <Flex
            h='78vh'
            overflowX='scroll'
            bg='white'
            p='24px'
            borderBottomRadius='lg'
            direction='column'
            position='relative'
          >
            <Flex direction='column' w='100%'>
              {doneIndex === 0 && (
                <>
                  <Flex alignItems='center' mb='8px'>
                    <Text
                      fontSize='12px'
                      fontWeight='bold'
                      borderRadius='md'
                      p='4px 12px'
                      bgGradient={gradientColor()}
                      mr='8px'
                      color='white'
                    >
                      {statusText()}
                    </Text>
                    <Text fontWeight='bold' fontSize='12px' color='gray.400'>
                      {projectItem2.categories?.map((c, index) =>
                        index === 0 ? c : `・${c}`,
                      )}
                    </Text>
                  </Flex>
                  <Heading color='blue.800' fontSize='22px' mb='32px'>
                    {projectItem2.title}
                  </Heading>
                  <Image
                    w='100%'
                    h='385px'
                    bg='gray.400'
                    alt=''
                    borderRadius='lg'
                    mb='32px'
                    src={projectItem2.thumbnail}
                    objectFit='cover'
                  />
                  <Flex color='black' mb='32px' direction='column'>
                    <Text>{projectItem2.summary}</Text>
                  </Flex>
                  <Flex direction='column' mb='32px'>
                    <Text
                      fontSize='18px'
                      fontWeight='bold'
                      color='blue.800'
                      mb='10px'
                    >
                      参加におすすめな人
                    </Text>
                    <Flex color='black' direction='column'>
                      <Text>{projectItem2.recommendation}</Text>
                    </Flex>
                  </Flex>
                  <Flex direction='column' mb='32px'>
                    <Text
                      fontSize='18px'
                      fontWeight='bold'
                      color='blue.800'
                      mb='10px'
                    >
                      ルール
                    </Text>
                    <Flex color='black' direction='column'>
                      <Text>{projectItem2.rule}</Text>
                    </Flex>
                  </Flex>
                  <Flex direction='column'>
                    <Text
                      fontSize='18px'
                      fontWeight='bold'
                      color='blue.800'
                      mb='10px'
                    >
                      提出形式
                    </Text>
                    <Flex color='black' direction='column'>
                      {projectItem2.formats?.map((f) => (
                        <Text key={f.id}>{f.text}</Text>
                      ))}
                    </Flex>
                  </Flex>
                </>
              )}
              {doneIndex === 1 && (
                <>
                  <Flex direction='column'>
                    <Flex
                      h='240px'
                      w='100%'
                      borderRadius='lg'
                      boxShadow='lg'
                      mb='16px'
                      borderWidth='1px'
                      borderColor='gray.200'
                    >
                      <Flex w='50%' position='relative'>
                        <Image
                          w='100%'
                          bg='gray.600'
                          alt=''
                          borderLeftRadius='lg'
                          src={projectItem2.thumbnail}
                          objectFit='cover'
                        />
                        <Text
                          fontSize='56px'
                          position='absolute'
                          top='-3'
                          left='8'
                        >
                          🥇
                        </Text>
                      </Flex>
                      <Flex
                        direction='column'
                        p='16px 12px'
                        alignItems='center'
                        w='50%'
                        justifyContent='center'
                        borderColor='gray.200'
                      >
                        <Flex direction='column'>
                          <Text
                            fontSize='18px'
                            fontWeight='bold'
                            mb='8px'
                            onClick={() => router.push(`/projects/1/works/1`)}
                            cursor='pointer'
                          >
                            メモをするアプリ
                          </Text>
                          <HStack mb='48px'>
                            <Flex
                              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                              p='2px'
                              borderRadius='full'
                              alignItems='center'
                              justifyContent='center'
                            >
                              <HStack
                                borderRadius='full'
                                bg='white'
                                alignItems='center'
                                justifyContent='center'
                                p='4px 8px'
                              >
                                <Image
                                  w='16px'
                                  h='16px'
                                  src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                  alt=''
                                />
                                <Text bg='white' fontSize='12px'>
                                  Next.js
                                </Text>
                              </HStack>
                            </Flex>
                            <Flex
                              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                              p='2px'
                              borderRadius='full'
                              alignItems='center'
                              justifyContent='center'
                            >
                              <HStack
                                borderRadius='full'
                                bg='white'
                                alignItems='center'
                                justifyContent='center'
                                p='4px 8px'
                              >
                                <Image
                                  w='16px'
                                  h='16px'
                                  src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                  alt=''
                                />
                                <Text bg='white' fontSize='12px'>
                                  TypeScript
                                </Text>
                              </HStack>
                            </Flex>
                            <Flex
                              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                              p='2px'
                              borderRadius='full'
                              alignItems='center'
                              justifyContent='center'
                            >
                              <HStack
                                borderRadius='full'
                                bg='white'
                                alignItems='center'
                                justifyContent='center'
                                p='4px 8px'
                              >
                                <Image
                                  w='16px'
                                  h='16px'
                                  src='https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png'
                                  alt=''
                                />
                                <Text bg='white' fontSize='12px'>
                                  Firebase
                                </Text>
                              </HStack>
                            </Flex>
                          </HStack>
                          <HStack spacing='4px'>
                            <Avatar w='20px' h='20px' />
                            <Text fontSize='12px'>やまもとみずき</Text>
                          </HStack>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex direction='column'>
                      <HStack w='100%' spacing='16px' mb='16px'>
                        <Flex
                          w='50%'
                          borderRadius='lg'
                          boxShadow='lg'
                          direction='column'
                          borderColor='gray.200'
                        >
                          <Flex w='100%' position='relative'>
                            <Image
                              w='100%'
                              bg='gray.600'
                              alt=''
                              borderTopRadius='lg'
                              h='180px'
                              src={projectItem2.thumbnail}
                              objectFit='cover'
                            />
                            <Text
                              fontSize='56px'
                              position='absolute'
                              top='-3'
                              left='8'
                            >
                              🥈
                            </Text>
                          </Flex>
                          <Flex
                            direction='column'
                            p='16px 16px'
                            alignItems='center'
                            justifyContent='center'
                          >
                            <Flex direction='column' justifyContent='center'>
                              <Text fontSize='18px' fontWeight='bold' mb='4px'>
                                位置を共有するアプリ
                              </Text>
                              <HStack mb='24px'>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      Next.js
                                    </Text>
                                  </HStack>
                                </Flex>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      TypeScript
                                    </Text>
                                  </HStack>
                                </Flex>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      Firebase
                                    </Text>
                                  </HStack>
                                </Flex>
                              </HStack>
                              <HStack spacing='4px'>
                                <Avatar w='20px' h='20px' />
                                <Text fontSize='12px'>やまもとみずき</Text>
                              </HStack>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          w='50%'
                          borderRadius='lg'
                          boxShadow='lg'
                          direction='column'
                          borderColor='gray.200'
                        >
                          <Flex w='100%' position='relative'>
                            <Image
                              w='100%'
                              bg='gray.600'
                              alt=''
                              borderTopRadius='lg'
                              h='180px'
                              src={projectItem2.thumbnail}
                              objectFit='cover'
                            />
                            <Text
                              fontSize='56px'
                              position='absolute'
                              top='-3'
                              left='8'
                            >
                              🥉
                            </Text>
                          </Flex>
                          <Flex
                            direction='column'
                            p='16px 16px'
                            alignItems='center'
                            justifyContent='center'
                          >
                            <Flex direction='column' justifyContent='center'>
                              <Text fontSize='18px' fontWeight='bold' mb='4px'>
                                予約をするアプリ
                              </Text>
                              <HStack mb='24px'>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      Next.js
                                    </Text>
                                  </HStack>
                                </Flex>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      TypeScript
                                    </Text>
                                  </HStack>
                                </Flex>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      Firebase
                                    </Text>
                                  </HStack>
                                </Flex>
                              </HStack>
                              <HStack spacing='4px'>
                                <Avatar w='20px' h='20px' />
                                <Text fontSize='12px'>やまもとみずき</Text>
                              </HStack>
                            </Flex>
                          </Flex>
                        </Flex>
                      </HStack>
                      <HStack w='100%' spacing='16px'>
                        <Flex
                          w='50%'
                          borderRadius='lg'
                          boxShadow='lg'
                          direction='column'
                          borderColor='gray.200'
                        >
                          <Flex w='100%' position='relative'>
                            <Image
                              w='100%'
                              bg='gray.600'
                              alt=''
                              borderTopRadius='lg'
                              h='180px'
                              src={projectItem2.thumbnail}
                              objectFit='cover'
                            />
                            <Center
                              fontSize='22px'
                              position='absolute'
                              top='4'
                              left='8'
                              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                              w='40px'
                              h='40px'
                              borderRadius='full'
                              color='white'
                            >
                              <Text fontWeight='bold'>4</Text>
                            </Center>
                          </Flex>
                          <Flex
                            direction='column'
                            p='16px 16px'
                            alignItems='center'
                            justifyContent='center'
                          >
                            <Flex direction='column' justifyContent='center'>
                              <Text fontSize='18px' fontWeight='bold' mb='4px'>
                                ショッピングをするアプリ
                              </Text>
                              <HStack mb='24px'>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      Next.js
                                    </Text>
                                  </HStack>
                                </Flex>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      TypeScript
                                    </Text>
                                  </HStack>
                                </Flex>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      Firebase
                                    </Text>
                                  </HStack>
                                </Flex>
                              </HStack>
                              <HStack spacing='4px'>
                                <Avatar w='20px' h='20px' />
                                <Text fontSize='12px'>やまもとみずき</Text>
                              </HStack>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          w='50%'
                          borderRadius='lg'
                          boxShadow='lg'
                          direction='column'
                          borderColor='gray.200'
                        >
                          <Flex w='100%' position='relative'>
                            <Image
                              w='100%'
                              bg='gray.600'
                              alt=''
                              borderTopRadius='lg'
                              h='180px'
                              src={projectItem2.thumbnail}
                              objectFit='cover'
                            />
                            <Center
                              fontSize='22px'
                              position='absolute'
                              top='4'
                              left='8'
                              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                              w='40px'
                              h='40px'
                              borderRadius='full'
                              color='white'
                            >
                              <Text fontWeight='bold'>5</Text>
                            </Center>
                          </Flex>
                          <Flex
                            direction='column'
                            p='16px 16px'
                            alignItems='center'
                            justifyContent='center'
                          >
                            <Flex direction='column' justifyContent='center'>
                              <Text fontSize='18px' fontWeight='bold' mb='4px'>
                                新しい友達を作るアプリ
                              </Text>
                              <HStack mb='24px'>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      Next.js
                                    </Text>
                                  </HStack>
                                </Flex>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      TypeScript
                                    </Text>
                                  </HStack>
                                </Flex>
                                <Flex
                                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                  p='2px'
                                  borderRadius='full'
                                  alignItems='center'
                                  justifyContent='center'
                                >
                                  <HStack
                                    borderRadius='full'
                                    bg='white'
                                    alignItems='center'
                                    justifyContent='center'
                                    p='4px 8px'
                                  >
                                    <Image
                                      w='16px'
                                      h='16px'
                                      src='https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png'
                                      alt=''
                                    />
                                    <Text bg='white' fontSize='12px'>
                                      Firebase
                                    </Text>
                                  </HStack>
                                </Flex>
                              </HStack>
                              <HStack spacing='4px'>
                                <Avatar w='20px' h='20px' />
                                <Text fontSize='12px'>やまもとみずき</Text>
                              </HStack>
                            </Flex>
                          </Flex>
                        </Flex>
                      </HStack>
                    </Flex>
                    <Flex w='100%' h='1px' bg='gray.200' my='32px' />
                    <Flex direction='column'>
                      <HStack w='100%' spacing='16px' mb='16px'>
                        <Flex
                          w='33%'
                          borderRadius='lg'
                          boxShadow='lg'
                          borderColor='gray.200'
                          direction='column'
                        >
                          <Image
                            w='100%'
                            bg='gray.600'
                            alt=''
                            borderTopRadius='lg'
                            h='122px'
                            src={projectItem2.thumbnail}
                            objectFit='cover'
                          />
                          <Flex direction='column' p='16px 12px'>
                            <Text fontWeight='bold' mb='4px'>
                              筋トレが楽しくなってもりもりもり
                            </Text>
                            <HStack>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    Next.js
                                  </Text>
                                </HStack>
                              </Flex>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    TypeScript
                                  </Text>
                                </HStack>
                              </Flex>
                            </HStack>
                          </Flex>
                        </Flex>
                        <Flex
                          w='33%'
                          borderRadius='lg'
                          boxShadow='lg'
                          borderColor='gray.200'
                          direction='column'
                        >
                          <Image
                            w='100%'
                            bg='gray.600'
                            alt=''
                            borderTopRadius='lg'
                            h='122px'
                            src={projectItem2.thumbnail}
                            objectFit='cover'
                          />
                          <Flex direction='column' p='16px 12px'>
                            <Text fontWeight='bold' mb='4px'>
                              筋トレが楽しくなってもりもりもり
                            </Text>
                            <HStack>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    Next.js
                                  </Text>
                                </HStack>
                              </Flex>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    TypeScript
                                  </Text>
                                </HStack>
                              </Flex>
                            </HStack>
                          </Flex>
                        </Flex>
                        <Flex
                          w='33%'
                          borderRadius='lg'
                          boxShadow='lg'
                          borderColor='gray.200'
                          direction='column'
                        >
                          <Image
                            w='100%'
                            bg='gray.600'
                            alt=''
                            borderTopRadius='lg'
                            h='122px'
                            src={projectItem2.thumbnail}
                            objectFit='cover'
                          />
                          <Flex direction='column' p='16px 12px'>
                            <Text fontWeight='bold' mb='4px'>
                              筋トレが楽しくなってもりもりもり
                            </Text>
                            <HStack>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    Next.js
                                  </Text>
                                </HStack>
                              </Flex>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    TypeScript
                                  </Text>
                                </HStack>
                              </Flex>
                            </HStack>
                          </Flex>
                        </Flex>
                      </HStack>
                      <HStack w='100%' spacing='16px' mb='16px'>
                        <Flex
                          w='33%'
                          borderRadius='lg'
                          boxShadow='lg'
                          borderColor='gray.200'
                          direction='column'
                        >
                          <Image
                            w='100%'
                            bg='gray.600'
                            alt=''
                            borderTopRadius='lg'
                            h='122px'
                            src={projectItem2.thumbnail}
                            objectFit='cover'
                          />
                          <Flex direction='column' p='16px 12px'>
                            <Text fontWeight='bold' mb='4px'>
                              筋トレが楽しくなってもりもりもり
                            </Text>
                            <HStack>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    Next.js
                                  </Text>
                                </HStack>
                              </Flex>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    TypeScript
                                  </Text>
                                </HStack>
                              </Flex>
                            </HStack>
                          </Flex>
                        </Flex>
                        <Flex
                          w='33%'
                          borderRadius='lg'
                          boxShadow='lg'
                          borderColor='gray.200'
                          direction='column'
                        >
                          <Image
                            w='100%'
                            bg='gray.600'
                            alt=''
                            borderTopRadius='lg'
                            h='122px'
                            src={projectItem2.thumbnail}
                            objectFit='cover'
                          />
                          <Flex direction='column' p='16px 12px'>
                            <Text fontWeight='bold' mb='4px'>
                              筋トレが楽しくなってもりもりもり
                            </Text>
                            <HStack>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    Next.js
                                  </Text>
                                </HStack>
                              </Flex>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    TypeScript
                                  </Text>
                                </HStack>
                              </Flex>
                            </HStack>
                          </Flex>
                        </Flex>
                        <Flex
                          w='33%'
                          borderRadius='lg'
                          boxShadow='lg'
                          borderColor='gray.200'
                          direction='column'
                        >
                          <Image
                            w='100%'
                            bg='gray.600'
                            alt=''
                            borderTopRadius='lg'
                            h='122px'
                            src={projectItem2.thumbnail}
                            objectFit='cover'
                          />
                          <Flex direction='column' p='16px 12px'>
                            <Text fontWeight='bold' mb='4px'>
                              筋トレが楽しくなってもりもりもり
                            </Text>
                            <HStack>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    Next.js
                                  </Text>
                                </HStack>
                              </Flex>
                              <Flex
                                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                                p='2px'
                                borderRadius='full'
                                alignItems='center'
                                justifyContent='center'
                              >
                                <HStack
                                  borderRadius='full'
                                  bg='white'
                                  alignItems='center'
                                  justifyContent='center'
                                  p='4px 8px'
                                >
                                  <Image
                                    w='16px'
                                    h='16px'
                                    src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                                    alt=''
                                  />
                                  <Text bg='white' fontSize='12px'>
                                    TypeScript
                                  </Text>
                                </HStack>
                              </Flex>
                            </HStack>
                          </Flex>
                        </Flex>
                      </HStack>
                    </Flex>
                  </Flex>
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export default DetailProject
