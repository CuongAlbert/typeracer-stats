import { config, Stack, TamaguiProvider, XStack } from '@my/ui'
import Header from '@my/ui/src/Header'
import HomeContent from '@my/ui/src/HomeContent'
import SideBar from '@my/ui/src/SideBar'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen(props: { url: string }) {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Stack>
        <Header />
        <XStack display="flex">
          <SideBar />
          <Stack w="100%" pl={220} bg={'#13161E'}>
            <HomeContent url={props.url} />
          </Stack>
        </XStack>
      </Stack>
    </TamaguiProvider>
  )
}
