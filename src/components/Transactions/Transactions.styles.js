import styles from 'styled-components';

export const TransactionTable = styles.table`
  width: 400px;
  margin: 20px auto;
`;

export const Head = styles.tr`
  height: 30px;
  background-color: #7481fa;
  color: #eee;
`;

export const Line = styles.tr`
  height: 30px;
  background-color: #ddd;
  &:nth-child(2n) {
    background-color: #eee;
  }
`;

export const Type = styles.td`
  text-align: center;
  text-transform: capitalize;
`;

export const Td = styles.td`
  text-align: center;
`;