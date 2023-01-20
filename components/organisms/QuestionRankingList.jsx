import {
  Avatar,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { RxReload } from 'react-icons/rx'

const QuestionRankingList = ({ rankingList }) => {
  const router = useRouter()
  return (
    <VStack spacing='24px' mb='56px'>
      {rankingList?.map((list) => (
        // <Flex
        //   key={list.id}
        //   alignItems='center'
        //   justifyContent='space-between'
        //   w='100%'
        // >
        //   <Flex
        //     alignItems='center'
        //     onClick={() => router.push(`/users/${list.user.id}`)}
        //     cursor='pointer'
        //   >
        //     {list.rank === 1 && (
        //       <Text mr='6px' fontWeight='bold' fontSize='22px'>
        //         🥇
        //       </Text>
        //     )}
        //     {list.rank === 2 && (
        //       <Text mr='6px' fontWeight='bold' fontSize='22px'>
        //         🥈
        //       </Text>
        //     )}
        //     {list.rank === 3 && (
        //       <Text mr='6px' fontWeight='bold' fontSize='22px'>
        //         🥉
        //       </Text>
        //     )}
        //     {list.rank > 3 && (
        //       <Text mr='6px' fontWeight='bold' fontSize='22px'>
        //         {list.rank}
        //       </Text>
        //     )}
        //     <Avatar w='40px' h='40px' mr='8px' src={list.user.photoURL} />
        //     <Flex direction='column'>
        //       <Text fontWeight='bold' fontSize='14px'>
        //         {list.user.displayName}
        //       </Text>
        //       <Text fontSize='12px' fontWeight='bold'>
        //         {list.user.userId}
        //       </Text>
        //     </Flex>
        //   </Flex>
        //   <Flex alignItems='center'>
        //     <Flex mr='8px' alignItems='center' fontWeight='bold'>
        //       <Text
        //         bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
        //         bgClip='text'
        //       >
        //         {list.point}
        //       </Text>
        //       <Text>💰</Text>
        //     </Flex>
        //     <Text
        //       bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
        //       bgClip='text'
        //       fontSize='12px'
        //       fontWeight='bold'
        //     >
        //       Following
        //     </Text>
        //   </Flex>
        // </Flex>
        <Flex
          key={list.id}
          alignItems='center'
          //   justifyContent='space-between'
          w='100%'
        >
          <Flex
            alignItems='center'
            onClick={() => router.push(`/users/${list.user.id}`)}
            cursor='pointer'
          >
            {list.rank === 1 && (
              <Text mr='24px' fontWeight='bold' fontSize='22px'>
                🥇
              </Text>
            )}
            {list.rank === 2 && (
              <Text mr='24px' fontWeight='bold' fontSize='22px'>
                🥈
              </Text>
            )}
            {list.rank === 3 && (
              <Text mr='24px' fontWeight='bold' fontSize='22px'>
                🥉
              </Text>
            )}
            {list.rank > 3 && list.rank < 10 && (
              <Text mr='24px' fontWeight='bold' fontSize='22px'>
                {list.rank}
              </Text>
            )}
            {list.rank === 10 && (
              <Text mr='14px' fontWeight='bold' fontSize='22px'>
                {list.rank}
              </Text>
            )}
          </Flex>
          <Flex
            bg='white'
            p='12px'
            direction='column'
            borderRadius='lg'
            boxShadow='lg'
            border='1px solid #000'
            borderColor='gray.100'
            w='100%'
          >
            <Text fontSize='14px' color='gray.500'>
              {list.date}
            </Text>
            <Text fontSize='18px' fontWeight='bold' mb='4px'>
              {list.title}
            </Text>
            <HStack>
              {list.skils?.map((skil) => (
                <Flex
                  key={skil.id}
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  p='2px'
                  borderRadius='full'
                  alignItems='center'
                  justifyContent='center'
                >
                  <HStack
                    borderRadius='full'
                    bg='white'
                    alignItems='center'
                    justifyContent='center'
                    p='4px 8px'
                  >
                    <Image w='16px' h='16px' src={skil.thumbnail} alt='' />
                    <Text bg='white' fontSize='12px'>
                      {skil.name}
                    </Text>
                  </HStack>
                </Flex>
              ))}
              <Flex>
                <Text
                  p='4px 8px'
                  border='2px solid #000'
                  borderColor='blue.500'
                  borderRadius='full'
                  fontSize='12px'
                  color='blue.500'
                >
                  💰 {list.point}pt
                </Text>
              </Flex>
            </HStack>
          </Flex>
        </Flex>
      ))}
    </VStack>
  )
}

export default QuestionRankingList
