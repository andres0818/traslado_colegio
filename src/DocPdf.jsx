import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import React, { useContext } from "react";
import { doctContext } from "./context/Context";

const DocPdf = () => {
  const { doc } = useContext(doctContext);

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4">
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontStyle: "italic",
              padding: "50px",
            }}
          >
            <View>
              <View style={{ gap: "30px" }}>
                <Text>{`Medellín,${doc.date} `}</Text>
                <Text>Señores:</Text>
                <Text>FUNDACION BIBE</Text>
                <Text>Ref. Cruce de saldo</Text>
                <Text>
                  Yo {` ${doc?.adultName && doc.adultName} `} identificado(a)
                  con cédula N°
                  {` ${doc?.adultId && doc.adultId} `} autorizo a la FUNDACIÓN
                  BIBE identificada con Nit. 901.651.472-4 que el saldo a favor
                  que tengo por concepto de Guías, del estudiante
                  {` ${doc?.student && doc.student} `} del grado
                  {` ${doc?.grade && doc.grade} `}, sea trasladado al COLEGIO
                  MILITAR COLMILGPNO identificado con Nit. 811.015.863 para
                  abono a la pensión.
                </Text>
              </View>
              <View>
                <Text>Cordialmente,</Text>
                <input type="text" />
                <Text>cc: {` ${doc?.adultId && doc.adultId} `}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default DocPdf;
