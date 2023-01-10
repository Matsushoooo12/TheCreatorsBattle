import { SearchIcon } from '@chakra-ui/icons'
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import TabItem from '../../components/atoms/TabItem'
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

const Questions = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const toggleQuestion = (index) => {
    setQuestionIndex(index)
  }
  return (
    <Flex direction="column" py="56px">
      <Text color="blue.800" fontWeight="bold" fontSize="22px" mb="16px">
        質問箱一覧
      </Text>
      <InputGroup color="black" bg="white" colorScheme="gray" mb="16px">
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="phone"
          placeholder="質問をキーワード検索"
          focusBorderColor="gray.200"
          borderRadius="md"
          boxShadow="md"
          py="8px"
          fontSize="14px"
          _placeholder={{ color: 'gray.400' }}
        />
      </InputGroup>
      <Flex
        w="100%"
        bg="white"
        borderRadius="md"
        boxShadow="md"
        direction="column"
        p="16px 16px 0"
      >
        <TabItems mb="0px">
          <TabItem
            title="すべて"
            onClick={() => toggleQuestion(0)}
            tabState={questionIndex}
            tabIndex={0}
          />
          <TabItem
            title="解決済み"
            onClick={() => toggleQuestion(1)}
            tabState={questionIndex}
            tabIndex={1}
          />
          <TabItem
            title="回答待ち"
            onClick={() => toggleQuestion(2)}
            tabState={questionIndex}
            tabIndex={2}
          />
        </TabItems>
        <Flex w="100%" h="1px" bg="gray.200" />
        <Flex direction="column">
          {questionIndex === 0 && (
            <>
              {allList?.map((list) => (
                <Flex
                  key={list.id}
                  direction="column"
                  color="black"
                  py="16px"
                  fontSize="14px"
                  borderBottom="1px solid #000"
                  borderColor="gray.200"
                >
                  <Text
                    mb="2px"
                    color="gray.400"
                    fontSize="12px"
                    fontWeight="bold"
                  >
                    {list.createdAt}
                  </Text>
                  <Flex fontWeight="bold" mb={list.status && '6px'}>
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
                  direction="column"
                  color="black"
                  py="16px"
                  fontSize="14px"
                  borderBottom="1px solid #000"
                  borderColor="gray.200"
                >
                  <Text
                    mb="2px"
                    color="gray.400"
                    fontSize="12px"
                    fontWeight="bold"
                  >
                    {list.createdAt}
                  </Text>
                  <Flex fontWeight="bold" mb={list.status && '6px'}>
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
                  direction="column"
                  color="black"
                  py="16px"
                  fontSize="14px"
                  borderBottom="1px solid #000"
                  borderColor="gray.200"
                >
                  <Text
                    mb="2px"
                    color="gray.400"
                    fontSize="12px"
                    fontWeight="bold"
                  >
                    {list.createdAt}
                  </Text>
                  <Flex fontWeight="bold" mb={list.status && '6px'}>
                    <Text>{list.content}</Text>
                  </Flex>
                </Flex>
              ))}
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Questions
