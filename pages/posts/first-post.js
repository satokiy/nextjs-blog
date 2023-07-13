import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy='lazyOnload'
                onLoad={() => console.log(`script loaded correctly`)}
                />
            </Head>
            <h2>
                <Link href='/'>Back to Home</Link>
            </h2>
            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="Your Name"
            ></Image>
        </Layout>
    )

}