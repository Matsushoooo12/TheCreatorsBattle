import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const UserWorksCard = (props) => {
  const { thumbnail, title, categories, createdAt, onClick } = props
  return (
    <Flex
      w="328px"
      h="100%"
      bg="white"
      borderRadius="2xl"
      direction="column"
      boxShadow="lg"
    >
      <Flex w="100%" h="180px" borderTopRightRadius="2xl" position="relative">
        <Image
          w="100%"
          h="100%"
          bg="gray.500"
          alt=""
          borderTopLeftRadius="2xl"
          borderTopRightRadius="2xl"
          src={thumbnail}
        />
      </Flex>
      <Flex w="100%" p="8px 16px 16px" direction="column">
        <Heading fontSize="18px" mb="2px" onClick={onClick} cursor="pointer">
          {title}
        </Heading>
        <Text fontWeight="bold" fontSize="12px" color="gray.400" mb="2px">
          {categories?.map((c, index) => (index === 0 ? c : `・${c}`))}
        </Text>
        <Text fontWeight="bold" fontSize="12px" color="gray.400">
          ⏱ {createdAt}
        </Text>
      </Flex>
    </Flex>
  )
}

export default UserWorksCard
