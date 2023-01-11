import { Flex, HStack, Image, Text } from '@chakra-ui/react'
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

const SignUp = () => {
  const router = useRouter()
  const { setIsLoading } = useContext(AuthContext)
  const sx = { fill: 'url(#linearColors)', fontSize: 20 }
  const now = dayjs().format()
  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        const querySnapshot = await getDocs(collection(db, 'users'))
        const user = []
        querySnapshot.forEach((doc) => {
          user.push(doc.id)
        })
        if (!user.includes(res.user.uid)) {
          await setDoc(doc(db, 'users', res.user.uid), {
            displayName: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL,
            createdAt: now,
          })
            .then(() => {
              router.push('/')
            })
            .catch((e) => {
              console.log(e)
            })
        }
        router.push('/')
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      position="relative"
    >
      <Text mb="8px" fontSize="42px" fontWeight="bold" color="blue.800">
        Signup
      </Text>
      <Flex
        w="120px"
        h="4px"
        bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
        mb="56px"
      />
      <Flex
        color="black"
        alignItems="center"
        fontWeight="bold"
        direction="column"
        mb="28px"
      >
        <Flex alignItems="center">
          <Text>はじめまして！</Text>
          <Image
            cursor="pointer"
            onClick={() => router.push('/')}
            mx="2px"
            mb="4px"
            h="16px"
            src="https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png"
            alt=""
          />
          <Text>へようこそ！</Text>
        </Flex>
        <Text mb="24px">あなたの可能性をもっと広げていきましょう✨</Text>
        <Text>どちらの方法で、アカウントを作成しますか？</Text>
      </Flex>
      <HStack spacing="14px" mb="60px">
        <GithubButtonIcon />
        <MailButtonIcon onClick={() => router.push('/signup/new')} />
        <FacebookButtonIcon />
        <TwitterButtonIcon />
        <GoogleButtonIcon onClick={googleLogin} />
      </HStack>
      <Text color="black" fontWeight="bold" mb="18px">
        もしかして、すでにアカウントをお持ちですか？
      </Text>
      <HStack
        spacing="2px"
        bgGradient="linear(to-b, mainGradient.100, mainGradient.200)"
        bgClip="text"
        alignItems="center"
        cursor="pointer"
        onClick={() => router.push('/signin')}
      >
        <Text fontSize="14px" fontWeight="bold">
          ログイン
        </Text>
        <GradientIcon>
          <ArrowCircleRightOutlinedIcon sx={sx} />
        </GradientIcon>
      </HStack>
      <WaveContainer />
    </Flex>
  )
}

export default SignUp
