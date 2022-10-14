import { NextComponentType, NextPageContext } from 'next'
import { Session } from 'next-auth'

export interface I_app {
  Component: NextComponentType<NextPageContext, any, any>
  pageProps: {}
  Session: Session
}
