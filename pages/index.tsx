import Link from 'next/link'
import Layout from '@/components/Layout';
import { GetServerSideProps } from 'next';
import Home from '@/components/modules/home';
import Provider, { MyContext } from '@/store/index';
import { useContext } from 'react';

const IndexPage = (props) => {
  const {userInfo, simpleInfo } = props;
  const store = useContext(MyContext);
  console.log(store, ';store -- index');
  
  return (
    <Provider data={{userInfo, simpleInfo}}>
      <Layout title="next learn">
        <Home />
      </Layout>
    </Provider>
    
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async ctx => {
  return {
    props: {
      userInfo: {
        name: 'zhang san',
        age: 18,
        address: 'wo ge guang change',
        group: 'group 1'
      },
      simpleInfo: {
        zipcode: 95008,
        is_shipping_order: true,
        city: 'city1',
        items: [{
          name: '苹果',
          id: 1,
          quantity: 1
        }]
      }
    }
  }
}




