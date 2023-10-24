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
        py="$4"
        px="$3"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      >
        {Object.keys(data[0]).map((key, idx) => (
          <XStack w="33%" key={idx}>
            <Text fontSize={12} color="#6C707A" textOverflow="break-word" alignItems="center">
              {key.toUpperCase()}
            </Text>
          </XStack>
        ))}
      </XStack>
      {data.map((c, idx) => (
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
          key={idx}
        >
          {Object.values(c).map((v, idx) => (
            <XStack w="33%" display="flex" key={idx}>
              <Text
                fontSize={12}
                color="#6C707A"
                textOverflow="break-word"
                alignItems="center"
                justifyContent="center"
              >
                {v}
              </Text>
            </XStack>
          ))}
        </XStack>
      ))}
    </YStack>
  )
}
