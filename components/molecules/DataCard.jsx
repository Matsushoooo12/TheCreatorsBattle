import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const DataCard = (props) => {
  const {title, myNumber, unitText, totalNumber, emoji} = props
  return (
    <Flex suppressHydrationWarning direction="column" w="33%" bgGradient="linear(to-b, blue.400, purple.400)" borderRadius="2xl" pt="28px" pb="16px" px="16px" position="relative" overflow="hidden" boxShadow="xl" color="white">
        <Text suppressHydrationWarning fontWeight="bold" fontSize="18px">{title}</Text>
        <Flex suppressHydrationWarning alignItems="flex-end">
            <Text suppressHydrationWarning fontSize="56px" mr="4px">{myNumber}</Text>
            <Text suppressHydrationWarning mb="12px" fontSize="22px" fontWeight="bold">{unitText} {totalNumber !== '' && (<>/ {totalNumber}{unitText}</>)}</Text>
        </Flex>
        <Flex suppressHydrationWarning position="absolute" top="-140px" right="-100px" bg="rgba(255, 255, 255, 0.6)" w="240px" h="240px" overflow="hidden" borderRadius="full" >
            <Text position="absolute" fontSize="40px" bottom="28px" left="60px">{emoji}</Text>
        </Flex>
    </Flex>
  )
}

export default DataCard