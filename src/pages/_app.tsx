import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from "../components/RootLayout"
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
console.log(router.pathname)

  return (
    <>
    { 
    router.pathname==="/login"||router.pathname==="/register"?
    
    <Component {...pageProps} />
    :
    <RootLayout>
  <Component {...pageProps} />
  </RootLayout>}
    </>

  
  )

}
