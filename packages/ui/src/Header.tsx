import { Stack, Text, XStack, Image, Label, Input } from 'tamagui'

import { FiSearch } from 'react-icons/fi'
import { BsSunFill, BsFillMoonStarsFill, BsBell } from 'react-icons/bs'

export default function Header() {
  return (
    <XStack
      w={'100%'}
      h={60}
      bg={'#1D212C'}
      position="fixed"
      t={0}
      zIndex={40}
      px={25}
      display="flex"
      ai={'center'}
    >
      <XStack w={220}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg',
            width: 30,
            height: 30,
          }}
          borderRadius={20}
        />
        <Text fontWeight="600" fontSize={20} col="#fff" ml={10} mt={2}>
          Rezza.mem
        </Text>
      </XStack>

      <XStack
        maxWidth={1024}
        w={'100%'}
        marginHorizontal="auto"
        display="flex"
        ai="center"
        jc="space-between"
      >
        <XStack
          w={300}
          borderRadius={100}
          bg="#2C3340"
          padding="$2.5"
          px="$3"
          ai={'center'}
          jc={'space-between'}
        >
          <Text fontSize={12} col="white">
            Search...
          </Text>
          <FiSearch color="white" />
        </XStack>

        <XStack ai={'center'}>
          <XStack mr="$4" cursor="pointer">
            <BsBell color="white" size={16} />
          </XStack>
          <XStack bg="#2C3340" borderRadius={100} p="$1">
            <XStack p="$2.5">
              <BsSunFill color="white" />
            </XStack>
            <XStack bg="#3E4553" p="$2.5" borderRadius={100}>
              <BsFillMoonStarsFill color="white" />
            </XStack>
          </XStack>
        </XStack>
      </XStack>
    </XStack>
  )
}
