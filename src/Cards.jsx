import React, { useState } from "react";
import DocPdf from "./DocPdf";

const Cards = ({ doc, index }) => {
  const [modal, setModal] = useState(false);

  const handlerModal = (state) => {
    const isModal = state ? false : true;
    setModal(isModal);
  };

  return (
    <div onClick={() => handlerModal(modal)}>
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

      {modal && (
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
