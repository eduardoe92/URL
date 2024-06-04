import { useState } from "react";
import ActionButtons from "./ActionButtons";
import QRDisplay from "./QRDisplay";
import TextInput from "./TextInput";

const QRCode = () => {
  const [qrData, setQrData] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <section>
        <TextInput setQrData={setQrData} />
        <QRDisplay qrData={qrData} />
        <ActionButtons />
      </section>
    </div>
  );
};

export default QRCode;
