import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import QRCode from "./components/QR/QRCode";

function App() {
  const defaultQRData = "https://eduardoeliaschacon-portfolio.vercel.app/";

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-1 items-center justify-center">
        <QRCode initialData={defaultQRData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
