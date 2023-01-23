import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import BackArrowTitle from '../../../components/atoms/BackArrowTitle'
import { useGetStatus } from '../../../hooks/useGetStatus'
import { AuthContext } from '../../_app'

const projectItem1 = {
  id: 1,
  status: 'recruitment',
  title: 'ビデオを編集するアプリ',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  thumbnail:
    'https://user-images.githubusercontent.com/66903388/213907356-d816a314-b81e-47bb-8792-e3d657d71034.jpg',
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
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
  title: '電子書籍を読むアプリ',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  thumbnail:
    'https://user-images.githubusercontent.com/66903388/213907356-d816a314-b81e-47bb-8792-e3d657d71034.jpg',
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
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
  title: 'タスクを管理するアプリ',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  thumbnail:
    'https://user-images.githubusercontent.com/66903388/213907356-d816a314-b81e-47bb-8792-e3d657d71034.jpg',
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
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
  title: '旅行を計画するアプリ',
  categories: ['UI/UXデザイン', 'ウェブアプリ'],
  thumbnail:
    'https://user-images.githubusercontent.com/66903388/213907356-d816a314-b81e-47bb-8792-e3d657d71034.jpg',
  summary:
    '未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？\nいま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。\nもしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。',
  recommendation:
    'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
  rule: 'はじめまして、まつもとです。。普段はとあるSaas企業でデザインエンジニアをしています。\n将来は、個人開発をしていきたいです。。野菜社主催 きゅうりハッカソン優勝。',
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
      <BackArrowTitle
        onClick={() => router.push('/users/1')}
        text='ユーザー詳細'
      />
      <Flex w='100%' bg='white' p='24px' borderRadius='lg' direction='column'>
        <Flex alignItems='center' mb='8px'>
          <Text fontWeight='bold' fontSize='12px' color='gray.400'>
            {/* {projectItem3.categories?.map((c, index) =>
              index === 0 ? c : `・${c}`,
            )} */}
            ネイティブアプリ
          </Text>
        </Flex>
        <Heading color='blue.800' fontSize='22px' mb='32px'>
          フォントを選ぶアプリ
        </Heading>
        <Image
          w='100%'
          h='385px'
          bg='gray.400'
          alt=''
          borderRadius='lg'
          mb='32px'
          src='https://user-images.githubusercontent.com/66903388/213907356-d816a314-b81e-47bb-8792-e3d657d71034.jpg'
        />
        <Flex direction='column' mb='32px'>
          <Text fontSize='12px' fontWeight='bold' mb='8px'>
            作品URL
          </Text>
          <Text
            bgClip='text'
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            fontSize='14px'
          >
            http://wwjhdsfhshfl.com
          </Text>
        </Flex>
        {/* テキストエリア */}
        <Flex direction='column' fontSize='14px' mb='32px'>
          <Text>
            ビールが大好きで自分で輸入したものを販売してみたくて、作成しました！
          </Text>
          <Text mb='16px'>
            エンジニア、PM、デザイナーの友達４人でも共同制作です。
          </Text>
          <Text mb='16px'>使用言語：react / </Text>
          <Text>触ってみたい方はこちら → https/gkhghasgvabvjdbvkasef</Text>
        </Flex>
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
      </Flex>
    </Flex>
  )
}

export default DetailWorks
