import {
  Document,
  Image,
  Page,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    fontFamily: "helvetica",
  },
  page: {},
  docPDF: {
    padding: "50px",
    textAlign: "justify",
  },
  infoText: {
    gap: "40px",
  },

  img: {
    width: "200px",
  },
};

const DocPdf = ({ doc }) => {
  return (
    <PDFViewer style={styles.container}>
      <Document>
        <Page size="A4">
          <View style={styles.docPDF}>
            <View style={styles.infoText}>
              <Text>{`Medellín,${doc.date} `}</Text>
              <Text>Señores:</Text>
              <Text>FUNDACIÓN BIBE</Text>
              <Text>Ref. Cruce de saldo</Text>
              <Text>
                Yo {` ${doc?.adultName && doc.adultName} `} identificado(a) con
                cédula N°
                {` ${doc?.adultId && doc.adultId} `} autorizo a la FUNDACIÓN
                BIBE identificada con Nit. 901.651.472-4 que el saldo a favor
                que tengo por concepto de Guías, del estudiante
                {` ${doc?.student && doc.student} `} del grado
                {` ${doc?.grade && doc.grade} `}, sea trasladado al COLEGIO
                MILITAR COLMILGPNO identificado con Nit. 811.015.863 para abono
                a la pensión.
              </Text>
              <Text style={{ margin: "32px 0 " }}>Cordialmente,</Text>
            </View>
            <View style={{}}>
              {doc?.firm && <Image src={doc?.firm} style={styles.img} />}
              <Text>cc: {` ${doc?.adultId && doc.adultId} `}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default DocPdf;
