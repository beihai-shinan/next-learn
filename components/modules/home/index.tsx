import { Button, Space } from 'antd';
import UserInfo from './userInfo';
import SimpleInfo from './simpleInfo';
import { useMyData } from '@/store/index';

let id = 0;
export default function Home () {
  const { store, dispatch, addItems } = useMyData()
  console.log('home', store);

  const addItemsToCart = (info) => () => {
    addItems(info)
  }
  
  return (
    <div style={{border: "1px solid #eee", borderRadius: 10, padding: 10}}>
      <h2>home</h2>
      <Space direction="vertical">
        <UserInfo />
        <div>
          <span>购物车数量: </span><span>{store?.simpleInfo?.items?.length}</span>
        </div>
        <Button type="primary" 
          onClick={addItemsToCart({
            id: id,
            name:`${id++} card`,
            quantity: 0
          })}>添加购物车</Button>
        <SimpleInfo />
      </Space>
    </div>
  )
}