import { Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'
import { AiOutlinePlus } from 'react-icons/ai'

const skilData = [{ name: 'Skil', value: 400 }]

const SkilCard = ({ text, level, thumbnail, fill, isNew, onClick }) => {
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
      w='140px'
      bg={!isNew && 'white'}
      _hover={isNew && { bg: 'white' }}
      boxShadow={!isNew && 'md'}
      borderRadius='lg'
      p='16px'
      direction='column'
      alignItems='center'
      border={isNew && '2px dashed #A0AEC0'}
      cursor={isNew && 'pointer'}
      onClick={onClick}
    >
      <Flex w='100%' direction='column' alignItems='center' mb='6px'>
        <Flex
          w='86px'
          h='86px'
          direction='column'
          position='relative'
          pointerEvents='none'
        >
          <PieChart width={86} height={86}>
            <defs>
              <linearGradient id='skil' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#4299E1' />
                <stop offset='100%' stopColor='#9F7AEA' />
              </linearGradient>
            </defs>
            <Pie
              data={skilData}
              cx={38}
              cy={38}
              startAngle={90}
              endAngle={level ? endAngle() : 90}
              innerRadius={30}
              outerRadius={38}
              fill={fill}
              paddingAngle={1}
              dataKey='value'
            >
              {skilData.map((index) => (
                <Cell key={`cell-${index}`} fill={fill} />
              ))}
            </Pie>
          </PieChart>
          {!isNew ? (
            <>
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  w='32px'
                  h='32px'
                  alt=''
                  top='0'
                  left='0'
                  right='0'
                  bottom='0'
                  margin='auto'
                  position='absolute'
                />
              ) : (
                <Flex
                  top='0'
                  left='0'
                  right='0'
                  bottom='0'
                  margin='auto'
                  position='absolute'
                  justifyContent='center'
                  alignItems='center'
                >
                  <svg
                    width='29'
                    height='31'
                    viewBox='0 0 29 31'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22.7364 13.0109L27.3864 11.7709C28.6164 11.4409 29.3264 10.0909 28.8064 8.93085C26.4964 3.76085 21.4064 0.230852 15.6264 0.0108518C6.94638 -0.319148 -0.393612 6.92085 0.0163884 15.7709C0.326388 22.4009 5.12638 28.1909 11.5864 29.7109C17.7064 31.1409 23.8364 28.6409 27.2864 23.8209C28.1064 22.6809 27.7264 21.0909 26.4664 20.4909L22.2364 18.4809C19.7764 17.3109 20.1064 13.7109 22.7364 13.0109ZM22.4964 6.57085C23.2464 6.60085 23.8364 7.23085 23.8064 7.99085C23.7764 8.75085 23.1464 9.33085 22.3864 9.30085C21.6264 9.27085 21.0464 8.64085 21.0764 7.88085C21.1064 7.12085 21.7364 6.54085 22.4964 6.57085Z'
                      fill='url(#paint0_linear_1351_8026)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_1351_8026'
                        x1='14.4893'
                        y1='0'
                        x2='14.4893'
                        y2='30.1114'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#7CAAFF' />
                        <stop offset='1' stopColor='#8D85F4' />
                      </linearGradient>
                    </defs>
                  </svg>
                </Flex>
              )}
            </>
          ) : (
            <Icon
              as={AiOutlinePlus}
              fontSize='32px'
              color='gray.400'
              alt=''
              top='0'
              left='0'
              right='0'
              bottom='0'
              margin='auto'
              position='absolute'
            />
          )}
        </Flex>
      </Flex>
      <Text color={text ? 'black' : 'gray.400'} fontWeight='bold'>
        {text ? text : 'スキル名'}
      </Text>
    </Flex>
  )
}

export default SkilCard
