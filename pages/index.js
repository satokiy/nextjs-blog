import Head from 'next/head';
import Layout, { setTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{setTitle}</title>
      </Head>
      <section className={utilStyles.headhingMd}>
        <p>Hello, I'm Shu. I'm a software engineer and a translator(English/Japanese). You can Contact me on Twitter.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

    </Layout>
   )}
