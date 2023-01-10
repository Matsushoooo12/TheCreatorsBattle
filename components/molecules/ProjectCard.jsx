import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProjectCard = (props) => {
    const {title, categories, joinNumber, acquisitionPoints, untilTheDeadline, status, thumbnail, onClick} = props
    const gradientColor = (status) => {
        if(status === 'recruitment'){
            return "linear(to-r, purple.300, purple.600)"
        }else if(status === 'production'){
            return "linear(to-r, green.300, green.600)"
        } else if(status === 'vote'){
            return "linear(to-r, orange.300, orange.500)"
        } else if(status === 'done'){
            return "linear(to-r, gray.500, gray.900)"
        }
    }
    const statusText = (status) => {
        if(status === 'recruitment'){
            return "募集期間"
        }else if(status === 'production'){
            return "制作期間"
        } else if(status === 'vote'){
            return "投票期間"
        } else{
            return "終了"
        }
    }
  return (
        <Flex w="328px" h="100%" bg="white" borderRadius="2xl" direction="column" boxShadow="lg">
            <Flex w="100%" h="180px" borderTopRightRadius="2xl" position="relative">
                <Image w="100%" h="100%"  bg="gray.500" alt="" borderTopLeftRadius="2xl" borderTopRightRadius="2xl" src={thumbnail} />
                <Text position="absolute" top="16px" left="0" bgGradient={gradientColor(status)} color="white" p="4px 12px" fontSize="12px" fontWeight="bold" borderTopRightRadius="md" borderBottomRightRadius="md">{statusText(status)}</Text>
            </Flex>
            <Flex w="100%" p="8px 16px 16px" direction="column">
                <Heading fontSize="18px" mb="2px" cursor="pointer" onClick={onClick}>{title}</Heading>
                <Text fontWeight="bold" fontSize="12px" color="gray.400" mb="16px">{categories?.map((c, index) => index === 0 ? c : `・${c}`)}</Text>
                <HStack spacing="16px" w="100%">
                <Flex w="33%" direction="column" alignItems="center" justifyContent="center">
                    <Text fontSize="12px">🙋‍♀️ 人数</Text>
                    <Text fontWeight="bold" bgGradient="linear(to-b, blue.400, purple.400)" bgClip="text">{joinNumber}人</Text>
                </Flex>
                <Flex w="33%" direction="column" alignItems="center" justifyContent="center">
                    <Text fontSize="12px">💰 獲得ポイント</Text>
                    <Text fontWeight="bold" bgGradient="linear(to-b, blue.400, purple.400)" bgClip="text">{acquisitionPoints}pt</Text>
                </Flex>
                <Flex w="33%" direction="column" alignItems="center" justifyContent="center">
                    <Text fontSize="12px">💣 残り</Text>
                    <Text fontWeight="bold" bgGradient="linear(to-b, blue.400, purple.400)" bgClip="text">{untilTheDeadline}日</Text>
                </Flex>
                </HStack>
            </Flex>
        </Flex>
  )
}

export default ProjectCard