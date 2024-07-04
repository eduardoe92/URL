import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import NavBar from "./components/Navbar/Navbar";
import QRCode from "./components/QR/QRCode";

function App() {
  const defaultQRData = "https://eduardoeliaschacon-portfolio.vercel.app/";

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/create"
          element={<QRCode initialData={defaultQRData} />}
        />
        {/* <Route
          path="/profile"
          element={<Profile/>}
        /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
