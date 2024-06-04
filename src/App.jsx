import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import QRCode from "./components/QR/QRCode";

function App() {
  const defaultQRData = "https://eduardoeliaschacon-portfolio.vercel.app/";

  return (
    <>
      <Navbar />
      <QRCode initialData={defaultQRData} />
      <Footer />
    </>
  );
}

export default App;
