import { Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from '../molecules/ProjectCard'

const ProjectList = ({title, children}) => {
  return (
    <Flex w="100%" direction="column" mb="32px">
        <Text color="blue.800" fontWeight="bold" fontSize="22px" mb="16px">{title}</Text>
        <Flex overflowX="scroll" pb="32px">
            <HStack spacing="16px" color="black">
            {children}
            </HStack>
        </Flex>
    </Flex>
  )
}

export default ProjectList