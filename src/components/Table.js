import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class Table extends Component {
  render() {
   
    return (
      <div>
        <ReactTable
          data={this.props.data}
          className={this.props.className}
          pages={this.props.pages}
          page={this.props.page}
          columns={this.props.columns}
          sortable={this.props.sortable}
          filterable={this.props.filterable}
          defaultPageSize={this.props.defaultPageSize || 10}
          minRows={this.props.minRows || 5}
          resizable={false}
          showPagination={this.props.showPagination !== false}
          showPageSizeOptions={this.props.showPageSize !== false}
          SubComponent={this.props.subcomponent || null}
          onFetchData={this.props.onFetchData}
          onPageChange={this.props.onPageChange}
        />
      </div>
    );
  }
}

// export const TableCell = ({ label, children }) => (
//   <div className={styles.urb__table__td} data-label={Boolean(label) && counterpart.translate(label)}>
//     <span>{children}</span>
//   </div>
// );



// const NoDataComponent = () => <div className="rt-noData">{counterpart.translate('table.noDataText')}</div>;
