import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <Button
        handleClick={() => onPageChange(currentPage - 1)}
        text="Prev"
        disabled={currentPage === 1}
      />
      <Text text={`page ${currentPage} of ${totalPages}`} />

      <Button
        handleClick={() => onPageChange(currentPage + 1)}
        text="Next"
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
