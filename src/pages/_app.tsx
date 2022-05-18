import 'bootstrap/dist/css/bootstrap.min.css';
import { AutenticacaoProvider } from '../contexts/AutenticacaoContext';
import '../../src/styles/style.css'
function MyApp({ Component, pageProps }) {
  return (

      <AutenticacaoProvider>
        <Component {...pageProps} />
      </AutenticacaoProvider>

  )
}

export default MyApp
