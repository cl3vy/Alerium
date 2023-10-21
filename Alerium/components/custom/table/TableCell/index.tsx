// React Peer Dependencies
import React, { ReactNode } from "react";
// Custom Components
import { Typography } from "@constants/components";
// Types And Interfaces
type TableCellProps = {
  content: ReactNode;
  startDecorator?: ReactNode
}
// Styles
import styles from './style';

function TableCell({content, startDecorator}: TableCellProps) {
  return (
    <Typography className={styles.cell} startDecorator={startDecorator}>{content}</Typography>
  );
}

export default TableCell;
export type {TableCellProps}
