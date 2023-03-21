import React, { useState } from "react";
import DocPdf from "./DocPdf";

const Cards = ({ doc, index }) => {
  const [pdf, setPdf] = useState(false);

  const handlerPdf = (state) => {
    const isPdf = state ? false : true;
    setPdf(isPdf);
  };

  return (
    <div onClick={() => handlerPdf(pdf)}>
      <table className="table ">
        <thead>
          <thead></thead>
          <tr>
            <th scope="row">{index + 1}</th>
            <td colspan="2" class="table-active w-50">
              {doc.student}
            </td>
            <td>{doc.date}</td>
          </tr>
        </thead>
      </table>

      {pdf && (
        <div className="modals">
          <div className="modals__container">
            <DocPdf doc={doc} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
