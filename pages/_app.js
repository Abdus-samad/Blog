import '../styles/index.css';
import 'tailwindcss/tailwind.css';
import Nav from '../src/components/layout/Nav';
import Footer from '../src/components/layout/footer';
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
