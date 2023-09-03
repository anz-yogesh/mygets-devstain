import { msalInstance } from '@/config/authConfig'
import '@/styles/globals.css'
import { MsalProvider } from '@azure/msal-react'
import {
  FluentProvider,
  RendererProvider,
  SSRProvider,
  createDOMRenderer,
  teamsLightTheme,
  type GriffelRenderer,
} from '@fluentui/react-components'
import type { AppProps } from 'next/app'
import React from 'react'

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer }

function MyApp({ Component, pageProps, renderer }: EnhancedAppProps) {
  return (
    // 👇 Accepts a renderer from <Document /> or creates a default one
    //    Also triggers rehydration a client
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={teamsLightTheme}>
          <MsalProvider instance={msalInstance}>
            <Component {...pageProps} />
          </MsalProvider>
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  )
}

export default MyApp
