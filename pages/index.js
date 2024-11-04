import { Fetcher } from "@/components/Fetcher";
import Head from "next/head";



export default function Home() {
  return  <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Hello World</h1>
      <Fetcher url="http://localhost:3001/users">
      </Fetcher>
      </>
}
