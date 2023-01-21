import {
  Flex,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiFillCamera, AiOutlineDoubleRight } from 'react-icons/ai'
import BackArrowTitle from '../../../components/atoms/BackArrowTitle'
import PrimaryButton from '../../../components/atoms/PrimaryButton'
import ModalCard from '../../../components/molecules/ModalCard'

const CreateQuestion = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [restPoint, setRestPoint] = useState(5000)
  const [givePoint, setGivePoint] = useState(0)
  const handleSubmit = () => {
    onOpen()
  }
  const handleClose = () => {
    onClose()
  }
  const handlePointChange = (e) => {
    if (restPoint > givePoint) {
      setGivePoint(e.target.value)
      setRestPoint(5000 - e.target.value)
    } else {
      setGivePoint(0)
      setRestPoint(5000)
    }
  }
  return (
    <>
      <Flex direction='column' py='56px' px='80px'>
        <Flex justifyContent='space-between' alignItems='center' mb='16px'>
          <BackArrowTitle
            text='質問箱一覧'
            onClick={() => router.push('/questions')}
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
            <PrimaryButton onClick={handleSubmit}>公開する</PrimaryButton>
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
            placeholder='質問タイトル'
            color='blue.800'
            fontWeight='bold'
            fontSize='22px'
            _placeholder={{ color: 'gray.400' }}
            focusBorderColor='gray.400'
            borderColor='gray.400'
            mb='16px'
            p='16px'
          />
          <Flex direction='column' mb='32px'>
            <Text fontSize='12px' fontWeight='bold' mb='8px' color='gray.400'>
              参考URL
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
              placeholder='本文：質問内容を書いてみよう！'
              _placeholder={{ color: 'gray.400' }}
              h='360px'
            />
          </Flex>
          <Flex mb='32px'>
            <Input
              fontSize='14px'
              focusBorderColor='gray.400'
              borderColor='gray.400'
              placeholder='使用技術タグを追加する'
              _placeholder={{ color: 'gray.400' }}
            />
          </Flex>
          <HStack spacing='24px'>
            <Flex direction='column'>
              <Text fontSize='12px' fontWeight='bold' mb='8px' color='gray.400'>
                自分の残ポイント
              </Text>
              <Input
                readOnly
                fontSize='14px'
                borderColor='gray.400'
                focusBorderColor='gray.400'
                _placeholder={{ color: 'gray.400' }}
                w='100px'
                type='number'
                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                bgClip='text'
                fontWeight='bold'
                value={restPoint}
              />
            </Flex>
            <Icon fontSize='24px' color='gray.400' as={AiOutlineDoubleRight} />
            <Flex direction='column'>
              <Text fontSize='12px' fontWeight='bold' mb='8px' color='gray.400'>
                支払いポイント
              </Text>
              <Input
                fontSize='14px'
                borderColor='gray.400'
                focusBorderColor='gray.400'
                _placeholder={{ color: 'gray.400' }}
                w='100px'
                type='number'
                value={givePoint}
                onChange={(e) => handlePointChange(e)}
              />
            </Flex>
          </HStack>
        </Flex>
      </Flex>
      <ModalCard
        cancelButtonText='閉じる'
        title='質問を投稿しました'
        titleEmoji='🎉'
        isOpen={isOpen}
        onClose={handleClose}
        size='lg'
      >
        <Flex direction='column' color='black' fontWeight='bold'>
          <Text>開発お疲れさま！</Text>
          <Text>回答が帰ってくるまで、一息ついてみる？</Text>
        </Flex>
      </ModalCard>
    </>
  )
}

export default CreateQuestion
