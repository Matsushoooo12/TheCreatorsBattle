import React from 'react'
/* eslint-disable react/no-children-prop */
import {
  AspectRatio,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import BackArrowTitle from '../../../../components/atoms/BackArrowTitle'
import { useRouter } from 'next/router'
import { AiFillCamera } from 'react-icons/ai'
import PrimaryButton from '../../../../components/atoms/PrimaryButton'

const EditWorks = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Flex direction='column' py='56px' px='80px'>
      <Flex justifyContent='space-between' alignItems='center' mb='16px'>
        <BackArrowTitle
          text='ユーザー詳細'
          onClick={() => router.push(`/users/${id}`)}
        />
        <Flex alignItems='center'>
          <Text
            p='12px'
            bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
            bgClip='text'
            borderRadius='md'
            cursor='pointer'
            fontSize='14px'
          >
            下書きを保存する
          </Text>
          <PrimaryButton>公開する</PrimaryButton>
        </Flex>
      </Flex>
      <Flex
        w='100%'
        h='80vh'
        bg='white'
        p='24px'
        borderRadius='lg'
        direction='column'
        overflowX='scroll'
      >
        <Flex alignItems='center' mb='8px'>
          <Input
            fontWeight='bold'
            fontSize='12px'
            focusBorderColor='gray.400'
            borderColor='gray.400'
            placeholder='作品のカテゴリ：ウェブアプアプリ、ウェブデザイン、など！'
            _placeholder={{ color: 'gray.400' }}
          />
        </Flex>
        <Input
          size='lg'
          placeholder='タイトル'
          color='blue.800'
          fontWeight='bold'
          fontSize='22px'
          _placeholder={{ color: 'gray.400' }}
          focusBorderColor='gray.400'
          borderColor='gray.400'
          mb='16px'
          p='16px'
        />
        <Flex
          w='100%'
          h='385px'
          borderRadius='lg'
          bg='blackAlpha.100'
          border='1px solid #CBD5E0'
          borderColor='gray.400'
          justifyContent='center'
          alignItems='center'
          cursor='pointer'
          mb='32px'
          direction='column'
          py='145px'
        >
          <Flex
            direction='column'
            justifyContent='center'
            alignItems='center'
            h='100%'
          >
            <Icon
              as={AiFillCamera}
              fontSize='40px'
              color='gray.400'
              mb='10px'
            />
            <Text
              p='2px 8px'
              bg='gray.400'
              color='white'
              fontSize='12px'
              mb='8px'
            >
              + 画像を選択
            </Text>
            <Text fontSize='8px' color='gray.400'>
              またはドラッグ&ドロップで追加
            </Text>
          </Flex>
        </Flex>
        <Flex direction='column' mb='32px'>
          <Text fontSize='12px' fontWeight='bold' mb='8px' color='gray.400'>
            作品URL
          </Text>
          <Input
            fontSize='14px'
            borderColor='gray.400'
            focusBorderColor='gray.400'
            placeholder='URL'
            _placeholder={{ color: 'gray.400' }}
            variant='flushed'
          />
        </Flex>
        <Flex mb='32px'>
          <Textarea
            fontSize='14px'
            borderColor='gray.400'
            focusBorderColor='gray.400'
            placeholder='本文：作品の概要やビジュアル、制作ストーリーなどなんでも残してみましょう！'
            _placeholder={{ color: 'gray.400' }}
            h='500px'
          />
        </Flex>
        <Flex>
          <Input
            fontSize='14px'
            focusBorderColor='gray.400'
            borderColor='gray.400'
            placeholder='使用技術タグを追加する'
            _placeholder={{ color: 'gray.400' }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default EditWorks
