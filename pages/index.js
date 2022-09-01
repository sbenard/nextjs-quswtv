import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Check <code className={styles.code}>exercices/</code> folder.
        </p>
      </main>
    </div>
  );
}
