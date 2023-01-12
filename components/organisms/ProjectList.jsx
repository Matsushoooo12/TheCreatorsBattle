import { Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import ChapterTitle from '../atoms/ChapterTitle'

const ProjectList = ({ title, children, onClick, isEdit, isRowScroll }) => {
  return (
    <Flex w='100%' direction='column' mb='32px'>
      <ChapterTitle isEdit={isEdit} title={title} onClick={onClick} />
      <Flex overflowX='scroll' pb='32px'>
        <HStack spacing='16px' color='black' w={!isRowScroll && '100%'}>
          {children}
        </HStack>
      </Flex>
    </Flex>
  )
}

export default ProjectList
