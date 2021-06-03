import Link from 'next/link'
import Layout from '../components/Layout'
import Provider, { useMyData, MyContext } from '@/store/index';

const AboutPage = () => {
  // const { store } = useMyData();
  return (
    <Layout title="About">
      <h1>About</h1>

      <p>This is the about page</p>
      <MyContext.Consumer>
        {
          ({ store, dispatch }) => {
            console.log(store, 'consumer');
            return (
              <div>{store?.simpleInfo?.zipcode}</div>
            )
          }
        }
      </MyContext.Consumer>
    </Layout>
  )
  
}

export default AboutPage
