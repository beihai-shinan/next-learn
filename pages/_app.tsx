import 'antd/dist/antd.min.css';
import 'assets/variable.less'
import { Layout } from 'antd'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
