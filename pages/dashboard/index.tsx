import Layout from '../../components/layouts/Layout'
import { HeaderText } from '../../components/texts';
import Head from 'next/head'

const Dashboard = () => {
    return (
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
            Dashboard Page
          </div>
        </>
      )
}

Dashboard.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
export default Dashboard