import Link from 'next/link'
import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { Button, Select, Space } from 'antd';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <div>
      <Space direction="vertical">
        <Button type="primary">click</Button>
        <Select placeholder="select">
          <Select.Option value={1}>next</Select.Option>
          <Select.Option value={2}>nuxt</Select.Option>
        </Select>
      </Space>
    </div>
  </Layout>
)

export default IndexPage
