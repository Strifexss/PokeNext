import '../styles/globals.css'
import Cabecalho from "./components/cabecalho"
export default function App({ Component, pageProps }) {
  return(
    <div>
      <Cabecalho/>
      <Component {...pageProps} />
    </div>
  ) 
}
