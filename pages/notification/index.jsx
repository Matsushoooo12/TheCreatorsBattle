import { SearchIcon } from '@chakra-ui/icons'
import { Divider, Flex, Input, InputGroup, InputLeftElement, Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import TabItem from '../../components/atoms/TabItem'
import TabItems from '../../components/molecules/TabItems'

const taskList = [
  {
    id: 1,
    content: "投票期間がスタートしました。投票をしてください。",
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    deadline: "2023/01/01 11:00 - 2023/01/03 11:00",
    status: 'vote',
    projectId: '1'
  },
  {
    id: 2,
    content: "投票期間がスタートしました。投票をしてください。",
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    deadline: "2023/01/01 11:00 - 2023/01/03 11:00",
    status: 'vote',
    projectId: '2'
  },
  {
    id: 3,
    content: "制作期間がスタートしました。作品を提出してください。",
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    deadline: "2023/01/01 11:00 - 2023/01/03 11:00",
    status: 'production',
    projectId: '3'
  },
  {
    id: 4,
    content: "プロジェクトが終了しました。結果を確認しましょう。",
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    status: 'done',
    projectId: '4'
  },
  {
    id: 5,
    content: "ミッションコンプリート🌟",
  },
]

const notificationList = [
  {
    id: 1,
    content: "お知らせです、ミッションコンプリート🌟",
  },
  {
    id: 2,
    content: "お知らせです、ミッションコンプリート🌟",
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
  const router = useRouter()
  const [notificationIndex, setNotificationIndex] = useState(0)
  const toggleNotification = (index) => {
    setNotificationIndex(index)
  }
  useEffect(() => {
    setNotificationIndex(0)
  }, [])
  const linkText = (status) => {
    if(status === 'production'){
      return "提出する"
    }else if(status === 'vote'){
      return "投票する"
    }else if(status === 'done'){
      return '結果を見る'
    }
  }
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
                  {list.deadline && (<Text mb="2px" color="gray.400" fontSize="12px" fontWeight="bold">{list.deadline}</Text>)}
                  <Flex fontWeight="bold" mb={list.status && "6px"}>
                    {list.status && (<Flex><Text onClick={() => router.push(`/projects/${list.projectId}`)} cursor="pointer" color="blue.800">{`「${list.title}」`}</Text><Text>の</Text></Flex>)}
                    <Text>{list.content}</Text>
                  </Flex>
                  {list.status && (<Text cursor="pointer" fontSize="12px" fontWeight="bold" bgGradient="linear(to-b, blue.400, purple.400)" bgClip="text">{`${linkText(list.status)} >`}</Text>)}
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