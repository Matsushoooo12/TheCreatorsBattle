import { Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import ArrowLink from '../components/atoms/ArrowLink'
import PrimaryButton from '../components/atoms/PrimaryButton'
import DashboardContainer from '../components/templates/DashboardContainer'
import TopContainer from '../components/templates/TopContainer'
import { AuthContext } from './_app'

export default function Home() {
  const { isLogin } = useContext(AuthContext)
  const router = useRouter()
  return (
    <>
      {isLogin ? (
        <DashboardContainer />
      ) : (
        <TopContainer>
          <Image
            mb='56px'
            objectFit='cover'
            w='418px'
            h='45px'
            src='https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png'
            alt=''
          />
          <Text
            mb='16px'
            fontSize='42px'
            fontWeight='bold'
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            bgClip='text'
          >
            クリエイターの頂きへの挑戦状
          </Text>
          <Flex
            direction='column'
            fontSize='18px'
            fontWeight='bold'
            mb='56px'
            alignItems='center'
          >
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              クリエイターとして成長したい。クリエイターとしての自分の実力を把握したい。
            </Text>
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              そして、<span style={{ fontSize: '22px' }}>新しいもの</span>
              を生み出してお金を稼ぎたい。
            </Text>
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              それを全て叶えるのが
              <span style={{ fontSize: '22px' }}>「競争」</span>と
              <span style={{ fontSize: '22px' }}>「協力」</span>である。
            </Text>
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              本気で取り組むための仕組みがそこには詰まっている。
            </Text>
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              さあ、<span style={{ fontSize: '22px' }}>クリエイターの頂上</span>
              へ登り詰めよう！
            </Text>
          </Flex>
          <PrimaryButton onClick={() => router.push('/signup')} mb='26px'>
            はじめてみる
          </PrimaryButton>
          <ArrowLink
            text='アカウントをお持ちの方'
            onClick={() => router.push('/signin')}
          />
        </TopContainer>
      )}
    </>
  )
}
