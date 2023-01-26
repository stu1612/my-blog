import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
  const router = useRouter();
  console.log(router);
  return (
    <Head>
      <title>My Blog | Stuart Bolderson</title>
      <meta name="description" content="Blog site for Stuart Bolderson" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
