import { ProductProvider } from "@/context/ProductContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}
