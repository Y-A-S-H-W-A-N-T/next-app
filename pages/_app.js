import Layout from "@/components/layout"


export default function App({ Component, pageProps }) {
  return(
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
