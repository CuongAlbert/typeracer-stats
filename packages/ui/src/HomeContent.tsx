import React from 'react'
import { Image, Stack, XStack, YStack, Text } from 'tamagui'

import { BsBraces } from 'react-icons/bs'
import Testing from './Testing'

export default function HomeContent(props: { url: string }) {
  return (
    <Stack maxWidth={1024} marginHorizontal="auto" pt="60px" w="100%" h="100vh">
      <XStack w="100%" mt={30} ai={'center'}>
        <XStack w={36} h={36} borderRadius={4} ai={'center'} jc={'center'}>
          <BsBraces color="#257CDC" size={70} />
        </XStack>
        <Text fontSize={30} fontWeight="bold" color="white" ml="$2">
          Leetcode Contest
        </Text>
      </XStack>
      <Text fontSize={20} fontWeight="semibold" color="#6C707A" mt="$2" ml="$8">
        LeaderBoard
      </Text>

      <Testing url={props.url} />
    </Stack>
  )
}
