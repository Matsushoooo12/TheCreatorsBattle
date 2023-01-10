import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const categories = [
    "UI/UXデザイン",
    "ウェブアプリ"
]

const DetailProject = () => {
  return (
    <Flex direction="column" py="56px" px="80px">
        <Flex w="100%" bg="white" p="24px" borderRadius="lg" direction="column">
            <Image w="100%" h="385px" bg="gray.400" alt="" borderRadius="lg" mb="32px" />
            <Flex alignItems="center" mb="8px">
                <Text fontSize="12px" fontWeight="bold" borderRadius="md" p="4px 12px" bgGradient="linear(to-r, purple.300, purple.600)" mr="8px">募集期間</Text>
                <Text fontWeight="bold" fontSize="12px" color="gray.400">{categories?.map((c, index) => index === 0 ? c : `・${c}`)}</Text>
            </Flex>
            <Heading color="blue.800" fontSize="22px" mb="32px">筋トレが楽しくなってもりもり筋肉がつくアプリケーション</Heading>
            <Flex color="black" mb="32px" direction="column">
                <Text>未来の社会に進むにつれ当然ながらテクノロジーの発展は必要不可欠なものとなります。しかし発展しすぎたテクノロジーは果たして人類が使いこなせるものなのでしょうか？</Text>
                <Text>いま世界中で「気候危機」が叫ばれています。世界平均気温は工業化前と比べて、2011～2020で1.09℃上昇していると言われ、今世紀末までには最大5.7℃の上昇が予測されています。そのような中、様々なレベルで具体的な対策が検討され、既に実施も進んでいるものもありますが、その多くはエコな素材の使用であったりリサイクルに関するものが多いのではないでしょうか。</Text>
                <Text>もしかしたら。エンジニアリングの力で気候危機を回避できるかもしれない。積極的にテクノロジーの力を借りて気候危機の回避にチャレンジできるアイデアがあるのではないか？ Future Design Challengeではともに問題解決に取り組む世界中の若い才能あふれるクリエーターとイノベーターによるアイデアを募集します。</Text>
            </Flex>
            <Flex direction="column" mb="32px">
                <Text fontSize="18px" fontWeight="bold" color="blue.800" mb="10px">参加におすすめな人</Text>
                <Flex color="black" direction="column">
                    <Text>はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。</Text>
                    <Text>next.jsだいすき！！</Text>
                    <Text>将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。</Text>
                </Flex>
            </Flex>
            <Flex direction="column" mb="32px">
                <Text fontSize="18px" fontWeight="bold" color="blue.800" mb="10px">ルール</Text>
                <Flex color="black" direction="column">
                    <Text>はじめまして、ずっきです。普段はとあるSaas企業でデザインエンジニアをしています。</Text>
                    <Text>next.jsだいすき！！</Text>
                    <Text>将来は、個人開発で一発当てたい。野菜社主催 きゅうりハッカソン優勝。</Text>
                </Flex>
            </Flex>
            <Flex direction="column">
                <Text fontSize="18px" fontWeight="bold" color="blue.800" mb="10px">提出形式</Text>
                <Flex color="black" direction="column">
                    <Text>作品URL</Text>
                    <Text>作品概要</Text>
                    <Text>作品タイトル</Text>
                    <Text>作品が分かるスクショ動画</Text>
                    <Text>使用技術</Text>
                    <Text>Githubリンク</Text>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default DetailProject