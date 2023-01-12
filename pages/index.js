import { Flex, Image, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import DashboardContainer from '../components/templates/DashboardContainer'
import TopContainer from '../components/templates/TopContainer'
import { AuthContext } from './_app'

export default function Home() {
  const { isLogin } = useContext(AuthContext)
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
          <Flex direction='column' fontSize='18px' fontWeight='bold'>
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Text>
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Text>
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Text>
            <Text
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
            >
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </Text>
          </Flex>
        </TopContainer>
      )}
    </>
  )
}
