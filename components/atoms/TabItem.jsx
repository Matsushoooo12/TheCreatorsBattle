import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const TabItem = (props) => {
    const {title, onClick, tabState, tabIndex} = props
  return (
    <Flex direction="column" onClick={onClick} cursor="pointer" h="34px">
        <Text mb="8px">{title}</Text>
        {tabState === tabIndex && <Flex borderRadius="2xl" h="2px" bgGradient="linear(to-b, blue.400, purple.400)" />}
    </Flex>
  )
}

export default TabItem