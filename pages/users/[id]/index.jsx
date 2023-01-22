import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import ChapterTitle from '../../../components/atoms/ChapterTitle'
import NewCreateCard from '../../../components/molecules/NewCreateCard'
import SkilCard from '../../../components/molecules/SkilCard'
import UserWorksCard from '../../../components/molecules/UserWorksCard'
import ProjectList from '../../../components/organisms/ProjectList'

const userWorksList = [
  {
    id: 1,
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907356-d816a314-b81e-47bb-8792-e3d657d71034.jpg',
    title: '健康を管理するアプリ',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
  {
    id: 2,
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907358-433205a8-128e-40a1-b7d9-9ef3c9125824.jpg',
    title: '睡眠を管理するアプリ',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
  {
    id: 3,
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907359-827435e6-f4cd-424b-a589-1279ad40a49b.jpg',
    title: '車を運転するアプリ',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
  {
    id: 4,
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907360-7bbf5008-0264-4627-8db9-5f23b87f9f3b.jpg',
    title: 'ガイドを見るアプリ',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
  {
    id: 5,
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/213907363-fb223792-b1fd-4b2a-94c3-0d2aef02531c.jpg',
    title: '映画を予約するアプリ',
    categories: ['UI/UXデザイン', 'ウェブアプリ'],
    createdAt: '2022/01/01',
  },
]

const skilList = [
  {
    id: 1,
    text: 'Next.js',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211630639-03287355-ac37-463c-951f-b9b156752911.png',
    level: 1,
  },
  {
    id: 2,
    text: 'TypeScript',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211630979-f834954b-f2ba-4954-960b-09bec004751b.png',
    level: 2,
  },
  {
    id: 3,
    text: 'Kotlin',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211631223-2f47b231-1c12-48d6-9067-68392df5c325.png',
    level: 3,
  },
  {
    id: 4,
    text: 'AWS',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211631369-0d2cb214-498d-4f76-9083-c56434341f24.png',
    level: 4,
  },
  {
    id: 5,
    text: 'Firebase',
    thumbnail:
      'https://user-images.githubusercontent.com/66903388/211631467-df73eb15-ba30-4acf-89cb-b224722bb597.png',
    level: 4,
  },
]

const userWorksList2 = []
const skilList2 = []

const DetailUser = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Flex direction='column' py='56px'>
      <ProjectList
        title='これまでの作品'
        onClick={() => router.push(`/works/${id}/edit`)}
        isEdit={true}
        isRowScroll={userWorksList.length ? true : false}
      >
        {userWorksList?.length ? (
          <>
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
          </>
        ) : (
          <NewCreateCard
            title='作品を投稿してみましょう！'
            buttonText='作品を投稿する'
            onClick={() => router.push(`/users/${id}`)}
            isBoxShadow={true}
          >
            <Text>作品を投稿すると、ポイントがもらえるかも...🤭</Text>
          </NewCreateCard>
        )}
      </ProjectList>
      <Flex w='100%' direction='column' mb='32px'>
        <ChapterTitle
          isEdit={true}
          title='スキルレベル'
          onClick={() => router.push(`/users/${id}/skils/edit`)}
        />
        <HStack spacing='8px' flexWrap='wrap'>
          {skilList.length ? (
            <>
              {skilList?.map((list) => (
                <SkilCard
                  key={list.id}
                  text={list.text}
                  level={list.level}
                  thumbnail={list.thumbnail}
                  fill='url(#skil)'
                  isNew={false}
                />
              ))}
            </>
          ) : (
            <Flex w='100%' justifyContent='center'>
              <NewCreateCard
                buttonText='スキルを入力する'
                title='あなたのスキルレベルを入力してみましょう！'
                onClick={() => router.push(`/users/${id}/skils/edit`)}
                isBoxShadow={true}
              >
                <Text mb='18px'>
                  自分のスキルやその習熟度を入力すると、他のクリエイターと繋がりやすくなります。
                </Text>
                <Flex w='100%' justifyContent='center'>
                  <SkilCard
                    text={
                      <Image
                        cursor='pointer'
                        onClick={() => router.push('/')}
                        mx='2px'
                        mb='4px'
                        h='16px'
                        src='https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png'
                        alt=''
                      />
                    }
                    level={4}
                    thumbnail=''
                    fill='url(#skil)'
                    isNew={false}
                  />
                </Flex>
              </NewCreateCard>
            </Flex>
          )}
        </HStack>
      </Flex>
    </Flex>
  )
}

export default DetailUser
