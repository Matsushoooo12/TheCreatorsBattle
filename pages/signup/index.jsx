import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useRouter } from 'next/router'
import GithubButtonIcon from '../../components/atoms/GithubButtonIcon'
import MailButtonIcon from '../../components/atoms/MailButtonIcon'
import FacebookButtonIcon from '../../components/atoms/FacebookButtonIcon'
import TwitterButtonIcon from '../../components/atoms/TwitterButtonIcon'
import GoogleButtonIcon from '../../components/atoms/GoogleButtonIcon'
import GradientIcon from '../../components/atoms/GradientIcon'
import WaveContainer from '../../components/organisms/WaveContainer'
import dayjs from 'dayjs'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { auth, db, googleProvider } from '../../firebase/config'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { AuthContext } from '../_app'
import TopContainer from '../../components/templates/TopContainer'
import { useOAuthLogin } from '../../hooks/useOAuthLogin'

const SignUp = () => {
  const router = useRouter()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { setIsLoading } = useContext(AuthContext)
  const sx = { fill: 'url(#linearColors)', fontSize: 20 }
  const { googleLogin, errorMessage } = useOAuthLogin()
  useEffect(() => {
    if (errorMessage) {
      onClose
    } else {
      return
    }
  }, [errorMessage, onClose])
  return (
    <>
      {errorMessage && (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>{errorMessage}</AlertTitle>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      )}
      <TopContainer>
        <Text mb='8px' fontSize='42px' fontWeight='bold' color='blue.800'>
          Signup
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
          <Flex alignItems='center'>
            <Text>はじめまして！</Text>
            <Image
              cursor='pointer'
              onClick={() => router.push('/')}
              mx='2px'
              mb='4px'
              h='16px'
              src='https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png'
              alt=''
            />
            <Text>へようこそ！</Text>
          </Flex>
          <Text mb='24px'>あなたの可能性をもっと広げていきましょう✨</Text>
          <Text>どちらの方法で、アカウントを作成しますか？</Text>
        </Flex>
        <HStack spacing='14px' mb='60px'>
          <GithubButtonIcon />
          <MailButtonIcon onClick={() => router.push('/signup/new')} />
          <FacebookButtonIcon />
          <TwitterButtonIcon />
          <GoogleButtonIcon onClick={googleLogin} />
        </HStack>
        <Text color='black' fontWeight='bold' mb='18px'>
          もしかして、すでにアカウントをお持ちですか？
        </Text>
        <HStack
          spacing='2px'
          bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
          bgClip='text'
          alignItems='center'
          cursor='pointer'
          onClick={() => router.push('/signin')}
        >
          <Text fontSize='14px' fontWeight='bold'>
            ログイン
          </Text>
          <GradientIcon>
            <ArrowCircleRightOutlinedIcon sx={sx} />
          </GradientIcon>
        </HStack>
      </TopContainer>
    </>
  )
}

export default SignUp
