import BackBtn from '../common/BackBtn';
import styles from './balance.module.css';

interface BalanceItemProps {
  bankName: string;
  balanceAtm: string;
  availableAmt: string;
}

const BalanceItem = ({ bankName, balanceAtm, availableAmt }: BalanceItemProps) => {
  return (
    <div className={styles.balanceContainer}>
      <BackBtn />
      <div>
        <h2 className={styles.title}>잔액 조회</h2>
      </div>
      <div className={styles.balanceBox}>
        <div>
          <span className={styles.subTitle}>은행명 :</span>
          <span>{bankName}</span>
        </div>
        <div>
          <span className={styles.subTitle}>잔액 :</span>
          <span>{balanceAtm}원</span>
        </div>
        <div>
          <span className={styles.subTitle}>사용가능 금액 :</span>
          <span> {availableAmt}원</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceItem;
