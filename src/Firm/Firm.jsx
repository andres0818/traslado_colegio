import React, { useContext } from "react";
import SignatureCanvas from "react-signature-canvas";
import { dispatchDocContext, doctContext } from "../context/Context";
import "./Firm.scss";

function Firm() {
  const { setDoc } = useContext(dispatchDocContext);
  const { doc } = useContext(doctContext);

  const canvasRef = React.useRef(null);

  const clearCanvas = (e) => {
    e.preventDefault();
    canvasRef.current.clear();
  };

  const saveCanvas = (e) => {
    e.preventDefault();

    const signatureData = canvasRef.current.toDataURL();
    setDoc({ ...doc, firm: signatureData });
  };

  return (
    <div>
      <SignatureCanvas
        ref={canvasRef}
        penColor="black"
        canvasProps={{ width: 250, height: 200, className: "sigCanvas" }}
      />
      <div className="d-flex gap-2">
        <button className="btn btn-danger" onClick={clearCanvas}>
          Limpiar
        </button>
        <button className="btn btn-success" onClick={saveCanvas}>
          Guardar
        </button>
      </div>
    </div>
  );
}

export default Firm;
