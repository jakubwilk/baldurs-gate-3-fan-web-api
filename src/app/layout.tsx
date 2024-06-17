import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { IBM_Plex_Serif } from 'next/font/google'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Header } from 'features/common/components'
import { StoreProvider } from 'features/common/redux'

import '@mantine/core/styles.css'
import './globals.css'

const ibmPlexSerif = IBM_Plex_Serif({ subsets: ['latin-ext'], weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang={'en'}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={ibmPlexSerif.className}>
        <StoreProvider>
          <MantineProvider>
            <Header />
            {children}
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
