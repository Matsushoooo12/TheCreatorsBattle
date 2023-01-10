import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import EditButton from './EditButton'

const ChapterTitle = (props) => {
  const { title, onClick, isEdit } = props
  return (
    <Flex alignItems="center" mb="20px">
      <Text color="blue.800" fontWeight="bold" fontSize="22px" mr="12px">
        {title}
      </Text>
      {isEdit && <EditButton onClick={onClick} />}
    </Flex>
  )
}

export default ChapterTitle
