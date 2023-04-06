import "./Pagination.scss";

export const Pagination = () => {
  return (
    <div className="pagination">
      <button type="button" className="pagination__item">
        &#60;
      </button>
      <button
        type="button"
        className="pagination__item pagination__item--active">
        1
      </button>
      <button type="button" className="pagination__item">
        2
      </button>
      <button type="button" className="pagination__item">
        3
      </button>
      <button type="button" className="pagination__item">
        4
      </button>
      <span className="pagination__item pagination__item--dots">...</span>
      <button type="button" className="pagination__item">
        40
      </button>
      <button type="button" className="pagination__item">
        &#62;
      </button>
    </div>
  );
};
