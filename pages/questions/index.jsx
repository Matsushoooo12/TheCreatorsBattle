import { SearchIcon } from '@chakra-ui/icons'
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import TabItem from '../../components/atoms/TabItem'
import ModalCard from '../../components/molecules/ModalCard'
import NewCreateCard from '../../components/molecules/NewCreateCard'
import TabItems from '../../components/molecules/TabItems'

const allList = [
  {
    id: 1,
    content: 'すべてです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
  {
    id: 2,
    content: 'すべてです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
  {
    id: 3,
    content: 'すべてです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
  {
    id: 4,
    content: 'すべてです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
]

const doneList = [
  {
    id: 1,
    content: '解決済みです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
  {
    id: 2,
    content: '解決済みです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
  {
    id: 3,
    content: '解決済みです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
  {
    id: 4,
    content: '解決済みです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
]

const waitList = [
  {
    id: 1,
    content: '回答待ちです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
  {
    id: 2,
    content: '回答待ちです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
  {
    id: 3,
    content: '回答待ちです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
  {
    id: 4,
    content: '回答待ちです、ミッションコンプリート🌟',
    createdAt: '2023/01/01 11:00',
  },
]

const allList2 = []
const doneList2 = []
const waitList2 = []

const Questions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [questionIndex, setQuestionIndex] = useState(0)
  const toggleQuestion = (index) => {
    setQuestionIndex(index)
  }
  return (
    <>
      <Flex direction='column' py='56px'>
        <Text color='blue.800' fontWeight='bold' fontSize='22px' mb='16px'>
          質問箱一覧
        </Text>
        <InputGroup color='black' bg='white' colorScheme='gray' mb='16px'>
          <InputLeftElement
            pointerEvents='none'
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color='gray.300' />}
          />
          <Input
            type='text'
            placeholder='質問をキーワード検索'
            focusBorderColor='gray.200'
            borderRadius='md'
            boxShadow='md'
            py='8px'
            fontSize='14px'
            _placeholder={{ color: 'gray.400' }}
          />
        </InputGroup>
        <Flex direction='column'>
          <Flex
            w='100%'
            bg='white'
            borderTopRadius='md'
            boxShadow='md'
            direction='column'
            p='24px 24px 0'
          >
            <TabItems mb='0px'>
              <TabItem
                title='すべて'
                onClick={() => toggleQuestion(0)}
                tabState={questionIndex}
                tabIndex={0}
              />
              <TabItem
                title='解決済み'
                onClick={() => toggleQuestion(1)}
                tabState={questionIndex}
                tabIndex={1}
                dataLength={3}
              />
              <TabItem
                title='回答待ち'
                onClick={() => toggleQuestion(2)}
                tabState={questionIndex}
                tabIndex={2}
                dataLength={5}
              />
              <TabItem
                title='質問箱について'
                onClick={() => toggleQuestion(3)}
                tabState={questionIndex}
                tabIndex={3}
              />
            </TabItems>
            <Flex w='100%' h='1px' bg='gray.200' />
          </Flex>
          <Flex
            h='70vh'
            overflowX='scroll'
            bg='white'
            px='24px'
            direction='column'
            borderBottomRadius='md'
            boxShadow='md'
          >
            <Flex direction='column' w='100%'>
              {questionIndex === 0 && (
                <>
                  {allList?.map((list) => (
                    <Flex
                      key={list.id}
                      direction='column'
                      color='black'
                      py='16px'
                      fontSize='14px'
                      borderBottom='1px solid #000'
                      borderColor='gray.200'
                    >
                      <Text
                        mb='2px'
                        color='gray.400'
                        fontSize='12px'
                        fontWeight='bold'
                      >
                        {list.createdAt}
                      </Text>
                      <Flex fontWeight='bold' mb={list.status && '6px'}>
                        <Text>{list.content}</Text>
                      </Flex>
                    </Flex>
                  ))}
                </>
              )}
              {questionIndex === 1 && (
                <>
                  {doneList?.map((list) => (
                    <Flex
                      key={list.id}
                      direction='column'
                      color='black'
                      py='16px'
                      fontSize='14px'
                      borderBottom='1px solid #000'
                      borderColor='gray.200'
                    >
                      <Text
                        mb='2px'
                        color='gray.400'
                        fontSize='12px'
                        fontWeight='bold'
                      >
                        {list.createdAt}
                      </Text>
                      <Flex fontWeight='bold' mb={list.status && '6px'}>
                        <Text>{list.content}</Text>
                      </Flex>
                    </Flex>
                  ))}
                </>
              )}
              {questionIndex === 2 && (
                <>
                  {waitList?.map((list) => (
                    <Flex
                      key={list.id}
                      direction='column'
                      color='black'
                      py='16px'
                      fontSize='14px'
                      borderBottom='1px solid #000'
                      borderColor='gray.200'
                    >
                      <Text
                        mb='2px'
                        color='gray.400'
                        fontSize='12px'
                        fontWeight='bold'
                      >
                        {list.createdAt}
                      </Text>
                      <Flex fontWeight='bold' mb={list.status && '6px'}>
                        <Text>{list.content}</Text>
                      </Flex>
                    </Flex>
                  ))}
                </>
              )}
              {questionIndex === 3 && (
                <NewCreateCard
                  title='質問してみましょう！'
                  buttonText='質問をする'
                  onClick={onOpen}
                  isBoxShadow={false}
                >
                  <Text>
                    開発でなにかお困りごとはありませんか？みんなに質問してみよう！
                  </Text>
                  <Text>
                    ほかのクリエイターの悩みに答えると、ポイントがもらえる✨
                  </Text>
                </NewCreateCard>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <ModalCard
        cancelButtonText='閉じる'
        title='質問を投稿しました'
        titleEmoji='🎉'
        isOpen={isOpen}
        onClose={onClose}
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

export default Questions
