import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useGetStatus } from '../../../hooks/useGetStatus'

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
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
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
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
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
  title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
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

const DetailWorks = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Flex direction='column' py='56px' px='80px'>
      <Flex w='100%' bg='white' p='24px' borderRadius='lg' direction='column'>
        <Image
          w='100%'
          h='385px'
          bg='gray.400'
          alt=''
          borderRadius='lg'
          mb='32px'
        />
        <Flex alignItems='center' mb='8px'>
          <Text fontWeight='bold' fontSize='12px' color='gray.400'>
            {projectItem3.categories?.map((c, index) =>
              index === 0 ? c : `・${c}`,
            )}
          </Text>
        </Flex>
        <HStack mb='8px'>
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
              p='1px 6px'
            >
              <Image
                w='16px'
                h='16px'
                src='https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png'
                alt=''
              />
              <Text bg='white' fontSize='12px' fontWeight='bold'>
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
              p='1px 6px'
            >
              <Image
                w='16px'
                h='16px'
                src='https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png'
                alt=''
              />
              <Text bg='white' fontSize='12px' fontWeight='bold'>
                Firebase
              </Text>
            </HStack>
          </Flex>
        </HStack>
        <Heading color='blue.800' fontSize='22px' mb='32px'>
          {projectItem3.title}
        </Heading>
        <Flex color='black' mb='32px' direction='column'>
          <Text>{projectItem3.summary}</Text>
        </Flex>
        <Flex direction='column' mb='32px'>
          <Text fontSize='18px' fontWeight='bold' color='blue.800' mb='10px'>
            参加におすすめな人
          </Text>
          <Flex color='black' direction='column'>
            <Text>{projectItem3.recommendation}</Text>
          </Flex>
        </Flex>
        <Flex direction='column' mb='32px'>
          <Text fontSize='18px' fontWeight='bold' color='blue.800' mb='10px'>
            ルール
          </Text>
          <Flex color='black' direction='column'>
            <Text>{projectItem3.rule}</Text>
          </Flex>
        </Flex>
        <Flex direction='column'>
          <Text fontSize='18px' fontWeight='bold' color='blue.800' mb='10px'>
            提出形式
          </Text>
          <Flex color='black' direction='column'>
            {projectItem3.formats?.map((f) => (
              <Text key={f.id}>{f.text}</Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DetailWorks
