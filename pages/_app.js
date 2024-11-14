import { Header } from "@/components/Header";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Toaster/>
  </>
}
