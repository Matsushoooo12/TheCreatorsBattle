import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'

const skilData = [{ name: 'Group A', value: 400 }]

const SkilCard = ({ text, level, thumbnail }) => {
  const endAngle = () => {
    if (level === 1) {
      return 0
    } else if (level === 2) {
      return -90
    } else if (level === 3) {
      return -180
    } else if (level === 4) {
      return -270
    }
  }
  return (
    <Flex
      w="120px"
      bg="white"
      boxShadow="md"
      borderRadius="lg"
      p="16px"
      direction="column"
      alignItems="center"
    >
      <Flex w="100%" direction="column" alignItems="center" mb="6px">
        <Flex
          w="86px"
          h="86px"
          direction="column"
          position="relative"
          pointerEvents="none"
        >
          <PieChart width={86} height={86}>
            <defs>
              <linearGradient id="skil" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4299E1" />
                <stop offset="100%" stopColor="#9F7AEA" />
              </linearGradient>
            </defs>
            <Pie
              data={skilData}
              cx={38}
              cy={38}
              startAngle={90}
              endAngle={endAngle()}
              innerRadius={30}
              outerRadius={38}
              fill="url(#skil)"
              paddingAngle={1}
              dataKey="value"
            >
              {skilData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="url(#skil)" />
              ))}
            </Pie>
          </PieChart>
          <Image
            src={thumbnail}
            bg="blue"
            w="32px"
            h="32px"
            alt=""
            top="0"
            left="0"
            right="0"
            bottom="0"
            margin="auto"
            position="absolute"
          />
        </Flex>
      </Flex>
      <Text color="black" fontWeight="bold">
        {text}
      </Text>
    </Flex>
  )
}

export default SkilCard
