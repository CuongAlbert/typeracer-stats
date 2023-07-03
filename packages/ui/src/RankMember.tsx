import React from 'react'
import { XStack, Text } from 'tamagui'

export default function RankMember({
  name,
  avarage,
  best,
  races,
  wins,
  winrate,
}: {
  name: string
  avarage: number
  best: number
  races: number
  wins: number
  winrate: number
}) {
  return (
    <XStack
      w="100%"
      display="flex"
      bc="#"
      py="$4"
      px="$3"
      borderTopLeftRadius={10}
      borderTopRightRadius={10}
      borderBottomWidth={1}
      borderBottomColor={'#1D212C'}
    >
      <XStack w={36} display="flex" ai={'center'}>
        <Text fontSize={12} color="#6C707A" ml={8}>
          1
        </Text>
      </XStack>

      <XStack w="36%">
        <Text fontSize={12} color="#6C707A">
          {name}
        </Text>
      </XStack>

      <XStack w="12%">
        <Text fontSize={12} color="#6C707A" ml="$1">
          {avarage}
        </Text>
      </XStack>

      <XStack w="12%">
        <Text fontSize={12} color="#6C707A" ml="$1">
          {best}
        </Text>
      </XStack>

      <XStack w="12%">
        <Text fontSize={12} color="#6C707A" ml="$1">
          {races}
        </Text>
      </XStack>
      <XStack w="12%">
        <Text fontSize={12} color="#6C707A" ml="$1">
          {wins}
        </Text>
      </XStack>
      <XStack w="12%">
        <Text fontSize={12} color="#6C707A" ml="$1">
          {winrate} %
        </Text>
      </XStack>
    </XStack>
  )
}
