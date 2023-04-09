import React from "react";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import "./table.css";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <TableHeading />
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} results={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
