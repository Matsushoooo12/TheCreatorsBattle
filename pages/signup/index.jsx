import { Flex, HStack, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { MdFacebook } from 'react-icons/md'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import GradientIcon from '../../components/atoms/GradientIcon';
import { useRouter } from 'next/router';

const SignUp = () => {
    const router = useRouter()
    const sx = { fill: "url(#linearColors)", fontSize: 20 }
  return (
    <>
        <Text mb="8px" fontSize="42px" fontWeight="bold" color="blue.800">Signup</Text>
        <Flex w="120px" h="4px" bgGradient="linear(to-b, #7CAAFF, #8D85F4)" mb="56px" />
        <Flex color="black" alignItems="center" fontWeight="bold" direction="column" mb="28px">
            <Flex alignItems="center">
                <Text>はじめまして！</Text>
                <Image cursor="pointer" onClick={() => router.push('/')} mx="2px" mb="4px" h="16px" src="https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png" alt="" />
                <Text>へようこそ！</Text>
            </Flex>
            <Text mb="24px">あなたの可能性をもっと広げていきましょう✨</Text>
            <Text>どちらの方法で、アカウントを作成しますか？</Text>
        </Flex>
        <HStack spacing="14px" mb="60px">
            <Icon w="34px" h="34px" as={AiFillGithub} color="blue.400" />
            <Icon w="34px" h="34px" as={MdFacebook} color="blue.400" />
            <Icon
                w="34px"
                h="34px"
                as={AiFillTwitterCircle}
                color="blue.400"
            />
            <Icon
                w="34px"
                h="34px"
                as={AiFillTwitterCircle}
                color="blue.400"
            />
            <Icon
                w="34px"
                h="34px"
                as={AiFillTwitterCircle}
                color="blue.400"
            />
        </HStack>
        <Text color="black" fontWeight="bold" mb="18px">もしかして、すでにアカウントをお持ちですか？</Text>
        <HStack spacing="2px" bgGradient="linear(to-b, #7CAAFF, #8D85F4)" bgClip="text" alignItems="center" cursor="pointer" onClick={() => router.push('/signin')}>
            <Text fontSize="14px" fontWeight="bold">ログイン</Text>
            <GradientIcon>
                <ArrowCircleRightOutlinedIcon sx={sx} />
            </GradientIcon>
        </HStack>
    </>
  )
}

export default SignUp