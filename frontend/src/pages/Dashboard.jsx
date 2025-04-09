import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import QRCodeGenerator from "@/components/QRCodeGenerator";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [qrCodes, setQrCodes] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Bienvenido, {user?.name}</h1>
      <QRCodeGenerator />
      <div className="mt-8">
        {qrCodes.map((qr) => (
          <img key={qr.id} src={qr.url} alt="Código QR" />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
