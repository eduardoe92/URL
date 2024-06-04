import QRCode from "./components/QR/QRCode";

function App() {
    const defaultQRData = "https://eduardoeliaschacon-portfolio.vercel.app/";

    return (
        <QRCode initialData={defaultQRData} />
    );
}

export default App;
