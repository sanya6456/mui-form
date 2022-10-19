import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { NextPage } from 'next';

type Props = {
  Component: NextPage;
  pageProps: {
    dehydratedState?: unknown;
  };
};


const MyApp = ({ Component, pageProps: { dehydratedState, ...pageProps } }: Props) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Hydrate state={dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
