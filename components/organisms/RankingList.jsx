import { Avatar, Flex, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const RankingList = ({rankingList}) => {
    const router = useRouter()
  return (
    <VStack spacing="24px">
      {rankingList?.map((list) => (
        <Flex key={list.id} alignItems="center" justifyContent="space-between" w="100%">
            <Flex alignItems="center" onClick={() => router.push(`/users/${list.user.id}`)} cursor="pointer">
                {list.rank === 1 && (
                    <Text mr="6px" fontWeight="bold" fontSize="22px">🥇</Text>
                )}
                {list.rank === 2 && (
                    <Text mr="6px" fontWeight="bold" fontSize="22px">🥈</Text>
                )}
                {list.rank === 3 && (
                    <Text mr="6px" fontWeight="bold" fontSize="22px">🥉</Text>
                )}
                {list.rank > 3 && (
                    <Text mr="6px" fontWeight="bold" fontSize="22px">{list.rank}</Text>
                )}
                <Avatar w="40px" h="40px" mr="8px" src={list.user.photoURL} />
                <Flex direction="column">
                    <Text fontWeight="bold" fontSize="14px">{list.user.displayName}</Text>
                    <Text fontSize="12px" fontWeight="bold">{list.user.userId}</Text>
                </Flex>
            </Flex>
            <Flex alignItems="center">
            <Flex mr="8px" alignItems="center" fontWeight="bold">
                <Text bgGradient="linear(to-b, blue.400, purple.400)" bgClip="text">{list.point}</Text>
                <Text>💰</Text>
            </Flex>
            <Text bgGradient="linear(to-b, blue.400, purple.400)" bgClip="text" fontSize="12px" fontWeight="bold">Following</Text>
            </Flex>
        </Flex>
      ))}
    </VStack>
  )
}

export default RankingList