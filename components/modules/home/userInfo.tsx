import { useMyData } from '@/store/index';
import {Button} from 'antd'
import React from 'react';

export default function UserInfo() {
  const { store, dispatch, update } = useMyData();
  console.log('UserInfo render');
  
  const handleUpdate = (userInfo) => (e: React.MouseEvent) => {
    update({
      ...userInfo,
      name: "fushan"
    })
  }

  return (
    <div style={{border: "1px solid #eee", borderRadius: 10, padding: 10}}>
      <h4>UserInfo 用户信息</h4>
      <div>
        {store?.userInfo?.name}
      </div>
      <Button type="primary" onClick={handleUpdate(store?.userInfo)}>修改信息</Button>
    </div>
  )
}