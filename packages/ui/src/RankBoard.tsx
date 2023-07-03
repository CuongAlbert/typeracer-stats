import { XStack, YStack, Text } from 'tamagui'
import React from 'react'
import RankMember from './RankMember'

export default function RankBoard() {
  return (
    <YStack>
      <XStack
        w="100%"
        mt={30}
        display="flex"
        bc="#1D212C"
        py="$4"
        px="$3"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      >
        <XStack w={36}>
          <Text fontSize={12} color="#6C707A"></Text>
        </XStack>

        <XStack w="36%">
          <Text fontSize={12} color="#6C707A">
            Name
          </Text>
        </XStack>

        <XStack w="12%">
          <Text fontSize={12} color="#6C707A">
            Average
          </Text>
        </XStack>

        <XStack w="12%">
          <Text fontSize={12} color="#6C707A">
            Best
          </Text>
        </XStack>

        <XStack w="12%">
          <Text fontSize={12} color="#6C707A">
            Races
          </Text>
        </XStack>
        <XStack w="12%">
          <Text fontSize={12} color="#6C707A">
            Wins
          </Text>
        </XStack>
        <XStack w="12%">
          <Text fontSize={12} color="#6C707A">
            Winrate
          </Text>
        </XStack>
      </XStack>

      <RankMember
        name="HoangCoder"
        avarage={54}
        best={43}
        races={544}
        wins={4324}
        winrate={42343}
      />

      <RankMember
        name="HoangCoder"
        avarage={54}
        best={43}
        races={544}
        wins={4324}
        winrate={42343}
      />
      <RankMember
        name="HoangCoder"
        avarage={54}
        best={43}
        races={544}
        wins={4324}
        winrate={42343}
      />
      <RankMember
        name="HoangCoder"
        avarage={54}
        best={43}
        races={544}
        wins={4324}
        winrate={42343}
      />
      <RankMember
        name="HoangCoder"
        avarage={54}
        best={43}
        races={544}
        wins={4324}
        winrate={42343}
      />
    </YStack>
  )
}
