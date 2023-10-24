import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { XStack, YStack, Text } from 'tamagui'

const queryClient = new QueryClient()

export default function Testing() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}
export function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('http://localhost:3000/api/ranking').then((res) => res.json()),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error
  console.log(data)

  return (
    <YStack>
      <XStack
        w="100%"
        mt={20}
        display="flex"
        bc="#1D212C"
        py="$2"
        px="$1"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      >
        {Object.keys(data[0]).map((key) => (
          <XStack w="10%">
            <Text fontSize={12} color="#6C707A" textOverflow="break-word" alignItems="center">
              {key}
            </Text>
          </XStack>
        ))}
      </XStack>
      {data.map((c) => (
        <XStack
          w="100%"
          display="flex"
          bc="#1d212c"
          py="$4"
          px="$3"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          borderBottomWidth={1}
          borderBottomColor={'#1D212C'}
        >
          {Object.values(c).map((v) => (
            <XStack w="11%" display="flex">
              <Text fontSize={10} color="#6C707A" textOverflow="break-word" alignItems="center">
                {v}
              </Text>
            </XStack>
          ))}
        </XStack>
      ))}
    </YStack>
  )
}
