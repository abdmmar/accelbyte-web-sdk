/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Accelbyte, CurrencyInfo, DiscoveryConfigData, ItemPagingSlicedResult, UserResponseV3 } from '@accelbyte/sdk'
import { exchangeAuthorizationCode, login } from '~/sdk'

import styles from '../styles/Home.module.css'

const SDK_CONFIG = {
  baseURL: 'http://localhost:3030/api',
  clientId: '77f88506b6174c3ea4d925f5b4096ce8',
  namespace: 'accelbyte',
  redirectURI: 'http://localhost:3030'
}

const sdk = Accelbyte.SDK({
  options: SDK_CONFIG
})

interface TestSdkReturnType {
  currentUser: UserResponseV3 | null | undefined
  listDiscoveryConfigs: DiscoveryConfigData | null | undefined
  listOfCurrencies: CurrencyInfo[] | null | undefined
  listOfItems: ItemPagingSlicedResult | null | undefined
}

export const getServerSideProps: GetServerSideProps<{ data: TestSdkReturnType }> = async ({ req }) => {
  const accessToken = req.cookies.access_token
  const [currentUser, listDiscoveryConfigs, listOfCurrencies, listOfItems] = await Promise.all([
    sdk.IAM.User({
      config: {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    }).getCurrentUser(),
    sdk.AccelbyteConfig.PublicTemplate().getDiscoveryTemplateConfigs(),

    sdk.Platform.Currency().getCurrencies(),
    sdk.Platform.Item().fetchItemsByCriteria({})
  ])

  return {
    props: {
      data: {
        currentUser: currentUser.response?.data || null,
        listDiscoveryConfigs: listDiscoveryConfigs.response?.data || null,
        listOfCurrencies: listOfCurrencies.response?.data || null,
        listOfItems: listOfItems.response?.data || null
      }
    }
  }
}

// Page.
export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useEffect(() => {
    async function exchange() {
      const result = await exchangeAuthorizationCode(sdk, window.location.href)
      if (result) {
        // Reload so we can re-fetch the `currentUser` from the server side.
        window.location.reload()
      }
    }

    exchange()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer">
              By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
            </a>
          </div>
        </div>

        {!data?.currentUser && (
          <div>
            <button onClick={() => login(sdk)}>Log in</button>
          </div>
        )}

        <div className={styles.responses} id="response">
          {Object.keys(data).map(key => (
            <Collapsible key={key} json={data[key as keyof TestSdkReturnType]} title={key} />
          ))}
        </div>
      </main>
    </>
  )
}

// composing components.
function Collapsible(props: { title: string; json: any }) {
  return (
    <details id={'toogle' + props.title}>
      <summary>{props.title}</summary>

      <pre id={props.title}>{JSON.stringify(props.json, null, 2)}</pre>
    </details>
  )
}
