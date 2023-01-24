import { Flex, HStack, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import GradientIcon from '../../components/atoms/GradientIcon'
import { useRouter } from 'next/router'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp'
import PrimaryButton from '../../components/atoms/PrimaryButton'
import WaveContainer from '../../components/organisms/WaveContainer'

const ContentsIndex = () => {
  const router = useRouter()
  return (
    <>
      <Flex direction='column'>
        <Flex direction='column' py='120px'>
          <Flex direction='column' mb='56px'>
            <Flex direction='column' mb='40px'>
              <Flex alignItems='center' justifyContent='center'>
                <Image
                  objectFit='cover'
                  w='300px'
                  src='https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png'
                  alt=''
                  mr='8px'
                />
                <Text
                  fontSize='32px'
                  fontWeight='bold'
                  bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                  bgClip='text'
                >
                  は作った作品で賞金を奪い合う
                </Text>
              </Flex>
              <Flex
                alignItems='center'
                fontSize='32px'
                fontWeight='bold'
                bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                bgClip='text'
                justifyContent='center'
              >
                <Text>「０からのものづくり」</Text>
                <Text>×</Text>
                <Text>「競争」</Text>
                <Text>をかけ合わせた新感覚サービスです。</Text>
              </Flex>
            </Flex>
            <Flex direction='column' alignItems='center' mb='16px'>
              <Text>
                ものづくりが好きなクリエイターたちと競争して賞金を目指したり、分からないことを教え合い、
                <br />
                切磋琢磨してたくさんの作品を作りながらクリエイターとして大きく成長できるプラットフォームです。
              </Text>
            </Flex>
            <Flex justifyContent='center'>
              <Image
                src='https://user-images.githubusercontent.com/66903388/213876928-efa351e9-08cb-4abe-8967-ad9abf41c2f8.jpg'
                alt=''
                objectFit='cover'
                w='720px'
              />
            </Flex>
          </Flex>
          <Flex direction='column' mb='56px'>
            <Flex
              alignItems='center'
              fontSize='32px'
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              justifyContent='center'
              direction='column'
              mb='40px'
            >
              <Text>自分の作品を作りたい</Text>
              <Text>でも、最後まで作りきることは難しい、、、</Text>
            </Flex>
            <Flex direction='column' alignItems='center' mb='24px'>
              <Text>
                作り始めたのに最後まで作りきれずに挫折してしまったり
                <br />
                作りたいけれど、動き出せずに学習ばかりに執着してしまうのはなぜなんだろう？
              </Text>
            </Flex>
            <Flex
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              fontSize='24px'
              justifyContent='center'
              alignItems='center'
              mb='24px'
            >
              <Text>例えば...</Text>
            </Flex>
            <Flex direction='column' w='100%' alignItems='center' mb='24px'>
              <Flex direction='column' w='450px'>
                <HStack spacing='8px' alignItems='center' mb='16px'>
                  <GradientIcon>
                    <CheckSharpIcon
                      sx={{ fontSize: '18px', fill: 'url(#linearColors)' }}
                    />
                  </GradientIcon>
                  <Text>近くに切磋琢磨できる仲間がいない</Text>
                </HStack>
                <HStack spacing='8px' alignItems='center' mb='16px'>
                  <GradientIcon>
                    <CheckSharpIcon
                      sx={{ fontSize: '18px', fill: 'url(#linearColors)' }}
                    />
                  </GradientIcon>
                  <Text>
                    自分の作品が欲しいけど何を作ったら良いか分からない
                  </Text>
                </HStack>
                <HStack spacing='8px' alignItems='center'>
                  <GradientIcon>
                    <CheckSharpIcon
                      sx={{ fontSize: '18px', fill: 'url(#linearColors)' }}
                    />
                  </GradientIcon>
                  <Text>お金にならないから時間が取れない</Text>
                </HStack>
              </Flex>
            </Flex>
            <HStack
              spacing='16px'
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              fontSize='24px'
              justifyContent='center'
              alignItems='center'
              mb='24px'
            >
              <Text>つまり...</Text>
              <Text color='red'>
                作りきるまでモチベーションが続かない！！！
              </Text>
            </HStack>
          </Flex>
          <Flex direction='column' mb='56px'>
            <Flex
              alignItems='center'
              fontSize='32px'
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              justifyContent='center'
              direction='column'
              mb='40px'
            >
              <Text>作りきるまでモチベーションを持ち続ける３つの仕組み</Text>
            </Flex>
            <Flex direction='column' alignItems='center'>
              <Flex justifyContent='center' alignItems='flex-start' w='1200px'>
                <Flex w='33%' alignItems='center' direction='column'>
                  <Flex
                    w='200px'
                    h='200px'
                    bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                    borderRadius='full'
                    mb='16px'
                    position='relative'
                  >
                    <Image
                      objectFit='cover'
                      alt=''
                      src='https://user-images.githubusercontent.com/66903388/213921435-5764b775-b028-4fb6-9f9c-d06dd78368b9.png'
                      position='absolute'
                      top='0'
                      left='0'
                      right='0'
                      bottom='0'
                      margin='auto'
                    />
                  </Flex>
                  <Flex
                    alignItems='center'
                    fontSize='20px'
                    fontWeight='bold'
                    bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                    bgClip='text'
                    justifyContent='center'
                    direction='column'
                    mb='16px'
                  >
                    <Text>賞金を目指して争う</Text>
                    <Text>自分のお金を賭けて戦う</Text>
                  </Flex>
                  <Flex direction='column' fontSize='14px'>
                    <Text>集めた参加費から賞金が決まるコンテスト形式</Text>
                    <Text>作らないと損という意識で本気度が上がる。</Text>
                  </Flex>
                </Flex>
                <Flex w='33%' alignItems='center' direction='column'>
                  <Flex
                    w='200px'
                    h='200px'
                    bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                    borderRadius='full'
                    mb='16px'
                    position='relative'
                  >
                    <Image
                      objectFit='cover'
                      alt=''
                      src='https://user-images.githubusercontent.com/66903388/213921284-5c55f682-864f-46dc-9328-6da868379cc9.png'
                      position='absolute'
                      top='0'
                      left='0'
                      right='0'
                      bottom='0'
                      margin='auto'
                    />
                  </Flex>
                  <Flex
                    alignItems='center'
                    fontSize='20px'
                    fontWeight='bold'
                    bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                    bgClip='text'
                    justifyContent='center'
                    direction='column'
                    mb='16px'
                  >
                    <Text>ランキングやポイントを</Text>
                    <Text>グラフで可視化</Text>
                  </Flex>
                  <Flex direction='column' fontSize='14px'>
                    <Text>ランキングやポイントが可視化されることで</Text>
                    <Text>競争心が煽られる</Text>
                  </Flex>
                </Flex>
                <Flex w='33%' alignItems='center' direction='column'>
                  <Flex
                    w='200px'
                    h='200px'
                    bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                    borderRadius='full'
                    mb='16px'
                    position='relative'
                  >
                    <Image
                      objectFit='cover'
                      alt=''
                      src='https://user-images.githubusercontent.com/66903388/213921311-d92f966d-4383-41bc-8c88-fd0257079d80.png'
                      position='absolute'
                      top='0'
                      left='0'
                      right='0'
                      bottom='0'
                      margin='auto'
                    />
                  </Flex>
                  <Flex
                    alignItems='center'
                    fontSize='20px'
                    fontWeight='bold'
                    bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
                    bgClip='text'
                    justifyContent='center'
                    direction='column'
                    mb='16px'
                  >
                    <Text>第三者から客観的な</Text>
                    <Text>レビューを貰える</Text>
                  </Flex>
                  <Flex direction='column' fontSize='14px'>
                    <Text>作品にレビューをもらうことで</Text>
                    <Text>自分の課題が明確になる</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction='column' mb='56px'>
            <Flex
              alignItems='center'
              fontSize='32px'
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              justifyContent='center'
              direction='column'
              mb='40px'
            >
              <Text>ご利用の流れ</Text>
            </Flex>
            <Flex direction='column' alignItems='center'>
              <Flex direction='column' w='600px'>
                <Flex bg='gray.200' p='16px' w='100%'>
                  <Image
                    src='https://user-images.githubusercontent.com/66903388/213908249-7bd45ba6-cc72-4b18-bef5-abb4c3a539a6.png'
                    alt=''
                    w='120px'
                    h='100px'
                    objectFit='cover'
                    mr='16px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='bold' mb='16px'>
                      アカウント・プロフィールを登録する
                    </Text>
                    <Text fontSize='14px'>
                      各種SNSログインまたはメールアドレスログインをしたら、まずは自分のプロフィール情報を登録しましょう。
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <GradientIcon>
                <ArrowDropDownSharpIcon
                  sx={{ fontSize: '80px', fill: 'url(#linearColors)' }}
                />
              </GradientIcon>
              <Flex direction='column' w='600px'>
                <Flex bg='gray.200' p='16px' w='100%'>
                  <Image
                    src='https://user-images.githubusercontent.com/66903388/213908252-f7be6df5-8147-4586-880f-594807a8a212.png'
                    alt=''
                    w='120px'
                    h='100px'
                    objectFit='cover'
                    mr='16px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='bold' mb='16px'>
                      参加したいプロジェクトを探す
                    </Text>
                    <Text fontSize='14px'>
                      専門とタイトル、ルールを参考にして、募集中のプロジェクトから参加したいものを選ぶ。
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <GradientIcon>
                <ArrowDropDownSharpIcon
                  sx={{ fontSize: '80px', fill: 'url(#linearColors)' }}
                />
              </GradientIcon>
              <Flex direction='column' w='600px'>
                <Flex bg='gray.200' p='16px' w='100%'>
                  <Image
                    src='https://user-images.githubusercontent.com/66903388/213908253-84164ce8-8c1d-46cc-a1bd-f330d2ebf549.png'
                    alt=''
                    w='120px'
                    h='100px'
                    objectFit='cover'
                    mr='16px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='bold' mb='16px'>
                      参加ポイントを支払い、プロジェクトに参加する
                    </Text>
                    <Text fontSize='14px'>
                      参加するためには参加ポイントが必要になります。参加フォームと支払情報ページからポイント購入が可能になります。
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <GradientIcon>
                <ArrowDropDownSharpIcon
                  sx={{ fontSize: '80px', fill: 'url(#linearColors)' }}
                />
              </GradientIcon>
              <Flex direction='column' w='600px'>
                <Flex bg='gray.200' p='16px' w='100%'>
                  <Image
                    src='https://user-images.githubusercontent.com/66903388/213908255-0546275e-f929-495e-8005-8629230605ed.png'
                    alt=''
                    w='120px'
                    h='100px'
                    objectFit='cover'
                    mr='16px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='bold' mb='16px'>
                      テーマを元にオリジナル作品を制作する。
                    </Text>
                    <Text fontSize='14px'>
                      参加したプロジェクトのルールを守り、作品を制作しましょう。他の参加者と協力しながら立ち止まることなく作ることができます。
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <GradientIcon>
                <ArrowDropDownSharpIcon
                  sx={{ fontSize: '80px', fill: 'url(#linearColors)' }}
                />
              </GradientIcon>
              <Flex direction='column' w='600px'>
                <Flex bg='gray.200' p='16px' w='100%'>
                  <Image
                    src='https://user-images.githubusercontent.com/66903388/213908257-6e16b9c6-5485-48e6-b303-b2c2cfaef27f.png'
                    alt=''
                    w='120px'
                    h='100px'
                    objectFit='cover'
                    mr='16px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='bold' mb='16px'>
                      ３名以上の作品のレビュー投票を行う
                    </Text>
                    <Text fontSize='14px'>
                      ランダムに選ばれた３名以上の作品をルールを守ってレビューしましょう。このレビューによって順位が決まります。
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <GradientIcon>
                <ArrowDropDownSharpIcon
                  sx={{ fontSize: '80px', fill: 'url(#linearColors)' }}
                />
              </GradientIcon>
              <Flex direction='column' w='600px'>
                <Flex bg='gray.200' p='16px' w='100%'>
                  <Image
                    src='https://user-images.githubusercontent.com/66903388/213908258-bb9a3f83-dc98-4d39-9f7b-6a3a7184f954.png'
                    alt=''
                    w='120px'
                    h='100px'
                    objectFit='cover'
                    mr='16px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='bold' mb='16px'>
                      上位に選ばれると賞金ポイントをゲットできる
                    </Text>
                    <Text fontSize='14px'>
                      投票期間が終了したらレビュー結果から順位が決まり、集まったポイントから賞金ポイントが上位者に割り当てられる。
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <GradientIcon>
                <ArrowDropDownSharpIcon
                  sx={{ fontSize: '80px', fill: 'url(#linearColors)' }}
                />
              </GradientIcon>
              <Flex direction='column' w='600px'>
                <Flex bg='gray.200' p='16px' w='100%'>
                  <Image
                    src='https://user-images.githubusercontent.com/66903388/213908260-5ffd9c01-2413-4a43-a8db-96f22b2a28d6.png'
                    alt=''
                    w='120px'
                    h='100px'
                    objectFit='cover'
                    mr='16px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='18px' fontWeight='bold' mb='16px'>
                      ポイントを使ったり、作品を世間に広めよう
                    </Text>
                    <Text fontSize='14px'>
                      ポイントはお金に換金することもできます。また、作品を世間に広めたり購入者を見つけてくるサービスもあります。
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction='column' mb='56px'>
            <Flex
              alignItems='center'
              fontSize='32px'
              fontWeight='bold'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              justifyContent='center'
              direction='column'
              mb='40px'
            >
              <Text>まずはアカウント登録からはじめよう</Text>
            </Flex>
            <Flex justifyContent='center' mb='16px'>
              <Flex justifyContent='center'>
                <PrimaryButton onClick={() => router.push('/signup')}>
                  今すぐはじめる
                </PrimaryButton>
              </Flex>
            </Flex>
            <Flex
              justifyContent='center'
              bgGradient='linear(to-b, mainGradient.100, mainGradient.200)'
              bgClip='text'
              fontWeight='bold'
              cursor='pointer'
              onClick={() => router.push('/signin')}
            >
              <Text>アカウントを持っている方</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Image
        objectFit='cover'
        w='200px'
        src='https://user-images.githubusercontent.com/66903388/211488312-9300a760-999a-4407-bab9-8517ccd4c4a4.png'
        alt=''
        mr='8px'
        position='fixed'
        top='40px'
        left='60px'
        onClick={() => router.push('/')}
        cursor='pointer'
      />
    </>
  )
}

export default ContentsIndex
