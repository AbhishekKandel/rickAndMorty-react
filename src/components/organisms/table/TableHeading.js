import React from "react";

const TableHeading = () => {
  const items = ["Name", "Air date", "Code", "Created on", "Characters"];
  return (
    <thead>
      <tr>
        {items.map((item, index) => {
          return <th key={index}>{item}</th>;
        })}
      </tr>
    </thead>
  );
};
export default TableHeading;
