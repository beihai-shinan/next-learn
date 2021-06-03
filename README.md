## react context

## 怎么用

```js
//store actions.ts
export default {
  "UPDATE_NAME": "UPDATE_NAME",
  "ADD": "ADD",
}
```

```js
//store index.tsx
import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';
import ACTIONS from './actions';
import { IState, MyDataType, IProvider } from '@/types/store';

export const MyContext = createContext<any>({name: "1"});

const Provider = ({children, data}:IProvider) => {
  let [store, dispatch] = useReducer(reducer, data || initialState);

  const update = (userInfo) => {
    dispatch({
      type: ACTIONS.UPDATE_NAME,
      payload: userInfo
    })
  }

  const addItems = (cardInfo) => {
    dispatch({
      type: ACTIONS.ADD,
      payload: {
        ...store.simpleInfo,
        items: [...store.simpleInfo?.items!, cardInfo]
      }
    })
  }

  return (
    <MyContext.Provider value={{store, dispatch, update, addItems}}>
      {children}
    </MyContext.Provider>
  )
}
export default Provider;

export const useMyData = ():MyDataType => {
  return useContext(MyContext);
}
```

```js
//store reducer.ts
import ACTIONS from './actions';
import { IState } from '@/types/store';

export const initialState:Partial<IState> = {
  userInfo: {},
  simpleInfo: {}
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ACTIONS.UPDATE_NAME: {
      const newState = {...state};
      const info = action.payload;
      newState.userInfo = info
      return newState;
    }
    case ACTIONS.ADD: {
      const newState = {...state};
      const info = action.payload;
      newState.simpleInfo = info
      return newState;
    } 
    default: {
      return state;
    }
  }
}

export default reducer;
```



```js
// pages index.tsx
import Link from 'next/link'
import Layout from '@/components/Layout';
import { GetServerSideProps } from 'next';
import Home from '@/components/modules/home';
import Provider, { MyContext } from '@/store/index';
import { useContext } from 'react';

const IndexPage = (props) => {
  const {userInfo, simpleInfo } = props;
  
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
```

```js
// home index.tsx
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
          })}>添加购物车
		</Button>
        <SimpleInfo />
      </Space>
    </div>
  )
}
```



## 为什么用

- 多层`props`维护成本大, 效率低, 出错率高
- 和`ui`解耦
- 使用方便, 迁移方便

```js
<a {...props}>
	<b {...props} {...state} /> 
	<c {...props} />
</a>
```



## 注意事项

- provider 和context 不能平级使用
- 封装了dispatch
- 使用memo

## 结合ts

```js
interface IState
type a & b
interface IData {
  [k: string]: any;
} 
```



## 跟下项目代码

CartConsumer 组件