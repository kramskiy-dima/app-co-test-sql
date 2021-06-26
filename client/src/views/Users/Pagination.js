import ReactPaginate from "react-paginate";
import { ReactComponent as ArrowRighth } from "../../images/arrow-righth-pagination.svg";
import { ReactComponent as ArrowLeft } from "../../images/arrow-left-pagination.svg";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={4}
      marginPagesDisplayed={1}
      containerClassName="pagination"
      pageLinkClassName="pagination-btn"
      activeLinkClassName="active"
      previousClassName="pagination-arrow"
      previousLabel={<ArrowLeft />}
      nextClassName="pagination-arrow"
      nextLabel={<ArrowRighth />}
      disabledClassName="disabled"
      breakLabel=""
      onPageChange={(page) => onPageChange(page.selected)}
    />
  );
};

export default Pagination;
