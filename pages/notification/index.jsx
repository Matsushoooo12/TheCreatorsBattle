import { SearchIcon } from '@chakra-ui/icons'
import { Divider, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import TabItem from '../../components/atoms/TabItem'
import TabItems from '../../components/molecules/TabItems'

const taskList = [
  {
    id: 1,
    content: "お疲れさまです、ミッションコンプリート🌟"
  },
  {
    id: 2,
    content: "お疲れさまです、ミッションコンプリート🌟"
  },
  {
    id: 3,
    content: "お疲れさまです、ミッションコンプリート🌟"
  },
  {
    id: 4,
    content: "お疲れさまです、ミッションコンプリート🌟"
  },
]

const notificationList = [
  {
    id: 1,
    content: "お知らせです、ミッションコンプリート🌟"
  },
  {
    id: 2,
    content: "お知らせです、ミッションコンプリート🌟"
  },
  {
    id: 3,
    content: "お知らせです、ミッションコンプリート🌟"
  },
  {
    id: 4,
    content: "お知らせです、ミッションコンプリート🌟"
  },
]

const Notification = () => {
  const [notificationIndex, setNotificationIndex] = useState(0)
  const toggleNotification = (index) => {
    setNotificationIndex(index)
  }
  useEffect(() => {
    setNotificationIndex(0)
  }, [])
  return (
    <Flex direction="column" py="56px">
      <Text color="blue.800" fontWeight="bold" fontSize="22px" mb="16px">タスク・お知らせ一覧</Text>
      <InputGroup color="black" bg="white" colorScheme="gray" mb="16px">
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="phone" placeholder="タスク内をキーワード検索" focusBorderColor="gray.200" borderRadius="md" boxShadow="md" py="8px" fontSize="14px" _placeholder={{ color: 'gray.400' }} />
      </InputGroup>
      <Flex w="100%" bg="white" borderRadius="md" boxShadow="md" direction="column" p="16px 16px 0">
        <TabItems mb="0px">
          <TabItem title="タスク" onClick={() => toggleNotification(0)} tabState={notificationIndex} tabIndex={0} />
          <TabItem title="お知らせ" onClick={() => toggleNotification(1)} tabState={notificationIndex} tabIndex={1} />
        </TabItems>
        <Flex w="100%" h="1px" bg="gray.200" />
        <Flex direction="column">
          {notificationIndex === 0 && (
            <>
              {taskList?.map((list) => (
                <Flex key={list.id} direction="column" color="black" py="16px" fontSize="14px" borderBottom="1px solid #000" borderColor="gray.200">
                  {list.content}
                </Flex>
              ))}
            </>
          )}
          {notificationIndex === 1 && (
            <>
              {notificationList?.map((list) => (
                <Flex key={list.id} direction="column" color="black" py="16px" fontSize="14px" borderBottom="1px solid #000" borderColor="gray.200">
                  {list.content}
                </Flex>
              ))}
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Notification