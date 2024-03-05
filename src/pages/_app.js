import "@/i18n";
import "@/styles/globals.css";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Suspense>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
