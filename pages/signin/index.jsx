import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useRouter } from 'next/router'
import GithubButtonIcon from '../../components/atoms/GithubButtonIcon'
import MailButtonIcon from '../../components/atoms/MailButtonIcon'
import FacebookButtonIcon from '../../components/atoms/FacebookButtonIcon'
import TwitterButtonIcon from '../../components/atoms/TwitterButtonIcon'
import GoogleButtonIcon from '../../components/atoms/GoogleButtonIcon'
import GradientIcon from '../../components/atoms/GradientIcon'
import WaveContainer from '../../components/organisms/WaveContainer'
import TopContainer from '../../components/templates/TopContainer'
import { useOAuthLogin } from '../../hooks/useOAuthLogin'
import ArrowLink from '../../components/atoms/ArrowLink'

const SignIn = () => {
  const router = useRouter()
  const sx = { fill: 'url(#linearColors)', fontSize: 20 }
  const { googleLogin } = useOAuthLogin()
  return (
    <TopContainer>
      <Text mb='8px' fontSize='42px' fontWeight='bold' color='blue.800'>
        Login
      </Text>
      <Flex
        w='120px'
        h='4px'
        bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
        mb='56px'
      />
      <Flex
        color='black'
        alignItems='center'
        fontWeight='bold'
        direction='column'
        mb='28px'
      >
        <Flex alignItems='center' mb='24px'>
          <Text>おかえりなさい！</Text>
          <Image
            cursor='pointer'
            onClick={() => router.push('/')}
            mx='2px'
            h='16px'
            src='https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png'
            alt=''
          />
          <Text>の扉を開きましょう✨</Text>
        </Flex>
        <Text>どちらの方法で、アカウントを作成しますか？</Text>
      </Flex>
      <HStack spacing='14px' mb='60px'>
        <GithubButtonIcon />
        <MailButtonIcon onClick={() => router.push('/signin/new')} />
        <FacebookButtonIcon />
        <TwitterButtonIcon />
        <GoogleButtonIcon onClick={googleLogin} />
      </HStack>
      <Text color='black' fontWeight='bold' mb='18px'>
        まだアカウントをお持ちではないですか？
      </Text>
      <ArrowLink text='サインアップ' onClick={() => router.push('/signup')} />
    </TopContainer>
  )
}

export default SignIn
