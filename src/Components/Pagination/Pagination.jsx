import React, { Component } from "react";

class Pagination extends Component {
  state = {};

  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {this.props.currPage === 1 ? (
            <li className="page-item disabled">
              <button className="page-link" aria-disabled="true">
                Previous
              </button>
            </li>
          ) : (
            <li className="page-item" onClick={this.props.previousPage}>
              <button className="page-link">Previous</button>
            </li>
          )}
          {this.props.pages.map((pageCount) => {
            return pageCount === this.props.currPage ? (
              <li className="page-item active">
                <button className="page-link" href="#">
                  {pageCount}
                </button>
              </li>
            ) : (
              <li
                className="page-item"
                onClick={() => {
                  this.props.setPage(pageCount);
                }}
              >
                <button className="page-link" href="#">
                  {pageCount}
                </button>
              </li>
            );
          })}
          {this.props.currPage === this.props.pages.length ? (
            <li className="page-item disabled">
              <button className="page-link" aria-disabled="true">
                Next
              </button>
            </li>
          ) : (
            <li className="page-item" onClick={this.props.nextPage}>
              <button className="page-link">Next</button>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Pagination;