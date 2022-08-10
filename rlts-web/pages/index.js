import Head from 'next/head'
import Image from 'next/image'
import DataExplore from "../components/explore";
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RLTS On IPFS/Filecoin</title>
        <meta name="description" content="RLTS on IPFS/Filecoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.iucnredlist.org/" rel={"noreferrer"} target={"_blank"}>Global Ecological Protection!</a>
        </h1>

        <p className={styles.description}>
          Build on IPFS/Filecoin
        </p>

        <DataExplore/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
