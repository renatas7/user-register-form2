import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './table.module.scss';

const Table = ({ children, header, filter, isEmpty }) => {
  const row = Array.from({ length: header.length });

  const renderHeader = () =>
    header.map((col, i) => (
      <span className={styles.headerCell} key={i} role="columnheader">
        {filter ? col : <div className={styles.headerTitle}>{col}</div>}
      </span>
    ));

  const renderEmptyRow = () =>
    isEmpty && (
      <div className={styles.emptyRow}>
        {row.map((_, i) => (
          <TableCell key={i}> </TableCell>
        ))}
      </div>
    );

  return (
    <div className={styles.main}>
      <div className={styles.table} role="grid">
        <div className={styles.header} role="presentation">
          <div className={styles.headerRow} role="row">
            {renderHeader()}
          </div>
        </div>
        <div className={styles.body} role="presentation">
          {children}
        </div>
        {renderEmptyRow()}
      </div>
      {isEmpty && <p className={styles.infoText}>Users list is empty</p>}
    </div>
  );
};

export const TableRow = ({ children, url, onClick }) =>
  url ? (
    <Link className={styles.bodyRow} to={url} role="row">
      {children}
    </Link>
  ) : (
    <div className={styles.bodyRow} onClick={onClick} role="row">
      {children}
    </div>
  );

export const TableCell = ({ children }) => (
  <span className={styles.bodyCell} role="gridcell">
    {children}
  </span>
);

Table.defaultProps = {
  isEmpty: false,
  filter: false,
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.array.isRequired,
  isEmpty: PropTypes.bool.isRequired,
};

TableRow.defaultProps = {
  url: null,
  onClick: () => {},
};

TableRow.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

TableCell.defaultProps = {
  children: null,
};

TableCell.propTypes = {
  children: PropTypes.node,
};

export default Table;
