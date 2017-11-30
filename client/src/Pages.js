import React, { Component } from "react";
import "./Pages.css";

class Pages extends Component {
  constructor(props) {
    super(props);

    this.linksCount = 3; //should be > 2
    this.middlePosition = Math.ceil(this.linksCount / 2);

    this.handleChangePage = this.handleChangePage.bind(this);
    this.onClickFirstPage = this.onClickFirstPage.bind(this);
    this.onClickLastPage = this.onClickLastPage.bind(this);
  }

  handleChangePage(e) {
    e.preventDefault();
    this.props.onChangePage(parseInt(e.target.innerText, 10));
  }

  onClickFirstPage() {
    this.props.onChangePage(1);
  }

  onClickLastPage() {
    this.props.onChangePage(this.pageCount);
  }

  getFirstLink() {
    let first = this.props.currentPage - this.middlePosition + 1;

    if ((this.pageCount <= this.linksCount) || (this.props.currentPage <= this.middlePosition)) {
      return 1;
    }

    if ((this.props.currentPage + this.middlePosition) > this.pageCount) {
      return (this.pageCount - this.linksCount + 1);
    }

    return first;
  }

  render() {
    this.pageCount = Math.ceil(this.props.taskCount / this.props.countShow);
    const links = [];

    if (this.pageCount > 1) {
      if (this.props.currentPage !== 1) {
        links.push(<a key="|<" href="" onClick={this.onClickFirstPage}>{"|<"}</a>);
      } else {
        links.push(<a key="|<">{"|<"}</a>);
      }

      let start = this.getFirstLink();
      let end = (this.pageCount > this.linksCount) ? (start + this.linksCount) : (start + this.pageCount);

      for (let i = start; i < end; i++) {
        if (this.props.currentPage === i) {
          links.push(<a key={i}>{i}</a>);
        } else {
          links.push(<a key={i} onClick={this.handleChangePage} href="">{i}</a>);
        }
      }

      if (this.props.currentPage !== this.pageCount) {
        links.push(<a key=">|" href="" onClick={this.onClickLastPage}>{">|"}</a>);
      } else {
        links.push(<a key=">|">{">|"}</a>);
      }
    }

    return (
      <div className="Pages">
        <select value={this.props.countShow} onChange={this.props.onChangeCountShow}>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        {links}
      </div>
    );
  }
}

export default Pages;