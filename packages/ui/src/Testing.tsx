import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { XStack, YStack, Text } from 'tamagui'

const queryClient = new QueryClient()

export default function Testing(props: { url: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Example url={props.url} />
    </QueryClientProvider>
  )
}
export function Example(props: { url: string }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch(props.url).then((res) => res.json()),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  console.log(data)

  return (
    <YStack>
      <XStack
        w="100%"
        mt={40}
        display="flex"
        bc="#1D212C"
        py="$5"
        px="$3"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      >
        {Object.keys(data[0]).map((key, idx) => (
          // <XStack w="33%" key={idx} alignItems="center">
          <Text w="33%" key={idx} fontSize={12} color="#6C707A">
            {key.toUpperCase()}
          </Text>
          // </XStack>
        ))}
      </XStack>
      {data.map((c, idx) => (
        <XStack
          w="100%"
          display="flex"
          bc={idx % 2 === 1 ? '#1d212c' : ''}
          py="$4"
          px="$3"
          ml={7}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          borderBottomWidth={1}
          borderBottomColor={'#1D212C'}
          key={idx}
        >
          {Object.values(c).map((v, idx) => (
            // <XStack w="33%" display="flex" key={idx}>
            <Text w="33%" key={idx} display="flex" fontSize={12} color="#6C707A">
              {v}
            </Text>
            // </XStack>
          ))}
        </XStack>
      ))}
    </YStack>
  )
}
