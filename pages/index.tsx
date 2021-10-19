import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import userService from '@/service/userInfo'
import { Card, List } from 'antd'

const IndexPage = () => {
  const getData = async () => {
    const res = await userService.getUserInfo()
    console.log(res, 'res');

  }

  useEffect(() => {
    getData()
  })

  return (
    <div>
      <Card >
        <List>
          <List.Item></List.Item>
        </List>
      </Card>
    </div>

  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async ctx => {

  return {
    props: {}
  }
}




