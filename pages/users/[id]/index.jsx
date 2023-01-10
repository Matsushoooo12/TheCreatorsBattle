import { Flex, HStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import ChapterTitle from '../../../components/atoms/ChapterTitle'
import SkilCard from '../../../components/molecules/SkilCard'
import UserWorksCard from '../../../components/molecules/UserWorksCard'
import ProjectList from '../../../components/organisms/ProjectList'

const userWorksList = [
  {
    id: 1,
    thumbnail: '',
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
  {
    id: 2,
    thumbnail: '',
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
  {
    id: 3,
    thumbnail: '',
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
  {
    id: 4,
    thumbnail: '',
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
  {
    id: 5,
    thumbnail: '',
    title: '筋トレが楽しくなってもりもり筋肉がつくアプリケーション',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
]

const skilList = [
  {
    id: 1,
    text: 'Next.js',
    thumbnail: '',
    level: 1,
  },
  {
    id: 2,
    text: 'Next.js',
    thumbnail: '',
    level: 2,
  },
  {
    id: 3,
    text: 'Next.js',
    thumbnail: '',
    level: 3,
  },
  {
    id: 4,
    text: 'Next.js',
    thumbnail: '',
    level: 4,
  },
  {
    id: 5,
    text: 'Next.js',
    thumbnail: '',
    level: 4,
  },
]

const DetailUser = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Flex direction="column" py="56px">
      <ProjectList
        title="これまでの作品"
        onClick={() => router.push('/')}
        isEdit={true}
      >
        {userWorksList?.map((list) => (
          <UserWorksCard
            key={list.id}
            thumbnail={list.thumbnail}
            title={list.title}
            categories={list.categories}
            createdAt={list.createdAt}
            onClick={() => router.push(`/works/${list.id}`)}
          />
        ))}
      </ProjectList>
      <Flex w="100%" direction="column" mb="32px">
        <ChapterTitle
          isEdit={true}
          title="スキルレベル"
          onClick={() => router.push(`/users/${id}/skils/edit`)}
        />
        <HStack spacing="8px" flexWrap="wrap">
          {skilList?.map((list) => (
            <SkilCard
              key={list.id}
              text={list.text}
              level={list.level}
              thumbnail={list.thumbnail}
              fill="url(#skil)"
              isNew={false}
            />
          ))}
        </HStack>
      </Flex>
    </Flex>
  )
}

export default DetailUser
