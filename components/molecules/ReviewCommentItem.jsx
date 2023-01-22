import {
  Avatar,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReviewCommentItem = (props) => {
  const { date, text, displayName, photoURL, worksThumbnail } = props
  return (
    <Flex w='100%' direction='column'>
      <Flex w='100%'>
        <Image
          bg='gray.500'
          w='120px'
          h='80px'
          alt=''
          mr='16px'
          src={worksThumbnail}
        />
        <Flex direction='column'>
          <Text fontSize='12px' color='gray.500' mb='10px'>
            {date}
          </Text>
          <Flex alignItems='center' mb='4px'>
            <Flex alignItems='center' mr='18px'>
              <Text fontSize='12px' color='gray.500' mr='8px'>
                発想
              </Text>
              <HStack spacing='4px'>
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='gray.300' />
              </HStack>
            </Flex>
            <Flex alignItems='center' mr='18px'>
              <Text fontSize='12px' color='gray.500' mr='8px'>
                ビジネス
              </Text>
              <HStack spacing='4px'>
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='gray.300' />
                <Icon as={AiFillStar} color='gray.300' />
              </HStack>
            </Flex>
            <Flex alignItems='center' mr='18px'>
              <Text fontSize='12px' color='gray.500' mr='8px'>
                技術
              </Text>
              <HStack spacing='4px'>
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='gray.300' />
              </HStack>
            </Flex>
            <Flex alignItems='center'>
              <Text fontSize='12px' color='gray.500' mr='8px'>
                デザイン
              </Text>
              <HStack spacing='4px'>
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='yellow.300' />
                <Icon as={AiFillStar} color='gray.300' />
                <Icon as={AiFillStar} color='gray.300' />
                <Icon as={AiFillStar} color='gray.300' />
              </HStack>
            </Flex>
          </Flex>
          <Text fontWeight='bold'>{text}</Text>
          <Flex alignItems='center'>
            <Avatar src={photoURL} size='xs' mr='4px' />
            <Text fontSize='12px'>{displayName}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider orientation='horizontal' my='18px' size='xl' />
    </Flex>
  )
}

export default ReviewCommentItem
