import Head from 'next/head';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanity Amazona</title>
        <meta
          name="description"
          content="The ecommerce website by next and amzona"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Sanity Amazona
      </Typography>
    </div>
  );
}
