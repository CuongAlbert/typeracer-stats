import { Stack, YStack, XStack, Text } from 'tamagui'

import { BsBraces } from 'react-icons/bs'

export default function SideBar() {
  return (
    <Stack w={220} h="100vh" bg="#181A25" position="fixed" left={0} zIndex={30} pt="60px">
      <YStack p="$4" px="$5">
        <XStack w="100%" bg="#2A2F3B" p="$3" borderRadius={8}>
          <XStack bg="#3B404B" w={16} h={16} borderRadius={4} ai={'center'} jc={'center'}>
            <BsBraces color="#257CDC" size={12} />
          </XStack>
          <Text fontSize={12} fontWeight="500" color="white" ml="$2">
            Typeracer
          </Text>
        </XStack>
        <Text fontSize={12} fontWeight="500" color="#6C707A" ml="$6" mt="$3">
          Leader Board
        </Text>
      </YStack>
    </Stack>
  )
}
