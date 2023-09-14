import React from 'react';
import styles from './transactionItem.module.css';

const TransactionItem = ({ transactionData, transactionList }: any) => {
  console.log(transactionList);
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <td className={styles.tableHeaderCell}>날짜</td>
            <td className={styles.tableHeaderCell}>내용</td>
            <td className={styles.tableHeaderCell}>금액</td>
            <td className={styles.tableHeaderCell}>잔액</td>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {transactionList.length === 0 && (
            <tr>
              <td colSpan={4} className={styles.noContentGuide}>
                내역이 존재하지 않습니다.
              </td>
            </tr>
          )}
          {transactionList.length > 0 &&
            transactionList.map((transaction: any, index: number) => {
              return (
                <tr key={index}>
                  <td className={styles.tableCell}>{transaction.tran_date}</td>
                  <td className={styles.tableCell}>{transaction.print_content}</td>
                  <td className={styles.tableCell}>{transaction.tran_amt}</td>
                  <td className={styles.tableCell}>{transaction.after_balance_amt}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionItem;
