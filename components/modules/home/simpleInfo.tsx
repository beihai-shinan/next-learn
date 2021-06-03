import React, { memo } from 'react';

interface IData {
  [k: string]: any;
}                                                                                  
type Props = Partial<{
  children: React.ReactNode
}>
type Props1 = Props & IData
import { useMyData } from '@/store/index';

export default memo(function SimpleInfo({}: Props1) {
  console.log('SimpleInfo, render');
  const { store } = useMyData()
  return (
    <div style={{border: "1px solid #eee", borderRadius: 10, padding: 10}}>
      <h4>SimpleInfo 购物车产品列表</h4>
      <div>
        {
          store?.simpleInfo?.items?.map((item, index) => {
            return (
              <div key={index}>{item.name}</div>
            )
          })
        }
      </div>
    </div>
  )
})